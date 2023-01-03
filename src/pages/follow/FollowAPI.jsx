import { BASE_URL } from '../../common/BASE_URL';

async function Follow(accountname) {
  const token = localStorage.getItem('token');

  try {
    const data = await fetch(BASE_URL + `/profile/${accountname}/follow`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const res = await data.json();
    return res;
  } catch (err) {
    console.log(err);
  }
}

export default Follow;
