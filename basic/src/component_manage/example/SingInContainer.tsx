import React from 'react'
import './style.css';
import './common.css';
import InputBox, { InputBoxProps } from './InputBox';

const InputBoxes: InputBoxProps[] = [
    {
        label: '아이디',
        type: 'text',
        placeholder: '아이디를 입력하세요.',
        buttonTitle: '중복확인'
    },
    {
        label: '비밀번호',
        type: 'password',
        placeholder: '비밀번호를 입력하세요.'
    },
    {
        label: '비밀번호확인',
        type: 'password',
        placeholder: '비밀번호를 입력하세요.'
    },
    {
        label: '이메일',
        type: 'text',
        placeholder: '이메일을 입력하세요.',
        buttonTitle: '이메일 인증'
    },
    {
        label: '인증번호',
        type: 'text',
        placeholder: '인증번호 4자리를 입력하세요.',
        buttonTitle: '인증 확인'
    }
]


export default function SignInContainer() {

    const InputBoxComponents = 
        InputBoxes.map((item, index) => <InputBox key={index} {...item} />)

    return (
        <>
            {InputBoxComponents}
        </>
    );
}


// 꼬임

// export default function SignInContainer() {
//     return (
//         <>
//             {/* <InputBox label="이메일" type="text" placeholder="이메일 주소를 입력해주세요." button="이메일 인증"/>*/}
//             <InputBox label='아이디' type='text' placeholder='아이디를 입력해주세요.' buttonTitle='중복확인' />
//             <InputBox label='비밀번호' type='password' placeholder='비밀번호를 입력해주세요.' />
            
//         </>
//     );
// }

// export default function SignUpContainer() {
//     return (
//         <>
//             {/* <InputBox label="이메일" type="text" placeholder="이메일 주소를 입력해주세요." button="이메일 인증"/>*/}
//             <InputBox label='아이디' type='text' placeholder='아이디를 입력해주세요.' buttonTitle='중복확인' />
//             <InputBox label='비밀번호' type='password' placeholder='비밀번호를 입력해주세요.' />
            
//         </>
//     );
// }

