import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import postImage from '../../common/ImageUploadAPI';
import UploadHeader from '../../components/header/UploadHeader';
import ImagePreview from '../../components/imagePreview/ImagePreview';
import ProfileImg from '../../components/profileImg/ProfileImg';
import UploadButton from '../../components/uploadButton/UploadButton';

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

export default function PostUpload() {
    const [image, setImage] = useState([]);
    const [content, setContent] = useState([]);

    // textarea 자동높이
    const txtRef = useRef();
    const handleResize = () => {
        txtRef.current.style.height = 'auto'; //height 초기화
        txtRef.current.style.height = txtRef.current.scrollHeight + 'px';
    };

    async function handleImg(e) {
        setImage([...image, URL.createObjectURL(e.target.files[0])]);
        // setImage(image.push(URL.createObjectURL(e.target.files[0])));

        // const res = await postImage(URL.createObjectURL(e.target.files[0]));
        // console.log(res);
    }
    const handleDelete = (e) => {
        // console.log(e.target.previousSibling.src);
        setImage(image.filter((el) => el !== e.target.previousSibling.src));
    };

    return (
        <>
            <UploadHeader
                // state={btnState}
                // onClick={() => {
                //     handleSubmit();
                // }}
                text="업로드"
            />
            <PostUploadMain>
                <h2 className="sr-only">게시글 작성</h2>
                <ProfileImg size="42px" alt="프로필 이미지" />
                <PostPreview>
                    <PostUploadForm>
                        <h3 className="sr-only">게시글을 입력해주세요</h3>

                        <TextForm
                            ref={txtRef}
                            placeholder="게시글 입력하기..."
                            rows={1}
                            onChange={handleResize}
                        ></TextForm>
                        <UploadButton radius="28px" size="50px" bg="var(--main-color)" onChange={handleImg} />
                    </PostUploadForm>

                    <ImageSlider>
                        <ImageList>
                            {image &&
                                image.map((el, index) => (
                                    <ImagePreview size={image.length} src={el} key={index} onClick={handleDelete} />
                                ))}
                        </ImageList>
                    </ImageSlider>
                </PostPreview>
            </PostUploadMain>
        </>
    );
}
