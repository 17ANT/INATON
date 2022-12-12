import React, { useRef } from 'react';
import styled from 'styled-components';

const Header = styled.div`
    width: 100%;
    height: 48px;
    background-color: #a8bc93;
`;

const ProfileImg = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
`;

const PostUploadMain = styled.main`
    display: flex;
    gap: 12px;
    padding: 20px 16px;

    .ir {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }
`;

const PostPreview = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const PostUploadForm = styled.form`
    width: 100%;
`;

const TextForm = styled.textarea`
    width: 100%;
    margin-bottom: 16px;
    border: none;
    resize: none;
    ::placeholder {
        color: #c4c4c4;
    }
    :focus,
    :active {
        outline: none;
    }
`;

const ImageButton = styled.label`
    position: fixed;
    bottom: 16px;
    right: 16px;
    width: 50px;
    height: 50px;
    display: block;
    border-radius: 50%;

    background: url('/assets/icon/icon-upload.png') no-repeat center/28px 28px #a8bc93;
`;

const ImageList = styled.ul`
    max-width: 520px;
    display: flex;
    gap: 8px;
`;

const ImageItem = styled.li`
    position: relative;

    img {
        width: 304px;
        height: 228px;
        /* 이미지 2개 이상: 168px*126px */
        position: relative;
        background: #c4c4c4;
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
    // //textarea 자동높이

    return (
        <>
            <Header />
            <PostUploadMain>
                <h2 className="ir">게시글 작성</h2>
                <ProfileImg src={'/assets/basic-profile-img.png'} alt="프로필 이미지" />
                <PostPreview>
                    <PostUploadForm>
                        <h3 className="ir">게시글을 입력해주세요</h3>

                        <TextForm
                            ref={txtRef}
                            placeholder="게시글 입력하기..."
                            rows={1}
                            onChange={handleResize}
                        ></TextForm>
                        <ImageButton htmlFor="imgUpload">업로드</ImageButton>
                        <input type="file" id="imgUpload" className="ir" />
                    </PostUploadForm>
                    <ImageList>
                        <ImageItem>
                            <img src="/assets/post-img-example.png" alt="" />
                            <button type="button"></button>
                        </ImageItem>
                        <ImageItem>
                            <img src="/assets/post-img-example.png" alt="" />
                            <button type="button"></button>
                        </ImageItem>
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
