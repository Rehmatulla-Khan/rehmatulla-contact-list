import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/action/contactData.action";
import { useTheme } from "../../themeProvider/ThemeProvider";

const ContactInfoCard = ({ contactInfo }) => {
  const darkMode = useTheme();

  const { id } = useSelector((state) => state.auth);

  const { firstName, lastName, contact, email, imgURL, key } = contactInfo;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id, key));
    // dispatch(getContact(id));
  };

  return (
    <div
      className={`ui fluid link card  ${darkMode ? "inverted" : ""}`}
      style={{ borderRadius: "10px" }}
    >
      <div className="ui basic segment">
        <div className="ui image small centered">
          <img alt="avatar" src={imgURL} loading="lazy" />
        </div>
      </div>
      <div className="content">
        <div className="header">
          {firstName} {lastName}
        </div>
        <div className="meta">
          <p>{contact}</p>
        </div>
        <div className="description">{email}</div>
      </div>
      <div className="extra content">
        <span className="right floated">
          <i className="edit icon"></i>
        </span>
        <span>
          <i className="trash icon" onClick={handleDelete}></i>
        </span>
      </div>
    </div>
  );
};

export default ContactInfoCard;
