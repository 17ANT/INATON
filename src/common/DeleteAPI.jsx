import { BASE_URL } from './BASE_URL';

async function deleteAPI(url) {
  const token = localStorage.getItem('token');
  try {
    const data = await fetch(BASE_URL + url, {
      method: 'DELETE',
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

export default deleteAPI;
