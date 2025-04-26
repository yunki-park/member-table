import React from 'react';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import styled from '@emotion/styled';
import { designTokens } from '@/styles/design-tokens';

const StyledButton = styled(AntdButton)`
  && {
    background-color: ${designTokens.Button.colorPrimary};
    color: ${designTokens.Button.colorTextLightSolid};
    border: 1px solid ${designTokens.Button.colorBorder};
    font-size: 14px;
    font-weight: 500;

    &:hover {
      background-color: ${designTokens.Button.colorPrimaryHover};
      border-color: ${designTokens.Button.colorPrimaryHover};
      color: ${designTokens.Button.colorTextLightSolid};
    }

    &:active {
      background-color: ${designTokens.Button.colorPrimaryActive};
      border-color: ${designTokens.Button.colorPrimaryActive};
      color: ${designTokens.Button.colorTextLightSolid};
    }

    &:disabled,
    &[disabled] {
      background-color: ${designTokens.Button.colorBgContainerDisabled};
      color: ${designTokens.Button.colorTextDisabled};
      border-color: ${designTokens.Button.colorBorder};
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

export const Button: React.FC<AntdButtonProps> = (props) => {
  return <StyledButton {...props} />;
};
