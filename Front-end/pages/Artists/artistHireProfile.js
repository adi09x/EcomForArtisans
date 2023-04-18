import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const artistHireProfile = (artiste) => {
    // const router = useRouter()
    // const { slug } = router.query

    

    console.log(artiste)


 

    return (

        
    
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Artyist Name
                    </h1>
                    <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>

                    <div className='flex flex-row'>
                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                            <p class="leading-relaxed">Products Purchased</p>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                            <p class="leading-relaxed">Reviews</p>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
                            <p class="leading-relaxed">No of times Hired</p>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <Link href={`artistWiseProducts`}><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy Products</button></Link>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Hire Me</button>
                    </div>
                    

                    <div class="flex items-bottom-right my-5 flex-wrap ">
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href='#section'>Artist's Gallery
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" /></svg>
                        </a>
                    </div>



                </div>
            </div>


            <h1 className="text-2xl font-medium title-font mb-4 mx-4 text-gray-900">Gallery-</h1>
            <div className="flex flex-wrap md:-m-2 -m-1">
                <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
                    </div>
                    <div className="md:p-2 p-1 w-full">
                        <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
                    </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-full">
                        <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
                    </div>
                </div>
            </div>
        </section >


    )
}


export async function getServerSideProps(context) {
    let headers = { Authorization: "Bearer 2ed747984fdbb390d1f742624785fb379cdd97ca844b5746f8760c4a8ce187a8f653a8eef3a645bb44fb45a521030486dc985c0e9410bd179e83041b6c98f6f07bed7ac2465796c061647d385ea7dfa823a73f80ad4285373f891f96987a1b852094800fc01d618f18f6ab2f9fb1493abc7f06fb73c273ba5c97cae70697e02e" }
    let sluge = "artist-1"
    let a = await fetch("http://localhost:1337/api/artists?filters[Slug]=artist-1", { headers: headers })

    // context.query.Slug

    let artist = await a.json()

    console.log(artist);
    return {
        props: { artiste: artist.data[0].attributes.Name}
    }

}


export default artistHireProfile