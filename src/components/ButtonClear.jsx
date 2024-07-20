import React from "react";
import './Stylesheets/ButtonClear.css'

export default function ButtonClear(props) {
  return (
    <div className="button-clear" onClick={props.clearHandler}>
      {props.children}
    </div>
  )

}
