import { BASE_URL } from './BASE_URL';

async function getAPI(url) {
  const token = localStorage.getItem('token');
  try {
    const data = await fetch(BASE_URL + url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default getAPI;
