import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function MenuItem({ item }) {
  return (
    <li>
      <Link to={item.path}>{item.label}</Link>
      {item.children && (
        <ul>
          {item?.children?.map((child) => (
            <MenuItem key={child?.path} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

function DynamicMenu({ menuData }) {
  return (
    <nav>
      <ul>
        {menuData?.map((item) => (
          <MenuItem key={item?.path} item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default DynamicMenu;
