import { useEffect, useState } from "react";
import st from "./Timer.module.css";

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const time = setTimeout(() => {
      setTime(new Date());
    }, 1000);

    return () => clearTimeout(time);
  }, [time]);

  return <div className={st.container}>{time.toLocaleTimeString()}</div>;
};

export default Timer;
