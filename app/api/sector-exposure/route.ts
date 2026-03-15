import { ok } from '@/lib/api';
import { sectorExposure } from '@/lib/data';
export async function GET() { return ok(sectorExposure); }
