import Link from 'next/link';
import Image from 'next/image';

const HomeAbout = () => {
  return (
    <div className="my-16 overflow-hidden bg-gray-100">
      <div className="mx-auto">
        <div className="flex flex-wrap">
          <div className="wow fadeIn min-h-[400px] w-full lg:w-1/2" data-wow-delay="0.1s">
            <div className="relative h-full">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src="/assets/images/base/about.jpg"
                width={100}
                height={100}
                alt="About Us"
              />
            </div>
          </div>

          <div className="wow fadeIn w-full px-6 py-10 lg:w-1/2 lg:px-10" data-wow-delay="0.5s">
            <div className="lg:pl-10">
              <h6 className="text-lg font-semibold text-primary">About Us</h6>
              <h1 className="mb-4 text-4xl font-bold">
                25+ Years Experience In Solar & Renewable Energy Industry
              </h1>
              <p className="mb-4 text-gray-600">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fa fa-check-circle mr-3 text-primary"></i>
                  <span>Diam dolor diam ipsum</span>
                </li>
                <li className="flex items-center">
                  <i className="fa fa-check-circle mr-3 text-primary"></i>
                  <span>Aliqu diam amet diam et eos</span>
                </li>
                <li className="flex items-center">
                  <i className="fa fa-check-circle mr-3 text-primary"></i>
                  <span>Tempor erat elitr rebum at clita</span>
                </li>
              </ul>
              <Link
                href="#"
                className="btn-primary mt-4 inline-block rounded-full bg-primary px-5 py-3 text-white transition hover:bg-primary-bold"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
