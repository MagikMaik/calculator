import React from "react";
import './Stylesheets/Button.css';

export default function Button(props) {

  const isOperator = value => {
    return isNaN(value) && (value != '.') && (value != '=')
  }

  return (
    <div className={`button-container ${ isOperator(props.children) ? 'operator' : null }`}
        onClick={() => props.clickHandler(props.children)}>
      {props.children}
    </div>
  )
}
