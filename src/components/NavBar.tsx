import { useState } from "react";
import { diContainer } from "../services/Container";
import { IEventManager, EventData } from "../services/EventManager";
import useContextTheme from "../hooks/useContextTheme";
import { Constants } from "../services/constants";

const NavBar = () => {
  const [theme, setTheme] = useState("dark");
  const { toggleMode } = useContextTheme();
  const eventManager = diContainer.get<IEventManager>("EventManager");

  function handleButtonClick() {
    const event: EventData = {
      source: "navbar",
      data: "",
    };

    if (theme == "light") {
      setTheme("dark");
      event.data = "dark";
    } else {
      setTheme("light");
      event.data = "light";
    }
    eventManager.publish(event);
    toggleMode();
  }

  return (
    <>
      <div className="container__left">
        <div className="box-header">Theme</div>
        <div className="box-content-left">
          <button className="btn" onClick={handleButtonClick}>
            Theme ({theme})
          </button>
        </div>
        <div className="box-content-left__bottom">
          <p className="basic-text-left">{Constants.rxjsBenefits}</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
