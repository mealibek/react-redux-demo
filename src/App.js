import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeontainer from "./components/HooksCakeontainer";
import IceCreamContainer from "./components/IceCreamContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IceCreamContainer />
        <HooksCakeontainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
