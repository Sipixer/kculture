import { css } from "../styled-system/css";
import SocketIo from "./components/SocketIo";
import useSocketStore from "./store/socketStore";

function App() {
  const socketStore = useSocketStore();
  return (
    <div className={css({ fontWeight: "bold" })}>
      <SocketIo />
      Hey
      {socketStore.connected ? "👍" : "👎"}
    </div>
  );
}

export default App;
