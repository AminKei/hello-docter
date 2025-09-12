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
  Row,
  Col,
  Checkbox,
  notification,
  Card,
  Space,
  Divider,
  Progress,
  Popover,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";

const { Title, Text } = Typography;

const RegisterPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      // ذخیره اطلاعات در localStorage
      const userData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        password: values.password,
      };
      localStorage.setItem("user", JSON.stringify(userData));

      notification.success({
        message: "ثبت نام موفق",
        description: "حساب کاربری شما با موفقیت ایجاد شد!",
        placement: "topRight",
      });
      setLoading(false);
      window.location.href = "/login";
    }, 1000);
  };

  const passwordRulesContent = (
    <div>
      <Text>رمز عبور باید:</Text>
      <ul>
        <li>حداقل 6 کاراکتر باشد</li>
        <li>شامل حروف بزرگ و کوچک باشد</li>
        <li>حداقل یک عدد داشته باشد</li>
      </ul>
    </div>
  );

  return (
    <Layout
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "none",
        direction: "rtl",
      }}
    >
      <Card style={{ width: "100%", maxWidth: "600px" }}>
        <div>
          <Breadcrumb style={{ marginBottom: "24px", textAlign: "right" }}>
            <Breadcrumb.Item>
              <Link to="/">خانه</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Text>ثبت نام</Text>
            </Breadcrumb.Item>
          </Breadcrumb>

          <Title level={2} style={{ textAlign: "center", marginBottom: "8px" }}>
            ثبت نام در سایت
          </Title>
          <Text
            style={{
              display: "block",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            برای دسترسی به خدمات پزشکی، حساب کاربری خود را ایجاد کنید
          </Text>

          <Spin spinning={loading} tip="در حال ثبت نام...">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              size="large"
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="نام"
                    name="firstName"
                    rules={[
                      { required: true, message: "لطفا نام خود را وارد کنید" },
                    ]}
                  >
                    <Input placeholder="نام" prefix={<UserOutlined />} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="نام خانوادگی"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "لطفا نام خانوادگی را وارد کنید",
                      },
                    ]}
                  >
                    <Input
                      placeholder="نام خانوادگی"
                      prefix={<UserOutlined />}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="ایمیل"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "لطفا ایمیل خود را وارد کنید",
                      },
                      { type: "email", message: "ایمیل نامعتبر است" },
                    ]}
                  >
                    <Input placeholder="ایمیل" prefix={<MailOutlined />} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="شماره موبایل"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "لطفا شماره موبایل را وارد کنید",
                      },
                    ]}
                  >
                    <Input
                      placeholder="09123456789"
                      prefix={<PhoneOutlined />}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label={
                      <span>
                        رمز عبور
                        <Popover
                          content={passwordRulesContent}
                          title="قوانین رمز عبور"
                        >
                          <InfoCircleOutlined style={{ marginLeft: 8 }} />
                        </Popover>
                      </span>
                    }
                    name="password"
                    rules={[
                      { required: true, message: "لطفا رمز عبور را وارد کنید" },
                      { min: 6, message: "رمز عبور باید حداقل 6 کاراکتر باشد" },
                    ]}
                  >
                    <Input.Password
                      placeholder="رمز عبور"
                      prefix={<LockOutlined />}
                    />
                  </Form.Item>
                  <Progress
                    style={{ direction: "ltr" }}
                    percent={
                      form.getFieldValue("password")?.length > 5 ? 100 : 50
                    }
                    status="active"
                    showInfo={false}
                    strokeColor={{ "0%": "#ff4d4f", "100%": "#52c41a" }}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="تکرار رمز عبور"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "لطفا رمز عبور را تکرار کنید",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error("رمز عبور مطابقت ندارد")
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      placeholder="تکرار رمز عبور"
                      prefix={<LockOutlined />}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      { required: true, message: "لطفا قوانین را بپذیرید" },
                    ]}
                  >
                    <Checkbox>
                      <span>
                        قوانین و شرایط را می‌پذیرم
                        <a href="#" style={{ marginLeft: 8 }}>
                          (مشاهده قوانین)
                        </a>
                      </span>
                    </Checkbox>
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Button type="primary" htmlType="submit" block size="large">
                    ثبت نام
                  </Button>
                </Col>
                <Col xs={24}>
                  <Divider>یا</Divider>
                  <Space style={{ width: "100%", justifyContent: "center" }}>
                    <Button
                      icon={<MailOutlined />}
                      onClick={() =>
                        notification.info({
                          message: "در حال توسعه",
                          description: "ورود با گوگل به زودی!",
                        })
                      }
                    >
                      گوگل
                    </Button>
                    <Button
                      icon={<PhoneOutlined />}
                      onClick={() =>
                        notification.info({
                          message: "در حال توسعه",
                          description: "ورود با موبایل به زودی!",
                        })
                      }
                    >
                      موبایل
                    </Button>
                  </Space>
                </Col>
                <Col xs={24} style={{ textAlign: "center", marginTop: 24 }}>
                  <Text>حساب کاربری دارید؟ </Text>
                  <Link to="/login">وارد شوید</Link>
                </Col>
              </Row>
            </Form>
          </Spin>
        </div>
      </Card>
    </Layout>
  );
};

export default RegisterPage;
