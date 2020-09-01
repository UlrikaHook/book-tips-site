import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';


const Navbar = () => {

  return (
    <Paper>
      <Tabs
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab style={{fontFamily: 'Dosis', fontWeight: 'bolder'}} className="button" icon={<HomeRoundedIcon />} label="HOME" component={Link} to="/"/>
        <Tab style={{fontFamily: 'Dosis', fontWeight: 'bolder'}} className="button" icon={<MenuBookRoundedIcon />} label="CATEGORIES" component={Link} to="/categories"/>
        <Tab style={{fontFamily: 'Dosis', fontWeight: 'bolder'}} className="button" icon={<SearchRoundedIcon />} label="SEARCH" component={Link} to="/search" />
      </Tabs>
    </Paper>
  );
}

export default Navbar;
