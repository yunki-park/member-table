import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import type { DatePickerProps as AntdDatePickerProps } from 'antd';
import type { Dayjs } from 'dayjs';
import styled from '@emotion/styled';

import { designTokens } from '@/styles/design-tokens';

type DatePickerProps = AntdDatePickerProps<Dayjs>;

/**
 * <div class="ant-picker">
 *   <div class="ant-picker-input">
 *     <input />
 *     <span class="ant-picker-suffix">
 *       <CalendarIcon />
 *     </span>
 *     <span class="ant-picker-clear">
 *       <CloseCircleIcon />
 *     </span>
 *   </div>
 * </div>
 */

const DatePickerWrapper = styled.div<{ focused: boolean }>`
  width: 160px;
  height: ${designTokens.DatePicker.contorlHeight}px;
  display: flex;
  align-items: center;
  font-size: 14px;
  background-color: ${designTokens.DatePicker.colorBgContainer};
  border: 1px solid
    ${({ focused }) =>
      focused
        ? designTokens.DatePicker.colorPrimary
        : designTokens.DatePicker.colorBorder};
  border-radius: ${designTokens.borderRadius}px;
  position: relative;
  padding: 0;

  .ant-picker {
    flex: 1;
    background: transparent;
    border: none;
    box-shadow: none;
    padding: 0;

    .ant-picker-input {
      display: flex;
      align-items: center;

      input {
        padding: 0 ${designTokens.DatePicker.controlPaddingHorizontal}px;
        background: transparent;
        border: none;
        text-align: left;
      }
    }

    .ant-picker-clear,
    .ant-picker-suffix {
      position: absolute;
      right: 12px;
      color: ${designTokens.DatePicker.colorTextDisabled};
    }
  }

  &:hover {
    border-color: ${designTokens.DatePicker.colorPrimary};
  }
`;

export const DatePicker: React.FC<DatePickerProps> = (props) => {
  const [focused, setFocused] = React.useState(false);

  return (
    <DatePickerWrapper focused={focused}>
      <AntdDatePicker
        {...props}
        format="YYYY-MM-DD"
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e, {});
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e, {});
        }}
      />
    </DatePickerWrapper>
  );
};
