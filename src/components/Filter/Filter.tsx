import React from 'react';
import styled from '@emotion/styled';

import { designTokens } from '@/styles/design-tokens';
import { FilterMenuItem } from '@/components/Filter/FilterMenuItem';

export interface FilterProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

const FilterWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${designTokens.colorBgContainer};
  border-radius: ${designTokens.Dropdown.borderRadiusSM}px;
  padding: ${designTokens.Table.paddingXS}px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const Filter: React.FC<FilterProps> = ({
  options,
  selected,
  onChange,
}) => {
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
