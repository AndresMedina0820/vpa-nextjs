import { Fragment } from "react";
import { Card } from "react-bootstrap";
import { FloatingLabel, Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { useFormatterDates } from "@common/hooks/useFormatterDates";
import { useRouter } from "next/router";

const NewCustomer = () => {
  const types_id: any[] = [];
  const type_customers: any[] = [];
  const router = useRouter();

  // Initial Reactive Forms
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      customerDetails: {
        customerId: "",
        typeId: "1",
        name: "",
        lastName: "",
        dateBirth: "",
        isChild: false,
        email: "",
        phone: "",
        city: "",
        customerType: "0",
        address: "",
      },
    },
  });

	const onSubmit = (data: object) => {
    console.log(data);
		// if (paramsId) {
		// 	updateCustomer(paramsId, data.customerDetails);
		// } else {
		// 	createCustomer(data.customerDetails);
		// }
	}

  return (
    <Card body className="p-3 shadow-sm">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12} md={6}>
            <FloatingLabel
              controlId="Identification"
              label="Número de identificación"
              className="mb-3"
            >
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="Número de identificación"
                className={`form-control ${
                  errors.customerDetails?.customerId && "is-invalid"
                }`}
                {...register("customerDetails.customerId", {
                  required: true,
                  pattern: /^[0-9]*(\.(?=[0-9]+))*[0-9]+$/,
                })}
              />
              {errors.customerDetails?.customerId?.type === "required" && (
                <small className="text-danger d-block mb-2">
                  ¡Campo Obligatorio!
                </small>
              )}
              {errors.customerDetails?.customerId?.type === "pattern" && (
                <small className="text-danger d-block mb-2">
                  ¡Solo se permiten números!
                </small>
              )}
            </FloatingLabel>
          </Col>
          <Col xs={12} md={6}>
            <Form.Select
              size="lg"
              aria-label="Type Customer"
              placeholder="Tipo de identificación"
              className={`form-select ${
                errors.customerDetails?.typeId && "is-invalid"
              }`}
              {...register("customerDetails.customerType", { required: true })}
            >
              {types_id.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={12} md={6}>
            <FloatingLabel controlId="name" label="Nombres" className="mb-3">
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="Nombres"
                className={`form-control ${
                  errors.customerDetails?.name && "is-invalid"
                }`}
                {...register("customerDetails.name", {
                  required: true,
                  pattern: /^[0-9]*(\.(?=[0-9]+))*[0-9]+$/,
                })}
              />
              {errors.customerDetails?.name?.type === "required" && (
                <small className="text-danger d-block mb-2">
                  ¡Campo Obligatorio!
                </small>
              )}
            </FloatingLabel>
          </Col>
          <Col xs={12} md={6}>
            <FloatingLabel
              controlId="lastName"
              label="Apellidos"
              className="mb-3"
            >
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="Apellidos"
                className={`form-control ${
                  errors.customerDetails?.lastName && "is-invalid"
                }`}
                {...register("customerDetails.lastName", {
                  required: true,
                  pattern: /^[0-9]*(\.(?=[0-9]+))*[0-9]+$/,
                })}
              />
              {errors.customerDetails?.lastName?.type === "required" && (
                <small className="text-danger d-block mb-2">
                  ¡Campo Obligatorio!
                </small>
              )}
            </FloatingLabel>
          </Col>
          <Col xs={12} md={6}>
            <FloatingLabel
              controlId="date"
              label="Fecha de Nacimiento"
              className="mb-3"
            >
              <Form.Control
                type="date"
                autoComplete="off"
                placeholder="Fecha de Nacimiento"
                className={`form-control ${
                  errors.customerDetails?.dateBirth && "is-invalid"
                }`}
                {...register("customerDetails.dateBirth", {
                  required: true,
                  pattern: /^[0-9]*(\.(?=[0-9]+))*[0-9]+$/,
                })}
              />
              {errors.customerDetails?.dateBirth?.type === "required" && (
                <small className="text-danger d-block mb-2">
                  ¡Campo Obligatorio!
                </small>
              )}
            </FloatingLabel>
          </Col>
          <Col xs={12} md={6}>
            <FloatingLabel
              controlId="email"
              label="Correo Electrónico"
              className="mb-3"
            >
              <Form.Control
                type="email"
                autoComplete="off"
                placeholder="Correo Electrónico"
                className={`form-control ${
                  errors.customerDetails?.email?.type && "is-invalid"
                }`}
                {...register("customerDetails.email", {
                  required: true,
                  pattern: /^[0-9]*(\.(?=[0-9]+))*[0-9]+$/,
                })}
              />
              {errors.customerDetails?.email?.type === "required" && (
                <small className="text-danger d-block mb-2">
                  ¡Campo Obligatorio!
                </small>
              )}
              {errors.customerDetails?.email?.type === "pattern" && (
                <small className="text-danger d-block mb-2">
                  ¡Por favor ingresa un email!
                </small>
              )}
            </FloatingLabel>
          </Col>
          <Col xs={12} md={6}>
            <FloatingLabel
              controlId="phone"
              label="Teléfono/Celular"
              className="mb-3"
            >
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="Teléfono/Celular"
                className={`form-control ${
                  errors.customerDetails?.phone?.type && "is-invalid"
                }`}
                {...register("customerDetails.phone", {
                  required: true,
                  maxLength: 15,
                  pattern: /^[0-9]*(\.(?=[0-9]+))*[0-9]+$/,
                })}
              />
              {errors.customerDetails?.phone?.type === "required" && (
                <small className="text-danger d-block mb-2">
                  ¡Campo Obligatorio!
                </small>
              )}
              {errors.customerDetails?.phone?.type === "maxLength" && (
                <small className="text-danger d-block mb-2">
                  ¡Máximo 15 caracteres!
                </small>
              )}
              {errors.customerDetails?.phone?.type === "pattern" && (
                <small className="text-danger d-block mb-2">
                  ¡Solo se permiten números!
                </small>
              )}
            </FloatingLabel>
          </Col>
          <Col xs={12} md={6}>
            <FloatingLabel controlId="city" label="Ciudad" className="mb-3">
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="Ciudad"
                className={`form-control ${
                  errors.customerDetails?.city && "is-invalid"
                }`}
                {...register("customerDetails.city", { required: true })}
              />
              {errors.customerDetails?.city && (
                <small className="text-danger d-block mb-2">
                  ¡Campo Obligatorio!
                </small>
              )}
            </FloatingLabel>
          </Col>
          <Col xs={12} md={6}>
            <Form.Select
              size="lg"
              aria-label="Customer Type"
              placeholder="Tipo de Cliente"
              className={`form-select ${
                errors.customerDetails?.customerType && "is-invalid"
              }`}
              {...register("customerDetails.customerType", { required: true })}
            >
              {type_customers.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={12} md={6}>
            <FloatingLabel controlId="city" label="Ciudad" className="mb-3">
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="Ciudad"
                className={`form-control ${
                  errors.customerDetails?.address && "is-invalid"
                }`}
                {...register("customerDetails.address", { required: true })}
              />
              {errors.customerDetails?.address && (
                <small className="text-danger d-block mb-2">
                  ¡Campo Obligatorio!
                </small>
              )}
            </FloatingLabel>
          </Col>
        </Row>
        <div className="float-end mt-4">
          <Button variant="secondary" type="button" className="me-3" onClick={() => router.back()}>
            Cancelar
          </Button>
          <Button variant="success" type="submit">
            <FontAwesomeIcon icon={faFloppyDisk} className="me-2 w-16-px" />
            Guardar
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default NewCustomer;
