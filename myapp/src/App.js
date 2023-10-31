
import { Header } from './components/header';
import { Route, Routes } from "react-router-dom";
import { routerLinks } from "./router/router";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Contact from './pages/contact';
import { Footer } from './components/footer';

function App() {
  return <>
    <Header/>
    <Routes>
            <Route path={routerLinks.HOME} element={<Home/>}></Route>
            <Route path={routerLinks.SHOP} element={<Shop/>}></Route>
            <Route path={routerLinks.CONTACT} element={<Contact/>}></Route>
    </Routes>
    <Footer/>
  </>
}

export default App;
