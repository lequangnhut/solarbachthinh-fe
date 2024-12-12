import Link from "next/link";
import Image from "next/image";
import ProductCategoryInput from "./ProductCategoryInput";

const ProductCategory = () => {
  const categories = [
    {
      image: "/assets/images/products/battery.png",
      name: "Pin trữ điện",
    },
    {
      image: "/assets/images/products/ess.png",
      name: "ESS",
    },
    {
      image: "/assets/images/products/inverter.png",
      name: "Inverter",
    },
    {
      image: "/assets/images/products/light.png",
      name: "Đèn năng lượng",
    },
    {
      image: "/assets/images/products/pin.png",
      name: "Tấm pin",
    },
  ];

  return (
    <div className="hidden bg-gray-100 py-12 md:block">
      <div className="container grid grid-cols-3 gap-32">
        <div className="col-span-2">
          <ul className="flex gap-7">
            {categories.map((item, key) => (
              <li key={key} className="flex h-24 w-auto flex-col items-center">
                <div className="flex aspect-square h-24 w-24 items-center justify-center overflow-hidden bg-gray-100">
                  <Link href="">
                    <Image
                      src={item.image}
                      alt="category image"
                      width={100}
                      height={100}
                      className="h-full w-full object-contain contrast-200 grayscale filter"
                    />
                  </Link>
                </div>
                <span className="mt-3 text-center text-sm text-gray-500">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <ProductCategoryInput />
      </div>
    </div>
  );
};

export default ProductCategory;
