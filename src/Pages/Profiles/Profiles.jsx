import './Profiles.scss';
import Avatar from './avatar.png';

const Profiles = () => {
    return (
        <div className="profile">
            <div className="profile-main">
                <div className="avatar">
                    <img src={Avatar} alt="" />
                </div>
                <div className="infor">
                    <p><b>Username:</b> {JSON.parse(localStorage.getItem("regiter")).username}</p>
                    <p><b>Password:</b> {JSON.parse(localStorage.getItem("regiter")).password.replace(/./g, '*')}</p>
                    <p><b>Phone:</b> {JSON.parse(localStorage.getItem("regiter")).phone}</p>
                    <p><b>Email:</b> {JSON.parse(localStorage.getItem("regiter")).email}</p>
                    <p><b>Gender:</b> {JSON.parse(localStorage.getItem("regiter")).gender.toUpperCase()}</p>
                </div>
            </div>
        </div>
    )
}

export default Profiles;