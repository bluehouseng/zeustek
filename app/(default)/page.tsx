export const metadata = {
  title: 'Home - Creative',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Inspiration from '@/components/inspiration'
import Carousel from '@/components/carousel'
import Creatives from '@/components/creatives'
import Testimonials from '@/components/testimonials'
import Faqs from '@/components/faqs'
import Blog from '@/components/blog'
import Cta from '@/components/cta'
import Youths from '@/components/youths'
import Powered from '@/components/powered'

export default function Home() {
  return (
    <>
      <Hero />
      <Powered/>
      <Inspiration />
      <Youths/>
      <Carousel />
      <Creatives />
      {/* <Pricing /> */}
      <Testimonials />
      <Faqs />
      <Blog />
      <Cta />
    </>
  )
}
