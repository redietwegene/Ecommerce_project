import React from "react";
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";


function Admin() {
    return(
        <div>
            {/* <Router>
                <Routes>
                    <Route path="/addnewproduct" element={<Addnew/>}></Route>
                    <Route path="/productlist" element={Prodcutlist/>}></Route>
                </Routes>
            </Router> */}
            <h2><Link to="/addnewproduct"> ADD New Producct</Link></h2>
            <h2><Link to="/productlist">Product List</Link></h2>
        </div>
    )
}
export default Admin;