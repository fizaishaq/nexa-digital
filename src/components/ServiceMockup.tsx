import type { ReactNode } from 'react';
import { Check, Search, ShoppingCart, Star, Sparkles, Send, MousePointer2 } from 'lucide-react';

type Token = [string, string];

const codeLines: Token[][] = [
  [['const ', 'text-royal-400'], ['app ', 'text-gray-200'], ['= ', 'text-gray-500'], ['createApp', 'text-cyanx-400'], ['({', 'text-gray-400']],
  [['  framework', 'text-gray-200'], [': ', 'text-gray-500'], ["'next'", 'text-emerald-400'], [',', 'text-gray-500']],
  [['  language', 'text-gray-200'], [': ', 'text-gray-500'], ["'typescript'", 'text-emerald-400'], [',', 'text-gray-500']],
  [['  rendering', 'text-gray-200'], [': ', 'text-gray-500'], ["'ssr'", 'text-emerald-400'], [',', 'text-gray-500']],
  [['  tests', 'text-gray-200'], [': ', 'text-gray-500'], ['true', 'text-amber-400'], [',', 'text-gray-500']],
  [['});', 'text-gray-400']],
  [['', 'text-gray-500']],
  [['await ', 'text-royal-400'], ['app', 'text-gray-200'], ['.', 'text-gray-500'], ['deploy', 'text-cyanx-400'], ['();', 'text-gray-400']],
  [['// ✓ build passed · 100 Lighthouse', 'text-gray-600']],
];

function WebDevMockup() {
  return (
    <div className="relative w-[88%] max-w-md">
      <div className="rounded-xl border border-white/10 bg-ink-900/90 shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 text-[11px] text-gray-500 font-mono">app.ts</span>
        </div>
        <pre className="p-4 text-[11px] sm:text-xs leading-6 font-mono whitespace-pre overflow-hidden">
          {codeLines.map((line, i) => (
            <div key={i} className="flex">
              <span className="w-6 text-gray-700 select-none">{i + 1}</span>
              <span>
                {line.map(([text, color], j) => (
                  <span key={j} className={color}>
                    {text}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </pre>
      </div>
      <div className="absolute -bottom-4 -right-2 sm:-right-6 animate-float flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-ink-900/95 px-3 py-2 shadow-xl">
        <Check className="w-4 h-4 text-emerald-400" />
        <span className="text-xs font-medium text-white">Deployed in 42s</span>
      </div>
    </div>
  );
}

function UiUxMockup() {
  return (
    <div className="relative flex w-[88%] max-w-md gap-3">
      <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-ink-900/90 p-2 shadow-xl h-fit">
        {['bg-royal-500/80', 'bg-white/10', 'bg-white/10', 'bg-white/10'].map((c, i) => (
          <span key={i} className={`w-7 h-7 rounded-lg ${c}`} />
        ))}
      </div>
      <div className="flex-1 rounded-xl border border-white/10 bg-ink-900/90 p-4 shadow-2xl">
        <div className="rounded-lg border border-dashed border-royal-400/50 p-3">
          <div className="h-16 rounded-md bg-gradient-to-br from-royal-500/40 to-accent-500/40" />
          <div className="mt-3 h-2.5 w-2/3 rounded bg-white/25" />
          <div className="mt-2 h-2 w-full rounded bg-white/10" />
          <div className="mt-1.5 h-2 w-4/5 rounded bg-white/10" />
          <div className="mt-3 h-7 w-24 rounded-md bg-gradient-to-r from-accent-500 to-royal-500" />
        </div>
        <div className="mt-4 flex items-center gap-2">
          {['bg-accent-500', 'bg-royal-500', 'bg-cyanx-500', 'bg-emerald-400', 'bg-amber-400'].map((c) => (
            <span key={c} className={`w-5 h-5 rounded-full ${c} ring-2 ring-white/10`} />
          ))}
          <span className="ml-auto text-[10px] font-mono text-gray-500">Aa · 16/24</span>
        </div>
      </div>
      <div className="absolute top-10 right-4 animate-float flex items-start gap-1">
        <MousePointer2 className="w-5 h-5 text-royal-300 fill-royal-400" />
        <span className="mt-4 rounded-md bg-royal-500 px-2 py-0.5 text-[10px] font-medium text-white">Designer</span>
      </div>
    </div>
  );
}

function AiMockup() {
  return (
    <div className="relative w-[88%] max-w-md rounded-xl border border-white/10 bg-ink-900/90 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
        <span className="flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-br from-cyanx-500 to-accent-600">
          <Sparkles className="w-3.5 h-3.5 text-white" />
        </span>
        <span className="text-xs font-medium text-white">AI Assistant</span>
        <span className="ml-auto flex items-center gap-1 text-[10px] text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online
        </span>
      </div>
      <div className="space-y-3 p-4">
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-accent-600/80 px-3 py-2 text-xs text-white">
          Summarise this contract in 3 points.
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white/[0.06] px-3 py-2 text-xs leading-relaxed text-gray-200">
          Done. 1) 12-month term, 2) auto-renews yearly, 3) 30-day exit clause.
        </div>
        <div className="flex w-14 items-center gap-1 rounded-2xl rounded-bl-sm bg-white/[0.06] px-3 py-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" />
        </div>
      </div>
      <div className="m-3 mt-0 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="flex-1 text-xs text-gray-500">Ask anything…</span>
        <Send className="w-4 h-4 text-cyanx-400" />
      </div>
    </div>
  );
}

function EcommerceMockup() {
  return (
    <div className="relative w-[88%] max-w-md">
      <div className="w-[62%] rounded-xl border border-white/10 bg-ink-900/90 p-3 shadow-2xl">
        <div className="relative h-28 rounded-lg bg-gradient-to-br from-royal-500/50 to-cyanx-500/50">
          <span className="absolute top-2 left-2 rounded-full bg-black/40 px-2 py-0.5 text-[10px] text-white">New</span>
        </div>
        <p className="mt-3 text-xs font-semibold text-white">Aero Sneaker</p>
        <div className="mt-1 flex items-center gap-0.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
          ))}
          <span className="ml-1 text-[10px] text-gray-500">(248)</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-bold text-white">$129</span>
          <span className="flex items-center gap-1 rounded-md bg-gradient-to-r from-accent-500 to-royal-500 px-2 py-1 text-[10px] font-medium text-white">
            <ShoppingCart className="w-3 h-3" /> Add
          </span>
        </div>
      </div>
      <div className="absolute -right-1 sm:-right-4 top-6 w-[48%] animate-float rounded-xl border border-white/10 bg-ink-850/95 p-3 shadow-2xl">
        <div className="flex items-center justify-between text-[10px] text-gray-400">
          <span>Cart (2)</span>
          <Search className="w-3 h-3" />
        </div>
        <div className="mt-2 space-y-1.5">
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-3/4 rounded bg-white/10" />
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 text-xs">
          <span className="text-gray-400">Total</span>
          <span className="font-semibold text-white">$258</span>
        </div>
        <div className="mt-2 rounded-md bg-emerald-500/90 py-1.5 text-center text-[11px] font-semibold text-white">
          Checkout
        </div>
      </div>
    </div>
  );
}

const mockups: Record<string, () => ReactNode> = {
  'web-development': () => <WebDevMockup />,
  'ui-ux-design': () => <UiUxMockup />,
  'ai-solutions': () => <AiMockup />,
  ecommerce: () => <EcommerceMockup />,
};

export default function ServiceMockup({ id, accent }: { id: string; accent: string }) {
  const render = mockups[id];
  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass border border-white/10">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-20`} />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center">
        {render ? render() : null}
      </div>
    </div>
  );
}
