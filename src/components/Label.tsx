import React from 'react';
import { theme } from 'antd';

interface LabelProps {
  text: string;
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({ text, required }) => {
  const { token } = theme.useToken();

  return (
    <label>
      {text}
      {required && (
        <span style={{ color: token.colorError, marginLeft: `4px` }}>*</span>
      )}
    </label>
  );
};
