import Link from "next/link";

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
      <h1 className="text-2xl font-bold uppercase text-primary">
        {item.headquarters}
      </h1>
      <div className="space-y-6 text-base md:mr-20">
        <p>
          <strong>Địa chỉ:&nbsp;</strong>
          {item.address}
        </p>
        <p>
          <strong>Điện thoại:&nbsp;</strong>
          {item.phoneNumber}
        </p>
        <p>
          <strong>Hotline:&nbsp;</strong>
          {item.hotline}
        </p>
        <p>
          <strong>Fax:&nbsp;</strong>
          {item.fax}
        </p>
        <p>
          <strong>Email:&nbsp;</strong>{" "}
          <Link className="text-blue-500" href={item.email}>
            {item.email}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ContactAddressItem;
