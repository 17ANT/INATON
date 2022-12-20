import { BASE_URL } from '../../common/BASE_URL';

async function getFollowing(token, accountname) {
  console.log(token);
  //   const BASE_URL = 'https://mandarin.api.weniv.co.kr';

  try {
    // const data = await fetch(BASE_URL + `/profile/${accountname}/following`, {
    const data = await fetch(BASE_URL + `/profile/heejin/following`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    console.log(data);
    const result = await data.json();
    // JSON.parse(data.json())
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default getFollowing;
