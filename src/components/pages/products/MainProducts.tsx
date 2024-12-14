"use client";

import Cookie from "js-cookie";
import { useEffect } from "react";
import { isProduction } from "@/utils";
import { useToast } from "@/components/ui/use-toast";
import { TEMP_ACCESS_TOKEN } from "@/constants/auth";
import { getShortLivedJwt } from "@/apis/author.api";
import { setProductProps } from "@/reduxs/ProductsSlice";
import { checkTokenExpired, decrypt } from "@/utils/auth";
import { getCategoriesList } from "@/apis/categories.api";
import { useAppDispatch } from "@/hooks/store";
import ProductCategory from "./categories/ProductCategory";
import ProductCarousel from "./product-carousels/ProductCarousel";

const MainProducts = () => {
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const handleGetTempAccessToken = async () => {
    const cookie = Cookie.get(TEMP_ACCESS_TOKEN);
    const token = await decrypt(cookie);
    const isTokenExpired = checkTokenExpired(token);
    if (cookie && token.type && !isTokenExpired) {
      return;
    }
    try {
      const { data } = await getShortLivedJwt();
      Cookie.set(TEMP_ACCESS_TOKEN, data.access_token, {
        expires: 365,
      });
      window.location.reload();
    } catch (error) {
      isProduction && console.log(error);
    }
  };

  const handleGetCategoriesList = async () => {
    dispatch(setProductProps({ loading: true }));
    try {
      const res = await getCategoriesList();
      if (res) {
        dispatch(
          setProductProps({
            categoriesList: res,
          }),
        );
      }
      dispatch(setProductProps({ loading: false }));
    } catch (error) {
      toast({
        description: "Không thể tải danh sách loại sản phẩm",
        status: "error",
      });
    }
    dispatch(setProductProps({ loading: false }));
  };

  useEffect(() => {
    handleGetTempAccessToken();
    handleGetCategoriesList();
  }, []);

  return (
    <>
      <ProductCategory />
      <ProductCarousel />
    </>
  );
};

export default MainProducts;
