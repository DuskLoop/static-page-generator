import React from 'react';
import AvenyIcons from './AvenyIcon';

interface IProps {
  src: string;
  homeBtn?: boolean;
}

export const TopBar: React.FC<IProps> = props => {
  return (
    <div className="top-bar">
      {props.homeBtn && (
        <a href="../index.html">
          <AvenyIcons />
        </a>
      )}
      {!props.homeBtn && <AvenyIcons />}
    </div>
  );
};
