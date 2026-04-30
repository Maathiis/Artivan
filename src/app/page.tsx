import Hero from '@/components/features/home/Hero'
import ArtisanMarquee from '@/components/features/home/ArtisanMarquee'
import ValuesSection from '@/components/features/home/ValuesSection'
import FeaturedProducts from '@/components/features/home/FeaturedProducts'
import EditorialStrip from '@/components/features/home/EditorialStrip'
import Reviews from '@/components/features/home/Reviews'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ArtisanMarquee />
      <ValuesSection />
      <FeaturedProducts />
      <EditorialStrip />
      <Reviews />
    </div>
  )
}
