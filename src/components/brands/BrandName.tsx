import Link from 'next/link';

const BrandName = () => {
  return (
    <Link
      href="/"
      className="flex h-[72px] items-center border-r border-solid border-gray-300 pr-4"
    >
      <h2 className="m-0 text-2xl font-bold uppercase text-primary">Solar Bách Thịnh</h2>
    </Link>
  );
};

export default BrandName;
