import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Breadcrumbs = () => {
  const router = useRouter();
  const routes = router.route.split("/").filter((item) => item);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
      {
        routes.map((route, index) => (
          <li key={index} className="breadcrumb-item active text-capitalize" aria-current="page">
            <Link href={`/${route}`} className="link-light fw-light">{route}</Link>
          </li>
        ))
      }
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
