import { ok } from '@/lib/api';
export async function GET() { return ok({ service: 'macrolab-platform-v2', status: 'healthy' }); }
