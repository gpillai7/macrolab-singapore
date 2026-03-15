import { indicators, transmissionChannels } from '@/lib/data';
import { Panel, SectionHeading } from '@/components/ui';
export default function DashboardPage() {
  return (
    <main className="container-shell py-10">
      <SectionHeading kicker="Developer console" title="Data dictionary and route planning" description="A lightweight reference page for engineers wiring live data, ETL jobs, and Claude Skills into the platform." />
      <div className="mt-8 grid gap-6 lg:grid-cols-12">
        <Panel className="p-6 lg:col-span-7"><h3 className="text-lg font-semibold text-white">Indicator registry</h3><div className="mt-4 overflow-x-auto"><table className="data-table min-w-full"><thead><tr><th>Code</th><th>Name</th><th>Layer</th><th>Frequency</th><th>Source</th></tr></thead><tbody>{indicators.map((item) => <tr key={item.code}><td>{item.code}</td><td>{item.name}</td><td>{item.layer}</td><td>{item.frequency}</td><td>{item.source}</td></tr>)}</tbody></table></div></Panel>
        <Panel className="p-6 lg:col-span-5"><h3 className="text-lg font-semibold text-white">Route map</h3><ul className="mt-4 space-y-3 text-sm text-slate-300"><li className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">GET /api/health</li><li className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">GET /api/global-shocks</li><li className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">GET /api/stress-index</li><li className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">GET /api/macro-regime</li><li className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">GET /api/sector-exposure</li><li className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">GET /api/transmission-channels</li><li className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">GET /api/indicators</li><li className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">GET /api/insights</li></ul></Panel>
      </div>
      <Panel className="mt-6 p-6"><h3 className="text-lg font-semibold text-white">Transmission model summary</h3><div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{transmissionChannels.map((channel) => <div key={channel.id} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"><p className="text-base font-semibold text-white">{channel.title}</p><p className="mt-2 text-sm leading-6 text-slate-300">{channel.summary}</p><p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">Macro variables</p><p className="mt-1 text-sm text-slate-400">{channel.macroVariables.join(' · ')}</p></div>)}</div></Panel>
    </main>
  );
}
