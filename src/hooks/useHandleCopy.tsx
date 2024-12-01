'use client';

import { useState } from 'react';
import { isProduction } from '@/utils';
import { toast } from '@/components/ui/use-toast';

export const useHandleCopy = (): [(text: string) => void, boolean] => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setIsCopied(true);
          toast({
            status: 'success',
            duration: 2000,
            description: 'Sao chép thành công',
          });
        })
        .catch((error) => {
          if (!isProduction) console.error('Lỗi khi sao chép vào clipboard:', error);
          toast({
            title: 'Lỗi',
            variant: 'destructive',
            duration: 2000,
            description: 'Sao chép thất bại',
          });
        })
        .finally(() => {
          setIsCopied(false);
        });
    } else {
      if (!isProduction) console.warn('Trình duyệt không hỗ trợ Clipboard API');
      toast({
        title: 'Cảnh báo',
        duration: 2000,
        description: 'Trình duyệt của bạn không hỗ trợ sao chép',
      });
    }
  };

  return [handleCopy, isCopied];
};
