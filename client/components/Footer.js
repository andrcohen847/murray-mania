import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerColumn">
        <h2 className="footerTitle">About</h2>
        <ul>
          <li>
            <a href="#">Why did I make this?</a>
          </li>
          <li>
            <a href="#">How to play?</a>
          </li>
          <li>
            <a href="#">Game Credits</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="footerColumn">
        <h2 className="footerTitle">Contact</h2>
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Message Board</a>
          </li>
          <li>
            <a href="#">Leave a Game Review</a>
          </li>
        </ul>
      </div>
      <div className="footerColumn">
        <h2 className="footerTitle">Stay in Touch!</h2>
        <p>Subscribe to our newsletter for our latest game updates!</p>
        <form>
          <input type="email" name="email" placeholder="Enter email address" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
      <div className="footerSocial">
        <ul className="footerSocialList">
          <li>
            <a href="#">
              <img src="/fb-icon.png" className="facebook" />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/twitter-icon.png" className="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/insta-icon.png" className="instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/pinterest-icon.png" className="pinterest" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/linkedin-icon.png" className="linkedin" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/youtube-icon.png" className="youtube" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footerCopyright">
        <ul className="footerCopyrightList">
          <li>&copy; 2020 Copyright Murray Mania</li>
          <li>Designed by Andrew Cohen</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
