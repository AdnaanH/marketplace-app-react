import FeaturedBlogs from '../components/FeaturedBlogs'
import FeaturedProducts from '../components/FeaturedProducts'
import Hero from '../components/Hero'
import NewProducts from '../components/NewProducts'
import QService from '../components/QService'
import ShopCategory from '../components/ShopCategory'

function Homepage() {
  return (
    <>
    <Hero />
    <ShopCategory />
    <QService />
    <FeaturedProducts />
    <NewProducts />
    <FeaturedBlogs />
    </>
  )
}

export default Homepage