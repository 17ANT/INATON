import { BASE_URL } from '../../common/BASE_URL';

async function emailValid(reqData) {
    const token = localStorage.getItem('token');
    // console.log('emailValid');
    try {
        const data = await fetch(BASE_URL + '/post', {
            method: 'POST',
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

export default emailValid;
