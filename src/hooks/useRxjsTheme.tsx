import { useEffect, useState } from "react";
import { diContainer } from "../services/Container";
import { IEventManager, EventData } from "../services/EventManager";

const useRxjsTheme = () => {
  const eventManager = diContainer.get<IEventManager>("EventManager");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const subscription = eventManager
      ?.eventData()
      .subscribe((event: EventData) => {
        console.log(event.source);
        setTheme(event.data);
      });
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return theme;
};

export default useRxjsTheme;
