import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import googleAPI from "../../services/googleAPI"
class NavigationHeader extends React.Component {
    responseGoogle = (response) => {
        console.log(response);
        if (response.profileObj) {
            this.props.Login(response.profileObj)
        }
    }
    logout = () => {
        this.props.Logout();
    }
    render() {
        return (<>
            <nav className="navigation-box">
                <div className="user-box"></div>
                <div className="logo-box"><a href="/" className="logo-box__logo">MiniStore</a></div>
                <div className="user-box">
                    {Object.keys(this.props.user).length !== 0 ?
                        <>
                            <div className="user-box__avatar-box circle"><img className="avatar img-responsive" src={this.props.user.imageUrl} alt=""></img></div>
                            <GoogleLogout
                                clientId={googleAPI.getClineID()}
                                buttonText="Logout"
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} id="btn-logout" className="user-box__button--login">Logout</button>
                                )}
                                onLogoutSuccess={this.logout}
                            >
                            </GoogleLogout>
                        </> :
                        <>
                            <GoogleLogin
                                clientId={googleAPI.getClineID()}
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} id="btn-login" className="user-box__button--login">Login</button>
                                )}
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={"single_host_origin"}
                            />

                        </>
                    }
                </div>
            </nav>
        </>)
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Login: (user) => dispatch({ type: 'LOGIN', payload: user }),
        Logout: (user) => dispatch({ type: 'LOGOUT' }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavigationHeader);
