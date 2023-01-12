import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Breadcrumb } from "react-bootstrap";

const Breadcrumbs = () => {
  const router = useRouter();
  const routes = router.route.split("/").filter((item) => item);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  return (
    <Breadcrumb>
        {routes.map((route, index) => (
            <Breadcrumb.Item key={index} active className="text-capitalize" href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            <Link href={`/${route}`} className="link-light fw-light">
              {route}
            </Link>
          </Breadcrumb.Item>
        ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
