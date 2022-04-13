import App from "./App.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />}></Route>
                    <Route path="about" element={<About />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;