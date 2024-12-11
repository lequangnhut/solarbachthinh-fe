import MainProducts from '@/components/pages/products/MainProducts';
import PageHeaderLayout from '@/components/commons/headers/PageHeaderLayout';

export default function ProductPage() {
  return (
    <PageHeaderLayout pageTitle="Sản phẩm">
      <MainProducts />
    </PageHeaderLayout>
  );
}
