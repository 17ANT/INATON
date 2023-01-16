import { BASE_URL } from './BASE_URL';

async function postAPI(url, reqData) {
  // token이 있으면 headers에 authorization 추가
  const token = localStorage.getItem('token');
  const headers = { 'Content-type': 'application/json' };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  console.log(headers);

  try {
    // const data = await fetch(BASE_URL + '/user/login', {
    const data = await fetch(BASE_URL + url, {
      method: 'POST',
      headers,
      body: JSON.stringify(reqData),
    });
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default postAPI;

///////////
// import { BASE_URL } from '../../common/BASE_URL';

async function accountValid(reqData) {
  try {
    const data = await fetch(BASE_URL + '/user/accountnamevalid', {
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
