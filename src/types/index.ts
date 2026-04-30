export interface Product {
  id: number
  name: string
  price: number
  category: string
  artisan: string
  desc: string
  colorBg: string
}

export interface Shop {
  id: string
  name: string
  tag: string
  city: string
  desc: string
  longDesc: string
  productCount: number
  founded: number
  colorAccent: string
}

export interface Review {
  name: string
  rating: number
  text: string
}

export interface CartItem {
  id: number
  qty: number
}
