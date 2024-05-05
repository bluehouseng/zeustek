import Link from "next/link";
import Image from "next/image";
import CreativesImage from "@/public/images/creatives.jpg";


export default function Creatives() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 italic">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk">
              Join Us As We Empower African Women in Nothern Nigeria
            </h2>
          </div>
          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center space-y-8 md:space-y-0">
            {/* Creatives cards */}
            <div className="md:w-1/2" data-aos-id-cards>
              <div className="flex space-x-6">
                {/* Column 1 */}
                <div className="w-1/2 space-y-6">
                  {/* Item */}
                  <div
                    className="text-center "
                    data-aos-anchor="[data-aos-id-cards]"
                    data-aos="fade-down"
                  >
                    <Image
                      className="w-full h-64 object-cover rounded-md "
                      src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714859193/aaea1rml3b1tzdjxqg0v.jpg`}
                      width={258}
                      height={64}
                      alt="Creative 01 bg"
                    />
                    <div className="bg-white px-4 pb-6"></div>
                  </div>
                  {/* Item */}
                  <div
                    className="text-center "
                    data-aos="fade-right"
                    data-aos-anchor="[data-aos-id-cards]"
                    data-aos-delay="200"
                  >
                    <Image
                      className="w-full h-64 object-cover rounded-md "
                      src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714858662/wdofyahhfcivntotbypc.jpg`}
                      width={258}
                      height={64}
                      alt="Creative 02 bg"
                    />
                    <div className="bg-white px-4 pb-6"></div>
                  </div>
                </div>
                {/* Column 2 */}
                <div className="w-1/2 mt-6 space-y-6">
                  {/* Item */}
                  <div
                    className="text-center "
                    data-aos="fade-left"
                    data-aos-anchor="[data-aos-id-cards]"
                    data-aos-delay="100"
                  >
                    <Image
                      className="w-full h-64 object-cover rounded-md"
                      src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714858650/yaj7lpdnr0cbj3qgwkzg.jpg`}
                      width={258}
                      height={64}
                      alt="Creative 03 bg"
                    />
                    <div className="bg-white px-4 pb-6">
                      <div></div>
                    </div>
                  </div>
                  {/* Item */}
                  <div
                    className="text-center "
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-cards]"
                    data-aos-delay="300"
                  >
                    <Image
                      className="w-full h-64 object-cover rounded-md"
                      src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714858647/s5pyee6cnneodzvrwol6.jpg`}
                      width={258}
                      height={64}
                      alt="Creative 04 bg"
                    />
                    <div className="bg-white px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3"></div>

                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="md:w-1/2 md:pl-10 lg:pl-20">
              <div className="text-center md:text-left">
                <Image
                  className="inline-block mb-12"
                  src={CreativesImage}
                  width={330}
                  height={181}
                  alt="Creatives"
                />
                <h3 className="h3 font-cabinet-grotesk text-4xl mb-4">
                  More than a community
                </h3>
                <p className="text-xl text-gray-500 mb-6">
                  Breaking barriers, empowering women,Market to Tech, a journey
                  of transformation.
                </p>
                <div>
                  <Link
                    className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-600 shadow-sm"
                    href="#"
                  >
                    Join The Community
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
