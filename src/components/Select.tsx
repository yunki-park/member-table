import React from 'react';
import { Select as AntdSelect, theme } from 'antd';
import styled from '@emotion/styled';

import type { Field } from '@/models/field';

export interface SelectProps {
  item: Field;
  value?: string;
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

export const Select: React.FC<SelectProps> = ({ item, value, onChange }) => {
  const { token } = theme.useToken();

  const StyledSelect = styled(AntdSelect<string>)`
    min-width: 100px;

    &&:hover:not(.ant-select-focused):not(.ant-select-open)
      .ant-select-selector {
      border-color: ${token.colorPrimary};
    }

    &&:hover:not(.ant-select-focused):not(.ant-select-open)
      .ant-select-selection-item {
      color: ${token.colorPrimary};
    }

    &&:hover:not(.ant-select-focused):not(.ant-select-open) .ant-select-arrow {
      color: ${token.colorPrimary};
    }

    &&.ant-select-focused .ant-select-selector,
    &&.ant-select-open .ant-select-selector {
      border-color: ${token.colorBorder} !important;
    }

    &&.ant-select-focused .ant-select-selection-item,
    &&.ant-select-open .ant-select-selection-item {
      color: ${token.colorIcon};
    }

    &&.ant-select-focused .ant-select-arrow,
    &&.ant-select-open .ant-select-arrow {
      color: ${token.colorIcon};
    }
  `;

  return (
    <StyledSelect
      value={value}
      onChange={onChange}
      placeholder={item.label}
      options={item.options}
    />
  );
};
