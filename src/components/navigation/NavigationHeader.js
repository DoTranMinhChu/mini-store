import React from "react";
import '../../styles/navigation.scss';

class NavigationHeader extends React.Component {
    render() {
        return (<>
            <nav className="navigation-box">
                <div className="user-box"></div>
                <div className="logo-box"><a href="/" className="logo-box__logo">MiniStore</a></div>
                <div className="user-box">
                    <div className="user-box__avatar-box circle"><img className="avatar img-responsive" src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt=""></img></div>
                    <button className="user-box__button--login">Login</button>
                </div>
            </nav>
        </>)
    }
}

export default NavigationHeader