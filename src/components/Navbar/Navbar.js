import React from 'react';
import css from './Navbar.module.css';
import { StylesProvider } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';


const Navbar = () => {

  return (
    <StylesProvider injectFirst>{
        <div className={css.Navbar}>
        <Paper className={css.paper}>
        <header>BOOK INSPIRATION</header>
        <Tabs
            variant="fullWidth" 
            centered= "true"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example" 
            
        >
            <Tab className={css.menuTabs} icon={<HomeRoundedIcon />} label="HOME" component={Link} to="/"/>
            <Tab className={css.menuTabs} icon={<MenuBookRoundedIcon />} label="CATEGORIES" component={Link} to="/categories"/>
            <Tab className={css.menuTabs} icon={<SearchRoundedIcon />} label="SEARCH" component={Link} to="/search" />
        </Tabs>
        </Paper>
    </div>
    }</StylesProvider>
   
  );
}

export default Navbar;


