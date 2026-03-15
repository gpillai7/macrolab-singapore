import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'MacroLab Singapore',
  description: 'Geo-economic observatory for Singapore. Track global shocks, transmission channels, macro regime, and sector exposure.'
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
