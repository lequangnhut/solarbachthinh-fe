import ContactAddressItem from './ContactAddressItem';

const ContactAddress = () => {
  const address = [
    {
      headquarters: 'Trụ sở chính',
      address: '12 Đông Hưng Thuận 10, KP.3, P. Đông Hưng Thuận, Quận 12, TP. HCM',
      phoneNumber: '(+84) 283 715 7567',
      hotline: '1800 6567',
      fax: '(+84) 283 891 6586',
      email: 'lethanhkietdl@gmail.com',
    },
  ];

  return (
    <div className="mb-10 mt-20">
      <h1 className="mb-14 text-5xl font-bold uppercase">Liên hệ</h1>
      <div className="box">
        {address.map((item, key) => (
          <ContactAddressItem
            address={item.address}
            email={item.email}
            fax={item.fax}
            headquarters={item.headquarters}
            hotline={item.hotline}
            phoneNumber={item.phoneNumber}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactAddress;
