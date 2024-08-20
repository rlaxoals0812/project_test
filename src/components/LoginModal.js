import { useState } from "react";
import { useDispatch } from "react-redux";

function LoginModal({ show, message, onClose }) {
    const [state, setState] = useState({
        userName: 'admin',
        password: '1234'
    });
    const dispatch = useDispatch();

    // 기존 코드 주석 처리
    /*
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = () => {
        axios.post("/auth", state)
            .then(res => {
                const token = res.data;
                localStorage.setItem('token', token);
                setError(false);
                
                const result = decodeToken(token.substring(7));
                const userName = result.payload.sub;
                dispatch({ type: "UPDATE_USER", payload: userName });
                dispatch({ type: "LOGIN_MODAL", payload: { show: false } });
                axios.defaults.headers.common["Authorization"] = token;
            })
            .catch(() => {
                setError(true);
            });
    };
    */

    // 새롭게 만든 간단한 로그인 폼 핸들러
    const handleLogin = () => {
        // 로그인 수락 처리

        alert("로그인이 수락되었습니다.");
        dispatch({ type: "LOGIN_MODAL", payload: { show: false } });
        //dispatch({ type: "UPDATE_USER", payload: { userName : '' }});
        dispatch({ type: "UPDATE_USER", payload: { userName: state.userName } });
    };

    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h5>{message}</h5>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>
                <div className="modal-body">
                    {/* 빈 로그인 폼 */}
                    <label htmlFor="userName">User Name</label>
                    <input 
                        type="text" 
                        name="userName" 
                        id="userName"
                        value={state.userName} 
                        placeholder="User Name..." 
                        
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        value={state.password} 
                        placeholder="Password..." 
                        
                    />
                </div>
                <div className="modal-footer">
                    <button onClick={handleLogin}>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
