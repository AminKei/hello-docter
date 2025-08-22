import React from "react";
import { Timeline, Button, Rate, Typography } from "antd";
import { StarOutlined, FileTextOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const HistoryTab = () => {
  return (
    <>
      <Timeline>
        <Timeline.Item dot={<StarOutlined style={{ color: "#1890ff" }} />}>
          <Text>نوبت با دکتر احمدی - 1404/03/20</Text>
          <Rate
            disabled
            defaultValue={4.5}
            allowHalf
            style={{ marginLeft: 8 }}
          />
        </Timeline.Item>
        <Timeline.Item dot={<StarOutlined style={{ color: "#1890ff" }} />}>
          <Text>ویزیت آنلاین با دکتر رضایی - 1404/03/21</Text>
          <Rate disabled defaultValue={5} allowHalf style={{ marginLeft: 8 }} />
        </Timeline.Item>
      </Timeline>
      <Button type="primary" block icon={<FileTextOutlined />}>
        دانلود سوابق پزشکی
      </Button>
    </>
  );
};

export default HistoryTab;
