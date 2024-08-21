import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // 로컬 스토리지에서 토큰 삭제
        localStorage.removeItem('token');
        
        // Redux 상태에서 사용자 정보 제거
        dispatch({ type: "UPDATE_USER", payload: null });

        // 로그아웃 완료 메시지를 보여주고, 일정 시간 후 리다이렉트
        setTimeout(() => {
            navigate('/');  // 홈 페이지 또는 로그인 페이지로 리다이렉트
        }, 3000);
    }, [dispatch, navigate]);

    return (
        <div>
            <h1>로그아웃 되었습니다</h1>
            <p>잠시 후 홈 페이지로 이동합니다...</p>
        </div>
    );
}

export default LogoutPage;
