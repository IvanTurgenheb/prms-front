import { LogItemType } from "../../types";
import { BsFillPersonFill } from "react-icons/bs";
import { author, date, logItemWrapper, message } from "./LogItem.css";

type LogItemProps = LogItemType;

const LogItem = ({ logMessage, logAuthor, logTimeStamp }: LogItemProps) => {
  const timeOffset = new Date(Date.now() - logTimeStamp);
  const hours = timeOffset.getUTCHours();
  const minutes = timeOffset.getUTCMinutes();

  const time = minutes > 0 ? `${hours}시간 ${minutes}분 전` : "방금전";

  return (
    <div className={logItemWrapper}>
      <div className={author}>
        <BsFillPersonFill />
        {logAuthor}
      </div>
      <div className={message}>{logMessage}</div>
      <div className={date}>{time}</div>
    </div>
  );
};

export default LogItem;
