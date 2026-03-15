import { ok } from '@/lib/api';
import { transmissionChannels } from '@/lib/data';
export async function GET() { return ok(transmissionChannels); }
