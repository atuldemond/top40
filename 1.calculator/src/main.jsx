import { createRoot } from "react-dom/client";
import App from "../components/App";

import { Provider } from "react-redux";
import store from "../reducer/store";

try {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} catch (error) {
  console.error("Failed to render React:", error);
}
