import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  honeypot: '',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  else if (values.name.trim().length < 2) errors.name = 'Name must be at least 2 characters';

  if (!values.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = 'Please enter a valid email address';

  if (values.phone && !/^[+\d\s()-]{7,20}$/.test(values.phone))
    errors.phone = 'Please enter a valid phone number';

  if (!values.subject.trim()) errors.subject = 'Subject is required';
  else if (values.subject.trim().length < 3) errors.subject = 'Subject must be at least 3 characters';

  if (!values.message.trim()) errors.message = 'Message is required';
  else if (values.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters';

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...values, [name]: value });
      setErrors(newErrors);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (values.honeypot) return;

    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, phone: true, subject: true, message: true });

    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    setServerError('');

    try {
      const functionUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({ error: 'Request failed' }));
        throw new Error(data.error || `Request failed (${response.status})`);
      }

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setStatus('success');
      setValues(initialState);
      setTouched({});
    } catch (err) {
      setStatus('error');
      setServerError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  };

  const fieldClass = (name: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl bg-ink-850 border text-gray-100 placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/40 ${
      touched[name] && errors[name]
        ? 'border-red-500/50'
        : 'border-white/10 focus:border-accent-500/50'
    }`;

  return (
    <div className="glass-card p-6 md:p-8">
      <AnimatePresence mode="wait">
        {status === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mb-5">
              <CheckCircle2 className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Message sent successfully</h3>
            <p className="text-sm text-gray-400 max-w-sm">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm text-accent-400 hover:text-accent-300 transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        )}

        {status !== 'success' && (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            {/* Honeypot field — visually hidden from users, catches bots */}
            <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
              <label htmlFor="website-url">Website URL</label>
              <input
                type="text"
                id="website-url"
                name="honeypot"
                value={values.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('name')}
                  placeholder="Jane Doe"
                  aria-invalid={!!(touched.name && errors.name)}
                  aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                />
                {touched.name && errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-400" role="alert">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('email')}
                  placeholder="jane@company.com"
                  aria-invalid={!!(touched.email && errors.email)}
                  aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                />
                {touched.email && errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-400" role="alert">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('phone')}
                  placeholder="+1 (415) 555-0192"
                  aria-invalid={!!(touched.phone && errors.phone)}
                  aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
                />
                {touched.phone && errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-xs text-red-400" role="alert">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('subject')}
                  placeholder="Project inquiry"
                  aria-invalid={!!(touched.subject && errors.subject)}
                  aria-describedby={touched.subject && errors.subject ? 'subject-error' : undefined}
                />
                {touched.subject && errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-xs text-red-400" role="alert">{errors.subject}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                className={`${fieldClass('message')} resize-none`}
                placeholder="Tell us about your project, timeline, and goals..."
                aria-invalid={!!(touched.message && errors.message)}
                aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
              />
              {touched.message && errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-400" role="alert">{errors.message}</p>
              )}
            </div>

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-300"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Failed to send message</p>
                  <p className="text-red-300/80 mt-0.5">{serverError}</p>
                </div>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary w-full text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
