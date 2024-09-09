import React from 'react';
import '../HorizontalMenu.css';
import { Link,NavLink ,Outlet  } from 'react-router-dom';

const PixHMenu = () => {
  return (<div>
    <nav className="horizontal-menu">

          <ul>
            <li><Link to="/planning">Planning</Link></li>
            <li><Link to="/purchaseOrder">Purchase Order</Link></li>
            <li><Link to="/bookSpecification">Book Specification</Link></li>
            <li><Link to="/usage">Usage</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/deliveryMessage">Delivery Message</Link></li>
            <li><Link to="/goodReceipt">Good Receipt</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
<Outlet/>
        </div>
  );
};

export default PixHMenu;