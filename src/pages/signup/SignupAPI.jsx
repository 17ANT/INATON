import { BASE_URL } from '../../common/BASE_URL';

async function postSignup(reqData) {
    console.log('postSignup');
    try {
        const data = await fetch(BASE_URL + '/user', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(reqData),
        });
        console.log(data);
        const result = await data.json();
        return result;
    } catch (error) {
        console.log(error.message);
    }
}

export default postSignup;
