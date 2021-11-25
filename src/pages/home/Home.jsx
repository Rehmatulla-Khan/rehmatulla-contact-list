import React from "react";
import logoIcon from "../../assets/svg/logo.svg";
import {
  useTheme,
  useThemeUpdate,
} from "../../components/themeProvider/ThemeProvider";

const Home = () => {
  const darkMode = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <>
      <nav
        class={`ui large fixed borderless menu ${darkMode ? "inverted" : ""}`}
      >
        <div className="item">
          <img src={logoIcon} alt="logo" height={30} />
        </div>
        <div class="right menu">
          <div className="item">
            <i className="user plus icon"></i>
          </div>

          <div class="item" onClick={toggleTheme}>
            {darkMode ? (
              <i class="sun outline icon"></i>
            ) : (
              <i class="moon icon"></i>
            )}
          </div>
          <div class="item">
            <i class="sign out alternate icon" onClick={toggleTheme}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
