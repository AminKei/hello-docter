import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Select,
  DatePicker,
  Radio,
  Card,
  Space,
  Divider,
  Popover,
  Alert,
  TimePicker,
  InputNumber,
  Tag,
} from 'antd';
import {
  UserOutlined,
  PhoneOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  InfoCircleOutlined,
  EnvironmentOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title, Text } = Typography;
const { Option } = Select;

const doctors = [
  { id: 1, name: 'دکتر احمدی', specialty: 'قلب و عروق', image: 'https://via.placeholder.com/150', rating: 4.5, experience: 12, available: true },
  { id: 2, name: 'دکتر رضایی', specialty: 'پوست و مو', image: 'https://via.placeholder.com/150', rating: 4.8, experience: 8, available: false },
  { id: 3, name: 'دکتر کریمی', specialty: 'عمومی', image: 'https://via.placeholder.com/150', rating: 4.2, experience: 15, available: true },
  { id: 4, name: 'دکتر حسینی', specialty: 'دندانپزشکی', image: 'https://via.placeholder.com/150', rating: 4.9, experience: 10, available: true },
  { id: 5, name: 'دکتر موسوی', specialty: 'چشم‌پزشکی', image: 'https://via.placeholder.com/150', rating: 4.6, experience: 9, available: false },
];

const BookingPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      notification.success({
        message: 'نوبت رزرو شد',
        description: `نوبت شما با ${values.doctor} در تاریخ ${values.date.format('YYYY/MM/DD')} ساعت ${values.time.format('HH:mm')} ثبت شد.`,
        placement: 'topRight',
      });
      form.resetFields();
      setLoading(false);
    }, 1000);
  };

  const bookingTips = (
    <div className="p-4">
      <Text strong>نکات رزرو نوبت:</Text>
      <ul className="list-disc pr-5 text-sm text-gray-600 mt-2">
        <li>لطفا 10 دقیقه قبل از نوبت حاضر باشید</li>
        <li>مدارک پزشکی را همراه داشته باشید</li>
        <li>در صورت لغو، 24 ساعت قبل اطلاع دهید</li>
      </ul>
    </div>
  );

  return (
    <Layout className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-4">
      <Card
        className="w-full max-w-4xl rounded-2xl shadow-xl bg-white/90 backdrop-blur-sm border border-gray-200"
      >
        <div className="p-6 md:p-8" style={{ direction: 'rtl' }}>
          <Breadcrumb className="mb-6 text-gray-500">
            <Breadcrumb.Item>
              <Link to="/" className="text-blue-600 hover:text-blue-800">
                خانه
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Text className="text-gray-600">نوبت‌دهی</Text>
            </Breadcrumb.Item>
          </Breadcrumb>

          <Title level={2} className="text-center mb-2 text-blue-700 font-bold">
            رزرو نوبت
          </Title>
          <Text className="block text-center text-gray-500 mb-6">
            اطلاعات خود را برای رزرو نوبت با پزشک مورد نظر وارد کنید
          </Text>

          <Spin spinning={loading} tip="در حال رزرو نوبت...">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="mt-6"
              size="large"
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label={<span className="font-medium text-gray-700">نام و نام خانوادگی</span>}
                    name="name"
                    rules={[{ required: true, message: 'لطفا نام خود را وارد کنید' }]}
                  >
                    <Input
                      placeholder="نام و نام خانوادگی"
                      prefix={<UserOutlined className="text-blue-500" />}
                      className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-all duration-200"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label={<span className="font-medium text-gray-700">شماره موبایل</span>}
                    name="phone"
                    rules={[{ required: true, message: 'لطفا شماره موبایل را وارد کنید' }]}
                  >
                    <Input
                      placeholder="09123456789"
                      prefix={<PhoneOutlined className="text-blue-500" />}
                      className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-all duration-200"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label={<span className="font-medium text-gray-700">پزشک</span>}
                    name="doctor"
                    rules={[{ required: true, message: 'لطفا پزشک را انتخاب کنید' }]}
                  >
                    <Select
                      placeholder="انتخاب پزشک"
                      showSearch
                      className="rounded-lg"
                    >
                      {doctors.map(doctor => (
                        <Option key={doctor.id} value={doctor.name}>
                          <Space>
                            <Text>{doctor.name}</Text>
                            <Tag color={doctor.available ? 'green' : 'red'}>
                              {doctor.specialty} - {doctor.available ? 'در دسترس' : 'غیرفعال'}
                            </Tag>
                          </Space>
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label={<span className="font-medium text-gray-700">تاریخ</span>}
                    name="date"
                    rules={[{ required: true, message: 'لطفا تاریخ را انتخاب کنید' }]}
                  >
                    <DatePicker
                      placeholder="انتخاب تاریخ"
                      className="w-full rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-all duration-200"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label={<span className="font-medium text-gray-700">ساعت</span>}
                    name="time"
                    rules={[{ required: true, message: 'لطفا ساعت را انتخاب کنید' }]}
                  >
                    <TimePicker
                      placeholder="انتخاب ساعت"
                      format="HH:mm"
                      className="w-full rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-all duration-200"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label={<span className="font-medium text-gray-700">نوع ویزیت</span>}
                    name="type"
                    rules={[{ required: true, message: 'لطفا نوع ویزیت را انتخاب کنید' }]}
                  >
                    <Radio.Group className="flex justify-end">
                      <Radio value="حضوری" className="text-gray-700">حضوری</Radio>
                      <Radio value="آنلاین" className="text-gray-700">آنلاین</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label={<span className="font-medium text-gray-700">مکان ویزیت حضوری</span>}
                    name="location"
                    rules={[{ required: false }]}
                  >
                    <Select
                      placeholder="انتخاب مکان (برای ویزیت حضوری)"
                      className="rounded-lg"
                    >
                      <Option value="clinic1">کلینیک مرکزی - تهران</Option>
                      <Option value="clinic2">کلینیک شمال - تهران</Option>
                      <Option value="clinic3">کلینیک غرب - تهران</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label={<span className="font-medium text-gray-700">مدت زمان ویزیت (دقیقه)</span>}
                    name="duration"
                    rules={[{ required: true, message: 'لطفا مدت زمان را وارد کنید' }]}
                  >
                    <InputNumber
                      min={15}
                      max={60}
                      defaultValue={30}
                      className="w-full rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-all duration-200"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    label={<span className="font-medium text-gray-700">توضیحات اضافی</span>}
                    name="notes"
                  >
                    <Input.TextArea
                      rows={4}
                      placeholder="توضیحات یا علائم خود را وارد کنید"
                      className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-all duration-200"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[{ required: true, message: 'لطفا قوانین را بپذیرید' }]}
                  >
                    <Checkbox className="text-gray-700">
                      <span>
                        <span>قوانین و شرایط را می‌پذیرم</span>
                        <a href="#" className="text-blue-600 hover:text-blue-800 mr-1">
                          (مشاهده قوانین)
                        </a>
                      </span>
                    </Checkbox>
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="reminder"
                    valuePropName="checked"
                  >
                    <Checkbox className="text-gray-700">
                      ارسال یادآور نوبت از طریق ایمیل و پیامک
                    </Checkbox>
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Space direction="vertical" className="w-full">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                      size="large"
                    >
                      رزرو نوبت
                    </Button>
                    <Popover content={bookingTips} title="نکات مهم" trigger="click">
                      <Button
                        type="default"
                        className="w-full border-blue-400 hover:bg-blue-100 transition-all duration-300"
                        icon={<InfoCircleOutlined className="text-blue-500" />}
                      >
                        نکات رزرو
                      </Button>
                    </Popover>
                  </Space>
                </Col>
              </Row>
            </Form>
            <Divider className="my-6 text-gray-400" />
            <Alert
              message="اطلاعات مهم"
              description="لطفا اطلاعات دقیق وارد کنید. در صورت نیاز به لغو نوبت، 24 ساعت قبل اطلاع دهید."
              type="info"
              showIcon
              className="mb-6 rounded-lg"
            />
          </Spin>
        </div>
      </Card>
    </Layout>
  );
};

export default BookingPage;