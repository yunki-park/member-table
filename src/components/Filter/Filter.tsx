import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'antd';

import { FilterMenuItem } from './FilterMenuItem';

export interface FilterProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export const Filter: React.FC<FilterProps> = ({
  options,
  selected,
  onChange,
}) => {
  const { token } = theme.useToken();

  const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    gap: ${token.marginXS}px;
    padding: ${token.paddingXS}px;
    border-radius: ${token.borderRadiusLG}px;
    box-shadow: ${token.boxShadow};
  `;

  const handleToggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <FilterWrapper>
      {options.map((option) => (
        <FilterMenuItem
          key={option}
          label={option}
          checked={selected.includes(option)}
          onChange={() => handleToggle(option)}
        />
      ))}
    </FilterWrapper>
  );
};
