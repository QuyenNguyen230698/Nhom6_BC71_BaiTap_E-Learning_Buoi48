import React from "react";
import Error from "../components/ErrorPage/Error";

const ServerError = () => {
  return <Error code="500" message="Internal Server Error" />;
};

export default ServerError;
