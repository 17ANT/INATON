import { BASE_URL } from '../../common/BASE_URL';

async function searchUser(reqData) {
    try {
        const token = localStorage.getItem('token');
        const data = await fetch(BASE_URL + `/user/searchuser/?keyword=${reqData}`, {
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

export default searchUser;
