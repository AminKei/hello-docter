import React, { useState } from "react";
import { Row, Col, Pagination, Typography, Breadcrumb } from "antd";
import { doctors } from "../../DataApi/DataApi";
import FilterComponent from "../../Components/Layout/AllDoctersLayout/FilterComponent";
import DoctorCard from "../../Components/Ui/DoctorCard";
import SearchAndSort from "../../Components/Layout/AllDoctersLayout/SearchAndSort";

const { Title } = Typography;

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  experience: number;
  available: boolean;
  gender: string;
}

interface FilterState {
  name: string;
  specialty: string;
  city: string;
  gender: string;
  experience: string;
  online: boolean;
}

const AllDoctersPage = () => {
  const [filters, setFilters] = useState<FilterState>({
    name: "",
    specialty: "",
    city: "",
    gender: "",
    experience: "",
    online: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState<string>("default");
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const doctorsPerPage = 6;

  const handleFilterChange = (newFilter: FilterState) => {
    setFilters({ ...filters, ...newFilter });
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, name: e.target.value });
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSort(value);
    setCurrentPage(1);
  };

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  let filteredDoctors = (doctors as Doctor[]).filter((doctor) => {
    return (
      doctor.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      (filters.specialty === "" || doctor.specialty === filters.specialty) &&
      (filters.gender === "" || doctor.gender === filters.gender) &&
      (filters.experience === "" ||
        (filters.experience === "0-5" && doctor.experience <= 5) ||
        (filters.experience === "5-10" &&
          doctor.experience > 5 &&
          doctor.experience <= 10) ||
        (filters.experience === "10+" && doctor.experience > 10)) &&
      (!filters.online || doctor.available)
    );
  });

  if (sort === "rating-high") {
    filteredDoctors.sort((a, b) => b.rating - a.rating);
  } else if (sort === "rating-low") {
    filteredDoctors.sort((a, b) => a.rating - b.rating);
  } else if (sort === "experience-high") {
    filteredDoctors.sort((a, b) => b.experience - a.experience);
  } else if (sort === "experience-low") {
    filteredDoctors.sort((a, b) => a.experience - b.experience);
  }

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor
  );
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  return (
    <div>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Breadcrumb>
          <Breadcrumb.Item>خانه</Breadcrumb.Item>
          <Breadcrumb.Item>همه پزشکان</Breadcrumb.Item>
        </Breadcrumb>
        <Title
          level={4}
          style={{
            textAlign: "center",
            color: "#1890ff",
            fontWeight: "bold",
          }}
        >
          همه پزشکان
        </Title>
      </div>
      <Row gutter={[24, 24]} style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Col span={24}>
          <SearchAndSort
            filters={filters}
            sort={sort}
            handleSearchChange={handleSearchChange}
            handleSortChange={handleSortChange}
            showDrawer={showDrawer}
          />
        </Col>
        <Row justify="space-between" style={{ marginTop: "40px" }}>
          <Col xs={24} md={16} lg={17}>
            <Row gutter={[24, 24]}>
              {currentDoctors.map((doctor) => (
                <Col key={doctor.id} xs={24} sm={12} md={12} lg={8}>
                  <DoctorCard doctor={doctor} />
                </Col>
              ))}
            </Row>
            <div
              style={{
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              <Pagination
                current={currentPage}
                total={filteredDoctors.length}
                pageSize={doctorsPerPage}
                onChange={(page) => setCurrentPage(page)}
                showSizeChanger={false}
                style={{ margin: "0 auto" }}
              />
            </div>
          </Col>
          <Col xs={0} md={8} lg={6} style={{ marginTop: "20px" }}>
            <div style={{ position: "sticky", top: "20px" }}>
              <FilterComponent
                onFilterChange={() => handleFilterChange}
                isDrawerVisible={isDrawerVisible}
                setIsDrawerVisible={setIsDrawerVisible}
              />
            </div>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default AllDoctersPage;
