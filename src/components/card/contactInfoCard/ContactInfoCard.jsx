import React from "react";
import { useTheme } from "../../themeProvider/ThemeProvider";

const ContactInfoCard = () => {
  const darkMode = useTheme();

  return (
    <div className={`ui fluid link card  ${darkMode ? "inverted" : ""}`}>
      <div className="ui basic segment">
        <div className="ui image medium centered">
          <img
            alt="avatar"
            src={`https://avatars.dicebear.com/api/bottts/${
              Math.random() * (100000 - 1) + 1
            }.svg`}
          />
        </div>
      </div>
      <div className="content">
        <div className="header">Matt Giampietro</div>
        <div className="meta">
          <p>9702462589</p>
        </div>
        <div className="description">k.rehmatulla22@gmail.com</div>
      </div>
      <div className="extra content">
        <span className="right floated">
          <i className="edit icon"></i>
        </span>
        <span>
          <i className="trash icon"></i>
        </span>
      </div>
    </div>
  );
};

export default ContactInfoCard;
