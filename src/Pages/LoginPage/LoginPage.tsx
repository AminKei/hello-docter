import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Form,
  Input,
  Button,
  Breadcrumb,
  Typography,
  Spin,
  Space,
  Checkbox,
  message,
  Card,
  Divider,
  Popover,
  Alert,
} from "antd";
import {
  MailOutlined,
  LockOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";

const { Title, Text } = Typography;

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      message.success({
        content: "ورود با موفقیت انجام شد!",
        style: { marginTop: "20px" },
      });
      setLoading(false);
      window.location.href = "/profile";
    }, 1000);
  };

  const passwordHelpContent = (
    <div style={{ padding: "8px" }}>
      <Text style={{ display: "block", fontSize: "14px" }}>
        در صورت فراموشی:
      </Text>
      <ul
        style={{
          paddingLeft: "20px",
          fontSize: "14px",
          color: "rgba(0, 0, 0, 0.45)",
        }}
      >
        <li>با شماره 021-12345678 تماس بگیرید</li>
        <li>یا به ایمیل support@medicalapp.com پیام دهید</li>
      </ul>
    </div>
  );

  return (
    <Layout
      style={{
        direction:'rtl',
        minHeight: "90vh",
        background: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <div>
          <Breadcrumb style={{ marginBottom: "24px" }}>
            <Breadcrumb.Item>
              <Link to="/">خانه</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>ورود</Breadcrumb.Item>
          </Breadcrumb>

          <Title
            level={2}
            style={{
              textAlign: "center",
              marginBottom: "8px",
              color: "#1890ff",
            }}
          >
            ورود به سیستم
          </Title>
          <Text
            style={{
              display: "block",
              textAlign: "center",
              color: "rgba(0, 0, 0, 0.45)",
              marginBottom: "24px",
            }}
          >
            لطفا اطلاعات خود را برای ورود وارد کنید
          </Text>

          <Spin spinning={loading} tip="در حال ورود...">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              style={{ marginTop: "24px" }}
              size="large"
            >
              <Form.Item
                label="ایمیل"
                name="email"
                rules={[
                  { required: true, message: "لطفا ایمیل خود را وارد کنید" },
                  { type: "email", message: "ایمیل نامعتبر است" },
                ]}
              >
                <Input
                  placeholder="ایمیل"
                  prefix={<MailOutlined style={{ color: "#1890ff" }} />}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span style={{ display: "flex", alignItems: "center" }}>
                    رمز عبور
                    <Popover content={passwordHelpContent} title="کمک رمز عبور">
                      <InfoCircleOutlined
                        style={{
                          marginLeft: "8px",
                          color: "#1890ff",
                          cursor: "pointer",
                        }}
                      />
                    </Popover>
                  </span>
                }
                name="password"
                rules={[
                  { required: true, message: "لطفا رمز عبور را وارد کنید" },
                ]}
              >
                <Input.Password
                  placeholder="رمز عبور"
                  prefix={<LockOutlined style={{ color: "#1890ff" }} />}
                />
              </Form.Item>
              <Form.Item>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Checkbox>مرا به خاطر بسپار</Checkbox>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                    size="large"
                  >
                    ورود
                  </Button>
                  <Popover
                    content="برای بازیابی رمز عبور، با پشتیبانی تماس بگیرید یا ایمیل بزنید"
                    title="فراموشی رمز عبور"
                  >
                    <Button type="link" style={{ width: "100%" }}>
                      فراموشی رمز عبور؟
                    </Button>
                  </Popover>
                </Space>
              </Form.Item>
              <Divider style={{ margin: "24px 0" }}>یا</Divider>
              <Space style={{ width: "100%", justifyContent: "center" }}>
                <Button
                  icon={<MailOutlined />}
                  onClick={() =>
                    message.info("ورود با گوگل به زودی در دسترس خواهد بود!")
                  }
                >
                  گوگل
                </Button>
                <Button
                  icon={<LockOutlined />}
                  onClick={() =>
                    message.info("ورود با موبایل به زودی در دسترس خواهد بود!")
                  }
                >
                  موبایل
                </Button>
              </Space>
              <div style={{ textAlign: "center", marginTop: "24px" }}>
                <Text>حساب کاربری ندارید؟ </Text>
                <Link to="/register">ثبت نام کنید</Link>
              </div>
              <Alert
                message="امنیت حساب"
                description="لطفا از رمز عبور قوی استفاده کنید و اطلاعات خود را محرمانه نگه دارید."
                type="info"
                showIcon
                style={{ marginTop: "24px" }}
              />
            </Form>
          </Spin>
        </div>
      </Card>
    </Layout>
  );
};

export default LoginPage;
