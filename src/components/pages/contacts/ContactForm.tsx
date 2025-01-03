import { Button } from "@/components/ui/Button";
import ContactFormItem from "./ContactFormItem";

const ContactForm = () => {
  return (
    <div className="mb-20 min-h-[690px] w-full shadow-lg md:mb-0">
      <div className="mt-12 px-6 lg:mt-24 xl:px-28">
        <h1 className="mb-3 text-lg">Form liên hệ</h1>
        <h1 className="text-2xl font-bold uppercase text-primary lg:text-3xl">
          Kết nối với chúng tôi
        </h1>

        <form autoComplete="off">
          <ContactFormItem />
          <Button className="mb-7 mt-6 rounded-none bg-primary p-6 uppercase hover:bg-primary-bold md:mb-0">
            Gửi ngay
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
