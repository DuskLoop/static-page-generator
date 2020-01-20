import React from 'react';

interface IProps {
  src: string;
  homeBtn?: boolean;
}

export const TopBar: React.FC<IProps> = props => {
  const img = (
    <img className="top-bar-logo" src={props.src} alt="Aveny logga" />
  );

  return (
    <div className="top-bar">
      {props.homeBtn && <a href="../">{img}</a>}
      {!props.homeBtn && img}
    </div>
  );
};
