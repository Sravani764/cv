import React from "react";
import "./../styles/Body.css";
const ProfileHeader = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Sravani Karri</h1>
      <span className="profile-subtitle">B.Tech Graduate</span>
      <div className="social-icons">
    <a
  href="https://www.linkedin.com/in/sravani-karri-336751289"
  className="icon-button"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png"
    alt="LinkedIn"
  />
</a>

<a
  href="https://github.com/Sravani764"
  target="_blank"
  rel="noopener noreferrer"
  className="icon-button"
>
  <img
    src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png"
    alt="GitHub"
  />
</a>
        <a href="mailto:sravanikarri764@gmail.com" className="icon-button" >
          <img src="https://cdn.vectorstock.com/i/1000v/96/23/email-line-icon-on-black-background-flat-vector-25959623.jpg" alt="Email" />
        </a>
      </div>
    </div>
  );
};
export default ProfileHeader;
