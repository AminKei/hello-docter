import React from "react";
import { Form, Input, Button, message } from "antd";
import { MailOutlined } from "@ant-design/icons";

const NewsletterForm = () => {
  const handleNewsletterSubmit = () => {
    message.success("شما با موفقیت در خبرنامه عضو شدید!");
  };

  return (
    <Form
      onFinish={handleNewsletterSubmit}
      style={{ display: "flex", gap: "5px" }}
    >
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "لطفا ایمیل خود را وارد کنید" },
          { type: "email", message: "ایمیل نامعتبر است" },
        ]}
      >
        <Input
          placeholder="ایمیل خود را وارد کنید"
          suffix={<MailOutlined className="text-gray-400" />}
          className="rounded-lg"
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        عضویت
      </Button>
    </Form>
  );
};

export default NewsletterForm;
