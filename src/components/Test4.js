import React, { useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
const App = () => {
  const [tabPosition, setTabPosition] = useState('left');
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <>
     <Tabs>
      <div>
      <Tabs.TabPane tab="项目 1" key="item-1">
    nihao
  </Tabs.TabPane>
      </div>
  
  <Tabs.TabPane tab="项目 2" key="item-2">
    内容 2
  </Tabs.TabPane>
</Tabs>
    </>
  );
};
export default App;