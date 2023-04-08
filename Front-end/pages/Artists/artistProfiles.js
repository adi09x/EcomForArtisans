import React from 'react'
import Link from 'next/link'


const artistProfiles = (props) => {


  return (

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">


        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Artist All Over India</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>


        <div class="flex flex-wrap -m-2">


          {props.artists.data.map((item) => {
            console.log(item);

            return (

              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">

                  <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={item.attributes.ProfileImg} />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">{item.attributes.Name}</h2>
                    <p class="text-gray-500">{item.attributes.Expertise}</p>
                  </div>
                  <Link href={`artistHireProfile`}>
                  <button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Hire</button></Link>
                </div>
              </div>

            )
          })}

        </div>
      </div>
    </section>



  )
}





export async function getServerSideProps(context) {
  let headers = {
    Authorization: "Bearer 43fb508bc2e543f4e90c4d6b8b85a1400e0240d3651e42d39a8364cc81d0f657de0fc4b4be433f58662e1b6f164984d78955d6b4a154c44e70f7f0de61bfe0a02ee85b050b325d9132b9a076334f9072a9d368131b24114529248da78c57d3ef40484a0f5555abc330a7c80ebb7ec9fbc5b86007d94e3c5e4fbf314b0566bbec"
  }

  let jso = await fetch("http://localhost:1337/api/artists/", { headers: headers })

  let artists = await jso.json()
  console.log(artists);
  return {
    props: {
      artists: artists
    }
  }
}
export default artistProfiles