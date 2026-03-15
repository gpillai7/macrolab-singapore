import { ok } from '@/lib/api';
import { indicators } from '@/lib/data';
export async function GET() { return ok(indicators); }
