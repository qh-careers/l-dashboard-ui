import React from 'react';
import { DropdownItem } from 'reactstrap';
import { User, FileText, Star, Settings, Droplet } from 'react-feather';
import user1 from '../../assets/images/users/user2.jpg';

const ProfileDD = () => {
  return (
    <div>
      <div className="d-flex gap-3 p-3 border-bottom pt-2 align-items-center">
        <img src={user1} alt="user" className="rounded-circle" width="55" />
        <span>
          <p style={{fontSize:'14px'}} className="mb-0 fw-medium">{localStorage.getItem('userId')}</p>
        </span>
      </div>
      <DropdownItem className="px-4 py-3">
        <User size={20} className="text-muted" />
        &nbsp; My Profile
      </DropdownItem>
      <DropdownItem className="px-4 py-3">
        <FileText size={20} className="text-muted" />
        &nbsp; Edit Profile
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem className="px-4 py-3">
        <Settings size={20} className="text-muted" />
        &nbsp; Settings
      </DropdownItem>
      <DropdownItem divider />
    </div>
  );
};

export default ProfileDD;
