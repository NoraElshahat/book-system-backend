import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#2196f3",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
}));
const headersData = [
  {
    label: "Books",
    href: "/books",
  },
  {
    label: "most Liked",
    href: "/liked-books",
  },
];
const Header = () => {
  const { header, logo, menuButton, toolbar } = useStyles();
  const displayHeader = () => {
    return (
      <Toolbar className={toolbar}>
        {LogoWord()}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const LogoWord = () => {
    return (
      <Typography variant="h6" component="h1" className={logo}>
        {/* <img src="/book.png" width="40px" height="40px"></img> */}
        Ebook
      </Typography>
    );
  };
  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: { menuButton },
          }}
        >
          {label}
        </Button>
      );
    });
  };
  return (
    <header>
      <AppBar className={header}>{displayHeader()}</AppBar>
    </header>
  );
};

export default Header;
