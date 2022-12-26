import { BASE_URL } from '../../common/BASE_URL';
import { useContext, useState } from 'react';
import { SignupContext } from './../../Contexts/SignupContext';
import Following from './Following';

async function Follow() {
  console.log(token);
  const [follow, setFollow] = useState(Following.isfollow);
  let { token, accountname } = useContext(SignupContext);

  try {
    // const data = await fetch(BASE_URL + `/profile/${accountname}/follow`, {
    const res = await fetch(BASE_URL + `/profile/heejin/follow`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    console.log('팔로우', res);
    setFollow(res.data.profile.isfollow);
  } catch (err) {
    console.log(err);
  }
}

export default Follow;
