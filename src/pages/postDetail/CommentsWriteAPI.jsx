import { BASE_URL } from '../../common/BASE_URL';

async function CommentsWrite(post_id, reqData) {
  const token = localStorage.getItem('token');
  try {
    const data = await fetch(BASE_URL + `/post/${post_id}/comments`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
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

export default CommentsWrite;
