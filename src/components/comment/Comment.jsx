import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InlineProfileInfo from '../inlineProfileInfo/InlineProfileInfo';

const CommentContainer = styled.li`
    position: relative;
    width: 358px;
`;

const CommentContent = styled.p`
    margin-left: 48px;
    margin-right: 18px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
`;

const MoreBtn = styled.button`
    position: absolute;
    top: 5px;
    right: 0px;
    width: 20px;
    height: 20px;
    background: url('assets/icon/icon-more-vertical.png') no-repeat center/20px 20px;
    border: none;
    cursor: pointer;
`;

const ProfileLink = styled(Link)`
    width: fit-content;
`;

export default function Comment({ name, src, time, children }) {
    return (
        <CommentContainer>
            <ProfileLink to="/yourprofile">
                <InlineProfileInfo name={name} img={src} desc={`${time}분전`} state="comment" />
            </ProfileLink>

            <CommentContent>{children}</CommentContent>
            <MoreBtn type="button">
                <span className="sr-only">더보기</span>
            </MoreBtn>
        </CommentContainer>
    );
}

Comment.defaultProps = {
    src: './assets/basic-profile-img.png',
};
