# <span id="top">🏠 INATON</span>

[🔗 배포 링크](https://17ant.github.io/INATON/)

![image](https://user-images.githubusercontent.com/101968934/206655080-7c39e569-bbff-4211-9ab8-0b44ecf2fdd0.png)

---

## 개요

- INATON(인에톤)서비스는 "공간"이라는 키워드를 중심으로 각자만이 알고있는 장소를 공유하는 SNS입니다.
- 서로의 아지트를 공유하며 '좋아요'
  , '댓글'기능을 통해 서로 소통할 수 있습니다.
- 🦁 멋쟁이사자처럼 프론트엔드스쿨 3기 팀 프로젝트로 진행한 INATON입니다.

<details>
<summary>목차</summary>

1. [프로젝트 목표](#goal)
2. [개발 환경 및 배포 URL](#dev)
3. [프로젝트 구조](#tree)
4. [팀원 소개](#member)
5. [역할 분담](#role)
6. [개발 기간 및 이슈 관리](#task)
7. [페이지 기능](#pages)
8. [개발하며 겪은 이슈](#issues)
</details>

---

## <span id="goal">1. 프로젝트 목표</span>

<p align="right"><a href="#top">(Top)</a></p>

## <span id="dev">2. 개발 환경 및 배포 URL</span>

### 개발 환경

- Front : React, styled-components, SCSS
- Back : 제공 API, 카카오맵 API

### 배포 URL

- https://17ant.github.io/INATON/
- 테스트 계정
  > email: `inaton@admin.com`
  > pw: `admin1234`

<p align="right"><a href="#top">(Top)</a></p>

## <span id="tree">3. 프로젝트 구조</span>

- `public/assets/` : 이미지 파일
- `src/common/` : 여러 컴포넌트, 페이지에서 사용하는 공통적인 로직 및 상수(Constants), API
- `src/components/` : 아토믹 디자인 패턴을 적용한 컴포넌트
- `src/pages/` : 여러 컴포넌트를 합성한 페이지
- `src/routes/` : 페이지 라우팅 기능

```
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── assets
│   └── index.html
└── src
    ├── App.jsx
    ├── Contexts
    │   └── SignupContext.jsx
    ├── common
    │   ├── AuthenticationCheck.jsx
    │   ├── BASE_URL.jsx
    │   ├── GetMyInfo.jsx
    │   ├── GetPostDetail.jsx
    │   ├── GetUserPost.jsx
    │   ├── ImageResize.jsx
    │   ├── ImageUploadAPI.jsx
    │   └── PostComment.jsx
    ├── components
    │   ├── Input
    │   │   └── Input.jsx
    │   ├── comment
    │   │   ├── Comment.jsx
    │   │   ├── CommentReportAPI.jsx
    │   │   ├── CommentsDeleteAPI.jsx
    │   │   ├── CommentsListAPI.jsx
    │   │   └── CommentsWriteAPI.jsx
    │   ├── customButton
    │   │   └── CustomButton.jsx
    │   ├── errorMessage
    │   │   └── ErrorMessage.jsx
    │   ├── feedList
    │   │   └── FeedList.jsx
    │   ├── followCount
    │   │   └── FollowCount.jsx
    │   ├── header
    │   │   ├── BasicHeader.jsx
    │   │   ├── ChatHeader.jsx
    │   │   ├── CustomMainHeader.jsx
    │   │   └── UploadHeader.jsx
    │   ├── homePost
    │   │   ├── DeleteLikeAPI.jsx
    │   │   ├── HomePost.jsx
    │   │   ├── LikeAPI.jsx
    │   │   └── PostReportAPI.jsx
    │   ├── imageButton
    │   │   └── ImageButton.jsx
    │   ├── imagePreview
    │   │   └── ImagePreview.jsx
    │   ├── imgSlider
    │   │   └── ImgSlider.jsx
    │   ├── inLineProfileFollow
    │   │   └── InlineProfileFollow.jsx
    │   ├── inlineProfileInfo
    │   │   └── InlineProfileInfo.jsx
    │   ├── map
    │   │   ├── MapInline.jsx
    │   │   ├── MapModal.jsx
    │   │   ├── MapPost.jsx
    │   │   ├── MapSearch.jsx
    │   │   ├── map.css
    │   │   └── page.css
    │   ├── navBar
    │   │   └── NavBar.jsx
    │   ├── profileImg
    │   │   └── ProfileImg.jsx
    │   ├── uploadButton
    │   │   └── UploadButton.jsx
    │   ├── userInfoInput
    │   │   └── UserInfoInput.jsx
    │   └── userInfoText
    │       └── UserInfoText.jsx
    ├── index.js
    ├── pages
    │   ├── LoginEmail
    │   │   ├── LoginAPI.jsx
    │   │   └── LoginEmail.jsx
    │   ├── NotFound
    │   │   └── NotFound.jsx
    │   ├── chatList
    │   │   └── ChatList.jsx
    │   ├── chatRoom
    │   │   └── ChatRoom.jsx
    │   ├── follow
    │   │   ├── FollowAPI.jsx
    │   │   ├── Follower.jsx
    │   │   ├── FollowerAPI.jsx
    │   │   ├── Following.jsx
    │   │   ├── FollowingAPI.jsx
    │   │   └── UnFollowAPI.jsx
    │   ├── home
    │   │   ├── FeedAPI.jsx
    │   │   ├── Home.jsx
    │   │   └── SearchAPI.jsx
    │   ├── login
    │   │   └── Login.jsx
    │   ├── myProfile
    │   │   ├── GetProfileAPI.jsx
    │   │   ├── MyProfile.jsx
    │   │   └── MyProfileFeedAPI.jsx
    │   ├── postDetail
    │   │   ├── PostDeleteAPI.jsx
    │   │   └── PostDetail.jsx
    │   ├── postModify
    │   │   ├── PostModify.jsx
    │   │   └── PostModifyAPI.jsx
    │   ├── postUpload
    │   │   ├── PostUpload.jsx
    │   │   └── PostUploadAPI.jsx
    │   ├── profileModification
    │   │   ├── AccountValidAPI.jsx
    │   │   ├── ImageAPI.jsx
    │   │   ├── ProfileModification.jsx
    │   │   └── ProfileModificationAPI.jsx
    │   ├── signup
    │   │   ├── AccountValidAPI.jsx
    │   │   ├── EmailValidAPI.jsx
    │   │   ├── ImageAPI.jsx
    │   │   ├── Signup.jsx
    │   │   ├── SignupAPI.jsx
    │   │   └── SignupProfile.jsx
    │   ├── splash
    │   │   └── Splash.jsx
    │   └── yourProfile
    │       ├── ProfileAPI.jsx
    │       └── YourProfile.jsx
    └── routes
        └── Router.jsx
```

---

<p align="right"><a href="#top">(Top)</a></p>

## <span id="member">4. 팀원 소개</span>

|                                                           **김세원**                                                            |                                                             **김지현**                                                              |                                                            **백경현**                                                            |                                                               **장수민**                                                               |
| :-----------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars.githubusercontent.com/u/101968934?v=4" height=150 width=150> <br/> @gajua](https://github.com/gajua) | [<img src="https://avatars.githubusercontent.com/u/105181266?v=4" height=150 width=150> <br/> @jhyun-k](https://github.com/jhyun-k) | [<img src="https://avatars.githubusercontent.com/u/96777064?v=4" height=150 width=150> <br/> @baekg6](https://github.com/baekg6) | [<img src="https://avatars.githubusercontent.com/u/29765842?v=4" height=150 width=150> <br/> @jangsumin](https://github.com/jangsumin) |

---

<p align="right"><a href="#top">(Top)</a></p>

## <span id="role">5. 역할 분담</span>

<img src="https://media.discordapp.net/attachments/1045252441756684368/1059725170677387264/2023-01-03_3.45.33.png?width=969&height=670" height=450 width=650>

### 공통

- API를 활용한 로그인, 회원가입 페이지의 기능 구현
- 프로젝트 도중 발생한 이슈를 즉각적으로 의논하여 처리
- 개발 후반부에는 Live Share 확장을 사용하여 프로젝트 진행을 가속화

### 김세원

- 유저검색 UI 마크업 및 기능 구현
- 로그인, 회원가입 페이지 UI 마크업

### 김지현

- API 활용하여 팔로우/팔로잉 페이지 및 관련 컴포넌트 구현
- 네비바 및 헤더 제작
- 404 페이지 마크업
- 첫 만남 시 냉장고 추천

### 백경현

- 게시글 상세/ 업로드 페이지 및 관련 컴포넌트 구현
- 지도 API 활용을 위한 데이터 처리 및 구현
- 이미지 압축, API 호출 개선을 통 성능 최적화

### 장수민

- 내 프로필, 상대 프로필, 프로필 수정 페이지 마크업 및 관련 컴포넌트 구현
- react-confirm-alert 라이브러리를 활용한 confirm 기능 획일화

---

<p align="right"><a href="#top">(Top)</a></p>

## <span id="task">6. 개발 기간 및 작업 관리</span>

- 전체 개발 기간 : 2022-12-09 ~ 2023-01-04

---

<p align="right"><a href="#top">(Top)</a></p>

## <span id="pages">7. 페이지 기능</span>

## 1) 홈

|                           Splash                            |                                                                         로그인                                                                         |                                                             회원가입                                                             |
| :---------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img height="540px"  src="https://i.imgur.com/8esgAUW.gif"> | <img height="540px" src="https://media.discordapp.net/attachments/1045252441756684368/1059717287608864849/chrome_X3D40XQiPD.gif?width=310&height=670"> | <img height="540px"  src="https://cdn.discordapp.com/attachments/1045252441756684368/1059711139602255902/chrome_92BGrLs6PS.gif"> |

|                                                                         홈 피드                                                                         |                                                                          검색                                                                           |                                                           채팅 페이지                                                            |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------- |
| <img height="540px"  src="https://media.discordapp.net/attachments/1045252441756684368/1059720760886837358/chrome_gJqSjq7JiX.gif?width=310&height=670"> | <img height="540px"  src="https://media.discordapp.net/attachments/1045252441756684368/1059718125450428466/chrome_1CRB95jC9P.gif?width=310&height=670"> | <img height="540px"  src="https://cdn.discordapp.com/attachments/1045252441756684368/1059721433120514118/chrome_pHDAHyMzlC.gif"> | 🔗[댓글 작성](https://cdn.discordapp.com/attachments/1045252441756684368/1059728743859494983/chrome_XoiGNsezQH.gif) |

## 2) 게시글

|                                                           게시글 작성                                                            |                                                           게시글 수정                                                            |                        게시글 삭제                         |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------: |
| <img height="540px"  src="https://cdn.discordapp.com/attachments/1045252441756684368/1059726264396685332/chrome_uds4ntAfvX.gif"> | <img height="540px"  src="https://cdn.discordapp.com/attachments/1045252441756684368/1059727083137409064/chrome_oEBXFJfsN8.gif"> | <img height="540px" src="https://i.imgur.com/4d0qoLx.gif"> |

|                         게시글 신고                         |                          댓글 작성                          |                     댓글 신고 및 삭제                      |
| :---------------------------------------------------------: | :---------------------------------------------------------: | :--------------------------------------------------------: |
| <img height="540px" src="https://i.imgur.com/64iOL7w.gif" > | <img height="540px"  src="https://i.imgur.com/TAmWxhM.gif"> | <img height="540px" src="https://i.imgur.com/OZuGrze.gif"> |

## 3) 프로필

|                                                             팔로워                                                              |                                                             팔로잉                                                              |                                                            로그아웃                                                             |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img height="540px" src="https://cdn.discordapp.com/attachments/1045252441756684368/1059738882528251936/chrome_7SMhBrYWmG.gif"> | <img height="540px" src="https://cdn.discordapp.com/attachments/1045252441756684368/1059719008087187466/chrome_ep5DhNmm8q.gif"> | <img height="540px" src="https://cdn.discordapp.com/attachments/1045252441756684368/1059738077318357003/chrome_W73C6vOqQ7.gif"> |

|                                                           프로필 설정                                                           |                                                           유저 프로필                                                           |                                                           프로필 수정                                                           |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img height="540px" src="https://cdn.discordapp.com/attachments/1045252441756684368/1059716048141684847/chrome_BG8XL6qHH3.gif"> | <img height="540px" src="https://cdn.discordapp.com/attachments/1045252441756684368/1059740776382349362/chrome_YJOY8W81CA.gif"> | <img height="540px" src="https://cdn.discordapp.com/attachments/1045252441756684368/1059737334171570256/chrome_GPqV5K3UQi.gif"> |

---

<p align="right"><a href="#top">(Top)</a></p>

## <span id="issues">8. 트러블 슈팅</span>

### 1. 경로 이슈

- 이슈: `public/assets` 폴더 이미지 상대 경로 접근 오류
- 분석: 브라우저에서 `public/index.html` 을 기준으로 보여지기 때문에 상대 경로 접근 불가
- 해결: 이미지 경로를 환경변수 PUBLIC_URL을 사용하여 작성

```javascript
src = {`${process.env.PUBLIC_URL}/assets/basic-profile.png`}
```

### 2. 비동기 렌더링

```javascript
function handlePwValid() {
  //비밀번호 validation check
  const reg = new RegExp('^.*(?=.{8,})(?=.*[0-9])(?=.*[a-zA-Z]).*$');

  if (reg.test(pwRef.current.value)) {
    setPwMsg('');
  } else {
    setPwMsg('* 영어, 숫자포함해서 8자 이상 입력해주세요');
  }

  if (emailMsg === '* 사용 가능한 이메일 입니다.' && pwMsg === '') {
    setBtnState('');
  } else {
    setBtnState('disabled');
  }
}
```

- 이슈: setPwMsg를 이용한 후, pwMsg 값이 변경이 처리되지 않음
- 분석: 리렌더링이 비동기로 진행되어, pwMsg가 변경이 되기 전에 setBtnState 판별
- 해결: useEffect를 이용하여, 오류 메시지가 변경될 때 버튼의 상태를 변경

```javascript=
useEffect(()=>{
     if (emailMsg === '* 사용 가능한 이메일 입니다.' && pwMsg === '') {
            setBtnState('');
        } else {
            setBtnState('disabled');
        }
}, [pwMsg])
```

### 3. Auth props 전달

- 이슈: Local storage의 token을 이용하여 Auth를 갱신하는데 갱신 되지 않음
- 분석: 페이지와 라우터에서 각각 auth를 선언하여 값이 동기화되지 않음
- 해결: props를 이용하여 router에서 각 페이지 컴포넌트로 `auth`, `setAuth` 변수를 전달하여 상태 관리

<p align="right"><a href="#top">(Top)</a></p>
