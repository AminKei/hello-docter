import React from "react";
import { Card, Form, Input, Button, Select, Rate } from "antd";
import { message } from "antd";

const { Option } = Select;

const RatingTab = () => {
  return (
    <Card title="امتیاز به پزشکان" bordered={false}>
      <Form layout="vertical">
        <Form.Item label="انتخاب پزشک">
          <Select placeholder="پزشک را انتخاب کنید">
            <Option value="دکتر احمدی">دکتر احمدی</Option>
            <Option value="دکتر رضایی">دکتر رضایی</Option>
            <Option value="دکتر کریمی">دکتر کریمی</Option>
          </Select>
        </Form.Item>
        <Form.Item label="امتیاز">
          <Rate allowHalf />
        </Form.Item>
        <Form.Item label="نظر شما">
          <Input.TextArea
            rows={3}
            placeholder="نظر خود را درباره تجربه ویزیت بنویسید"
          />
        </Form.Item>
        <Button
          type="primary"
          block
          onClick={() => message.success("امتیاز شما ثبت شد")}
        >
          ارسال امتیاز
        </Button>
      </Form>
    </Card>
  );
};

export default RatingTab;
