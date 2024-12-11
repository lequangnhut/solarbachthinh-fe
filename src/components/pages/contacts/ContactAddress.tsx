import ContactAddressItem from './ContactAddressItem';

const ContactAddress = () => {
  const address = [
    {
      headquarters: 'Trụ sở chính',
      address:
        'Đối diện nhà văn hóa thiếu nhi, ấp Bắc Sơn, thị trấn Núi Sập, huyện Thoại Sơn, tỉnh An Giang',
      phoneNumber: '(+84) 918 619 651',
      hotline: '0918 619 651',
      fax: '(+84) 918 619 651',
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
