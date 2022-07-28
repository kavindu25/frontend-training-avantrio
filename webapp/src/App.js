import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import SignoutPage from "./pages/auth/SignoutPage";
import SignInPage from "./pages/auth/SignInPage";
import ModalContainer from "./components/modals/ModalContainer";

// example componets. remove after initialising a project.
import TablesExamplePage from "./pages/examples/TablesExamplePage";
import FormsExamplePage from "./pages/examples/FormsExamplePage";
import ModalsExamplePage from "./pages/examples/ModalsExample";
import DesignSystem from "./pages/DesignSystem";

import "./custom.scss";

// TODO: move routes a config object

function App() {
  return (
    <div className="App">
      <ModalContainer />
      <Routes>
        <Route path="/app" element={<AppLayout />}>
          <Route path="tables" element={<TablesExamplePage />} />
          <Route path="forms" element={<FormsExamplePage />} />
          <Route path="modals" element={<ModalsExamplePage />} />
        </Route>
        <Route path="/testdesign" element={<DesignSystem/>} />
        <Route path="/signout" element={<SignoutPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
