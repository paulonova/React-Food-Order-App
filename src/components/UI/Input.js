import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.name}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;

/**
 *
 * <input {...props.input}/>
 * Get all properties from object input via props, ex: type='text', id='someId', etc..
 * Great to reusable inputs
 */
