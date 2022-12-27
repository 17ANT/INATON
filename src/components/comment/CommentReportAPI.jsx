import { BASE_URL } from '../../common/BASE_URL';

async function CommentReport(post_id, comment_id) {
  const token = localStorage.getItem('token');
  try {
    const data = await fetch(
      BASE_URL + `/post/${post_id}/comments/${comment_id}/report`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }
    );
    const result = await data.json();
    console.log('신고완료',result)
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default CommentReport;
