import { cn } from "@/utils";
import { Input } from "@/components/ui/Input";
import { FormControl, FormItem } from "@/components/ui/Form";
import { Textarea } from "@/components/ui/Textarea";

const ContactFormItem = () => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2">
      <FormItem className="col-span-2 mb-5 md:col-span-1 md:mr-4">
        <FormControl>
          <Input
            name="fullname"
            type="text"
            placeholder="Họ và tên"
            className={cn(
              "rounded-lg border !border-[#e5e7eb] !py-[22px] focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0",
            )}
            autoComplete="off"
          />
        </FormControl>
      </FormItem>
      <FormItem className="col-span-2 mb-5 md:col-span-1">
        <FormControl>
          <Input
            name="company"
            type="text"
            placeholder="Công ty"
            className={cn(
              "rounded-lg border !border-[#e5e7eb] !py-[22px] focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0",
            )}
            autoComplete="off"
          />
        </FormControl>
      </FormItem>
      <FormItem className="col-span-2 mb-5">
        <FormControl>
          <Input
            name="address"
            type="text"
            placeholder="Địa chỉ"
            className={cn(
              "rounded-lg border !border-[#e5e7eb] !py-[22px] focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0",
            )}
            autoComplete="off"
          />
        </FormControl>
      </FormItem>
      <FormItem className="col-span-2 mb-5 md:col-span-1 md:mr-4">
        <FormControl>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            className={cn(
              "rounded-lg border !border-[#e5e7eb] !py-[22px] focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0",
            )}
            autoComplete="off"
          />
        </FormControl>
      </FormItem>
      <FormItem className="col-span-2 mb-5 md:col-span-1">
        <FormControl>
          <Input
            name="phoneNumber"
            type="text"
            placeholder="Số điện thoại"
            className={cn(
              "rounded-lg border !border-[#e5e7eb] !py-[22px] focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0",
            )}
            autoComplete="off"
          />
        </FormControl>
      </FormItem>
      <FormItem className="col-span-2 mb-5">
        <FormControl>
          <Textarea
            name="comment"
            placeholder="Ghi chú..."
            className="rounded-lg border !border-[#e5e7eb] !py-[22px] focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0"
            maxLength={500}
          />
        </FormControl>
      </FormItem>
    </div>
  );
};

export default ContactFormItem;
