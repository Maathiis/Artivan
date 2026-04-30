import { NextResponse } from 'next/server'
import { SHOPS } from '@/lib/data'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (id) {
    const shop = SHOPS.find(s => s.id === id)
    if (!shop) return NextResponse.json({ error: 'Shop not found' }, { status: 404 })
    return NextResponse.json(shop)
  }

  return NextResponse.json(SHOPS)
}
