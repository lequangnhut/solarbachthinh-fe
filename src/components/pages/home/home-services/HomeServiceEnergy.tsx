const HomeServiceEnergy = () => {
  const items = [
    {
      img: "/assets/images/base/img-600x400-1.jpg",
      icon: "fa-solar-panel",
      title: "Solar Panels",
      description:
        "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    },
    {
      img: "/assets/images/base/img-600x400-2.jpg",
      icon: "fa-wind",
      title: "Wind Turbines",
      description:
        "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    },
    {
      img: "/assets/images/base/img-600x400-3.jpg",
      icon: "fa-lightbulb",
      title: "Hydropower Plants",
      description:
        "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    },
    {
      img: "/assets/images/base/img-600x400-4.jpg",
      icon: "fa-solar-panel",
      title: "Solar Panels",
      description:
        "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    },
    {
      img: "/assets/images/base/img-600x400-5.jpg",
      icon: "fa-wind",
      title: "Wind Turbines",
      description:
        "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    },
    {
      img: "/assets/images/base/img-600x400-6.jpg",
      icon: "fa-lightbulb",
      title: "Hydropower Plants",
      description:
        "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    },
  ];

  return (
    <div className="overflow-hidden py-10">
      <div className="container mx-auto px-4">
        <div
          className="mx-auto mb-10 text-center"
          style={{ maxWidth: "600px" }}
        >
          <h6 className="text-lg font-semibold text-primary">Our Services</h6>
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            We Are Pioneers In The World Of Renewable Energy
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => (
            <div
              key={index}
              className="transform overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:scale-105"
            >
              <img
                className="h-48 w-full object-cover"
                src={service.img}
                alt={service.title}
              />
              <div className="p-6">
                <div className="mb-4 flex items-center justify-center">
                  <i className={`fa ${service.icon} fa-3x text-primary`}></i>
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-800">
                  {service.title}
                </h4>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <a
                  href="#"
                  className="font-medium text-primary hover:underline"
                >
                  Read More
                  <i className="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServiceEnergy;
