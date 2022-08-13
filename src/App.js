import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Login from "./containers/Login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />}></Route>
				<Route path="/home" element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
