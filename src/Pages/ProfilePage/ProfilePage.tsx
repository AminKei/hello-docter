import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Form,
  Input,
  Button,
  Breadcrumb,
  Typography,
  Row,
  Col,
  Avatar,
  Tabs,
  List,
  Space,
  Tag,
  message,
  Card,
  Dropdown,
  Upload,
  Modal,
  Rate,
  Select,
  Alert,
  Timeline,
  Divider,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  SettingOutlined,
  FileTextOutlined,
  NotificationOutlined,
  UploadOutlined,
  CalendarOutlined,
  StarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  InfoCircleOutlined,
  IdcardOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import "./ProfilePage.css"; // Import the CSS file

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

const sampleAppointments = [
  {
    id: 1,
    doctor: "دکتر احمدی",
    date: "1404/03/20",
    time: "10:00",
    status: "تایید شده",
    type: "حضوری",
    notes: "چکاپ قلب",
  },
  {
    id: 2,
    doctor: "دکتر رضایی",
    date: "1404/03/21",
    time: "14:30",
    status: "در انتظار",
    type: "آنلاین",
    notes: "مشاوره پوست",
  },
  {
    id: 3,
    doctor: "دکتر کریمی",
    date: "1404/03/22",
    time: "11:00",
    status: "لغو شده",
    type: "حضوری",
    notes: "معاینه عمومی",
  },
];

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState({
    name: "علی محمدی",
    email: "ali@example.com",
    phone: "09123456789",
    address: "تهران، خیابان اصلی",
    gender: "مرد",
    birthDate: "1365/05/10",
    bloodType: "O+",
    nationalId: "0123456789",
    emergencyContact: "09187654321",
    insurance: "تامین اجتماعی",
    avatar: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [userModalVisible, setUserModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576); // Mobile breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleUpload = (file: any) => {
    setUser({ ...user, avatar: URL.createObjectURL(file) as any });
    message.success("عکس پروفایل با موفقیت آپلود شد");
    return false;
  };

  const onFinish = (values: any) => {
    setUser({ ...user, ...values });
    setEditModalVisible(false);
    message.success("پروفایل با موفقیت به‌روزرسانی شد");
  };

  const showUserModal = () => {
    setUserModalVisible(true);
  };

  return (
    <Layout className="profile-container">
      <Row gutter={[24, 24]}>
        {!isMobile && (
          <Col xs={24} lg={8}>
            <Card className="profile-card">
              <Avatar
                size={100}
                src={user.avatar}
                icon={!user.avatar && <UserOutlined />}
                className="profile-avatar"
              />
              <Upload
                beforeUpload={handleUpload}
                showUploadList={false}
                accept="image/*"
              >
                <Button icon={<UploadOutlined />} style={{ marginBottom: 24 }}>
                  آپلود عکس
                </Button>
              </Upload>
              <Title level={3} style={{ marginBottom: 16 }}>
                {user.name}
              </Title>
              <Divider />
              <Space
                direction="vertical"
                size="large"
                className="profile-space"
              >
                <div>
                  <Text type="secondary">اطلاعات تماس</Text>
                  <Space
                    direction="vertical"
                    style={{ width: "100%", marginTop: 8 }}
                  >
                    <Text>
                      <MailOutlined /> {user.email}
                    </Text>
                    <Text>
                      <PhoneOutlined /> {user.phone}
                    </Text>
                    <Text>
                      <EnvironmentOutlined /> {user.address}
                    </Text>
                  </Space>
                </div>
                <div>
                  <Text type="secondary">اطلاعات شخصی</Text>
                  <Space
                    direction="vertical"
                    style={{ width: "100%", marginTop: 8 }}
                  >
                    <Text>
                      <IdcardOutlined /> کد ملی: {user.nationalId}
                    </Text>
                    <Text>
                      <CalendarOutlined /> تاریخ تولد: {user.birthDate}
                    </Text>
                    <Text>
                      <HeartOutlined /> گروه خونی: {user.bloodType}
                    </Text>
                  </Space>
                </div>
                <div>
                  <Text type="secondary">اطلاعات بیمه</Text>
                  <Space
                    direction="vertical"
                    style={{ width: "100%", marginTop: 8 }}
                  >
                    <Text>
                      <CheckCircleOutlined /> نوع بیمه: {user.insurance}
                    </Text>
                    <Text>
                      <PhoneOutlined /> شماره اضطراری: {user.emergencyContact}
                    </Text>
                  </Space>
                </div>
              </Space>
              <Divider />
              <Button
                type="primary"
                icon={<SettingOutlined />}
                block
                onClick={() => setEditModalVisible(true)}
              >
                ویرایش پروفایل
              </Button>
            </Card>
          </Col>
        )}
        <Col xs={24} lg={isMobile ? 24 : 16}>
          {isMobile && (
            <Button
              type="primary"
              icon={<UserOutlined />}
              onClick={showUserModal}
              style={{ marginBottom: 16, width: "200px" }}
            >
              اطلاعات کاربر
            </Button>
          )}
          <Card  style={{ width:"100%"}}>
            <Tabs
              defaultActiveKey="1"
              type="card"
              size="large"
              style={{ marginBottom: 24 }}
              tabBarGutter={8}
            >
              <TabPane
                tab={
                  <span>
                    <CalendarOutlined /> نوبت‌ها
                  </span>
                }
                key="1"
              >
                <List
                  dataSource={sampleAppointments}
                  pagination={{
                    current: currentPage,
                    // pageSize: 2,
                    onChange: (page) => setCurrentPage(page),
                  }}
                  renderItem={(item) => (
                    <List.Item
                      actions={[
                        <Button
                          type="primary"
                          ghost
                          onClick={() => message.info("در حال توسعه: لغو نوبت")}
                        >
                          لغو نوبت
                        </Button>,
                        <Button
                          type="primary"
                          ghost
                          onClick={() =>
                            message.info("در حال توسعه: تغییر زمان")
                          }
                        >
                          تغییر زمان
                        </Button>,
                      ]}
                    >
                      <List.Item.Meta
                        title={
                          <Space>
                            <Text strong>پزشک: {item.doctor}</Text>
                            <Tag
                              color={
                                item.status === "تایید شده"
                                  ? "success"
                                  : item.status === "در انتظار"
                                  ? "warning"
                                  : "error"
                              }
                            >
                              {item.status}
                            </Tag>
                          </Space>
                        }
                        description={
                          <Space direction="vertical">
                            <Text>
                              <CalendarOutlined /> تاریخ: {item.date}
                            </Text>
                            <Text>
                              <ClockCircleOutlined /> ساعت: {item.time}
                            </Text>
                            <Text>
                              <FileTextOutlined /> نوع: {item.type}
                            </Text>
                            <Text>
                              <InfoCircleOutlined /> یادداشت: {item.notes}
                            </Text>
                          </Space>
                        }
                      />
                    </List.Item>
                  )}
                />
                <Alert
                  message="یادآور"
                  description="نوبت‌های در انتظار را 24 ساعت قبل بررسی کنید."
                  type="info"
                  showIcon
                  style={{ marginTop: 16 }}
                />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <FileTextOutlined /> سوابق
                  </span>
                }
                key="2"
              >
                <Timeline>
                  <Timeline.Item
                    dot={<StarOutlined style={{ color: "#1890ff" }} />}
                  >
                    <Text>نوبت با دکتر احمدی - 1404/03/20</Text>
                    <Rate
                      disabled
                      defaultValue={4.5}
                      allowHalf
                      style={{ marginLeft: 8 }}
                    />
                  </Timeline.Item>
                  <Timeline.Item
                    dot={<StarOutlined style={{ color: "#1890ff" }} />}
                  >
                    <Text>ویزیت آنلاین با دکتر رضایی - 1404/03/21</Text>
                    <Rate
                      disabled
                      defaultValue={5}
                      allowHalf
                      style={{ marginLeft: 8 }}
                    />
                  </Timeline.Item>
                </Timeline>
                <Button type="primary" block icon={<FileTextOutlined />}>
                  دانلود سوابق پزشکی
                </Button>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <StarOutlined /> امتیازدهی
                  </span>
                }
                key="3"
              >
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
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>

      <Modal
        title="اطلاعات کاربر"
        open={userModalVisible}
        onCancel={() => setUserModalVisible(false)}
        footer={null}
        style={{ direction: "rtl" }}
        width={400}
      >
        <Card>
          <Avatar
            size={100}
            src={user.avatar}
            icon={!user.avatar && <UserOutlined />}
            className="profile-avatar"
            style={{ margin: "0 auto 24px" }}
          />
          <Title level={3} style={{ textAlign: "center", marginBottom: 16 }}>
            {user.name}
          </Title>
          <Space direction="vertical" size="large" className="profile-space">
            <div>
              <Text type="secondary">اطلاعات تماس</Text>
              <Space
                direction="vertical"
                style={{ width: "100%", marginTop: 8 }}
              >
                <Text>
                  <MailOutlined /> {user.email}
                </Text>
                <Text>
                  <PhoneOutlined /> {user.phone}
                </Text>
                <Text>
                  <EnvironmentOutlined /> {user.address}
                </Text>
              </Space>
            </div>
            <div>
              <Text type="secondary">اطلاعات شخصی</Text>
              <Space
                direction="vertical"
                style={{ width: "100%", marginTop: 8 }}
              >
                <Text>
                  <IdcardOutlined /> کد ملی: {user.nationalId}
                </Text>
                <Text>
                  <CalendarOutlined /> تاریخ تولد: {user.birthDate}
                </Text>
                <Text>
                  <HeartOutlined /> گروه خونی: {user.bloodType}
                </Text>
              </Space>
            </div>
            <div>
              <Text type="secondary">اطلاعات بیمه</Text>
              <Space
                direction="vertical"
                style={{ width: "100%", marginTop: 8 }}
              >
                <Text>
                  <CheckCircleOutlined /> نوع بیمه: {user.insurance}
                </Text>
                <Text>
                  <PhoneOutlined /> شماره اضطراری: {user.emergencyContact}
                </Text>
              </Space>
            </div>
          </Space>
          <Divider />
          <Button
            type="primary"
            icon={<SettingOutlined />}
            block
            onClick={() => {
              setUserModalVisible(false);
              setEditModalVisible(true);
            }}
          >
            ویرایش پروفایل
          </Button>
        </Card>
      </Modal>

      <Modal
        title="ویرایش پروفایل"
        open={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        footer={null}
        style={{ direction: "rtl" }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={user}
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
    </Layout>
  );
};

export default ProfilePage;
