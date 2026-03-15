import { Indicator, Insight, MacroRegime, SectorExposure, Shock, StressIndex, TransmissionChannel } from '@/lib/schemas';
export const updatedAt = '2026-03-15T08:00:00+08:00';
export const stressIndex: StressIndex = {
  value: 62,
  status: 'Elevated',
  updatedAt,
  components: [
    { label: 'Global cycle', value: 58, weight: 0.25 },
    { label: 'Financial conditions', value: 66, weight: 0.25 },
    { label: 'Trade exposure', value: 69, weight: 0.25 },
    { label: 'Domestic conditions', value: 55, weight: 0.25 }
  ]
};
export const macroRegime: MacroRegime = {
  label: 'Cautious Expansion',
  posture: 'Cautious',
  summary: 'Domestic activity is holding up, but the external trade pulse is softer and financing conditions remain selective. Business users should plan for uneven demand and tighter margins rather than broad-based contraction.',
  updatedAt,
  components: [
    { label: 'GDP / activity pulse', score: 57, signal: 'Positive but softer' },
    { label: 'Inflation pressure', score: 61, signal: 'Sticky cost pressure' },
    { label: 'Trade momentum', score: 47, signal: 'External demand mixed' },
    { label: 'Labour resilience', score: 69, signal: 'Still supportive' }
  ]
};
export const headlineMetrics = [
  { label: 'Macro Stress Index', value: `${stressIndex.value}`, delta: stressIndex.status },
  { label: 'Current Regime', value: macroRegime.label, delta: macroRegime.posture },
  { label: 'NODX Momentum', value: '-1.8%', delta: '3m avg' },
  { label: 'Core Inflation', value: '2.7%', delta: 'Sticky' }
];
export const shocks: Shock[] = [
  { id: 'shock-electronics-cycle', name: 'Global Electronics Downcycle Risk', category: 'Economic Cycle Shock', level: 'High', transmissionChannel: 'Trade Channel', affectedIndicators: ['Global Manufacturing PMI', 'Electronics Exports', 'Industrial Production'], sensitiveSectors: ['Electronics & Advanced Manufacturing', 'Logistics & Trade Services'], implication: 'Pressures manufacturing output, freight demand, and semiconductor-linked services.', updatedAt },
  { id: 'shock-shipping-oil', name: 'Oil Price and Shipping Route Volatility', category: 'Commodity / Geopolitical Shock', level: 'Elevated', transmissionChannel: 'Supply Chain Channel', affectedIndicators: ['Brent Crude', 'Container Freight Index', 'Import Prices'], sensitiveSectors: ['Logistics & Trade Services', 'Consumer & SME Services'], implication: 'Raises logistics costs, import prices, and margin pressure for trade-exposed SMEs.', updatedAt },
  { id: 'shock-rate-path', name: 'Global Rate Path Uncertainty', category: 'Financial Shock', level: 'Elevated', transmissionChannel: 'Financial Channel', affectedIndicators: ['US 10Y Treasury Yield', 'SORA', 'Credit Growth'], sensitiveSectors: ['Financial Services', 'Construction & Property'], implication: 'Tightens credit conditions and delays capex, property, and durable spending.', updatedAt },
  { id: 'shock-china-demand', name: 'China Demand Softness', category: 'Demand / Regional Shock', level: 'Moderate', transmissionChannel: 'Confidence Channel', affectedIndicators: ['NODX', 'Tourism Receipts', 'Business Expectations'], sensitiveSectors: ['Wholesale Trade', 'Tourism & Hospitality'], implication: 'Softens external demand across wholesale trade, tourism-linked flows, and selected services.', updatedAt }
];
export const transmissionChannels: TransmissionChannel[] = [
  { id: 'trade', title: 'Trade Channel', summary: 'Maps how external demand, export orders, port activity, and re-exports affect Singapore output.', indicators: ['Global Manufacturing PMI', 'NODX', 'Port Throughput'], macroVariables: ['GDP Growth', 'Exports', 'Industrial Production'], sectors: ['Manufacturing', 'Logistics', 'Professional Demand Services'] },
  { id: 'financial', title: 'Financial Channel', summary: 'Tracks interest rates, liquidity, risk sentiment, asset prices, and domestic credit conditions.', indicators: ['SORA', 'Credit Growth', 'Equity Volatility'], macroVariables: ['Investment', 'Asset Prices', 'Borrowing Costs'], sectors: ['Financial Services', 'Construction', 'Property'] },
  { id: 'supply-chain', title: 'Supply Chain Channel', summary: 'Captures logistics disruptions, input costs, delivery times, and inventory strain.', indicators: ['Brent Oil', 'Freight Index', 'Supplier Delivery Times'], macroVariables: ['Import Prices', 'Production Costs', 'Inventories'], sectors: ['Manufacturing', 'Electronics', 'Logistics'] },
  { id: 'confidence', title: 'Confidence Channel', summary: 'Follows business expectations, consumer caution, hiring appetite, and investment sentiment.', indicators: ['Business Expectations', 'PMI New Orders', 'Retail Sales'], macroVariables: ['Consumption', 'Hiring', 'Business Investment'], sectors: ['Consumer Services', 'Tourism', 'SMEs'] },
  { id: 'policy', title: 'Policy Channel', summary: 'Brings together monetary, fiscal, trade, and regulatory actions that reprice risk or demand.', indicators: ['MAS Policy Stance', 'Fiscal Support', 'Tariff Measures'], macroVariables: ['Liquidity', 'Demand Support', 'Relative Competitiveness'], sectors: ['Banks', 'Domestic Services', 'Exporters'] }
];
export const sectorExposure: SectorExposure[] = [
  { sector: 'Electronics & Advanced Manufacturing', exposure: 91, tag: 'Very High', outlook: 'Inventory cycle remains fragile.', drivers: ['Global electronics demand', 'Export controls', 'Semiconductor capex'] },
  { sector: 'Logistics & Trade Services', exposure: 83, tag: 'High', outlook: 'Freight and route disruption remain a key watchpoint.', drivers: ['Shipping routes', 'Port throughput', 'Energy costs'] },
  { sector: 'Financial Services', exposure: 71, tag: 'Elevated', outlook: 'Rates help margins but weaken credit appetite.', drivers: ['Global yields', 'Credit spreads', 'Investment sentiment'] },
  { sector: 'Construction & Property', exposure: 65, tag: 'Elevated', outlook: 'Funding costs and labour constraints weigh on activity.', drivers: ['Financing costs', 'Labour availability', 'Pipeline confidence'] },
  { sector: 'Consumer & SME Services', exposure: 58, tag: 'Moderate', outlook: 'Resilient demand, but margin squeeze persists.', drivers: ['Wage costs', 'Imported inflation', 'Consumer confidence'] }
];
export const amplifiers = ['High export dependence in electronics and trade-linked services', 'Imported inflation sensitivity through energy and logistics costs', 'Regional confidence spillovers into tourism and wholesale activity'];
export const buffers = ['Strong policy credibility and institutional coordination', 'Diversified services base and resilient labour market', 'Balance-sheet strength in larger firms and domestic banks'];
export const earlyWarnings = ['3-month slide in export orders and PMI new orders', 'Sustained rise in shipping costs and delivery delays', 'Broad-based easing in job vacancies and hiring intentions', 'Credit growth decelerating alongside weaker business lending'];
export const insights: Insight[] = [
  { id: 'insight-1', title: 'Singapore remains in expansion, but the external pulse is softening', summary: 'The current mix points to a cautious expansion regime: domestic resilience is intact, but trade-linked sectors face a weaker global pulse and cost volatility.', evidence: ['Macro stress index above 60', 'Trade component weaker than labour component'], audience: ['Business leaders', 'Trade associations', 'SMEs'], updatedAt },
  { id: 'insight-2', title: 'SME margin pressure is the practical transmission story', summary: 'The platform keeps translating macro shocks into cashflow consequences for SMEs: demand softness, freight costs, financing costs, and delayed customer payments.', evidence: ['Consumer services exposure moderate', 'Supply chain and cost push remain elevated'], audience: ['SMEs', 'Industry associations'], updatedAt },
  { id: 'insight-3', title: 'Shock diagnostics matter more than raw charts', summary: 'MacroLab differentiates itself by explaining how a shock moves from the global system into sectors, rather than only reporting top-line indicators.', evidence: ['Channels mapped to macro variables', 'Sector scoring linked to channel drivers'], audience: ['Analysts', 'Business leaders'], updatedAt }
];
export const indicators: Indicator[] = [
  { code: 'global_mfg_pmi', name: 'Global Manufacturing PMI', layer: 'Global Drivers', type: 'State Indicator', frequency: 'Monthly', source: 'S&P Global', purpose: 'Track the global industrial cycle' },
  { code: 'global_trade_volume', name: 'Global Trade Volume Index', layer: 'Global Drivers', type: 'State Indicator', frequency: 'Monthly', source: 'CPB Netherlands', purpose: 'Measure world trade activity' },
  { code: 'us10y', name: 'US 10Y Treasury Yield', layer: 'Transmission Channels', type: 'Market Indicator', frequency: 'Daily', source: 'US Treasury', purpose: 'Benchmark global rate pressure' },
  { code: 'nodx', name: 'Non-Oil Domestic Exports', layer: 'Macro Regime', type: 'Singapore Macro Indicator', frequency: 'Monthly', source: 'Enterprise Singapore', purpose: 'Measure export demand for Singapore goods' },
  { code: 'sector_electronics', name: 'Electronics Exposure Score', layer: 'Sector Exposure', type: 'Derived Score', frequency: 'Weekly', source: 'MacroLab Engine', purpose: 'Surface sector vulnerability to active shocks' },
  { code: 'supply_buffer', name: 'Domestic Policy Buffer Score', layer: 'Amplifiers & Buffers', type: 'Derived Score', frequency: 'Weekly', source: 'MacroLab Engine', purpose: 'Estimate resilience against global disruption' },
  { code: 'shock_heat', name: 'Shock Heat Score', layer: 'Shock Tracker', type: 'Composite Score', frequency: 'Daily', source: 'MacroLab Engine', purpose: 'Summarise current active shock intensity' }
];
