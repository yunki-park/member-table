import React from 'react';
import { Input as AntdInput } from 'antd';
import type { TextAreaProps as AntdTextAreaProps } from 'antd/es/input';
import styled from '@emotion/styled';

import { designTokens } from '@/styles/design-tokens';

interface TextAreaProps extends Omit<AntdTextAreaProps, 'maxLength'> {
  maxLength?: number;
}

const StyledTextArea = styled(AntdInput.TextArea)`
  padding: 8px ${designTokens.Input.controlPaddingHorizontal}px;
  font-size: 16px;
  resize: vertical;
  height: 64px;

  background-color: ${designTokens.Input.colorBgContainer};
  border: 1px solid ${designTokens.Input.colorBorder};
  border-radius: ${designTokens.borderRadiusLG}px;

  &::placeholder {
    color: ${designTokens.Input.colorTextPlaceholder};
  }

  &:hover {
    border-color: ${designTokens.Input.colorPrimary};
  }

  &:focus {
    border-color: ${designTokens.Input.colorPrimary};
    outline: none;
  }

  &:disabled {
    color: ${designTokens.Input.colorTextPlaceholder};
    background-color: ${designTokens.Input.colorBgContainer};
    cursor: not-allowed;
  }
`;

export const TextArea: React.FC<TextAreaProps> = ({
  maxLength = 50,
  ...props
}) => {
  return <StyledTextArea maxLength={maxLength} {...props} />;
};
