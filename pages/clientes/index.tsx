import WrapperHeader from "@common/components/core/WrapperHeader";
import ButtonNew from "@common/components/utils/ButtonNew";
import ListCustomer from "@modules/customers/components/List";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const Customers = () => {
  const router = useRouter()
  const currentPage = router.route.replace('/','');
  return (
    <Fragment>
      <ButtonNew label={currentPage} redirect={`${router.route}/nuevo`} aling="ms" />
      <ListCustomer />
    </Fragment>
  );
};

export default Customers;
