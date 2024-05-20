import { Box } from "@mui/material";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Documents from "./components/Documents";

function App() {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex", gap: "20px" }}>
        <ProfileCard />
        <Documents />
      </Box>
    </>
  );
}

export default App;
