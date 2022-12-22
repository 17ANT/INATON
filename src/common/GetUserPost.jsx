import { BASE_URL } from './BASE_URL';

async function userPost(reqData) {
    console.log('searchUser');
    // console.log(BASE_URL);
    try {
        const token = localStorage.getItem('token');
        const data = await fetch(BASE_URL + `/user/:acountname/userpost`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        });
        console.log(data);
        const result = await data.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error.message);
    }
}

export default userPost;
