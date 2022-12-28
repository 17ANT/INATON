import { BASE_URL } from '../../common/BASE_URL';

async function CommentsDelete(post_id, comment_id) {
  console.log('delete comment')
  const token = localStorage.getItem('token');
  try {
    const data = await fetch(
      BASE_URL + `/post/${post_id}/comments/${comment_id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }
    );
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default CommentsDelete;
