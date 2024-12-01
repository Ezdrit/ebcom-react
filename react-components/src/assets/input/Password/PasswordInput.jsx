import React from "react";

const Password = (props) => {


  return (
    <div className={props.classContainer}>
      <input
        className={props.classPassword}
        type={props.typePassword}
        placeholder={props.placeholderPassword}
        id={props.idPassword}
        value={props.valuePassword}
        onChange={props.onChangePassword}
        
      />
      {props.childrenPassword}
    </div>
  );
};

export default Password;

