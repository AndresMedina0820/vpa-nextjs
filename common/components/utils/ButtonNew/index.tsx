import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const ButtonNew = ({ label = '', redirect = "/", aling = 'ms' }) => {
  const router = useRouter();
  const onRedirect = () => {
    router.push(redirect);
  };
  return (
    <button className={`btn btn-primary mb-4 d-flex align-items-center ${aling}-auto`} onClick={onRedirect}>
      <FontAwesomeIcon icon={faPlus} className="me-1 w-16-px" />
      Nuevo { label }
    </button>
  );
};

export default ButtonNew;
