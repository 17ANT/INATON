import { BASE_URL } from '../../common/BASE_URL';

async function putProfile(reqData) {
  try {
    const token = localStorage.getItem('token');
    const data = await fetch(BASE_URL + '/user', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(reqData),
    });
    const result = await data.json();
    console.log(result.user.accountname);
    localStorage.setItem('accountname', result.user.accountname);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default putProfile;
