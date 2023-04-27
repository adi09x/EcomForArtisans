import Link from 'next/link'
import React from 'react'


// const Products = (props) => {
//   return <section className="stext-gray-600 body-font">
//     <div className="container px-5 py-24 mx-auto">
//       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - E-commerce For Artisians {props.name}</h1>
//       <div className="flex flex-wrap -m-4">

//         <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
//           <a className="block relative h-48 rounded overflow-hidden">
//             <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
//           </a>
//           <div className="mt-4">
//             <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">products.attributes</h3>
//             <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//             <p className="mt-1">$16.00</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>

// }

const filterSculptures = (props) => {


  return (
    <div className='container mx-auto px-4'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full md:mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - E-comm for Artisians</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {props.products.data.map((item) => {
              console.log(item);

              return (
                <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-96 rounded m-auto mb-8 object-scale-down" src={item.attributes.imgurl} alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
                    {/* <div className="hidden bg-red-800 bg-purple-800 bg-green-800"></div>
                    <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-800`}></button> */}
                    <p className="leading-relaxed text-base"> {item.attributes.description}</p>
                    <p className="leading-relaxed text-base"> AvailableQty  - {item.attributes.AvailableQty}</p>
                    <Link href={`/product/${item.attributes.slug}`}><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now</button></Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}


export async function getServerSideProps(context) {
  let headers = { Authorization: "Bearer 461ec980c7a2a99e72a6cf55ba28261c51edad99a73d4ad590ec15a09f6a40f05629d7ab6f016ef91d690953e2017147364f70e1b102f47cbfdfa434864bc96eb0bd2d781cd84fe7a376c6225e6227b21cc7ceb19b7a73cf92b49297d37943c4af2fe5b6517c2cae5cf16fef4109e84afcab1973ff466b6e2ffd2f8ae496f9d3" }
  let a = await fetch("https://ecomforartisans.onrender.com/api/products?filters[category]=Sculptures", { headers: headers })

  let products = await a.json()
  console.log(products);
  return {
    props: { products: products }
  }

}




export default filterSculptures