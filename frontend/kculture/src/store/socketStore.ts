import { create } from "zustand";
import { io, Socket } from "socket.io-client";

interface SocketStore {
  socket: Socket | null;
  connected: boolean;
  connect: () => void;
  disconnect: () => void;
}

const useSocketStore = create<SocketStore>((set) => ({
  socket: null,
  connected: false,
  connect: () => {
    const socket = io("http://kculture.api.127.0.0.1.nip.io/");
    set({ socket });

    socket.on("connect", () => {
      set({ connected: true });
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      set({ connected: false });
      console.log("Disconnected from server");
    });
  },
  disconnect: () => {
    const { socket } = useSocketStore.getState();
    if (socket) {
      socket.disconnect();
      set({ socket: null });
    }
  },
}));

export default useSocketStore;
