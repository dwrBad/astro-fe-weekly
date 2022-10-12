import React, {PropsWithChildren} from 'react';

const Button: React.FC<PropsWithChildren< React.ComponentPropsWithoutRef<"button">>> = (props) => {
  const { children, ...rest } = props;

  return (
    <button className="border p-2" {...props}>{ children }</button>
  )
}

export default Button;