import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const ProjectInput = () => {
  return (
    <div className="my-8">
      <div className="flex justify-center gap-2 md:gap-5">
        <Input
          type="text"
          placeholder="Nội dung cần tìm"
          className="h-5 rounded-[99px] border !border-gray-400 !py-[22px] focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0 md:w-72"
        />

        <Button className="h-[46px] w-32 rounded-[99px] bg-primary uppercase hover:bg-primary-bold">
          Tìm kiếm
        </Button>
      </div>
    </div>
  );
};

export default ProjectInput;
