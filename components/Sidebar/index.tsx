/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Link,
} from "@chakra-ui/react";

interface ISidebarProps {
  isMobileSidebarOpen: boolean;
  onMobileSidebarClose: () => void;
}

const Sidebar: React.FC<ISidebarProps> = ({
  isMobileSidebarOpen,
  onMobileSidebarClose,
}) => {
  return (
    <>
      <Drawer
        onClose={onMobileSidebarClose}
        isOpen={isMobileSidebarOpen}
        placement="right"
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerHeader bg="white">
            <div className="col-md-3 col-8 text-left">
              <a href="#" className="logo">
                <img src="/img/logo.png" className="img-fluid" alt="Enjoy" />
              </a>
            </div>
            <div className="hamburger-menu" onClick={onMobileSidebarClose}>
              <span className="line-top current"></span>
              <span className="line-center current"></span>
              <span className="line-bottom current"></span>
            </div>
          </DrawerHeader>
          <DrawerBody display="flex" flexDirection="column">
            <div className="ofcavas-menu current show">
              <ul className="mobile_menu">
                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link"
                    onClick={onMobileSidebarClose}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="#about"
                    className="nav-link"
                    onClick={onMobileSidebarClose}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="#team"
                    className="nav-link"
                    onClick={onMobileSidebarClose}
                  >
                    Team
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="#product"
                    className="nav-link"
                    onClick={onMobileSidebarClose}
                  >
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="#sub"
                    className="nav-link"
                    onClick={onMobileSidebarClose}
                  >
                    Interest Form
                  </Link>
                </li>
              </ul>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
