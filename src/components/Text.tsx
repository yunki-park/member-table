import React from 'react';
import { Input as AntdInput } from 'antd';
import type { InputProps as AntdInputProps } from 'antd/es/input';
import styled from '@emotion/styled';

import { designTokens } from '@/styles/design-tokens';

interface TextProps extends Omit<AntdInputProps, 'maxLength'> {
  maxLength?: number;
}

const StyledInput = styled(AntdInput)`
  height: 32px;
  padding: 0 ${designTokens.Input.controlPaddingHorizontal}px;
  background-color: ${designTokens.Input.colorBgContainer};
  border: 1px solid ${designTokens.Input.colorBorder};
  border-radius: ${designTokens.borderRadius}px;

  &:hover {
    border-color: ${designTokens.Input.colorPrimary};
  }

  &:focus {
    border-color: ${designTokens.Input.colorPrimary};
  }

  &::placeholder {
    color: ${designTokens.Input.colorTextPlaceholder};
  }
`;

export const Text: React.FC<TextProps> = ({ maxLength = 20, ...props }) => {
  return <StyledInput maxLength={maxLength} {...props} />;
};
