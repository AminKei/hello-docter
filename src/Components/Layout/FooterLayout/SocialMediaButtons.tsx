import React from 'react';
import { Button, Space, message } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const SocialMediaButtons = () => {
  return (
    <Space size="middle">
      <Button
        icon={<FacebookOutlined />}
        className="bg-white text-blue-800 hover:bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        shape="circle"
        onClick={() => message.info('Our Facebook page coming soon!')}
      />
      <Button
        icon={<TwitterOutlined />}
        className="bg-white text-blue-800 hover:bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        shape="circle"
        onClick={() => message.info('Our Twitter page coming soon!')}
      />
      <Button
        icon={<InstagramOutlined />}
        className="bg-white text-blue-800 hover:bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        shape="circle"
        onClick={() => message.info('Our Instagram page coming soon!')}
      />
    </Space>
  );
};

export default SocialMediaButtons;