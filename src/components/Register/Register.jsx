import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserState'

const RegisterNewUser = () => {
    const { RegisterNewUser, login} = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = async(data)=>{
        await RegisterNewUser(data)
    const dataLogin ={
        email:data.email,
        password: data.passwoord
    }
    login(dataLogin)
    navigate("/getAll")
    }
  return (
    <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          onFinish={handleSubmit}
        >
         <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please, introduce your name',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please, introduce your email',
              },
            ]}
          >
            <Input />
          </Form.Item>
      
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please, introduce your password',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
      
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
  )
}

export default RegisterNewUser