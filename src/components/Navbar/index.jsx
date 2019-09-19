import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="menuBar">
      <div className="logo">
        <a href="/">logo</a>
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu />
        </div>
        <div className="rightMenu">
          <RightMenu />
        </div>
        <Button
          className="barsMenu"
          type="primary"
          onClick={() => setVisible(true)}
        >
          <span className="barsBtn" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={() => setVisible(false)}
          visible={visible}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
