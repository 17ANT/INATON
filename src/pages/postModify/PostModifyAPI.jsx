import { BASE_URL } from '../../common/BASE_URL';

async function putPost(reqData,post_id) {
    const token = localStorage.getItem('token');
    try {
        const data = await fetch(BASE_URL + `/post/${post_id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
            body: JSON.stringify(reqData),
        });
        const result = await data.json();
        console.log(result);

        return result;
    } catch (error) {
        console.log(error.message);
    }
}

export default putPost;
