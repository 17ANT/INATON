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
4. [역할 분담](#role)
5. [개발 기간 및 이슈 관리](#task)
6. [UI](#ui)
7. [페이지 기능](#pages)
8. [개발하며 겪은 이슈](#issues)
</details>

---

## <span id="goal">1. 프로젝트 목표</span>

<p align="right"><a href="#top">(Top)</a></p>

## <span id="dev">2. 개발 환경 및 배포 URL</span>

### 개발 환경

- Front :
- Back : 제공 API, 카카오맵 API

### 배포 URL

- https://17ant.github.io/INATON/
- 테스트 계정
  > email:
  > pw:

<p align="right"><a href="#top">(Top)</a></p>

## <span id="tree">3. 프로젝트 구조</span>

- public/assets/ : 이미지 파일
- src/common/ : 여러 컴포넌트, 페이지에서 사용하는 공통적인 로직 및 상수(Constants), API
- src/components/ : 아토믹 디자인 패턴을 적용한 컴포넌트
- src/pages/ : 여러 컴포넌트를 합성한 페이지
- src/routes/ : 페이지 라우팅 기능

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

## <span id="role">4. 역할 분담</span>

|                                                           **김세원**                                                            |                                                             **김지현**                                                              |                                                            **백경현**                                                            |                                                               **장수민**                                                               |
| :-----------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars.githubusercontent.com/u/101968934?v=4" height=150 width=150> <br/> @gajua](https://github.com/gajua) | [<img src="https://avatars.githubusercontent.com/u/105181266?v=4" height=150 width=150> <br/> @jhyun-k](https://github.com/jhyun-k) | [<img src="https://avatars.githubusercontent.com/u/96777064?v=4" height=150 width=150> <br/> @baekg6](https://github.com/baekg6) | [<img src="https://avatars.githubusercontent.com/u/29765842?v=4" height=150 width=150> <br/> @jangsumin](https://github.com/jangsumin) |

<img src="https://media.discordapp.net/attachments/1045252441756684368/1059725170677387264/2023-01-03_3.45.33.png?width=969&height=670" height=200 width=350>

---

<p align="right"><a href="#top">(Top)</a></p>

## <span id="role">5. 역할 분담</span>

### 공통

- API를 활용한 로그인, 회원가입 페이지의 기능 구현
- 프로젝트 도중 발생한 이슈를 즉각적으로 의논하여 처리
- 개발 후반부에는 Live Share 확장을 사용하여 프로젝트 진행을 가속화

### 김세원

- 유저검색 UI 마크업 및 기능 구현
- 로그인, 회원가입 페이지 UI 마크업

### 김지현

- ㅇㄹ어ㅏ
-

### 백경현

- 게시글 상세/ 업로드 페이지 및 관련 컴포넌트 구현
- 지도 API 활용을 위한 데이터 처리 및 구현
- 이미지 압축, API 호출 개선을 통하 성능 최적화

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

스플래시, 로그인, 회원가입, 홈, 채팅

## 2) 게시글

게시글 작성, 지도모달, 수정, 삭제, 좋아요, 댓글 삭제/신고

## 3) 프로필:

마이 프로필, 유저 프로필, 팔로워, 팔로잉, 프로필 수정, 로그아웃

---

<p align="right"><a href="#top">(Top)</a></p>

## <span id="issues">7. 트러블 슈팅</span>

1.  이슈 슈팅
    1. 경로 이슈
    2. 렌더링 비동기
    3. auth props
    4. 이미지 용량 문제

=

1. 문제 상황
2. 추측하는 발생 원인
3. 해결 방법
4. 코드

### 경로 이슈

### 비동기 렌더링

### 컴포넌트 사용

<p align="right"><a href="#top">(Top)</a></p>
