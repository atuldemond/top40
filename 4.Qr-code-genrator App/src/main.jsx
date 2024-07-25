import { createRoot } from "react-dom/client";

import QrCodeGenerator from "../components/QrCodeGenerator";

const root = createRoot(document.getElementById("root"));
root.render(<QrCodeGenerator />);
