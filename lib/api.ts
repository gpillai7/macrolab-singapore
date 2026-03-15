import { NextResponse } from 'next/server';
export function ok<T>(data: T) {
  return NextResponse.json({ ok: true, data });
}
