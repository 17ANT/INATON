import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BASE_URL } from '../../common/BASE_URL';
import postImage from '../../common/ImageUploadAPI';
import UploadHeader from '../../components/header/UploadHeader';
import ImagePreview from '../../components/imagePreview/ImagePreview';
import ProfileImg from '../../components/profileImg/ProfileImg';
import UploadButton from '../../components/uploadButton/UploadButton';
import putPost from './PostModifyAPI';
import getUser from '../myProfile/GetProfileAPI';
import getPost from '../../common/GetPostDetail';
import MapInline from '../../components/map/MapInline';
import MapModal from '../../components/map/MapModal';
import { hasMap } from '../../components/homePost/HomePost';

const PostUploadMain = styled.main`
  width: 100%;
  display: flex;
  gap: 12px;
  padding: 68px 16px;
`;

const PostPreview = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PostUploadForm = styled.form`
  label {
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 50;
    box-shadow: 0px 0px 4px #646464;
  }
`;
const TextForm = styled.textarea`
  width: 100%;
  padding: 0 16px;
  margin-bottom: 16px;
  border: none;
  resize: none;
  font-family: var(--font-family);
  font-size: 14px;
  line-height: 18px;
  white-space: break-all;
  ::placeholder {
    color: var(--sub-border);
  }
  :focus,
  :active {
    outline: none;
  }
`;

const MapButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: url('https://17ant.github.io/INATON/assets/icon/icon-map.png') no-repeat center/ 24px 24px;
  background-color: var(--main-color);
  border: none;

  box-shadow: 0px 0px 4px #646464;
  cursor: pointer;
  position: relative;
  width: 50px;
  height: 50px;
`;

const ButtonDiv = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  z-index: 50;
  gap: 24px;
`;

const ImageSlider = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
`;

const ImageList = styled.ul`
  width: 520px;
  display: flex;
  flex: 1 0 304px;
  justify-content: start;
  gap: 8px;
`;

function prepImage(img) {
  if (img) {
    const result = img.split(',');
    return result;
  } else {
    return !!img;
  }
}

export default function PostModify() {
  const params = useParams();
  const txtRef = useRef();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const accountname = localStorage.getItem('accountname');

  const [postData, setPostData] = useState({});
  const [content, setContent] = useState([]);
  const [image, setImage] = useState([]);
  const [map, setMap] = useState({});
  const [btnState, setBtnState] = useState('disabled');
  const [user, setUser] = useState({});

  const [open, setOpen] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    handleResize();
    if (content) {
      setBtnState('');
    } else {
      setBtnState('disabled');
    }
  }, [content]);

  // textarea 자동높이
  const handleResize = () => {
    txtRef.current.style.height = 'auto'; //height 초기화
    txtRef.current.style.height = txtRef.current.scrollHeight + 'px';
    setContent(txtRef.current.value);
  };

  async function getData() {
    const userInfo = await getUser(token, accountname);
    setUser(userInfo.profile);
    const postInfo = await getPost(params.post_id);

    if (accountname !== postInfo.post.author.accountname) {
      navigate('/home');
    }

    setPostData(postInfo.post);
    if (prepImage(postInfo.post.image)) {
      setImage(prepImage(postInfo.post.image));
    }

    const contents = postInfo.post.content;
    if (hasMap(contents)) {
      // 지도 정보가 있을 때
      const objContents = JSON.parse(contents);
      setMap(objContents.map);
      setContent(objContents.content);
    } else {
      // 지도 정보가 없을 때
      setContent(contents);
    }
  }

  async function handleImg(e) {
    if (image.length === 3 && e.target.files) {
      alert('이미지는 3개까지 업로드 가능합니다.');
    } else if (e.target.files[0]) {
      // 이미지 데이터를 API를 이용하여 서버에 업로드

      const res = await postImage(e.target.files[0]);
      if (res.message) {
        alert(res.message);
      } else {
        setImage([...image, BASE_URL + '/' + res.filename]);
      }
    }
  }

  async function handleSubmit() {
    let post = {};
    if (Object.keys(map).length) {
      const newContent = JSON.stringify({ content: content, map: map });
      post = {
        post: {
          content: newContent,
          image: image.join(','),
        },
      };
    } else {
      post = {
        post: {
          content: content,
          image: image.join(','),
        },
      };
    }
    putPost(post, params.post_id);
    navigate(`/profile`);
  }

  const handleDelete = (e) => {
    setImage(image.filter((el) => el !== e.target.previousSibling.src));
  };

  const handleMap = (e) => {
    setOpen(true);
  };

  return (
    <>
      <UploadHeader
        state={btnState}
        onClick={() => {
          handleSubmit();
        }}
        text="수정"
      />
      {user && (
        <>
          <PostUploadMain>
            <h2 className="sr-only">게시글 작성</h2>
            <ProfileImg size="42px" alt="프로필 이미지" src={user.image} />
            <PostPreview>
              <PostUploadForm>
                <h3 className="sr-only">게시글을 입력해주세요</h3>

                <TextForm
                  ref={txtRef}
                  placeholder="게시글 입력하기..."
                  rows={1}
                  onChange={handleResize}
                  value={content}
                ></TextForm>
              </PostUploadForm>

              <ButtonDiv>
                <UploadButton radius="28px" size="50px" bg="var(--main-color)" onChange={handleImg} />
                <MapButton type="button" onClick={handleMap} />
              </ButtonDiv>
              <ImageSlider>
                <ImageList>
                  {image &&
                    image.map((el, index) => (
                      <ImagePreview size={image.length} src={el} key={index} onClick={handleDelete} />
                    ))}
                </ImageList>
              </ImageSlider>
              {!!Object.keys(map).length && <MapInline place={map}></MapInline>}
            </PostPreview>
          </PostUploadMain>

          <MapModal open={open} setOpen={setOpen} select={map} setSelect={setMap} />
        </>
      )}
    </>
  );
}
