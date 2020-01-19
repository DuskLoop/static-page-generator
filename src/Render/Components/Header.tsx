import React from 'react';

interface IProps {
  version: string;
  releaseDate: string;
}

export const Header: React.FC<IProps> = props => {
  return (
    <div className="header">
      <h1 className="header-title">Nyheter och rättningar</h1>
      <h2 className="header-version">Aveny version {props.version}</h2>
      <h3 className="header-realease-date">{props.releaseDate}</h3>
    </div>
  );
};
