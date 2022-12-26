import InlineProfileInfo from '../inlineProfileInfo/InlineProfileInfo';
import CustomButton from '../customButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Follow from '../../pages/follow/FollowAPI';
import UnFollow from '../../pages/follow/UnFollowAPI';

export default function InlineProfileFollow({ item }) {
  const navigate = useNavigate();
  //   const [isFollow, setIsFollow] = useState(true);
  const [userProfile, setUserProfile] = useState();

  async function handleFollow() {
    if (item.isfollow) {
      // 언팔로우 API
      const res = await UnFollow(item.accountname);
      item.isfollow = !item.isfollow;
      setUserProfile(res.profile);
    } else {
      // 팔로우 API
      const res = await Follow(item.accountname);
      item.isfollow = !item.isfollow;
      setUserProfile(res.profile);
    }
  }
  const accountname = localStorage.getItem('accountname');

  return (
    <>
      <InlineProfileInfo
        img={item.image}
        name={item.username}
        desc={item.accountname}
        state="follow"
        onClick={() => {
          navigate(`/yourprofile/${item.accountname}`);
        }}
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