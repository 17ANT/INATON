import { BASE_URL } from './BASE_URL';

async function getMyProfile() {
  const token = localStorage.getItem('token');
  try {
    const data = await fetch(BASE_URL + `/user/myinfo`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default getMyProfile;
