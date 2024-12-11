const CustomComingSoon = () => {
  return (
    <div className="flex items-center gap-4 text-xl uppercase md:text-5xl">
      <h1 className="text-whiteBase text-[#111214]">comming</h1>
      <h1
        data-content="SOON"
        className="before:text-whiteBase relative inline-block text-primary before:absolute before:left-0 before:top-0 before:h-full before:w-[32px] before:overflow-hidden before:text-[#111214] before:content-[attr(data-content)] md:before:w-[87px]"
      >
        soon
      </h1>
    </div>
  );
};

export default CustomComingSoon;
