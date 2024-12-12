import Link from "next/link";
import { ChevronRight } from "lucide-react";

const ProductCarouselHeader = () => {
  return (
    <div className="relative mb-6 inline-block h-[50px] w-full rounded-tl-[50px] rounded-tr-[50px] bg-gray-100 leading-[50px]">
      <h3 className="relative z-10 inline-block h-[50px] min-w-40 rounded-tr-[50px] bg-primary px-5 text-sm font-bold uppercase leading-[50px] text-white md:min-w-[200px] md:px-8">
        Solar Light
      </h3>
      <Link
        href="/"
        className="absolute right-10 top-1/2 flex -translate-y-1/2 items-center text-sm font-semibold text-primary"
      >
        Xem thêm
        <ChevronRight width={20} height={20} className="ml-1" />
      </Link>
    </div>
  );
};

export default ProductCarouselHeader;
