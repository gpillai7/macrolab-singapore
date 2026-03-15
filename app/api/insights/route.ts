import { ok } from '@/lib/api';
import { insights } from '@/lib/data';
export async function GET() { return ok(insights); }
