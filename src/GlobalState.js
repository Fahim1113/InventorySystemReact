import { createGlobalState } from "react-hooks-global-state";

const { getGlobalState, setGlobalState } = createGlobalState({
  username: "",
  password: "",
  url1: "http://localhost:4000",
  url: "https://inventorySystem.fahim-shahriyar.repl.co",
});
export { getGlobalState, setGlobalState };
