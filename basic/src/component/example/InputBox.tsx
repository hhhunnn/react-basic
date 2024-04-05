// IdInputBox, PasswordInputBox 함수형 컴포넌트 생성
// 각각의 컴포넌트는 모두 export 가능하도록 내보내기
// 

export function IdInputBox() {

    const label = '아이디';
    const type = 'text';
    const placeholder = '아이디를 입력해주세요';

    return (
        <div className="input-box">
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input className="input" type={type} placeholder={placeholder} />
            </div>
            <div className="input-message"></div>
        </div>
    );

}

export function PasswordInputBox() {
    
    const label = '비밀번호';
    const type = 'password';
    const placeholder = '비밀번호를 입력해주세요';

    return (
        <div className="input-box">
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input className="input" type={type} placeholder={placeholder} />
            </div>
            <div className="input-message"></div>
        </div>
    );

}

// interface Props {
//     label: string;
//     // type: stirng;
//     // SignInContainer.tsx에서 password를 잘못적었을때 빨간줄 그어줌
//     // -> 원래는 빨간줄 안되는데 실행했을때 password가 실행이 안됨
//     type: 'text' | 'password';
//     placeholder: string;
//     buttonTitle?: string;
// }
export interface InputBoxProps {

    label: string;
    type: 'text' | 'password';
    placeholder: string;
    buttonTitle?: string;
}

/*
export default function InputBox({ label, type, placeholder }: Props) {

    // interface로 따로 선언해줌
    // const label = '비밀번호';
    // const type = 'password';
    // const placeholder = '비밀번호를 입력해주세요';

return (
    <div className="input-box">
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input className="input" type={type} placeholder={placeholder} />
            </div>
            <div className="input-message"></div>
    </div>
    )
}
*/

interface Props {
    label: string;
    type: 'text' | 'password';
    placeholder: string;
}

export default function InputBox({ label, type, placeholder }: Props) {
    
    return (
        <div className="input-box">
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input className="input" type={type} placeholder={placeholder} />
            </div>
            <div className="input-message"></div>
        </div>
    );

}

/*
export default function InputBox({ label, type, placeholder, buttonTitle }: Props) {
    // if문을 사용시 코드가 중복되기 때문에 좋은 방법은 아님 (if-return(); return();이 사용되기 때문)
    return (
        <div className="input-box">
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input
                    className="input"
                    type={type}
                    placeholder={placeholder}
                />
                {buttonTitle && 
                <div className="input-disable-button">
                    {buttonTitle}
                </div>
                }
            </div>
            <div className="input-message"></div>
        </div>
    );
}
*/

