import { BASE_URL } from '../../common/BASE_URL';

async function accountValid(reqData) {
    // console.log('account valid check');
    try {
        const data = await fetch(BASE_URL + '/user/accountnamevalid', {
            method: 'POST',
            headers: {
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

export default accountValid;
