import { Input } from "@/components/ui/Input";

const ProductCategoryInput = () => {
  return (
    <div className="col-span-1 content-center items-center justify-center md:hidden lg:block">
      <Input
        type="text"
        placeholder="Tìm sản phẩm"
        className="h-5 rounded-[99px] border !border-gray-400 !py-[22px] focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default ProductCategoryInput;
