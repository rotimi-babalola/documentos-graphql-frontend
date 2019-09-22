import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/loginForm.scss';

const { Title } = Typography;

const LoginForm = ({ form }) => {
  const { getFieldDecorator } = form;

  const handleSubmit = evt => {
    evt.preventDefault();

    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <div className="p-login-page">
      <Form onSubmit={handleSubmit} className="p-login-page__login-form">
        <Title level={2} className="p-login-page__login-form__title">
          Login
        </Title>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="mail" className="p-login-page__icon" />}
              placeholder="Email"
              type="email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" className="p-login-page__icon" />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <Link className="p-login-page__login-form-forgot" to="/reset">
            Forgot password
          </Link>
          <Button
            type="primary"
            htmlType="submit"
            className="p-login-page__login-form-button"
          >
            Log in
          </Button>
          Or <Link to="/signup">register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

LoginForm.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired,
    validateFields: PropTypes.func.isRequired,
  }).isRequired,
};

export default WrappedNormalLoginForm;
