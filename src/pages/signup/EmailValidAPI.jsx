import { BASE_URL } from '../../common/BASE_URL';

async function emailValid(reqData) {
  try {
    const data = await fetch(BASE_URL + '/user/emailvalid', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(reqData),
    });
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default emailValid;
