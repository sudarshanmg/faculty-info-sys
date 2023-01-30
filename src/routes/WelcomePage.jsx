// hooks
import { useRef } from 'react';

// utils
import authenticateUser from '../database_ops/authenticateUser';

// components
import Form from '../components/Layout/Form';
import Button from '../components/Layout/Button';
import Input from '../components/Layout/Input';
import Layout from '../components/Layout/Layout';

const WelcomePage = () => {
  const aadhaarInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const aadhaar = aadhaarInputRef.current.value;
    const password = passwordInputRef.current.value;
    await authenticateUser(aadhaar, password);
  };
  return (
    <>
      <Layout>
        <header>
          <h1>Faculty Information System</h1>
        </header>
      </Layout>
      <Layout>
        <h1>Welcome</h1>
      </Layout>
      <Form onSubmit={submitHandler}>
        <Input
          type={'number'}
          placeholder={'Enter your Aadhaar...'}
          ref={aadhaarInputRef}
        />
        <Input
          type={'password'}
          placeholder={'Enter your Password...'}
          ref={passwordInputRef}
        />
        <Button text={'Submit'} type = {'submit'} />
      </Form>
    </>
  );
};

export default WelcomePage;
