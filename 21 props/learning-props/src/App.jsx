import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
import AppList from "./components/AppList";
function App() {
  const cardStyle = {
    width: "18rem"
  };
  var h1style={
    fontfamily: "Roboto, sans-serif"
  };
  var Apps=["Facebook", "Instagram","Twitter"];
  return (
    <center>
      <Heading heads={h1style}></Heading>
      <AppList appl={Apps} cardStyle={cardStyle}></AppList>
    </center>
  );
}

export default App;
