import Link from 'next/link';
import { Clock, Facebook, Instagram, MapPinIcon, Phone, Twitch, Youtube } from 'lucide-react';

const TopBarHeader = () => {
  return (
    <div className="bg-[#1A2A36] p-1">
      <div className="hidden lg:flex">
        <div className="px-5 text-start lg:w-7/12">
          <div className="me-4 inline-flex h-full items-center">
            <MapPinIcon className="me-2 w-4 text-primary" />
            <small className="text-sm text-gray-400">Núi Sập, Thoại Sơn, An Giang</small>
          </div>
          <div className="inline-flex h-full items-center">
            <Clock className="me-2 w-4 text-primary" />
            <small className="text-sm text-gray-400">Mon - Fri : 09.00 AM - 09.00 PM</small>
          </div>
        </div>
        <div className="px-5 text-end lg:w-5/12">
          <div className="me-4 inline-flex h-full items-center">
            <Phone className="me-2 w-4 text-primary" />
            <small className="text-sm text-gray-400">+84 918.619.651</small>
          </div>

          <div className="mx-n2 inline-flex h-full items-center gap-4">
            <Link className="rounded-none" href="">
              <Facebook className="w-4 text-primary" />
            </Link>
            <Link className="rounded-none" href="">
              <Youtube className="w-4 text-primary" />
            </Link>
            <Link className="rounded-none" href="">
              <Instagram className="w-4 text-primary" />
            </Link>
            <Link className="rounded-none" href="">
              <Twitch className="w-4 text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarHeader;
