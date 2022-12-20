import { BASE_URL } from '../../common/BASE_URL';

async function getFollower(reqData) {
  const token = localStorage.getItem('token');
  console.log(token);

  try {
    const data = await fetch(BASE_URL + '/profile/:accountname/follower', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    console.log(data);
    const json = await data.json();
    console.log(json);
    renderFollowList(json);

    const renderFollowList = (followList) => {
      document.querySelector('#followList').innerHTML =
        JSON.stringify(followList);
    };
  } catch (error) {
    console.log(error.message);
  }
}

export default getFollower;
