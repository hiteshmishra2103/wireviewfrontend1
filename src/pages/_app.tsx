import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { RecoilRoot, constSelector, useRecoilValue } from 'recoil'
import { userState } from '@/store/atoms/user'
import cartQuantityState from '../store/atoms/cart'

import axios from 'axios'
import { useSetRecoilState } from 'recoil'
import { useEffect } from 'react'
import { usernameState } from '@/store/selectors/username'
import { mounted } from '@/store/atoms/mounted'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <InitUser />
        <InitCart />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </RecoilRoot>
    </>
  )
}


function InitCart() {
  const setCartQuantityState = useSetRecoilState(cartQuantityState);



  const init = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}//cartQuantity`, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      });

      if (response.data.cartQuantity) {
        console.log(response.data.cartQuantity.totalQuantity);
        setCartQuantityState(response.data.cartQuantity.totalQuantity);
      }
    } catch (e) {
      console.error(e);
    }
  };

  init();


  return null;
}

function InitUser() {
  const setUser = useSetRecoilState(userState);
  const username = useRecoilValue(usernameState)
  const setMounted = useSetRecoilState(mounted);

  useEffect(() => {
    const init = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}//me`, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
          },
        });

        if (response.data.user) {
          setUser({
            user: response.data.user,
            isLoading: false,
          });
          InitCart();
        }
      } catch (e) {
        console.error(e);
      } finally {
        setMounted({
          isMounted: true
        });
      }
    };

    init();
  }, []);
  return null;
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}//products`);
  const products = await res.json();
  //return the products which are in the category of cellphones
  return {
    props: {
      products: products,
    },
  };
}