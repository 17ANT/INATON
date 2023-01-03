# INATON

![image](https://user-images.githubusercontent.com/101968934/206655080-7c39e569-bbff-4211-9ab8-0b44ecf2fdd0.png)

오늘 점심 뭐 드시나요 -jasmin-

내일 두시 달콤한 거짓말에서

---

딸기마켓

- 배포 링크
- 개요
- 팀원 구성

> 목차

1. 프로젝트 목표
2. 개발 환경 및 배포 url
3. 프로젝트 구조
4. 역할분담
5. 개발 기간 및 작업 관리

---

```
├── README.md
├── README.old.md
├── assets
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
