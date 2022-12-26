import InlineProfileInfo from '../inlineProfileInfo/InlineProfileInfo';
import CustomButton from '../customButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Follow from '../../pages/follow/FollowAPI';
import UnFollow from '../../pages/follow/UnFollowAPI';

export default function InlineProfileFollow({ item }) {
  const navigate = useNavigate();
  const [isFollow, setIsFollow] = useState(true);
  const [userProfile, setUserProfile] = useState();
console.log(item)

  async function handleFollow() {
    console.log(item.isfollow);
    console.log('클릭', item.username);

  
    if (item.isfollow) {
      // 언팔로우 API
      const res = await UnFollow(item.accountname);
      console.log('언팔',item.isfollow);
      setUserProfile(res.profile)
    } else {
      // 팔로우 API
      const res = await Follow(item.accountname);
      console.log('팔',item.isfollow);

      setUserProfile(res.profile)
    }
    setIsFollow((prev) => !prev);
  }

// async function changeFollow() {
//     // 팔로우 버튼 기능 (팔로우 토글)
//     setIsFollow((prev) => !prev);
//     if (userProfile.isfollow) {
//       // 언팔로우 API
//       const res = await UnFollow(params.id);
//       setUserProfile(res.profile);
//     } else {
//       // 팔로우 API
//       const res = await Follow(params.id);
//       setUserProfile(res.profile);
//     }
//   }

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
      {isFollow? (
        <CustomButton size="s" state="activ" onClick={handleFollow}>
          취소
        </CustomButton>
      ) : (
        <CustomButton size="s" state="" onClick={handleFollow}>
          팔로우
        </CustomButton>
      )}
    </>
  );
}
