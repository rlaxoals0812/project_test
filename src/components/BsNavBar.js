import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import AlertModal from "./AlertModal";

function BsNavBar() {
    const userName = useSelector(state => state.userName?.userName, shallowEqual);//로그인된 아이디가 로그아웃 버튼 옆에 나오도록함
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [alertShow, setAlertShow] = useState(false);

    // const handleLogout = () => {
    //     localStorage.removeItem('token');
    //     dispatch({ type: "UPDATE_USER", payload: null });
    //     navigate("/");
    //     setAlertShow(true);
    //     setTimeout(() => setAlertShow(false), 3000); 
    // };

    const handleYes = () => {
        setAlertShow(false);
    };

    const handleLogin = useCallback(() => {
        navigate('/login'); // 로그인 페이지로 이동
    }, [navigate]);

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
                    <NavLink to="/" style={linkStyle}>Home</NavLink>
                </div>
                <div style={linksStyle}>
                    <NavLink to="/about" style={linkStyle}>About</NavLink>
                </div>
                <div style={authStyle}>
                    {userName ? (
                        <>
                            {/* 로그인된 사용자 이름을 표시합니다. */}
                            <span>{userName}</span>
                            <NavLink to="/logout" style={linkStyle}>Logout</NavLink>
                            
                        </>
                    ) : (
                        // 로그인되지 않았을 때 보여질 로그인 버튼
                        <NavLink to="/login" style={linkStyle}>Login</NavLink>
                    )}
                </div>
            </nav>
        </>
    );
}

export default BsNavBar;
