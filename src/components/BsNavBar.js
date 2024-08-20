import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import AlertModal from "./AlertModal";

function BsNavBar() {
    const userName = useSelector(state => state.userName, shallowEqual);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [alertShow, setAlertShow] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch({ type: "UPDATE_USER", payload: null });
        navigate("/");
        setAlertShow(true);
        setTimeout(() => setAlertShow(false), 3000); 
    };

    const handleYes = () => {
        setAlertShow(false);
    };

    const handleLoginModal = useCallback(() => {
        dispatch({
            type: "LOGIN_MODAL",
            payload: {
                show: true,
                message: "로그인 폼 입니다"
            }
        });
        
    }, [dispatch]);

    // 네비게이션 바 스타일 임시 설정
    const navbarStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#343a40',
        color: 'white',
    };

    const brandStyle = {
        fontSize: '1.5em',
        fontWeight: 'bold',
    };

    const linksStyle = {
        display: 'flex',
        gap: '15px',
    };

    const authStyle = {
        display: 'flex',
        gap: '10px',
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
    };

    return (
        <>
            <AlertModal show={alertShow} message={"로그 아웃 되었습니다"} yes={handleYes} />
            <nav style={navbarStyle}>
                <div style={brandStyle}>
                    MyBrand
                </div>
                <div style={linksStyle}>
                    <NavLink to="/" style={linkStyle}>Home</NavLink>
                    <NavLink to="/about" style={linkStyle}>About</NavLink>
                    {/* 필요한 다른 링크들 추가 */}
                </div>
                                {/* 로그인/로그아웃 섹션입니다. */}
                                <div style={authStyle}>
                    {userName ? (
                        <>
                            {/* 로그인이 되었을 때 보여질 텍스트와 로그아웃 버튼 */}
                            <span>Signed out</span>
                            <button 
                                onClick={handleLogout} 
                                style={{ 
                                    backgroundColor: '#007bff', // 버튼의 배경 색상
                                    color: 'white', // 버튼 텍스트 색상
                                    border: 'none', // 버튼 테두리 제거
                                    padding: '5px 10px', // 버튼 내부 패딩
                                    borderRadius: '5px' // 버튼 모서리를 둥글게
                                }}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        // 로그인되지 않았을 때 보여질 로그인 버튼
                        <button 
                            onClick={handleLoginModal} 
                            style={{ 
                                backgroundColor: '#007bff', // 버튼의 배경 색상
                                color: 'white', // 버튼 텍스트 색상
                                border: 'none', // 버튼 테두리 제거
                                padding: '5px 10px', // 버튼 내부 패딩
                                borderRadius: '5px' // 버튼 모서리를 둥글게
                            }}
                        >
                            Sign in
                        </button>
                    )}
                </div>
            </nav>
        </>
    );
}

export default BsNavBar;
