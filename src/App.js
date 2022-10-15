import { Routes, Route } from "react-router-dom";

import Home from "./Components/Routes/Home/home.component";
import Navigation from "./Components/Routes/Navigation/navigation.component";
import Authentication from "./Components/Authentication/authentication.component";

const Shop = () => {
  return <h1>I am shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
