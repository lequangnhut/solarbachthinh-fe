import { CheckCheck, Medal, Pickaxe, UserRound } from 'lucide-react';

const HomeFutures = () => {
  const items = [
    {
      icon: <UserRound className="text-white" />,
      count: 3453,
      title: 'Happy Customers',
      description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit',
      delay: '0.1s',
    },
    {
      icon: <CheckCheck className="text-white" />,
      count: 4234,
      title: 'Project Done',
      description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit',
      delay: '0.3s',
    },
    {
      icon: <Medal className="text-white" />,
      count: 3123,
      title: 'Awards Win',
      description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit',
      delay: '0.5s',
    },
    {
      icon: <Pickaxe className="text-white" />,
      count: 1831,
      title: 'Expert Workers',
      description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit',
      delay: '0.7s',
    },
  ];

  return (
    <div className="container mx-auto mt-10 py-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="animate-fadeIn flex flex-col items-center text-center"
            data-wow-delay={item.delay}
          >
            <div className="mb-4 flex items-center">
              <div className="mr-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                {item.icon}
              </div>
              <h1 className="mb-0 text-4xl font-bold text-black" data-toggle="counter-up">
                {item.count}
              </h1>
            </div>
            <h5 className="mb-3 text-lg font-semibold text-black">{item.title}</h5>
            <span className="text-gray-600">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFutures;
