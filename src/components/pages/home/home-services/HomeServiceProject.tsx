import { Eye, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomeServiceProject = () => {
  const items = [
    {
      img: "/assets/images/base/img-600x400-6.jpg",
      category: "Solar Panels",
      title: "We Are pioneers of solar & renewable energy industry",
    },
    {
      img: "/assets/images/base/img-600x400-5.jpg",
      category: "Wind Turbines",
      title: "We Are pioneers of solar & renewable energy industry",
    },
    {
      img: "/assets/images/base/img-600x400-4.jpg",
      category: "Hydropower Plants",
      title: "We Are pioneers of solar & renewable energy industry",
    },
    {
      img: "/assets/images/base/img-600x400-3.jpg",
      category: "Solar Panels",
      title: "We Are pioneers of solar & renewable energy industry",
    },
    {
      img: "/assets/images/base/img-600x400-2.jpg",
      category: "Wind Turbines",
      title: "We Are pioneers of solar & renewable energy industry",
    },
    {
      img: "/assets/images/base/img-600x400-1.jpg",
      category: "Hydropower Plants",
      title: "We Are pioneers of solar & renewable energy industry",
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="animate-fadeInUp mx-auto mb-10 max-w-xl text-center">
          <h6 className="mb-2 text-lg font-semibold text-primary">
            Our Projects
          </h6>
          <h1 className="text-4xl font-bold text-gray-800">
            Visit Our Latest Solar And Renewable Energy Projects
          </h1>
        </div>

        <div className="animate-fadeInUp mt-5 text-center">
          <ul className="inline-flex flex-wrap justify-center gap-4">
            <li className="active cursor-pointer text-gray-700 hover:text-primary">
              All
            </li>
            <li className="cursor-pointer text-gray-700 hover:text-primary">
              Solar Panels
            </li>
            <li className="cursor-pointer text-gray-700 hover:text-primary">
              Wind Turbines
            </li>
            <li className="cursor-pointer text-gray-700 hover:text-primary">
              Hydropower Plants
            </li>
          </ul>
        </div>

        <div className="animate-fadeInUp mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg"
            >
              <div className="group relative">
                <Image
                  width={100}
                  height={100}
                  src={item.img}
                  alt={item.category}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Link
                    href={item.img}
                    className="rounded-full bg-white p-3 text-gray-800 shadow-md hover:bg-gray-200"
                  >
                    <Eye className="text-black" />
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full bg-white p-3 text-gray-800 shadow-md hover:bg-gray-200"
                  >
                    <Link2 className="text-black" />
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-primary">
                  {item.category}
                </p>
                <hr className="my-2 w-1/4 border-t-2 border-primary" />
                <h5 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServiceProject;
