import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./scences/homePage";
import LoginPage from "./scences/loginPage";
import ProfilePage from "./scences/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

const App = () => {
  // getting mode from redux state
  const mode = useSelector((state) => state.mode);
  // Using use memo from react to create theme
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
