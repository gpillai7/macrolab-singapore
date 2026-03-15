import { ok } from '@/lib/api';
import { stressIndex } from '@/lib/data';
export async function GET() { return ok(stressIndex); }
