import React from "react";

export default function alert(props) {
  return (
    <div style={{ height: "100px" }}>
      {props.alert && <div className="alert alert-primary" role="alert">
        <strong> {props.alert.type}</strong> : {props.alert.msg}
      </div>}
    </div>
  )
}