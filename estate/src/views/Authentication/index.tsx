import React, { ChangeEvent, useState } from 'react'
import './style.css';
// 절대경로로 지정
import SignInBackground from "assets/image/sign-in-background.png"
import SignUpBackground from "assets/image/sign-up-background.png"
import InputBox from 'components/Inputbox';

type AuthPage = 'sign-in' | 'sign-up';

interface SnsContainerProps {
  title: string;
}

function SnsContainer({ title }: SnsContainerProps) {

  const onSnsButtonClickHandler = (type: 'kakao' | 'naver') => {
    alert(type);
  };

  return (
    <div className="authentication-sns-container">
      <div className="sns-container-title label">{title}</div>
      <div className="sns-button-container">

        {/* 에러 : event함수는 매개변수 형식이 호환되지 않음 */}
        {/* <div className="sns-button kakao-button" onClick={onSnsButtonClickHandler}></div> */}
        {/* 호출해야하기 때문에 onSnsButtonClickHandler뒤에 ('kakao') 작성해서 각각 호출해줘야함 */}
        <div className="sns-button kakao-button" onClick={() => onSnsButtonClickHandler('kakao')}></div>
        <div className="sns-button naver-button" onClick={() => onSnsButtonClickHandler('naver')}></div>
      </div>
    </div>
  );
}

// 함수값 결정 화살표
interface Props {
  onLinkClickHandler: () => void
}

// contents 제외
function SignIn({ onLinkClickHandler }: Props) {

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  }
  const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const onSignInButtonClickHandler = () => {
    alert(`아이디 : ${id} / 비밀번호 : ${password}`);
    setId('');
    setPassword('');
  };

  return(
    <div className="authentication-contents">
      <div className="authentication-input-container">
        <InputBox label="아이디" type="text" value={id} placeholder="아이디를 입력해주세요." onChangeHandler={onIdChangeHandler} />
        <InputBox label="비밀번호" type="password" value={password} placeholder="비밀번호를 입력해주세요." onChangeHandler={onPasswordChangeHandler} />
      </div>
      <div className='authentication-button-container'>
        <div className="primary-button full-width" onClick={onSignInButtonClickHandler}>로그인</div>
        <div id="sign-up-link" className="text-link" onClick={onLinkClickHandler}>회원가입</div>
      </div>
      <div className='short-divider'></div>
      <SnsContainer title="SNS 로그인" />
    </div>

  )
}

function SignUp ({ onLinkClickHandler }: Props) {

  const onSignUpButtonClickHandler = () => {

  }

  return (
    <div className='authentication-contents'>
      <SnsContainer title="SNS 회원가입" />
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

      const imageBoxStyle = { backgroundImage: `url(${page === 'sign-in' ? SignInBackground : SignUpBackground})` };

  return (
    <div id="authentication-wrapper">
    <div className="authentication-image-box" style={ imageBoxStyle }></div>
      <div className="authentication-box">
        <div className="authentication-container">
          <div className="authentication-title h1">{'임대 주택 가격서비스'}</div>
          { AuthenticationContents }
        </div>
      </div>
    </div>
  )
}
