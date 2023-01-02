import { BASE_URL } from '../../common/BASE_URL';
import { useContext, useState } from 'react';
import Following from './Following';

async function Follow(accountname) {
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
    const res = await data.json();
    return res;
  } catch (err) {
    console.log(err);
  }
}

export default Follow;
