import { postRequest } from '../util/server-request';
import { redirect } from 'react-router-dom';

const authenticateUser = async (aadhaar, password) => {
  try {
    const result = await postRequest(
      { aadhaar: aadhaar, password: password },
      '/authenticate-user'
    );
    if (result.auth === 'success') {
      // navigate to user profile
      console.log('success');
    } else {
      alert("Wrong password/aadhaar combination. Try again!");
    }
  } catch (error) {
    throw new Error(error);
  }
};

export default authenticateUser;
