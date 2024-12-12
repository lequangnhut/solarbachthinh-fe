import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface IProps {
  image: string;
  content: string;
}

const ProjectItem = ({ image, content }: IProps) => {
  return (
    <div className="col-span-1 rounded-sm bg-gray-200 shadow-md">
      <div>
        <Image
          src={image}
          alt="project-image"
          className="h-full w-full object-cover"
          width={100}
          height={100}
        />
      </div>
      <div className="p-6">
        <Link href="">
          <h3 className="text-sm font-semibold text-black md:text-base">
            {content}
          </h3>
        </Link>

        <div className="mt-3 text-sm md:text-base">
          <Link href="" className="flex items-center font-semibold">
            Xem thêm
            <span className="ml-auto flex items-center">
              <ArrowRight width={18} height={18} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
