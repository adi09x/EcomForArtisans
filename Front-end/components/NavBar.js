import Link from 'next/link'
import React from 'react'


const NavBar = ({ cart }) => {
    return (
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link legacyBehavior href="/"><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className="W-8 h-5" src='/logo.svg' alt=''></img>
                    <span className="ml-3 text-xl">Ecommerce For Artisians</span>
                </a></Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link legacyBehavior href="/"><a className="mr-5 hover:text-gray-900">Home</a></Link>
                    <Link legacyBehavior href="/Artists/artistProfiles"><a className="mr-5 hover:text-gray-900">Artists</a></Link>
                    <Link legacyBehavior href="/products"><a className="mr-5 hover:text-gray-900">Products</a></Link>
                    <Link legacyBehavior href="/about"><a className="mr-5 hover:text-gray-900">About</a></Link>
                    <Link legacyBehavior href="/contact"><a className="mr-5 hover:text-gray-900">Contact Us</a></Link>
                    <Link legacyBehavior href="/checkout"><a className="mr-5 hover:text-gray-900">
                        
        
cart({cart.length})</a></Link>
                </nav>
                <button className=" my-2 text-white bg-indigo-500 border-0 md:py-2 px-4 md:px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">LogIn</button>

            </div>
        </header>
    )
}

export default NavBar