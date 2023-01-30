import classes from './Form.module.css';
import Layout from './Layout';

const Form = (props) => {
  return (
    <Layout>
      <form onSubmit={props.onSubmit}>
        <Layout>{props.children}</Layout>
      </form>
    </Layout>
  );
};

export default Form;
