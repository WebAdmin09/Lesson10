import { Space, Table, Button, Modal, Form, Input, Checkbox, } from 'antd';
import { useState, useEffect, Fragment } from 'react';
import request from '../Api';
const TeacherPage = () => {
  const columns = [
    {
      title: 'FirstName',
      dataIndex: 'firstName',
      key: 'firstname',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'LastName',
      dataIndex: 'lastName',
      key: 'lastname',
    },
    {
      title: 'Image',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (data, row) => {
        return <img height={50} src={data} alt={row.firsName + row.lastName} />
      }
    },
    {
      title: 'IsMarried',
      dataIndex: 'IsMarried',
      key: 'IsMarried',
      render: (data) => data ? 'Yes' : 'No'
    },
    {
      title: 'Student',
      key: 'action',
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button>Students</Button>
          </Space>
        )
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button type='primary'>Edit</Button>
            <Button danger type='primary'>Delete</Button>
          </Space>
        )
      },
    },
  ];
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    getData()
  }, [])
  async function getData() {
    try {
      let { data } = await request.get('teacher')
      setData(data)
    } catch (error) {
      console.log(error);
    }
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      await request.post('teacher', values)
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }

  };

const handleCancel = () => {
  setIsModalOpen(false);
};
return <Fragment>
  <Table bordered
    title={() => <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Teachers</h1>
      <Button onClick={showModal} type='primary'>Add</Button>
    </div>}
    columns={columns} dataSource={data} />
  <Modal
    title="Teacher Modal"
    open={isModalOpen}
    onOk={handleOk}
    onCancel={handleCancel}
    okText='Add Teacher'
  >
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={
        { isMarried: false }
      }
      style={{
        maxWidth: 600,
      }}

    >
      <Form.Item
        label="FirstName"
        name="firstname"
        rules={[
          {
            required: true,
            message: 'Please input your FirstName!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="LastName"
        name="lasttname"
        rules={[
          {
            required: true,
            message: 'Please input your LastName!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="image"
        name="avatar"
        rules={[
          {
            required: true,
            message: 'Please input your LastName!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Is Married"
        wrapperCol={{
          span: 24,
        }}
        valuePropName="checked"
      >
        <Checkbox>Is Married</Checkbox>
      </Form.Item>
    </Form>
  </Modal>
</Fragment>
};

export default TeacherPage;