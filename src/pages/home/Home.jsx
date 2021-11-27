import React, { useState } from "react";
import logoIcon from "../../assets/svg/logo.svg";
import {
  useTheme,
  useThemeUpdate,
} from "../../components/themeProvider/ThemeProvider";
import ContactInfoCard from "../../components/card/contactInfoCard/ContactInfoCard";
import FormCard from "../../components/card/formCard/FormCard";

const Home = () => {
  const darkMode = useTheme();
  const toggleTheme = useThemeUpdate();
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible((perV) => !perV);
  };

  return (
    <>
      <nav
        className={`ui large fixed borderless menu ${
          darkMode ? "inverted" : ""
        }`}
      >
        <div className="item">
          <img src={logoIcon} alt="logo" height={30} />
        </div>
        <div className="right menu">
          <div className="item">
            <i className="user plus icon" onClick={toggleFormVisibility}></i>
          </div>

          <div className="item" onClick={toggleTheme}>
            {darkMode ? (
              <i className="sun outline icon"></i>
            ) : (
              <i className="moon icon"></i>
            )}
          </div>
          <div className="item">
            <i className="sign out alternate icon" onClick={toggleTheme}></i>
          </div>
        </div>
      </nav>

      <FormCard show={isFormVisible} toggle={toggleFormVisibility} />

      <main style={{ marginTop: "6rem" }}>
        <div className="container">
          <div className="ui four column doubling stackable grid container">
            {[...new Array(20)].map((card, i) => (
              <div className="column" key={i}>
                <ContactInfoCard />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
