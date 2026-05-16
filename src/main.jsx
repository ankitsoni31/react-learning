import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// XML -> User defined tags
// id root ko uthao uske andar App ko daal do
createRoot(document.getElementById("root")).render(<App/>);
