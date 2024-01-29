import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Collections from '@/components/Collections'
import ProductCard from '@/components/ProductCard'
import SubscribeToEmail from '@/components/SubscribeToEmailSection'
import Footer from '@/components/Footer'
import Faq from '@/components/Faq'
import Gallery from '@/components/Gallery'
import ProductsPage from '@/components/Productspage'
import TopComputers from '@/components/TopComputers'
import Texticons from '@/components/Texticons'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {

  return (
    <>
      {/* <ProductCardSlider /> */}
      <Collections />
      <TopComputers products={props.products} />
      <Gallery />
      <SubscribeToEmail />
      <Texticons />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}//category/computer`);
  const data = await res.json();
  const products = data.products.slice(0, 4);
  console.log(products)
  return {
    props: {
      products,
    },
  };
}