import React from 'react';
import SideNav from 'react-simple-sidenav'


const SideNavigation = (props) => {
  return (
    <div>
      <SideNav
          showNav={props.showNav}
          onHideNav={props.onHideNav}
        >
        Options
      </SideNav>
    </div>
  )
}

export default SideNavigation
