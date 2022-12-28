import { BASE_URL } from './BASE_URL';

async function authCheck() {
    const token = localStorage.getItem('token')
  try {
    const data = await fetch(BASE_URL + '/user/checktoken', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const res = await data.json();
    return res;
  } catch (error) {
    console.log(error.message);
  }
}

export default authCheck;
