import React from 'react';
import { Form, Select, Button } from 'antd';
const { Option } = Select;

function MyFormComponent(props) {
  const [form] = Form.useForm();

  const handleFormSubmit = (values) => {
    // 在这里处理提交表单的操作，values 是表单项的值对象
    console.log(values);
  };

  return (
    <Form form={form} onFinish={handleFormSubmit}>
      <Form.Item name="selectedOptions">
        <Select mode="multiple" style={{ width: '100%' }}>
          <Option value="option1">选项1</Option>
          <Option value="option2">选项2</Option>
          <Option value="option3">选项3</Option>
        </Select>
      </Form.Item>
      <Button type="primary" htmlType="submit">提交</Button>
    </Form>
  );
}

export default MyFormComponent;
