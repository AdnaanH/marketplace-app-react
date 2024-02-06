import ProdSideBar from '../components/ProdSideBar'
import ProductDetails from '../components/ProductDetails';
import ProductGrid from '../components/ProductGrid'
import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';
import { BsHouse } from 'react-icons/bs';
import ProductReview from '../components/ProductReview';

function ProductPage() {
  return (
    <section className='flex flex-col w-full px-16 py-4 bg-mpGrey'>
      <Breadcrumb aria-label="Default breadcrumb example">
          <BreadcrumbItem href="#" icon={BsHouse}>
            <small className='font-bold text-sm text-mpBlue'>Home</small>
          </BreadcrumbItem>
          <BreadcrumbItem href="#">
            <small className='font-bold text-sm text-mpBlue'>Product Page</small>
          </BreadcrumbItem>
      </Breadcrumb>
      <div className='flex justify-between w-full mt-6'>
          <div className="w-8/12 rounded-md p-4 flex gap-4 flex-col">
              <ProductGrid />
              <ProductDetails />
              <ProductReview />
          </div>
          <div className="w-3/12">
            <ProdSideBar />
          </div>
      </div>
    </section>
  )
}

export default ProductPage