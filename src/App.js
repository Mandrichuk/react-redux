import { useSelector } from "react-redux";
import Login from "./components/Login.js";
import Profile from "./components/Profile.js";
import Theme from "./components/Theme.js";
import BgColor from "./components/BgColor.js";
import Count from "./components/Count.js";


function App() {
  const theme = useSelector((state => state.theme.value));
  const bgcolor = useSelector((state => state.bgcolor.value));

  const currentBgColor = bgcolor ? "black" : "white";

  return (
    <div className="App" style={{background: currentBgColor, color: theme}}>
      <BgColor />
      <Theme />
      <Profile />
      <Login />
      <Count />
    </div>
  );
}
  
export default App;