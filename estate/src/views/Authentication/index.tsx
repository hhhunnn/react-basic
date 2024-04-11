import React, { useState } from 'react'
import './style.css';

type AuthPage = 'sign-in' | 'sign-up';

// 함수값 결정 화살표
interface Props {
  onLinkClickHandler: () => void
}

// contents 제외
function SignIn({ onLinkClickHandler }: Props) {
  const onSignInButtonClickHandler = () => {

  };

  return(
    <div className='authentication-contents'>
      <div className='authentication-input-container'></div>
      <div className='authentication-button-container'>
        <div className="primary-button full-width" onClick={onSignInButtonClickHandler}>로그인</div>
        <div id="sign-up-link" className="text-link" onClick={onLinkClickHandler}>회원가입</div>
      </div>
      <div className='short-divider'></div>
      <div className='authentication-sns-container'></div>
    </div>

  )
}

function SignUp ({ onLinkClickHandler }: Props) {

  const onSignUpButtonClickHandler = () => {

  }

  return (
    <div className='authentication-contents'>
      <div className='authentication-sns-container'></div>
      <div className='short-divider'></div>
      <div className='authentication-input-container'></div>
      <div className='authentication-button-container'>
        <div className="primary-button full-width" onClick={onSignUpButtonClickHandler}>회원가입</div>
        <div id="sign-up-link" className="text-link" onClick={onLinkClickHandler}>로그인</div>
      </div>
    </div>
  )
}

export default function Authentication() {

  // 컴포넌트 안 바로 밑에 작성되어야함(훅 함수)
  const [page, setPage] = useState<AuthPage>('sign-in');

  // 회원가입 링크 클릭 시 페이지 상태 변경
  const onLinkClickHandler = () => {
    if (page === 'sign-in') setPage('sign-up');
    else setPage('sign-in');
  };

  const AuthenticationContents = 
    page === 'sign-in' ? 
      <SignIn onLinkClickHandler={onLinkClickHandler} /> : 
      <SignUp onLinkClickHandler={onLinkClickHandler} />;

  return (
    <div id="authentication-wrapper">
      <div className="authentication-image-box"></div>
      <div className="authentication-box">
        <div className="authentication-container">
          <div className="authentication-title h1">{'임대 주택 가격서비스'}</div>
          { AuthenticationContents }
        </div>
      </div>
    </div>
  )
}
