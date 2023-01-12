import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { Button } from 'react-bootstrap';

const ButtonNew = ({ label = '', redirect = "/", aling = 'ms' }) => {
  const router = useRouter();
  const onRedirect = () => {
    router.push(redirect);
  };
  return (
    <Button variant="primary" className={`mb-4 d-flex align-items-center ${aling}-auto`} onClick={onRedirect}>
      <FontAwesomeIcon icon={faPlus} className="me-1 w-16-px" />
      Nuevo { label }
    </Button>
  );
};

export default ButtonNew;
