import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "../reducer/store";
import Note from "../components/Note";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Note />
  </Provider>
);
