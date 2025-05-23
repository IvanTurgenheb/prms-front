import { FiX } from "react-icons/fi";
import { useTypedSelector } from "../../hooks/redux";
import LogItem from "../LogItem";
import {
  body,
  closeButton,
  header,
  modalWindow,
  title,
  wrapper,
} from "./LoggerModal.css";

type LoggerModalProps = {
  setIsLoggerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoggerModal = ({ setIsLoggerOpen }: LoggerModalProps) => {
  const logs = useTypedSelector((state) => state.loggers.logArray);

  return (
    <div className={wrapper}>
      <div className={modalWindow}>
        <div className={header}>
          <div className={title}>활동 기록</div>
          <FiX className={closeButton} onClick={() => setIsLoggerOpen(false)} />
        </div>
        <div className={body}>
          {logs.map((log) => (
            <LogItem key={log.logId} {...log} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoggerModal;
