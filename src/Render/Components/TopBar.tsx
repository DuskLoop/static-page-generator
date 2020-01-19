import React from 'react';

interface IProps {}

export const TopBar: React.FC<IProps> = props => {
  return (
    <div className="top-bar">
      <img
        className="top-bar-logo"
        src="assets/AvenyLogo.svg"
        alt="Aveny logga"
      />
    </div>
  );
};
