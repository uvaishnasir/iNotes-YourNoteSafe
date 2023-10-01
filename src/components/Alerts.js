import React from "react";

const Alerts = (props) => {
  return (
    <>
      <div className="alert alert-warning" role="alert">
        {props.message}
      </div>
    </>
  );
};

export default Alerts;
