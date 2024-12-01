import Image from 'next/image';
import { CheckCheck, Headset, ThermometerSnowflake, UserCheck } from 'lucide-react';

const HomeServiceFuture = () => {
  const items = [
    {
      icon: <CheckCheck className="text-white" />,
      title: 'Quality',
      subtitle: 'Services',
    },
    {
      icon: <UserCheck className="text-white" />,
      title: 'Expert',
      subtitle: 'Workers',
    },
    {
      icon: <ThermometerSnowflake className="text-white" />,
      title: 'Free',
      subtitle: 'Consultation',
    },
    {
      icon: <Headset className="text-white" />,
      title: 'Customer',
      subtitle: 'Support',
    },
  ];

  return (
    <div className="my-10 overflow-hidden bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
          <div className="animate-fadeIn py-10">
            <div className="lg:pl-10">
              <h6 className="mb-2 text-lg font-semibold text-primary">Why Choose Us!</h6>
              <h1 className="mb-6 text-4xl font-bold text-gray-800">
                Complete Commercial & Residential Solar Systems
              </h1>
              <p className="mb-8 text-gray-600">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <p className="mb-0 text-gray-600">{item.title}</p>
                      <h5 className="text-lg font-semibold text-gray-800">{item.subtitle}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="animate-fadeIn relative h-[400px] lg:h-auto"
            style={{ animationDelay: '0.5s' }}
          >
            <Image
              src="/assets/images/base/feature.jpg"
              alt="Feature"
              width={100}
              height={100}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceFuture;
