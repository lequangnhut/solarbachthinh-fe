import Link from 'next/link';

interface IProps {
  pageTitle: string;
  children: React.ReactNode;
}

const PageHeaderLayout = ({ pageTitle, children }: IProps) => {
  return (
    <>
      <div className="page-header mx-auto bg-cover bg-repeat py-8">
        <div className="container py-20">
          <h1 className="mb-3 text-4xl font-bold text-white md:text-6xl">{pageTitle}</h1>
          <nav aria-label="breadcrumb">
            <ol className="flex space-x-2 text-base md:text-lg">
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
      {children}
    </>
  );
};

export default PageHeaderLayout;
