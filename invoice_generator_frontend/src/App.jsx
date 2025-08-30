import MainPage from "./pages/MainPage.jsx/MainPage";
import PreviewPage from "./pages/PreviewPage.jsx/PreviewPage";
import LandingPage from "./pages/LandingPages/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import{Toaster} from "react-hot-toast"


const App =() =>{
    return (
    <BrowserRouter basename="/invoice-generator-application">
    <MenuBar/>
    {/*  used for success error notification for example toast.success('saved') */}
    {/* neccessary to placed here */}
    <Toaster/>
    <Routes >
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/mainPage" element={<MainPage/>}/>
        <Route path="/preview" element={<PreviewPage/>}/>
    </Routes>
    </BrowserRouter>
    )
}

export default App;