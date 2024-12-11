import CustomComingSoon from '@/components/commons/CustomComingSoon';
import NoFooterContentLayout from '@/components/layouts/NoFooterContentLayout';

export default function ServicePage() {
  return (
    <NoFooterContentLayout>
      <div className="flex h-[90vh] w-full items-center justify-center">
        <CustomComingSoon />
      </div>
    </NoFooterContentLayout>
  );
}
