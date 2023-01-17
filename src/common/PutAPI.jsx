import { BASE_URL } from './BASE_URL';

async function putAPI(url, reqData) {
  const token = localStorage.getItem('token');
  try {
    const data = await fetch(BASE_URL + url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(reqData),
    });
    const result = await data.json();
    localStorage.setItem('accountname', result.user.accountname);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default putAPI;
