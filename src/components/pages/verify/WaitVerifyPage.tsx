'use client';

import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { verifyEmail } from '@/apis/author.api';
import { useToast } from '@/components/ui/use-toast';

const WaitVerifyPage = () => {
  const { toast } = useToast();
  const isMounted = useRef(false);
  const router = useRouter();

  const handleVerifyEmail = async (token: string) => {
    const response = await verifyEmail({ token });
    if (response && response.success) {
      toast({
        description: 'Xác minh email thành công',
        status: 'success',
      });
      router.push('/login');
    } else {
      toast({
        description: 'Mã không hợp lệ hoặc đã hết hạn.',
        status: 'error',
      });
      router.push('/register');
    }
  };

  useEffect(() => {
    if (!isMounted.current) {
      const token = new URLSearchParams(window.location.search).get('token');
      if (token) {
        handleVerifyEmail(token);
      }
      isMounted.current = true;
    }
  }, []);

  return (
    <div className="flex h-screen w-screen justify-center bg-white py-20">
      <div className="container-xxl">
        <div className="flex flex-col gap-3 px-3 md:px-6 lg:px-20">
          <Image alt="logo-pet-rescue" width={60} height={60} src="/assets/icons/logo.png" />

          <h2 className="mb-3 text-sm text-gray-700 md:text-2xl">
            <span className="text-3xl font-semibold text-gray-700">solarbachthinh.com</span>
            <br />
            Đang xác minh bạn là người. Quá trình này có thể mất vài giây.
          </h2>
          <div className="text-gray-700">
            <div className="flex items-center bg-white">
              <div className="flex items-center rounded-sm border bg-primary-foreground shadow-lg">
                <div className="ml-2 flex items-center">
                  <Loader2 className="h-10 w-10 animate-spin text-green-600" />
                  <span className="ml-4 mr-4 text-gray-700">Đang xác minh...</span>
                </div>
                <div className="ml-6 mr-2 flex flex-col py-3">
                  <Image
                    src="/assets/icons/logo.png"
                    alt="pet-rescue-logo"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
          <h2 className="mt-6 text-sm text-gray-700 md:text-2xl">
            solarbachthinh.com cần đánh giá tính bảo mật của kết nối của bạn trước khi tiếp tục.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WaitVerifyPage;
