// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <

//   Component {...pageProps} />
// }


import NavBar from '../components/NavBar'
import '../styles/globals.css'
import { useEffect, useState } from 'react'
import Footer from '../components/footer'




function MyApp({ Component, pageProps }) {

  useEffect(() => {

    console.log("I am using effect from app.js")
  }, [])

  const [cart, setCart] = useState([])
  const [reloadKey, setreloadKey] = useState(1)

  const addToCart = (item, qty, price) => {

    let newCart = cart
    for (let index = 0; index < qty; index++) {
      const element = qty;
      newCart.push([item, price])
    }
    setCart(newCart)
    console.log(newCart)
    setreloadKey(Math.random())

  }

  const removeFromCart = (item, qty) => {

    let newCart = cart
    let index = newCart.indexOf(item)
    newCart.splice(index)
    setCart(newCart)
  }

  const clearCart = (item) => {
    setCart([])
  }

  return <><NavBar key={reloadKey} cart={cart} />
    <Component cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart}{...pageProps} /><Footer /></>
}

export default MyApp
