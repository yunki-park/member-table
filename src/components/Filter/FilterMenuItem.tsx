import React from 'react';
import { Checkbox, theme } from 'antd';
import styled from '@emotion/styled';

export interface FilterMenuItemProps {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

export const FilterMenuItem: React.FC<FilterMenuItemProps> = ({
  label,
  checked,
  disabled,
  onChange,
}) => {
  const { token } = theme.useToken();

  const FilterMenuItemWrapper = styled.div<{ checked: boolean }>`
    display: flex;
    align-items: center;
    padding: 5px ${token.paddingSM}px;
    border-radius: ${token.borderRadiusSM}px;
    background-color: ${({ checked }) =>
      checked ? token.controlItemBgActive : 'transparent'};
    cursor: pointer;

    &:hover {
      background-color: ${({ checked }) =>
        checked ? token.controlItemBgActiveHover : token.controlItemBgHover};
    }
  `;

  const handleClick = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <FilterMenuItemWrapper checked={checked} onClick={handleClick}>
      <Checkbox checked={checked} disabled={disabled} onChange={() => {}}>
        {label}
      </Checkbox>
    </FilterMenuItemWrapper>
  );
};
