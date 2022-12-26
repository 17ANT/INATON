import { BASE_URL } from '../../common/BASE_URL';
import { useContext, useState } from 'react';
import { SignupContext } from './../../Contexts/SignupContext';
import Following from './Following';

async function Follow(accountname) {
  const [follow, setFollow] = useState(Following.isfollow);
  const token = localStorage.getItem('token');
  // const accountname = localStorage.getItem('accountname');

  try {
    const data = await fetch(BASE_URL + `/profile/${accountname}/follow`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    console.log(data);

    setFollow(data.profile.isfollow);
  } catch (err) {
    console.log(err);
  }
}

export default Follow;
