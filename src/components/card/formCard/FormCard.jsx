import React from "react";
import { randomNumberGenerator } from "../../utils/randomNumberGenerator/randomNumberGenrator";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addContact,
  editContact,
} from "../../../redux/action/contactData.action";
import { useTheme } from "../../themeProvider/ThemeProvider";
import "./formCard.css";

const FormCard = ({
  isFormVisible,
  toggleForm,
  contactData,
  isEditFormVisible,
  toggleEditForm,
}) => {
  const contactDetails = contactData[0];

  const darkMode = useTheme();

  const { id } = useSelector((state) => state.auth);

  const imgURL = `https://avatars.dicebear.com/api/bottts/${randomNumberGenerator()}.svg`;

  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onFormSubmit = (data) => {
    data.firstName &&
    data.lastName &&
    data.contact &&
    data.email &&
    data.status &&
    isFormVisible
      ? dispatch(addContact(id, data, imgURL))
      : dispatch(
          editContact(id, contactDetails.contactId, data, contactDetails.imgURL)
        );
    reset();
    isFormVisible ? toggleForm() : toggleEditForm();
  };

  const onCancel = () => {
    isFormVisible ? toggleForm() : toggleEditForm();
    reset();
  };

  return (
    <div
      className={`ui dimmer modals page transition ${
        isFormVisible || isEditFormVisible ? "visible active" : "hidden"
      } `}
      onClick={toggleForm}
      ref={(el) => el && el.style.setProperty("display", "flex", "important")}
    >
      <div
        className={`ui standard test modal front transition ${
          isFormVisible || isEditFormVisible ? "visible active" : "hidden"
        }`}
      >
        <div
          className={`form-container ${darkMode && "dark-mode"}`}
          onClick={(ev) => ev.stopPropagation()}
        >
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className={`ui form ${darkMode && "inverted"}`}
          >
            <div className="field">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                defaultValue={
                  isEditFormVisible && contactDetails
                    ? contactDetails.firstName
                    : ""
                }
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />
              <p>
                {errors.firstName?.type === "required" &&
                  "First name is required"}
              </p>
            </div>

            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                defaultValue={
                  isEditFormVisible && contactDetails
                    ? contactDetails.lastName
                    : ""
                }
                placeholder="Last Name"
                {...register("lastName", { required: true })}
              />
              <p>
                {errors.lastName?.type === "required" &&
                  "Last name is required"}
              </p>
            </div>

            <div className="field">
              <label>Contact</label>
              <input
                type="number"
                name="contact"
                defaultValue={
                  isEditFormVisible && contactDetails
                    ? contactDetails.contact
                    : ""
                }
                maxLength="10"
                placeholder="9894747322"
                {...register("contact", { required: true })}
              />
              <p>
                {errors.contact?.type === "required" && "Contact is required"}
              </p>
            </div>

            <div className="field">
              <label>E-mail</label>
              <input
                type="email"
                placeholder="test@test.com"
                name="email"
                defaultValue={
                  isEditFormVisible && contactDetails
                    ? contactDetails.email
                    : ""
                }
                {...register("email", {
                  required: true,
                  pattern:
                    "/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:. [a-zA-Z0-9-]+)*$/",
                })}
              />
              <p>
                {errors.email?.type === "required" && "email is required"}
                {errors.email?.type === "pattern" && "Enter a valid email"}
              </p>
            </div>

            <div className="field" style={{ display: "flex" }}>
              <input
                type="radio"
                id="html"
                value="active"
                name="status"
                {...register("status", { required: true })}
              />
               
              <label htmlFor="active" style={{ marginRight: "2rem" }}>
                Active
              </label>
              <input
                type="radio"
                id="html"
                value="inactive"
                name="status"
                {...register("status", { required: true })}
              />
               <label htmlFor="inactive">Inactive</label>
            </div>
            <p>
              {errors.status?.type === "required" &&
                "Please choose between Active or Inactive"}
            </p>

            <button
              className="ui button"
              type="submit"
              style={{ margin: "1rem" }}
            >
              Submit
            </button>
            <button
              className="ui button"
              type="button"
              style={{ margin: "0 1rem" }}
              onClick={onCancel}
            >
              cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
