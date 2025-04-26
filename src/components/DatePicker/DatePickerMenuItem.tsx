import styled from '@emotion/styled';

import { designTokens } from '@/styles/design-tokens';

export const DatePickerMenuItem = styled.div<{
  selected?: boolean;
  current?: boolean;
}>`
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: ${designTokens.borderRadius}px;
  font-size: 14px;
  cursor: pointer;

  color: ${({ selected }) =>
    selected
      ? designTokens.DatePicker.colorTextLightSolid
      : designTokens.DatePicker.colorText};
  background-color: ${({ selected }) =>
    selected ? designTokens.DatePicker.colorPrimary : 'transparent'};
  border: ${({ current }) =>
    current
      ? `1px solid ${designTokens.DatePicker.colorPrimary}`
      : '1px solid transparent'};

  &:hover {
    border-color: ${designTokens.DatePicker.colorPrimary};
  }
`;
