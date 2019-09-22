import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/pages/sigupForm.scss';

const { Title } = Typography;

const SignupForm = ({ form }) => {
  const { getFieldDecorator } = form;

  const handleSubmit = evt => {
    evt.preventDefault();

    form.validateFields((err, values) => {
      if (!err) {
        // eslint-disable-next-line no-console
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <div className="p-signup-page">
      <Form onSubmit={handleSubmit} className="p-signup-page__signup-form">
        <Title level={2} className="p-signup-page__signup-form__title">
          Signup
        </Title>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" className="p-signup-page__icon" />}
              placeholder="Username"
              type="email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="mail" className="p-signup-page__icon" />}
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
              prefix={<Icon type="lock" className="p-signup-page__icon" />}
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
          <Link className="p-signup-page__signup-form-forgot" to="/reset">
            Forgot password
          </Link>
          <Button
            type="primary"
            htmlType="submit"
            className="p-signup-page__signup-form-button"
          >
            Signup
          </Button>
          Already have an account? <Link to="/">Signin</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

const WrappedSignupForm = Form.create({ name: 'signup_form' })(SignupForm);

SignupForm.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired,
    validateFields: PropTypes.func.isRequired,
  }).isRequired,
};

export default WrappedSignupForm;
