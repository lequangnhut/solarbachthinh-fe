import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, FacebookIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import { NAV_FOOTER_ADDRESS, NAV_FOOTER_LINK, NAV_FOOTER_PROJECT } from '@/constants/footer';

const MainFooter = () => {
  return (
    <div className="mt-20 bg-[#1A2A36] pt-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h5 className="mb-4 text-xl font-bold text-white">Địa chỉ</h5>
            {NAV_FOOTER_ADDRESS.map((item, key) => (
              <p className="mb-2 flex text-gray-400" key={key}>
                {<item.icon className="mr-1 w-5" />}
                {item.name}
              </p>
            ))}

            <div className="flex space-x-2 pt-2">
              <Link className="text-white transition duration-300 hover:text-primary" href="">
                <TwitterIcon />
              </Link>
              <Link className="text-white transition duration-300 hover:text-primary" href="">
                <FacebookIcon />
              </Link>
              <Link className="text-white transition duration-300 hover:text-primary" href="">
                <YoutubeIcon />
              </Link>
              <Link className="text-white transition duration-300 hover:text-primary" href="">
                <LinkedinIcon />
              </Link>
            </div>
          </div>

          <div>
            <h5 className="mb-4 text-xl font-bold text-white">Liên kết</h5>
            {NAV_FOOTER_LINK.map((item, key) => (
              <Link
                key={key}
                className="mb-2 flex text-gray-400 transition duration-300 hover:text-primary"
                href={item.link}
              >
                <ChevronRight className="w-5" />
                {item.name}
              </Link>
            ))}
          </div>

          <div>
            <h5 className="mb-4 text-xl font-bold text-white">Hình ảnh dự án</h5>
            <div className="grid grid-cols-3 gap-2">
              {NAV_FOOTER_PROJECT.map((item, key) => (
                <div key={key}>
                  <Image
                    className="w-full rounded"
                    src={item.src}
                    alt={`Gallery_` + key}
                    width={300}
                    height={300}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="mb-4 text-xl font-bold text-white">Thương hiệu hợp tác</h5>
            <div className="grid grid-cols-3 gap-2">
              {NAV_FOOTER_PROJECT.map((item, key) => (
                <div key={key}>
                  <Image
                    className="w-full rounded"
                    src={item.src}
                    alt={`Gallery_` + key}
                    width={300}
                    height={300}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex items-center justify-between border-t border-gray-700 py-4">
          <div>
            <Link href="#" className="text-white">
              &copy; Your Site Name
            </Link>
            <span className="text-gray-400">, All Rights Reserved.</span>
          </div>
          <div className="text-right">
            <span className="text-gray-400">Designed By: </span>
            <a href="https://htmlcodex.com" className="text-white">
              Solar Bách Thịnh
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;