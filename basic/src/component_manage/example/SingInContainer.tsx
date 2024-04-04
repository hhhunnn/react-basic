import React from 'react'
import './style.css';
import './common.css';
import InputBox from './InputBox';

export default function SignUpContainer() {
    return (
        <>
            <InputBox label="이메일" type="text" placeholder="이메일 주소를 입력해주세요." button="이메일 인증"/>
            
        </>
    );
}

