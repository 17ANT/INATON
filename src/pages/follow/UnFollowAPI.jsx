import { BASE_URL } from '../../common/BASE_URL';

async function UnFollow(accountname) {
  const token = localStorage.getItem('token');

  try {
    const data = await fetch(BASE_URL + `/profile/${accountname}/unfollow`, {
      method: 'DELETE',
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

export default UnFollow;
