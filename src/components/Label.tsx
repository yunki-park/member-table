import React from 'react';
import styled from '@emotion/styled';

import { designTokens } from '@/styles/design-tokens';

interface LabelProps {
  label: string;
  required?: boolean;
}

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  color: ${designTokens.colorTextSecondary};
`;

const RequiredMark = styled.span`
  color: ${designTokens.Input.colorError};
  margin-left: 4px;
`;

export const Label: React.FC<LabelProps> = ({ label, required }) => {
  return (
    <StyledLabel>
      {label}
      {required && <RequiredMark>*</RequiredMark>}
    </StyledLabel>
  );
};
