import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Button, Tabs, Card, message, Form } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  FileTextOutlined,
  StarOutlined,
} from "@ant-design/icons";
import UserInfoCard from "../../Components/Layout/ProfileLayout/UserInfoCard";
import AppointmentsTab from "../../Components/Layout/ProfileLayout/AppointmentsTab";
import HistoryTab from "../../Components/Layout/ProfileLayout/HistoryTab";
import RatingTab from "../../Components/Layout/ProfileLayout/RatingTab";
import UserModal from "../../Components/Layout/ProfileLayout/UserModal";
import EditModal from "../../Components/Layout/ProfileLayout/EditModal";
import TabPane from "antd/es/tabs/TabPane";
import { sampleAppointments } from "../../DataApi/SampleAppointments";

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<any>({
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
      setIsMobile(window.innerWidth <= 576);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // بارگذاری کاربر از localStorage در صورت وجود
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedUser && storedUser.email) {
      setUser({
        ...user,
        ...storedUser,
        name: storedUser.firstName + " " + storedUser.lastName,
      });
    }
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

  const handleLogout = () => {
    localStorage.removeItem("user");
    message.success("شما با موفقیت خارج شدید!");
    window.location.href = "/register";
  };

  return (
    <Layout
      style={{
        minHeight: "90vh",
        minWidth: "63vw",
        direction: "rtl",
        background: "none",
        marginLeft: "-1vh",
      }}
    >
      <Row gutter={[16, 16]}>
        {!isMobile && (
          <Col xs={24} lg={8}>
            <UserInfoCard
              user={user}
              handleUpload={handleUpload}
              onEdit={() => setEditModalVisible(true)}
            />
          </Col>
        )}
        <Col xs={24} lg={isMobile ? 24 : 16}>
          {isMobile && (
            <Col>
              <Button
                type="primary"
                icon={<UserOutlined />}
                onClick={showUserModal}
                style={{ marginBottom: 16, width: "200px" }}
              >
                اطلاعات کاربر
              </Button>
            </Col>
          )}
          <Card style={{ borderRadius: 12, width: "100%" }}>
            <Tabs
              defaultActiveKey="1"
              type="card"
              size="large"
              style={{ marginBottom: 24 }}
            >
              <TabPane
                tab={
                  <span>
                    <CalendarOutlined /> نوبت‌ها
                  </span>
                }
                key="1"
              >
                <AppointmentsTab
                  appointments={sampleAppointments}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
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
                <HistoryTab />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <StarOutlined /> امتیازدهی
                  </span>
                }
                key="3"
              >
                <RatingTab />
              </TabPane>
            </Tabs>
          </Card>
          {/* {isMobile && (
            <Button
              type="primary"
              block
              style={{ marginTop: 16 }}
              onClick={handleLogout}
            >
              خروج از حساب
            </Button>
          )} */}
        </Col>
      </Row>
      <UserModal
        visible={userModalVisible}
        onCancel={() => setUserModalVisible(false)}
        user={user}
        onEdit={() => setEditModalVisible(true)}
      />
      <EditModal
        visible={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        onFinish={onFinish}
        form={form}
        initialValues={user}
      />
    </Layout>
  );
};

export default ProfilePage;
