import Unauthorized from "./Unauthorized";
import NotFound from "./NotFound";
import InternalServer from "./InternalServer";

const index = (err) => {
  const errorMsg = err?.response?.data?.msg;
  if (err.response.status === 401) Unauthorized();
  else if (err.response.status === 404) NotFound(errorMsg);
  else if (err.response.status === 500) InternalServer();
  else alert(err.response.data.msg);
};

export default index;
