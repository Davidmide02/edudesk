import React, { ReactNode } from "react";

type MyComponent = {
  children: ReactNode;
};

const Wrapper: React.FC<MyComponent> = ({ children }) => {
  return <section className="section mt-4 pt-20">{children}</section>;
};

export default Wrapper;
