import { NextResponse } from 'next/server'
import { PRODUCTS } from '@/lib/data'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')

  const products = category && category !== 'Tous'
    ? PRODUCTS.filter(p => p.category === category)
    : PRODUCTS

  return NextResponse.json(products)
}
