import { useEffect } from "react";
import useSocketStore from "../store/socketStore";

const SocketIo = () => {
  const socketStore = useSocketStore();
  useEffect(() => {
    socketStore.connect();
    return () => {
      socketStore.disconnect();
    };
  }, []);
  return null;
};

export default SocketIo;
