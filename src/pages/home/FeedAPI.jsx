import { BASE_URL } from '../../common/BASE_URL';

async function Feed(reqData) {
  try {
    const token = localStorage.getItem('token');
    const data = await fetch(BASE_URL + '/post/feed', {
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

export default Feed;
