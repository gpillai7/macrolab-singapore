import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { accent: '#ef4444', ink: '#0f172a' },
      boxShadow: { panel: '0 12px 40px rgba(15, 23, 42, 0.32)' }
    }
  },
  plugins: []
};
export default config;
