import { ok } from '@/lib/api';
import { shocks } from '@/lib/data';
export async function GET() { return ok(shocks); }
