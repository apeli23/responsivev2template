import "./app.css"
import { AppContainer } from "./components";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <AppContainer>
    <Header />
    <div>
    <Sidebar />
    </div>
    </AppContainer>
  );
}

export default App;
