import React, { useState, useEffect } from "react";
import { Row, Col, Pagination, Typography, Breadcrumb } from "antd";
import { doctors } from "../../DataApi/DataApi";
import FilterComponent from "../../Components/Layout/AllDoctersLayout/FilterComponent";
import DoctorCard from "../../Components/Ui/DoctorCard";
import SearchAndSort from "../../Components/Layout/AllDoctersLayout/SearchAndSort";

const { Title } = Typography;

interface Doctor {
  id: number;
  name?: string;
  specialty?: string;
  image?: string;
  rating?: number;
  experience?: number;
  available?: boolean;
  gender?: string;
  city?: string;
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
  const doctorsPerPage = 9;

  useEffect(() => {
    if (!doctors || !Array.isArray(doctors)) {
      console.error("داده‌های doctors به درستی بارگذاری نشده است.");
    }
  }, []);

  const handleFilterChange = (newFilters: FilterState | any | []) => {
    setFilters(newFilters);
    setCurrentPage(1); // بازگشت به صفحه اول پس از اعمال فیلتر
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

  let filteredDoctors = (doctors || []).filter((doctor) => {
    const name = doctor?.name || "";
    const specialty = doctor?.specialty || "";
    // const city = doctor?.city || "";
    // const gender = doctor?.gender || "";
    const experience = doctor?.experience || 0;
    const available = doctor?.available || false;

    return (
      name.toLowerCase().includes(filters.name.toLowerCase()) &&
      (filters.specialty === "" || specialty === filters.specialty) &&
      // (filters.city === "" || city === filters.city) &&
      // (filters.gender === "" || gender === filters.gender) &&
      (filters.experience === "" ||
        (filters.experience === "0-5" && experience <= 5) ||
        (filters.experience === "5-10" && experience > 5 && experience <= 10) ||
        (filters.experience === "10+" && experience > 10)) &&
      (!filters.online || available)
    );
  });

  if (sort === "rating-high") {
    filteredDoctors.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else if (sort === "rating-low") {
    filteredDoctors.sort((a, b) => (a.rating || 0) - (b.rating || 0));
  } else if (sort === "experience-high") {
    filteredDoctors.sort((a, b) => (b.experience || 0) - (a.experience || 0));
  } else if (sort === "experience-low") {
    filteredDoctors.sort((a, b) => (a.experience || 0) - (b.experience || 0));
  }

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
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
      <Row gutter={[24, 24]} style={{ maxWidth: "1290px", margin: "0 auto" }}>
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
            <div style={{ textAlign: "center", marginTop: "30px" }}>
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
          <Col xs={0} md={8} lg={6} style={{ position: "sticky", top: "20px" }}>
            <FilterComponent
              onFilterChange={handleFilterChange}
              isDrawerVisible={isDrawerVisible}
              setIsDrawerVisible={setIsDrawerVisible}
            />
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default AllDoctersPage;