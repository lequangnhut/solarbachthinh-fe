import MainCart from '@/components/pages/carts/MainCart';
import PageHeaderLayout from '@/components/commons/PageHeaderLayout';

export default function CartPage() {
  return (
    <PageHeaderLayout pageTitle="Danh sách giỏ hàng">
      <MainCart />
    </PageHeaderLayout>
  );
}
