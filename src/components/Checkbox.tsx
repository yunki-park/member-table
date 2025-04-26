import React from 'react';
import { Checkbox as AntdCheckbox } from 'antd';
import styled from '@emotion/styled';
import { designTokens } from '@/styles/design-tokens';

export interface CheckboxProps {
  status: 'active' | 'inactive' | 'indeterminate';
  label?: boolean;
  text?: string;
  onChange: (checked: boolean) => void;
}

const StyledCheckbox = styled(AntdCheckbox)`
  .ant-checkbox-inner {
    width: 16px;
    height: 16px;
    border-radius: 6px;
    border: 1px solid ${designTokens.Checkbox.colorBorder};
    background-color: ${designTokens.Checkbox.colorBgContainer};
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${designTokens.Checkbox.colorPrimary};
    border-color: ${designTokens.Checkbox.colorPrimary};
  }

  .ant-checkbox-inner::after {
    border-color: ${designTokens.Checkbox.colorWhite};
  }

  .ant-checkbox + span {
    font-size: 14px;
    color: ${designTokens.Checkbox.colorText};
  }
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  status,
  label = false,
  text = '',
  onChange,
}) => {
  const isChecked = status === 'active';
  const isIndeterminate = status === 'indeterminate';

  return (
    <StyledCheckbox
      checked={isChecked}
      indeterminate={isIndeterminate}
      onChange={(e) => onChange(e.target.checked)}
    >
      {label && text}
    </StyledCheckbox>
  );
};
