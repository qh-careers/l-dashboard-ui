import React,{useState,useEffect} from 'react';
import {
  Button,
  Nav,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import { User, FileText, Star, Settings, Droplet } from 'react-feather';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';
import SidebarData from '../sidebardata/SidebarData';
import Logo from '../../logo/Logo';
import { ToggleMobileSidebar } from '../../../store/customizer/CustomizerSlice';
import NavItemContainer from './NavItemContainer';
import NavSubMenu from './NavSubMenu';

import user1 from '../../../assets/images/logos/Looqup.png';

const Sidebar = () => {
  const location = useLocation();
  const currentURL = location.pathname.split('/').slice(0, -1).join('/');
  const [text,setText] = useState('')
  const activeBg = useSelector((state) => state.customizer.sidebarBg);
  const isFixed = useSelector((state) => state.customizer.isSidebarFixed);
  const [filteredSidebarData, setFilteredSidebarData] = useState([]);
  useEffect(() => {
    // Fetch persona from local storage
    const persona = localStorage.getItem('persona');
    if (persona) {
      // Filter SidebarData based on persona
      const filteredData = SidebarData.filter((item) => {
        if (persona === 'Production Manager') {
          return item.title === 'Process WorkFlow' || item.title === 'Talk to Data' || item.title === 'Production' || item.title === 'Operations' || item.title === 'Training Ground' || item.title=== 'Predictions';
        } else if (persona === 'Quality Analyst') {
          return item.title === 'Talk to Data' || item.title === 'Production' || item.title === 'Operations' || item.title==='WhatsApp' ;
        } else if (persona === 'Executive') {
          return item.title === 'Process WorkFlow' || item.title === 'Operations' || item.title==='WhatsApp';
        } else if (persona === 'Customer Relationship Manager') {
          return item.title === 'CRM Analysis' || item.title === 'Talk to Data' ||  item.title === 'Production' || item.title==='Whatsapp';

        }
        return false;
      });
      setFilteredSidebarData(filteredData);
    }
  }, []);

  return (
    <div className={`sidebarBox shadow bg-${activeBg} ${isFixed ? 'fixedSidebar' : ''}`}>
      <SimpleBar style={{ height: '100%' }}>
        <div className="py-4 text-center">
          <img src={user1} alt="img_logo" width={150} className=" mb-2 img-responsive" />
        </div>
        <div>
          <Nav vertical className={activeBg === 'white' ? '' : 'lightText'}>
            {filteredSidebarData.map((navi) => {
              if (navi.caption) {
                return (
                  <div className="navCaption fw-bold text-uppercase mt-4" key={navi.caption}>
                    {navi.caption}
                  </div>
                );
              }
              if (navi.children) {
                return (
                  <NavSubMenu
                    key={navi.id}
                    icon={navi.icon}
                    title={navi.title}
                    items={navi.children}
                    suffix={navi.suffix}
                    suffixColor={navi.suffixColor}
                    isUrl={currentURL === navi.href}
                    onClick={()=>setText(navi.children)}
                    />
                );
              }
              return (
                <NavItemContainer
                  key={navi.id}
                  //toggle={() => toggle(navi.id)}
                  className={location.pathname === navi.href ? 'activeLink' : ''}
                  to={navi.href}
                  title={navi.title}
                  suffix={navi.suffix}
                  suffixColor={navi.suffixColor}
                  icon={navi.icon}
                />
              );
            })}
          </Nav>
          
        </div>
      </SimpleBar>

      
    </div>
  );
};

export default Sidebar;
