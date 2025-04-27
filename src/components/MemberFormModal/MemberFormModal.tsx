import React from 'react';
import { Modal, Form, Input, DatePicker, Checkbox, Button, theme } from 'antd';
import styled from '@emotion/styled';

import { Label } from '@/components/Label';
import { Select } from '@/components/Select';
import { fieldItems } from '@/models/field';
import { MemberWithoutKey } from '@/models/member';

interface MemberFormModalProps {
  open: boolean;
  onCancel: () => void;
  onSubmit: (values: MemberWithoutKey) => void;
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
}) => {
  const [form] = Form.useForm<MemberWithoutKey>();
  const { token } = theme.useToken();

  const handleFinish = (values: MemberWithoutKey) => {
    onSubmit(values);
    form.resetFields();
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
          <Button onClick={onCancel}>취소</Button>
          <Button type="primary" onClick={() => form.submit()}>
            추가
          </Button>
        </Footer>
      }
      onCancel={onCancel}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        autoComplete="off"
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
            ]}
            valuePropName={field.type === 'checkbox' ? 'checked' : 'value'}
          >
            {field.type === 'text' && <Input placeholder="Input" />}
            {field.type === 'textarea' && (
              <Input.TextArea placeholder="TextArea" />
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
                current=""
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
