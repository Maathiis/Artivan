import { PRODUCTS } from '@/lib/data'
import CatalogClient from '@/components/features/catalog/CatalogClient'

export const metadata = { title: "Catalogue — L'Atelier Mobile" }

export default function CatalogPage() {
  return <CatalogClient products={PRODUCTS} />
}
