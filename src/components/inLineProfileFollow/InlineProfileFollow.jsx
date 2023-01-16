import InlineProfileInfo from '../inlineProfileInfo/InlineProfileInfo';
import CustomButton from '../customButton/CustomButton';
import { useState } from 'react';
import Follow from '../../pages/follow/FollowAPI';
import UnFollow from '../../pages/follow/UnFollowAPI';
import postAPI from '../../common/PostAPI';

export default function InlineProfileFollow({ item }) {
  const [userProfile, setUserProfile] = useState();

  async function handleFollow() {
    if (item.isfollow) {
      // 언팔로우 API
      console.log('unfollow');
      const res = await UnFollow(item.accountname);
      item.isfollow = !item.isfollow;
      setUserProfile(res.profile);
    } else {
      // 팔로우 API
      // const res = await Follow(item.accountname);
      const res = await postAPI(`profile/${item.accountname}/follow`);
      console.log('follow', res);
      item.isfollow = !item.isfollow;
      setUserProfile(res.profile);
    }
  }
  const accountname = localStorage.getItem('accountname');

  return (
    <>
      <InlineProfileInfo
        accountname={item.accountname}
        img={item.image}
        name={item.username}
        desc={`@ ${item.accountname}`}
        state="follow"
      />
      {accountname !== item.accountname ? (
        item.isfollow ? (
          <CustomButton size="s" state="activ" onClick={handleFollow}>
            취소
          </CustomButton>
        ) : (
          <CustomButton size="s" state="" onClick={handleFollow}>
            팔로우
          </CustomButton>
        )
      ) : (
        <></>
      )}
    </>
  );
}
