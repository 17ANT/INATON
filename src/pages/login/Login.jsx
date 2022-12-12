import React from 'react';

export default function Login() {
    return <>
    <h2>로그인</h2>
    <form action="">
          <h2>Send Message</h2>
          <div class="inputBox">
            <input type="text" name="" required />
            <span>FullName</span>
          </div>
          <div class="inputBox">
            <input type="text" name="" required />
            <span>Email</span>
          </div>
          <div class="inputBox">
            <input type="submit" value="Send" />
          </div>
        </form>
    <a href="#">이메일로 회원가입</a>
    </>;
}
