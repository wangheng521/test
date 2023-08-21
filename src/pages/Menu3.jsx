import React, { useState } from 'react';
import '../css/MyDetailsComponent.css'; 

function MyDetailsComponent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`details-container ${isExpanded ? 'expanded' : ''}`}>
      <h1>详情页面</h1>
      <button onClick={handleToggleExpand}>
        {isExpanded ? '收起' : '展开'}
      </button>
      {isExpanded && (
        <div className="content-container">
          <p>全部信息1</p>
          <p>全部信息2</p>
          <p>全部信息3</p>
          {/* 其他内容 */}
        </div>
      )}
    </div>
  );
}

export default MyDetailsComponent;
