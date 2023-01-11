import style from "@styles/modules/WrapperHeader.module.css";
import { useRouter } from "next/router";
import Breadcrumbs from "../Breadcrumbs";

const WrapperHeader = () => {
  const router = useRouter();
  const title = router.route.split('/').find(item => !item ? item.replace("/", "") : item);

  return (
    <div className={style.wrapper}>
      <Breadcrumbs />
      <h2 className="text-white text-capitalize">{title}</h2>
    </div>
  );
};

export default WrapperHeader;
