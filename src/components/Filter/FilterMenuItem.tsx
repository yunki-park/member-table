import React from 'react';
import styled from '@emotion/styled';
import { Checkbox } from 'antd';
import { designTokens } from '@/styles/design-tokens';

export interface FilterMenuItemProps {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

const StyledFilterMenuItem = styled.div`
  height: ${designTokens.Transfer.controlHeight}px
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: ${designTokens.Dropdown.borderRadiusSM}px;
  padding: 5px ${designTokens.Transfer.PaddingSM}px;

  &:hover {
    background-color: ${designTokens.Dropdown.controlItemBgHover};
  }

  &.selected {
    background-color: ${designTokens.Dropdown.controlItemBgActive};
  }

  .ant-checkbox-inner {
    border-radius: 6px;
  }
`;

export const FilterMenuItem: React.FC<FilterMenuItemProps> = ({
  label,
  checked,
  disabled,
  onChange,
}) => {
  return (
    <StyledFilterMenuItem className={checked ? 'selected' : ''}>
      <Checkbox
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      >
        {label}
      </Checkbox>
    </StyledFilterMenuItem>
  );
};
