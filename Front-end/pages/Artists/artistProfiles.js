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
    Authorization: "Bearer 2ed747984fdbb390d1f742624785fb379cdd97ca844b5746f8760c4a8ce187a8f653a8eef3a645bb44fb45a521030486dc985c0e9410bd179e83041b6c98f6f07bed7ac2465796c061647d385ea7dfa823a73f80ad4285373f891f96987a1b852094800fc01d618f18f6ab2f9fb1493abc7f06fb73c273ba5c97cae70697e02e"
  }

  let jso = await fetch("http://localhost:1337/api/artists?", { headers: headers })

  let artists = await jso.json()
  console.log(artists);
  return {
    props: {
      artists: artists
    }
  }
}
export default artistProfiles





// api token -- 2ed747984fdbb390d1f742624785fb379cdd97ca844b5746f8760c4a8ce187a8f653a8eef3a645bb44fb45a521030486dc985c0e9410bd179e83041b6c98f6f07bed7ac2465796c061647d385ea7dfa823a73f80ad4285373f891f96987a1b852094800fc01d618f18f6ab2f9fb1493abc7f06fb73c273ba5c97cae70697e02e