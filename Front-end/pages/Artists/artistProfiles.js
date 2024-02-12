import React from 'react'
import Link from 'next/link'


const artistProfiles = (props) => {


  return (

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">


        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Artist All Over India</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them.</p>
        </div>


        <div class="flex flex-wrap -m-2">


          {props.artists.data.map((item) => {
            console.log(item.id);

            return (

              <div key={item.id} class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">

                  <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={item.attributes.ProfileImg} />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">{item.attributes.Name}</h2>
                    <p class="text-gray-500">{item.attributes.Expertise}</p>
                  </div>
                  <Link href={`/Artists/products/${item.id}`}>
                    <button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Hire</button></Link>
                </div>
              </div>
              // ${item.attributes.slug}
            )
          })}

        </div>
      </div>
    </section>



  )
}





export async function getServerSideProps(context) {
  let headers = {
    Authorization: "Bearer 461ec980c7a2a99e72a6cf55ba28261c51edad99a73d4ad590ec15a09f6a40f05629d7ab6f016ef91d690953e2017147364f70e1b102f47cbfdfa434864bc96eb0bd2d781cd84fe7a376c6225e6227b21cc7ceb19b7a73cf92b49297d37943c4af2fe5b6517c2cae5cf16fef4109e84afcab1973ff466b6e2ffd2f8ae496f9d3"
  }

  let jso = await fetch("https://ecomforartisans.onrender.com/api/artists?", { headers: headers })

  let artists = await jso.json()
  console.log(artists);
  return {
    props: {
      artists: artists
    }
  }
}
export default artistProfiles





