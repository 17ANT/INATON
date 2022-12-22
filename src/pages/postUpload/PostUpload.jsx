import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import postImage from '../../common/ImageUploadAPI';
import UploadHeader from '../../components/header/UploadHeader';
import ImagePreview from '../../components/imagePreview/ImagePreview';
import ProfileImg from '../../components/profileImg/ProfileImg';
import UploadButton from '../../components/uploadButton/UploadButton';
import uploadPost from './PostUploadAPI';

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
    const txtRef = useRef();
    const testImg =
        'data:image/jpeg;base64,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';

    const [image, setImage] = useState([testImg]);
    const [content, setContent] = useState([]);
    const [btnState, setBtnState] = useState('disabled');

    useEffect(() => {
        // console.log(txtRef.current.value);
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

    async function handleImg(e) {
        setImage([...image, URL.createObjectURL(e.target.files[0])]);
        // setImage(image.push(URL.createObjectURL(e.target.files[0])));

        // const res = await postImage(URL.createObjectURL(e.target.files[0]));
        // console.log(res);
    }

    async function handleSubmit() {
        const post = {
            post: {
                content: content,
                image: image.join(', '),
            },
        };
        const result = await uploadPost(post);
        console.log(result);
    }

    const handleDelete = (e) => {
        // console.log(e.target.previousSibling.src);
        setImage(image.filter((el) => el !== e.target.previousSibling.src));
    };

    return (
        <>
            <UploadHeader
                state={btnState}
                onClick={() => {
                    handleSubmit();
                }}
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
