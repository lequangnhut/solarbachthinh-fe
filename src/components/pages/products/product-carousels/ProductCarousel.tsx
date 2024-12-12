import ProductCarouselBody from "./ProductCarouselBody";
import ProductCarouselHeader from "./ProductCarouselHeader";

const ProductCarousel = () => {
  return (
    <div className="mt-20">
      <div className="container">
        <h1 className="mb-10 text-2xl font-semibold uppercase text-gray-700 md:text-4xl">
          Sản phẩm
        </h1>
        <ProductCarouselHeader />
        <ProductCarouselBody />
      </div>
    </div>
  );
};

export default ProductCarousel;
