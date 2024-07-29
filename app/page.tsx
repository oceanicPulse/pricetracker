import HeroCarousel from '@/components/HeroCarousel'
import SearchBar from '@/components/Searchbar'
import Image from 'next/image'
import React from 'react'
import { getAllProducts } from '@/lib/actions'
import ProductCard from '@/components/ProductCard'


const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 border-2 md:px-20 py-24">
        <div className='flex max-xl:flex-col gap-16'>
          <div className='flex flex-col justify-center'>
            <p className='small-text'>Smart Shopping Starts Here:
              <Image src='/assets/icons/arrow-right.svg'
                     width={16} 
                     height={16} 
                     alt='arrow-right' />
            </p>

            <h1 className='head-text'>Unleash the Power of
              <span className='text-primary'> PriceTracker</span>
            </h1>

            <p className='mt-6'>
              PriceTracker is a free and open-source price tracking tool that is a self-service product and growth analytics to help you convert, engage and retain more.
            </p>

           
            <SearchBar />
          </div>

          <HeroCarousel />
        </div>
      </section>

      <section className='trending-section'>
        <h2 className='section-text'>
          Trending
        </h2>

        <div className='flex flex-wrap gap-x-8 gap-y-16'>
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home