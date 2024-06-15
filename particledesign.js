import React from 'react';
import { Card } from 'antd';

const Graphics = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card
        style={{ width: 400, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
        cover={<img alt="example" src="https://via.placeholder.com/400x200" />}
      >
        <h1 style={{ textAlign: 'center', color: '#1890ff' }}>Welcome!</h1>
        <p style={{ fontSize: 16, textAlign: 'center' }}>This is a simple Ant Design Card component.</p>
      </Card>
    </div>
  );
};

export default Graphics;
