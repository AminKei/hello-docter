import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Button } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { FormInstance } from "antd/es/form"; // برای تایپ فرم

// تعریف رابط برای پراپ‌ها
interface EditModalProps {
  visible: boolean;
  onCancel: () => void;
  onFinish: (values: any) => void;
  form: FormInstance;
  initialValues: { name: string; email: string };
}

const EditModal: React.FC<EditModalProps> = ({
  visible,
  onCancel,
  onFinish,
  form,
  initialValues,
}) => {
  return (
    <Modal
      title="ویرایش پروفایل"
      open={visible}
      onCancel={onCancel}
      footer={null}
      style={{ direction: "rtl" }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={initialValues}
      >
        <Form.Item
          label="نام"
          name="name"
          rules={[{ required: true, message: "لطفا نام را وارد کنید" }]}
        >
          <Input prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item
          label="ایمیل"
          name="email"
          rules={[
            { required: true, message: "لطفا ایمیل را وارد کنید" },
            { type: "email", message: "ایمیل نامعتبر است" },
          ]}
        >
          <Input prefix={<MailOutlined />} />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          ذخیره
        </Button>
      </Form>
    </Modal>
  );
};

export default EditModal;
