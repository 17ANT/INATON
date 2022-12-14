import React from 'react';
import InlineProfileInfo from '../../components/inlineProfileInfo/InlineProfileInfo';

export default function TestPage() {
    return (
        <div>
            <InlineProfileInfo name="안녕!내 이름은 선바" desc="준비됐어 선? 당연하지 바" state="chat" />
            <InlineProfileInfo name="안녕!내 이름은 선바" desc="준비됐어 선? 당연하지 바" state="post" />
            <InlineProfileInfo name="안녕!내 이름은 선바" desc="준비됐어 선? 당연하지 바" state="follow" />
            <InlineProfileInfo name="안녕!내 이름은 선바" desc="준비됐어 선? 당연하지 바" state="comment" />
        </div>
    );
}
