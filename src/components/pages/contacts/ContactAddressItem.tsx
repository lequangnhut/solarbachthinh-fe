import Link from 'next/link';

interface IProps {
  headquarters: string;
  address: string;
  phoneNumber: string;
  hotline: string;
  fax: string;
  email: string;
}

const ContactAddressItem = (item: IProps) => {
  return (
    <div className="mb-8 space-y-5">
      <h1 className="text-2xl font-bold uppercase text-primary">{item.headquarters}</h1>
      <div className="space-y-6 text-base">
        <p>
          <strong>Địa chỉ:</strong>
          {item.address}
        </p>
        <p>
          <strong>Điện thoại:</strong>
          {item.phoneNumber}
        </p>
        <p>
          <strong>Hotline:</strong>
          {item.hotline}
        </p>
        <p>
          <strong>Fax:</strong>
          {item.fax}
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <Link className="text-blue-500" href={item.email}>
            {item.email}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ContactAddressItem;
