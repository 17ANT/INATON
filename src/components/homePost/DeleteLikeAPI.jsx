import { BASE_URL } from '../../common/BASE_URL';

async function deleteLike(post_id) {
  const token = localStorage.getItem('token');
  try {
    const data = await fetch(BASE_URL + `/post/${post_id}/unheart`, {
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

export default deleteLike;
