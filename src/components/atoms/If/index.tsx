import React from 'react';

interface Props {
  condition: any;
  children: string | JSX.Element | JSX.Element[] | null | undefined;
}

const If: React.FC<Props> = ({ condition, children }) => {
  return condition && <>{children}</>;
};

export { If };
