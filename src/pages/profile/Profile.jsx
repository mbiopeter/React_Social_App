import "./Profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="cover" />
        <img src="https://images.pexels.com/photos/206551/pexels-photo-206551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="medium" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="medium" />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="medium" />
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon fontSize="medium" />
            </a>
          </div>
          <div className="center">
            <span>{currentUser.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>Kenya</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>VerseVibe</span>
              </div>         
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon fontSize="small"/>
            <MoreVertIcon fontSize="small"/>
          </div>
        </div>
      </div>
       <Posts/>
    </div>
  )
}

export default Profile
