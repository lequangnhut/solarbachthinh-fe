import { MOBILE_NAV_MENU } from '@/constants/menu';
import MenuHeaderItem from '../MenuHeaderItem';

const MobileNotLoginDrawerMenuList = () => {
  return (
    <div className="mb-24">
      {MOBILE_NAV_MENU.map((item) => {
        return <MenuHeaderItem key={item.title} item={item} />;
      })}
    </div>
  );
};

export default MobileNotLoginDrawerMenuList;
