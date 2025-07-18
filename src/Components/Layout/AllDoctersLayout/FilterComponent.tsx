import React, { useState, useEffect } from "react";
import {
  Card,
  Select,
  Button,
  Checkbox,
  Row,
  Col,
  Typography,
  Drawer,
  Switch,
} from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

interface FilterComponentProps {
  onFilterChange: (filters: FilterState) => void;
  isDrawerVisible: boolean;
  setIsDrawerVisible: (visible: boolean) => void;
}

interface FilterState {
  specialty: string;
  city: string;
  gender: string;
  experience: string;
  online: boolean;
}

const FilterComponent = ({ onFilterChange, isDrawerVisible, setIsDrawerVisible }: FilterComponentProps) => {
  const [filters, setFilters] = useState<FilterState>({
    specialty: "",
    city: "",
    gender: "",
    experience: "",
    online: false,
  });

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleChange = (key: keyof FilterState, value: string | boolean) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    const resetFilters: FilterState = {
      specialty: "",
      city: "",
      gender: "",
      experience: "",
      online: false,
    };
    setFilters(resetFilters);
  };

  const onCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <div style={{ textAlign: "right" }}>
      <Drawer
        title="فیلترها"
        placement="right"
        closable={true}
        onClose={onCloseDrawer}
        visible={isDrawerVisible}
        width={300}
        extra={
          <Button type="text" icon={<CloseOutlined />} onClick={onCloseDrawer} />
        }
      >
        <div style={{ padding: "10px 0" }}>
          <Text strong>تخصص</Text>
          <Select
            placeholder="انتخاب تخصص"
            value={filters.specialty}
            onChange={(value) => handleChange("specialty", value)}
            style={{ marginTop: "5px", width: "100%" }}
          >
            <Option value="">همه تخصص‌ها</Option>
            <Option value="پوست و مو">پوست و مو</Option>
            <Option value="عمومی">عمومی</Option>
            <Option value="دندانپزشکی">دندانپزشکی</Option>
            <Option value="چشم‌پزشکی">چشم‌پزشکی</Option>
            <Option value="ارتوپد">ارتوپد</Option>
            <Option value="مغز و اعصاب">مغز و اعصاب</Option>
          </Select>
        </div>
        <div style={{ padding: "10px 0" }}>
          <Text strong>شهر</Text>
          <Select
            placeholder="انتخاب شهر"
            value={filters.city}
            onChange={(value) => handleChange("city", value)}
            style={{ marginTop: "5px", width: "100%" }}
          >
            <Option value="">همه شهرها</Option>
            <Option value="تهران">تهران</Option>
            <Option value="شیراز">شیراز</Option>
            <Option value="مشهد">مشهد</Option>
          </Select>
        </div>
        <div style={{ padding: "10px 0" }}>
          <Text strong>جنسیت</Text>
          <Select
            placeholder="انتخاب جنسیت"
            value={filters.gender}
            onChange={(value) => handleChange("gender", value)}
            style={{ marginTop: "5px", width: "100%" }}
          >
            <Option value="">همه</Option>
            <Option value="مرد">مرد</Option>
            <Option value="زن">زن</Option>
          </Select>
        </div>
        <div style={{ padding: "10px 0" }}>
          <Text strong>تجربه (سال)</Text>
          <Select
            placeholder="انتخاب تجربه"
            value={filters.experience}
            onChange={(value) => handleChange("experience", value)}
            style={{ marginTop: "5px", width: "100%" }}
          >
            <Option value="">همه</Option>
            <Option value="0-5">0-5 سال</Option>
            <Option value="5-10">5-10 سال</Option>
            <Option value="10+">10+ سال</Option>
          </Select>
        </div>
        <div style={{ padding: "10px 0", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text strong>فقط در دسترس</Text>
          <Switch
            checked={filters.online}
            onChange={(checked) => handleChange("online", checked)}
          />
        </div>
        <Button
          type="primary"
          onClick={handleReset}
          style={{ width: "100%", marginTop: "20px" }}
        >
          پاک کردن فیلترها
        </Button>
      </Drawer>

      {/* Card for desktop view */}
      <div
        style={{
          display: window.innerWidth > 768 ? "block" : "none",
        }}
      >
        <Card
          title={
            <Title level={4} style={{ margin: 0 }}>
              فیلترها
            </Title>
          }
          extra={
            <Button type="text" icon={<CloseOutlined />} onClick={handleReset} />
          }
          style={{
            width: "30%",
            minWidth: "300px",
            borderRadius: "10px",
            margin: "0 10px",
            position: "sticky",
            top: "20px",
          }}
        >
          <div style={{ padding: "10px 0" }}>
            <Text strong>تخصص</Text>
            <Select
              placeholder="انتخاب تخصص"
              value={filters.specialty}
              onChange={(value) => handleChange("specialty", value)}
              style={{ marginTop: "5px", width: "100%" }}
            >
              <Option value="">همه تخصص‌ها</Option>
              <Option value="پوست و مو">پوست و مو</Option>
              <Option value="عمومی">عمومی</Option>
              <Option value="دندانپزشکی">دندانپزشکی</Option>
              <Option value="چشم‌پزشکی">چشم‌پزشکی</Option>
              <Option value="ارتوپد">ارتوپد</Option>
              <Option value="مغز و اعصاب">مغز و اعصاب</Option>
            </Select>
          </div>
          <div style={{ padding: "10px 0" }}>
            <Text strong>شهر</Text>
            <Select
              placeholder="انتخاب شهر"
              value={filters.city}
              onChange={(value) => handleChange("city", value)}
              style={{ marginTop: "5px", width: "100%" }}
            >
              <Option value="">همه شهرها</Option>
              <Option value="تهران">تهران</Option>
              <Option value="شیراز">شیراز</Option>
              <Option value="مشهد">مشهد</Option>
            </Select>
          </div>
          <div style={{ padding: "10px 0" }}>
            <Text strong>جنسیت</Text>
            <Select
              placeholder="انتخاب جنسیت"
              value={filters.gender}
              onChange={(value) => handleChange("gender", value)}
              style={{ marginTop: "5px", width: "100%" }}
            >
              <Option value="">همه</Option>
              <Option value="مرد">مرد</Option>
              <Option value="زن">زن</Option>
            </Select>
          </div>
          <div style={{ padding: "10px 0" }}>
            <Text strong>تجربه (سال)</Text>
            <Select
              placeholder="انتخاب تجربه"
              value={filters.experience}
              onChange={(value) => handleChange("experience", value)}
              style={{ marginTop: "5px", width: "100%" }}
            >
              <Option value="">همه</Option>
              <Option value="0-5">0-5 سال</Option>
              <Option value="5-10">5-10 سال</Option>
              <Option value="10+">10+ سال</Option>
            </Select>
          </div>
          <div style={{ padding: "10px 0", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Switch
              checked={filters.online}
              onChange={(checked) => handleChange("online", checked)}
            />
            <Text strong>فقط در دسترس</Text>
          </div>
          <Button
            type="primary"
            onClick={handleReset}
            style={{ width: "100%", marginTop: "20px" }}
          >
            پاک کردن فیلترها
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default FilterComponent;