import Link from 'next/link';

interface IProps {
  pageTitle: string;
  children: React.ReactNode;
}

const PageHeaderLayout = ({ pageTitle, children }: IProps) => {
  return (
    <>
      <div className="page-header mx-auto mb-20 bg-cover bg-repeat py-8">
        <div className="container py-20">
          <h1 className="mb-3 text-6xl font-bold text-white">{pageTitle}</h1>
          <nav aria-label="breadcrumb">
            <ol className="flex space-x-2 text-lg">
              <li className="breadcrumb-item">
                <Link className="text-white" href="/">
                  Trang chủ
                </Link>
              </li>
              <span className="text-white">/</span>
              <li className="breadcrumb-item text-white" aria-current="page">
                {pageTitle}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {children} {/* Hiển thị nội dung con */}
    </>
  );
};

export default PageHeaderLayout;
