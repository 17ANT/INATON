import { BASE_URL } from '../../common/BASE_URL';

async function postLogin(reqData) {
  try {
    const data = await fetch(BASE_URL + '/user/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(reqData),
    });
    const result = await data.json();
    localStorage.setItem('token', result.user.token);
    localStorage.setItem('accountname', result.user.accountname);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default postLogin;
