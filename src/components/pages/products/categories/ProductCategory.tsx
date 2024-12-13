"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { useToast } from "@/components/ui/use-toast";
import { setProductProps } from "@/reduxs/ProductsSlice";
import { getCategoriesList } from "@/apis/categories.api";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import ProductCategoryInput from "./ProductCategoryInput";

const ProductCategory = () => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const categoriesList = useAppSelector(
    (state) => state.products.categoriesList,
  );

  const handleGetCategoriesList = async () => {
    setLoading(true);
    try {
      const res = await getCategoriesList();
      if (res) {
        dispatch(
          setProductProps({
            categoriesList: res,
          }),
        );
      }
      setLoading(false);
    } catch (error) {
      toast({
        description: "Không thể tải danh sách loại sản phẩm",
        status: "error",
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetCategoriesList();
    return () => {
      dispatch(
        setProductProps({
          categoriesList: [],
        }),
      );
    };
  }, []);

  return (
    <div className="hidden bg-gray-100 py-12 md:block">
      <div className="container grid grid-cols-3 gap-32">
        <div className="col-span-2">
          <ul className="flex gap-7">
            {loading ? (
              <div className="flex h-24 w-full items-center justify-center">
                <PulseLoader color="#32C36C" margin={6} size={12} />
              </div>
            ) : (
              categoriesList.map((item, key) => (
                <li
                  key={key}
                  className="flex h-24 w-auto flex-col items-center"
                >
                  <div className="flex aspect-square h-24 w-24 items-center justify-center overflow-hidden bg-gray-100">
                    <Link href="">
                      <Image
                        src={item.categoryImage}
                        alt="category image"
                        width={100}
                        height={100}
                        className="h-full w-full object-contain brightness-0 filter transition-all duration-300"
                      />
                    </Link>
                  </div>
                  <span className="mt-3 text-center text-sm text-gray-500">
                    {item.categoryName}
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
        <ProductCategoryInput />
      </div>
    </div>
  );
};

export default ProductCategory;
