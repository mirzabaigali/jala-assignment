import ForgetPass from './Pages/ForgetPass';
import Home from './Pages/Home';
import Login from './Pages/Login';
import {Route,Routes} from "react-router-dom"
import PrivateRoutes from './Pages/PrivateRoutes';
import AdminLogin from './Pages/AdminLogin';
import CreateEmployee from "./Pages/CreateEmployee"
import Search from './Pages/Search';
import MultiTabs from './Pages/MultiTabs';
import Menu from './Pages/Menu';
import AutoComplete from './Pages/AutoComplete';
import Collapse from './Pages/Collapse';
import Images from './Pages/Images';
import Slider from './Pages/Slider';
import ToolTip from './Pages/ToolTip';
import Popup from './Pages/Popup';
import Links from './Pages/Links';
import CssProperties from './Pages/CssProperties';
import Iframes from './Pages/Iframes';
import EditEmployee from './Pages/EditEmployee';
function App() {
  
  return (
    <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/forget" element={<ForgetPass />} />
     <Route path="/admin" element={<AdminLogin />} />
     <Route path="/home" element={<PrivateRoutes />}> 
     <Route path="dashboard" element={<Home />} />
     <Route path="createemployee" element={<CreateEmployee />} />
     <Route path="searchemployee" element={<Search />} />
     <Route path="multitabs" element={<MultiTabs />} />
     <Route path="menu" element={<Menu />} />
     <Route path="autocomplete" element={<AutoComplete />} />
     <Route path="collapse" element={<Collapse />} />
     <Route path="images" element={<Images />} />
     <Route path="slider" element={<Slider />} />
     <Route path="tooltip" element={<ToolTip />} />
     <Route path="popup" element={<Popup />} />
     <Route path="links" element={<Links />} />
     <Route path="css" element={<CssProperties />} />
     <Route path="iframe" element={<Iframes />} />
     <Route path="editemployee" element={<EditEmployee />} />
     </Route>
    </Routes>
  );
}

export default App;
