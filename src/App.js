import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route,Switch, Routes,Link,Outlet } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

import HorizontalMenu from './HorizontalMenu';
import PixHMenu from './components/PixHMenu';


import Planning from './components/Planning';
import PurchaseOrder from './components/PurchaseOrder';
import BookSpecification from './components/BookSpecification';
import Usage from './components/Usage';
import Inventory from './components/Inventory';
import Reports from './components/Reports';
import DeliveryMessage from './components/DeliveryMessage';
import GoodReceipt from './components/GoodReceipt';
import Admin from './components/Admin';

import AdminSubMenu from './components/AdminSubMenu';

import ManageUsers from './components/ManageUsers';
import ManageSuppliers from './components/ManageSuppliers';
import ManagePubUnits from './components/ManagePubUnits';
import Header from './Header';
import Footer from './Footer';
const App= () => {
  return (
       <div>
        <Header />

             <Routes>
                   <Route exact path = "/" element = {<PixHMenu/>}>
                   <Route index path = "/home" element = {<PixHMenu/>}/>
                   <Route path = "/purchaseOrder" element = {<PurchaseOrder/>}/>
                   <Route path = "/bookSpecification" element = {<BookSpecification/>}/>
                   <Route path = "/usage" element = {<Usage/>}/>
                   <Route path = "/inventory" element = {<Inventory/>}/>
                   <Route path = "/reports" element = {<Reports/>}/>
                   <Route path = "/deliveryMessage" element = {<DeliveryMessage/>}/>
                    <Route path = "/goodReceipt" element = {<GoodReceipt/>}/>
                   <Route path = "/planning" element = {<Planning/>}/>
                   <Route path = "/admin" element = {<AdminSubMenu/>}/>
                   <Route path = "/manageUsers" element = {<ManageUsers/>}/>
                   <Route path = "/manageSuppliers" element = {<ManageSuppliers/>}/>
                   <Route path = "/mangePubUnits" element = {<ManageUsers/>}/>
                    </Route>
             </Routes>
 <Footer />
       </div>

  );

};
export default App;