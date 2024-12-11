import MainProject from '@/components/pages/projects/MainProject';
import PageHeaderLayout from '@/components/commons/headers/PageHeaderLayout';

export default function ProjectPage() {
  return (
    <PageHeaderLayout pageTitle="Dự án">
      <MainProject />
    </PageHeaderLayout>
  );
}
