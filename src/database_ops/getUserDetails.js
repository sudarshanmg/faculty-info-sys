import { postRequest } from '../util/server-request';
import { redirect } from 'react-router-dom';

export default getUserDetails = async (aadhaar) => {
  try {
    const result = await postRequest(
      { aadhaar: aadhaar },
      '/get-user-details'
    );
    return result;
  } catch (error) {
    return new Error(error);
  }
};
