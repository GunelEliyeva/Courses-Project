import { Button, Dropdown, Space } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
       Blog
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Blog Details
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
    Element
      </a>
    ),
  },
];
const DropDown = () => (
  <Space direction="vertical">
    <Space wrap>
     
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <Button type='text' style={{color:"white"}}>Blog</Button>
      </Dropdown>
      
     
    </Space>
  </Space>
);
export default DropDown;