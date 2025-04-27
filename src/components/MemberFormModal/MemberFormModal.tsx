import React, { useEffect } from 'react';
import { Modal, Form, Input, DatePicker, Checkbox, Button, theme } from 'antd';
import styled from '@emotion/styled';
import dayjs from 'dayjs';

import { Label } from '@/components/Label';
import { Select } from '@/components/Select';
import { fieldItems } from '@/models/field';
import { MemberFormValues, MemberWithoutKey } from '@/models/member';

interface MemberFormModalProps {
  open: boolean;
  onCancel: () => void;
  onSubmit: (values: MemberWithoutKey) => void;
  initialValues?: MemberFormValues;
}

/**
 * <div class="ant-modal">
 *   <div class="ant-modal-content">
 *     <div class="ant-modal-header">...</div>
 *     <div class="ant-modal-body">...</div>
 *     <div class="ant-modal-footer">...</div>
 *   </div>
 * </div>
 */

export const MemberFormModal: React.FC<MemberFormModalProps> = ({
  open,
  onCancel,
  onSubmit,
  initialValues,
}) => {
  const [form] = Form.useForm<MemberFormValues>();
  const { token } = theme.useToken();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  const handleFinish = (values: MemberFormValues) => {
    const formattedValues: MemberWithoutKey = {
      ...values,
      joinDate: dayjs.isDayjs(values.joinDate)
        ? values.joinDate.format('YYYY-MM-DD')
        : values.joinDate,
    };

    onSubmit(formattedValues);
    resetModal();
  };

  const resetModal = () => {
    form.resetFields();
    onCancel();
  };

  const CustomModal = styled(Modal)`
    .ant-modal-content {
      padding: 0;
    }
  `;

  const Header = styled.div`
    padding: ${token.paddingSM}px ${token.padding}px;
    border-bottom: 1px solid ${token.colorSplit};
  `;

  const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    padding: ${token.paddingSM}px ${token.padding}px;
    background-color: ${token.colorFillAlter};
    border-top: 1px solid ${token.colorSplit};
  `;

  return (
    <CustomModal
      open={open}
      title={<Header>회원 추가</Header>}
      footer={
        <Footer>
          <Button onClick={resetModal}>취소</Button>
          <Button type="primary" onClick={() => form.submit()}>
            추가
          </Button>
        </Footer>
      }
      onCancel={resetModal}
    >
      <Form
        form={form}
        initialValues={initialValues}
        layout="vertical"
        onFinish={handleFinish}
        autoComplete="off"
        requiredMark={false}
        style={{
          padding: `10px ${token.paddingContentHorizontalLG}px
                    20px ${token.paddingContentHorizontalLG}px`,
        }}
      >
        {fieldItems.map((field) => (
          <Form.Item
            key={field.key}
            name={field.key}
            label={<Label text={field.label} required={field.required} />}
            rules={[
              {
                required: field.required,
                message: `${field.label}을(를) 입력해 주세요.`,
              },
              ...(field.type === 'text'
                ? [
                    {
                      max: 20,
                      message: `${field.label}은(는) 최대 20자까지 입력할 수 있습니다.`,
                    },
                  ]
                : []),
              ...(field.type === 'textarea'
                ? [
                    {
                      max: 50,
                      message: `${field.label}은(는) 최대 50자까지 입력할 수 있습니다.`,
                    },
                  ]
                : []),
            ]}
            valuePropName={field.type === 'checkbox' ? 'checked' : 'value'}
          >
            {field.type === 'text' && (
              <Input placeholder="Input" maxLength={20} />
            )}
            {field.type === 'textarea' && (
              <Input.TextArea placeholder="TextArea" maxLength={50} />
            )}
            {field.type === 'date' && <DatePicker style={{ width: '150px' }} />}
            {field.type === 'select' && (
              <Select
                item={{
                  key: field.key,
                  label: field.label,
                  type: field.type,
                  required: field.required,
                  options: field.options || [],
                }}
                onChange={() => {}}
              />
            )}
            {field.type === 'checkbox' && <Checkbox />}
          </Form.Item>
        ))}
      </Form>
    </CustomModal>
  );
};
