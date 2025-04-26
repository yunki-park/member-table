import React from 'react';
import { Select as AntdSelect } from 'antd';
import styled from '@emotion/styled';
import type { BaseSelectRef } from 'antd/es/select';

import { designTokens } from '@/styles/design-tokens';
import type { Field } from '@/models/field';

export interface SelectProps {
  item: Field;
  current: string;
  onChange: (value: string) => void;
}

/**
 * <div class="ant-select">
 *   <div class="ant-select-selector">
 *     <span class="ant-select-selection-item" />
 *   </div>
 *   <span class="ant-select-arrow" />
 * </div>
 */

const StyledSelect = styled(AntdSelect<string>)`
  width: 160px;
  height: ${designTokens.Dropdown.controlHeight}px;
  display: flex;
  font-size: 14px;
  background-color: ${designTokens.colorBgContainer};
  border: 1px solid ${designTokens.Button.colorBorder};
  border-radius: ${designTokens.borderRadius}px;
  transition: border-color 0.2s ease, color 0.2s ease;

  && .ant-select-selector {
    height: ${designTokens.Dropdown.controlHeight}px;
    display: flex;
    align-items: center;
    padding: 0 ${designTokens.Dropdown.controlPaddingHorizontal}px;
  }

  .ant-select-selection-item {
    line-height: ${designTokens.Dropdown.controlHeight - 2}px;
  }

  .ant-select-arrow {
    color: ${designTokens.Input.colorText};
  }

  .ant-select-dropdown {
    padding: 0;
  }

  .ant-select-item-option {
    padding: 8px 12px;
    font-size: 14px;
  }

  .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
    background-color: ${designTokens.Dropdown.controlItemBgHover};
  }

  .ant-select-item-option-selected {
    background-color: ${designTokens.Dropdown.controlItemBgActive};
  }

  &&:hover:not(.ant-select-focused):not(.ant-select-open) .ant-select-selector {
    border-color: ${designTokens.Dropdown.colorPrimary};
  }

  &&:hover:not(.ant-select-focused):not(.ant-select-open)
    .ant-select-selection-item {
    color: ${designTokens.Dropdown.colorPrimary};
  }

  &&:hover:not(.ant-select-focused):not(.ant-select-open) .ant-select-arrow {
    color: ${designTokens.Dropdown.colorPrimary};
  }

  &&.ant-select-focused .ant-select-selector,
  &&.ant-select-open .ant-select-selector {
    border-color: ${designTokens.Button.colorBorder} !important;
  }

  &&.ant-select-focused .ant-select-selection-item,
  &&.ant-select-open .ant-select-selection-item {
    color: ${designTokens.colorIcon} !important;
  }

  &&.ant-select-focused .ant-select-arrow,
  &&.ant-select-open .ant-select-arrow {
    color: ${designTokens.colorIcon} !important;
  }
`;

export const Select: React.FC<SelectProps> = ({ item, current, onChange }) => {
  const selectRef = React.useRef<BaseSelectRef>(null);

  return (
    <StyledSelect
      ref={selectRef}
      value={current}
      onChange={(value) => {
        onChange(value);
        selectRef.current?.blur();
      }}
      placeholder={item.label}
      options={item.options?.map((option) => ({
        label: option,
        value: option,
      }))}
    />
  );
};
