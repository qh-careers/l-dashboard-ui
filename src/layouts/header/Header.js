import React from 'react';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SimpleBar from 'simplebar-react';
import { Link } from "react-router-dom";

import {
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
} from 'reactstrap';
import { MessageSquare } from 'react-feather';
import * as Icon from 'react-feather';
import MessageDD from './MessageDD';
import MegaDD from './MegaDD';
import NotificationDD from './NotificationDD';
import user1 from '../../assets/images/users/user4.jpg';

import { ToggleMiniSidebar, ToggleMobileSidebar } from '../../store/customizer/CustomizerSlice';
import ProfileDD from './ProfileDD';
import Logo from '../logo/Logo';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const topbarColor = useSelector((state) => state.customizer.topbarBg);

  console.log(topbarColor,"Top Bar Color")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    if (query === 'production') {
      navigate('/dashboards/production');
    } else if(query === 'analytics'){
      navigate('/dashboards/analytics')
    } else if(query === 'operations'){
      navigate('/dashboards/operations')
    } else if(query === 'apex'){
      navigate('/dashboards/apex')
    }
    else if(query === 'chat'){
      navigate('/dashboards/chat')
    }
  };

  // const handleclick = () =>{
  //   localStorage.removeItem('token')
  //   localStorage.removeItem('user')
  // }

  return (
    <Navbar
      color={!topbarColor}
      dark={!isDarkMode}
      light={isDarkMode}
      expand="lg"
      className="topbar"
    >
      {/******************************/}
      {/**********Toggle Buttons**********/}
      {/******************************/}
      <div className="d-flex align-items-center">
        <Button
          color={!topbarColor}
          className="d-none d-lg-block"
          onClick={() => dispatch(ToggleMiniSidebar())}
        >
          <Icon.Menu size={22} />
        </Button>
        <div href="/" className="d-sm-flex d-lg-none">
          {/* <Logo /> */}
        </div>
        <Button
          color={!topbarColor}
          className="d-sm-block d-lg-none"
          onClick={() => dispatch(ToggleMobileSidebar())}
        >
          <Icon.Menu size={22} />
        </Button>
      </div>

      {/******************************/}
      {/**********Left Nav Bar**********/}
      {/******************************/}

      <Nav className="me-auto d-none d-lg-flex" navbar>

        <NavItem className="app-search ps-3">
        </NavItem>
      </Nav>

      <div className="d-flex align-items-center">
        {/******************************/}
        {/**********Notification DD**********/}
        {/******************************/}
        {/* <UncontrolledDropdown>
          <DropdownToggle color={topbarColor}>
            <Icon.Bell size={22} />
          </DropdownToggle>
          <DropdownMenu className="ddWidth">
            <DropdownItem header>
              <span className="mb-0 fs-5 text-dark fw-medium">Notifications</span>
            </DropdownItem>
            <DropdownItem divider />
            <SimpleBar style={{ maxHeight: '350px' }}>
              <NotificationDD />
            </SimpleBar>
            <DropdownItem divider />
            <div className="p-2 px-3">
              <Button color="primary" size="sm" block>
                Check All
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown> */}
        {/******************************/}
        {/**********Message DD**********/}
        {/******************************/}
        {/* <UncontrolledDropdown className="mx-1">
          <DropdownToggle color={topbarColor}>
            <MessageSquare size={22} />
          </DropdownToggle>
          <DropdownMenu className="ddWidth">
            <DropdownItem header>
              <span className="mb-0 fs-5 text-dark fw-medium">Messages</span>
            </DropdownItem>
            <DropdownItem divider />
            <SimpleBar style={{ maxHeight: '350px' }}>
              <MessageDD />
            </SimpleBar>
            <DropdownItem divider />
            <div className="p-2 px-3">
              <Button color="primary" size="sm" block>
                Check All
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown> */}
        {/******************************/}
        {/**********Mega DD**********/}
        {/******************************/}
        {/* <UncontrolledDropdown className="mega-dropdown mx-1">
          <DropdownToggle className="bg-transparent border-0" color={topbarColor}>
            <Icon.Grid size={22} />
          </DropdownToggle>
          <DropdownMenu>
            <MegaDD />
          </DropdownMenu>
        </UncontrolledDropdown> */}
        {/******************************/}
        {/**********Profile DD**********/}
        {/******************************/}
        <UncontrolledDropdown>
          <DropdownToggle color={!topbarColor}>
            <img src={user1} alt="profile" className="rounded-circle" width="30" />
          </DropdownToggle>
          <DropdownMenu className="ddWidth">
            <ProfileDD />
            <div className="p-2 px-3">
            <Link to="/login">

              <Button color="danger" size="sm" style={{backgroundColor:'#7A00CC',border:'none'}}>
                Logout
              </Button>
              </Link>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </Navbar>
  );
};

export default Header;
