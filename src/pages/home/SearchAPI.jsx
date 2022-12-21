import { BASE_URL } from '../../common/BASE_URL';

async function searchUser(reqData) {
    // console.log('searchUser');
    // console.log(BASE_URL);
    try {
        // console.log(reqData);
        const token = localStorage.getItem('token');
        const data = await fetch(BASE_URL + `/user/searchuser/?keyword=${reqData}`, {
            method: 'GET',
            headers: {
                "Authorization" : `Bearer ${token}`,
                "Content-type" : "application/json"
            },
            // body: JSON.stringify(reqData),
            // user: {
            //     email: 'sewon123@naver.com',
            //     password: '12345678',
            // },
        });
        // console.log(data);
        const result = await data.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error.message);
    }
}

export default searchUser;
