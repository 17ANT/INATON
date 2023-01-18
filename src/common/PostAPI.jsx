import { BASE_URL } from './BASE_URL';

async function postAPI(url, reqData = null) {
  const options = {
    method: 'POST',
  };
  // token이 있으면 headers에 authorization 추가
  const token = localStorage.getItem('token');
  const headers = { 'Content-type': 'application/json' };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  options['headers'] = headers;
  if (reqData) {
    options['body'] = JSON.stringify(reqData);
  }
  try {
    // const data = await fetch(BASE_URL + '/user/login', {
    const data = await fetch(BASE_URL + url, options);
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default postAPI;
