import { ok } from '@/lib/api';
import { macroRegime } from '@/lib/data';
export async function GET() { return ok(macroRegime); }
