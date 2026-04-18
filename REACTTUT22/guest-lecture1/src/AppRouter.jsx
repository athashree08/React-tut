import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Contact from './Components/Contact';
import Home from './Components/Home';
function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;