'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import type { CartItem } from '@/types'

interface CartContextType {
  cart: CartItem[]
  addToCart: (id: number) => void
  setQty: (id: number, delta: number) => void
  removeFromCart: (id: number) => void
  cartCount: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 2, qty: 1 },
    { id: 5, qty: 2 },
  ])

  const addToCart = (id: number) => {
    setCart(c => {
      const ex = c.find(x => x.id === id)
      if (ex) return c.map(x => x.id === id ? { ...x, qty: x.qty + 1 } : x)
      return [...c, { id, qty: 1 }]
    })
  }

  const setQty = (id: number, delta: number) => {
    setCart(c =>
      c.map(x => x.id === id ? { ...x, qty: Math.max(0, x.qty + delta) } : x)
       .filter(x => x.qty > 0)
    )
  }

  const removeFromCart = (id: number) => {
    setCart(c => c.filter(x => x.id !== id))
  }

  const cartCount = cart.reduce((s, x) => s + x.qty, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, setQty, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
