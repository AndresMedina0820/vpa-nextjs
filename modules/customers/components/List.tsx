import { CustomerResponse } from "@modules/customers/interfaces/CustomersResponse.interfaces";
import style from "@styles/modules/ListComponent.module.css";
import Error from "next/error";
import { Fragment, useEffect, useState } from "react";

const ListCustomer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3004/api/v1/customers")
        .then((resp) => resp.json())
        .then((response) => {
          setCustomers(response);
        })
        .catch((e) => {
          console.log(e)
          return <Error statusCode={e} />
        });
    } catch (error) {
      throw console.log(error);
    }
  }, []);

  return (
    <Fragment>
      <div className="row fw-bold">
        <div className="p-2 col-1">ID</div>
        <div className="p-2 col-2">Tipo de ID</div>
        <div className="p-2 col-2">Nombre</div>
        <div className="p-2 col-3">Email</div>
        <div className="p-2 col-2">Telefono</div>
        <div className="p-2 col-2">Ciudad</div>
      </div>
      {customers.map((customer: CustomerResponse) => (
        <div
          className={`${style.list} row bg-light border rounded shadow-sm mb-1 py-2`}
          key={customer.id}
        >
          <div className="p-2 col-1 text-truncate">{customer.customerId}</div>
          <div className="p-2 col-2 text-truncate">{customer.type_id.name}</div>
          <div className="p-2 col-2 text-truncate">
            {customer.name} {customer.lastName}
          </div>
          <div className="p-2 col-3 text-truncate">{customer.email}</div>
          <div className="p-2 col-2 text-truncate">{customer.phone}</div>
          <div className="p-2 col-2 text-truncate">{customer.city}</div>
        </div>
      ))}
    </Fragment>
  );
};

export default ListCustomer;
