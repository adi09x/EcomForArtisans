import Link from "next/link";
import React from "react";

const Products = ({ artist }) => {
  const data = artist.data[0].attributes;
  const products = data.products;

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap justify-between">
        <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div class="w-full sm:p-4 px-4 mb-6">
            <h1 class="title-font font-medium text-xl mb-2 text-gray-900">
              {data.Name}
            </h1>
            <div class="leading-relaxed">
              Pour-over craft beer pug drinking vinegar live-edge gastropub,
              keytar neutra sustainable fingerstache kickstarter.
            </div>
          </div>
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
            <p class="leading-relaxed">No of People Hired</p>
          </div>
        </div>
        <div class="lg:w-1/6 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            class="object-cover object-center w-full h-full"
            src={data.ProfileImg}
            alt="stats"
          />
        </div>
      </div>

      <div className="flex flex-wrap  mx-6 -m-4">
        {products.data.map(({ attributes, id }) => {
          const { title, price, imgurl, description, category, slug } =
            attributes;
          return (
            <div key={""} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-96 rounded m-auto mb-8 object-scale-down"
                  src={imgurl}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {category}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {title}
                </h2>
                {/* <div className="hidden bg-red-800 bg-purple-800 bg-green-800"></div>
                          <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-800`}></button> */}
                <p className="leading-relaxed text-base"> {description}</p>
                <p className="leading-relaxed text-base">
                  {" "}
                  AvailableQty - {"item.attributes.AvailableQty"}
                </p>
                <Link href={`/product/${slug}`}>
                  <button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  let headers = {
    Authorization:
      "Bearer 2ed747984fdbb390d1f742624785fb379cdd97ca844b5746f8760c4a8ce187a8f653a8eef3a645bb44fb45a521030486dc985c0e9410bd179e83041b6c98f6f07bed7ac2465796c061647d385ea7dfa823a73f80ad4285373f891f96987a1b852094800fc01d618f18f6ab2f9fb1493abc7f06fb73c273ba5c97cae70697e02e",
  };

  const a = await fetch(
    `http://localhost:1337/api/artists?filters[id][$eq]=${context.query.id}&populate=*`,
    { headers: headers }
  );

  const artist = await a.json();

  return {
    props: { artist },
  };
}

export default Products;
