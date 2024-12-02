import PageHeaderLayout from '@/components/commons/PageHeaderLayout';
import ProductCategory from '@/components/pages/products/categories/ProductCategory';

export default function ProductPage() {
  return (
    <PageHeaderLayout pageTitle="Sản phẩm">
      <ProductCategory />
    </PageHeaderLayout>
  );
}
