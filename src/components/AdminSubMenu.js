import React from 'react';
import '../HorizontalMenu.css';
import { Link,NavLink ,Outlet  } from 'react-router-dom';

const AdminSubMenu = () => {
  return (<div>
    <nav className="horizontal-menu">
          <ul>
            <li><Link to="/manageUsers">Manager Users</Link></li>
            <li><Link to="/manageSuppliers">Manage Suppliers</Link></li>
            <li><Link to="/mangePubUnits">Manage Pub Units</Link></li>
          </ul>
     </nav>
  </div>

  );
}

export default AdminSubMenu;