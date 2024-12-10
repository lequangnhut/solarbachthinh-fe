const MapPageHeaderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="mx-auto bg-cover bg-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1388.0063701162592!2d105.27430956612149!3d10.271665100734289!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1733840644058!5m2!1svi!2s"
          height={400}
          className="w-full border-0"
          loading="lazy"
        ></iframe>
      </div>
      {children}
    </>
  );
};

export default MapPageHeaderLayout;
