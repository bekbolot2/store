import classNames from 'classnames';
import React, { Children } from 'react'

const Button = ({ onClick, type, Children, size = 's'}) => {

const btnClass = classNames({
        btn: true,
        "btn--secondary": type === "secondary",
        "btn--primary": type === "primary",
        "btn--small": size === "s",
        "btn--medium": size === "m",
      });


  return (
    <div className='btnClass' onClick={onClick}>
        {Children}
    </div>
  );
};

export default Button;