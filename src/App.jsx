import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import axe from "./axe-svgrepo-com (1).svg"
import styles from "./App.module.css"



function App() {
    return(
        <div className={styles.app}>
            <div className={styles.topbar}>
                <h1>
                    <img src={axe} alt="axe"/>
                    CHOP IT
                </h1>
            </div>
            <Routes>
                <Route path="/*" element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default App;
