import React, { FC } from "react";
import { Row, Col, Input, Select, Button } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";

const { Option } = Select;

export interface SearchAndSortProps {
  filters: { name: string };
  sort: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSortChange: (value: string) => void;
  showDrawer: () => void;
}

const SearchAndSort: FC<SearchAndSortProps> = ({
  filters,
  sort,
  handleSearchChange,
  handleSortChange,
  showDrawer,
}) => {
  return (
    <Row
      gutter={[20, 20]}
      align="stretch"
      justify="center"
      style={{ direction: "rtl" }}
    >
      <Col xs={24} sm={24} md={18} lg={18}>
        <Input
          placeholder="جستجوی پزشک..."
          prefix={<SearchOutlined />}
          value={filters.name}
          size="large"
          onChange={handleSearchChange}
          style={{
            width: "100%",
            textAlign: "right",
            border: "solid 1px #e7e7e7",
            borderRadius: "4px",
          }}
        />
      </Col>
      <Col xs={12} sm={12} md={0} lg={0}>
        <Button
          type="primary"
          icon={<FilterOutlined />}
          onClick={showDrawer}
          style={{ width: "100%", borderRadius: "4px", height: "40px" }}
        >
          فیلترها
        </Button>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6}>
        <Select
          placeholder="مرتب‌سازی"
          value={sort}
          size="large"
          onChange={handleSortChange}
          style={{ width: "100%", borderRadius: "4px" }}
        >
          <Option value="default">پیش‌فرض</Option>
          <Option value="rating-high">امتیاز (بالا به پایین)</Option>
          <Option value="rating-low">امتیاز (پایین به بالا)</Option>
          <Option value="experience-high">تجربه (زیاد به کم)</Option>
          <Option value="experience-low">تجربه (کم به زیاد)</Option>
        </Select>
      </Col>
    </Row>
  );
};

export default SearchAndSort;
