import React, { useRef } from 'react';
import styled from 'styled-components';
import UploadHeader from '../../components/header/UploadHeader';
import ProfileImg from '../../components/profileImg/ProfileImg';
import UploadButton from '../../components/uploadButton/UploadButton';

const Test = styled.div`
    width: 390px;
`;
const PostUploadMain = styled.main`
    display: flex;
    gap: 12px;
    padding: 68px 16px;
`;

const PostPreview = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const PostUploadForm = styled.form`
    label {
        position: fixed;
        bottom: 16px;
        right: 16px;
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

    ::placeholder {
        color: var(--sub-border);
    }
    :focus,
    :active {
        outline: none;
    }
`;

const ImageList = styled.ul`
    min-width: 520px;
    display: flex;
    flex: 0 0 304px;
    gap: 8px;
`;

const ImageItem = styled.li`
    position: relative;
    flex-basis: 304px;

    img {
        width: max(168px, 100%);
        position: relative;
        background: var(--sub-border);
        border-radius: 10px;
    }

    button {
        position: absolute;
        top: 6px;
        right: 6px;
        width: 22px;
        height: 22px;
        border: none;
        background: url('/assets/icon/icon-delete.png') no-repeat center/22px 22px transparent;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        cursor: pointer;
    }
`;

export default function PostUpload() {
    // textarea 자동높이
    const txtRef = useRef();
    const handleResize = () => {
        txtRef.current.style.height = 'auto'; //height 초기화
        txtRef.current.style.height = txtRef.current.scrollHeight + 'px';
    };

    return (
        <>
            <UploadHeader />
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

                        <UploadButton radius="28px" size="50px" bg="var(--main-color)" />
                    </PostUploadForm>

                    <ImageList>
                        {/* 개수에 따른 배치는 JS로 컨트롤 */}
                        <ImageItem>
                            <img src="/assets/post-img-example.png" alt="" />
                            <button type="button"></button>
                        </ImageItem>
                    </ImageList>
                </PostPreview>
            </PostUploadMain>
        </>
    );
}
