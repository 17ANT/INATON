import React from 'react';
import userPost from '../../common/GetUserPost';

export default function TestPage() {
    async function getPost() {
        const postList = await userPost();
        console.log(postList);
    }
    return (
        <>
            <button onClick={getPost}>Click me</button>
            <ul></ul>
        </>
    );
}
