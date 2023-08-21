import { Tooltip } from 'antd';
import React from 'react';
import img from '../assets/images/account.png'
const App = () => (
  <Tooltip title="prompt text">
    <span style={{}}>Tooltip will show on mouse enter.</span>
    <img src={img}></img>
  </Tooltip>
);
export default App;