// SignInContainer 함수형 컴포넌트를 생성
// 해당 컴포넌트는 InputBox 컴포넌트를 2개 포함
// SignInContainer 컴포넌트를 기본 값으로 내보내기
// 
import React from 'react'
import InputBox, { IdInputBox, PasswordInputBox } from './InputBox';
import './style.css';
import './common.css';


export default function SignInContainer() {
    return (
        <>
        <InputBox label="아이디" type="text" placeholder="아이디를 입력하세요." />
        <InputBox label="비밀번호" type="password" placeholder="비밀번호를 입력하세요." />
        </>
    );
}


// 꼬임

// export default function SignInContainer() {

//     const InputBoxComponents = InputBoxes.map((item, index) => <InputBox key={index} {...item} />)

//     return (
//         <>
//             {/* <InputBox label="아이디" type="text" placeholder="아이디를 입력하세요." />
//             <InputBox label="비밀번호" type="password" placeholder="비밀번호를 입력하세요." /> */}
//         {/* <IdInputBox /> */}
//         {/* <PasswordInputBox /> */}

//             {/* <InputBox label='아이디' type='text' placeholder='아이디를 입력하세요.' buttonTitle='중복 확인' />
//             <InputBox label='비밀번호' type='password' placeholder='비밀번호를 입력하세요.' />
//             <InputBox label='비밀번호 확인' type='password' placeholder='비밀번호를 입력하세요.' />
//             <InputBox label='이메일' type='text' placeholder='이메일을 입력하세요.' buttonTitle='이메일 인증' />
//             <InputBox label='인증번호' type='text' placeholder='인증번호 4자리를 입력하세요.' buttonTitle='인증 확인'/> */}
//         </>
//     );
// }


