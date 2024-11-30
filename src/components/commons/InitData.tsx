import { cookies } from 'next/headers';

import { isProduction } from '@/utils';
import { KEY_JWT } from '@/constants/common';
import { getCurrentUser } from '@/apis/author.api';
import SetDataToRedux from '@/components/commons/SetDataToRedux';

const getDataCurrentUser = async () => {
  try {
    const nextCookies = cookies();
    const token = nextCookies.get(KEY_JWT);
    const data = await getCurrentUser(token?.value);
    return data;
  } catch (error) {
    if (!isProduction) console.log('ERROR GET CURRENT USER', error);
  }
};

const InitData = async () => {
  const dataCurrentUser = await getDataCurrentUser();
  return <SetDataToRedux dataCurrentUser={dataCurrentUser} />;
};

export default InitData;
