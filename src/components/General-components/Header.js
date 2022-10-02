import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    boxShadow: "0 0 10px 2px rgb(235, 235, 235)",
    padding: "29px 85px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      paddingTop: 40,
    },
    maxWidth: 1200,
    margin: "auto",
  },
  inner_flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#000",
    fontWeight: "bolder",
    fontSize: 26,
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  menuItems: {
    display: "flex",
    alignItems: "center",
    color: "#000",
    marginLeft: 300,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  menuItem: {
    fontSize: 16,
    margin: "0px 30px",
    color: "#646363",
    cursor: "pointer",
  },
  dowpDownArrow: {
    fontSize: 20,
  },
  mobileMenu: {
    height: 36,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = window.location.pathname;

  console.log(location);

  const route = (path) => {
    navigate(`/${path}`);
  };

  return (
    <header className={classes.appBar}>
      <div className={classes.inner_flex}>
        <div>
          <h1 className={classes.logo}>ULTEMA</h1>
        </div>

        <div className={classes.menuItems}>
          <p
            className={classes.menuItem}
            style={{
              color: location === "/" && "#000",
              fontWeight: location === "/" && "700",
            }}
            onClick={() => route("")}
          >
            HOME
          </p>
          <div
            className={classes.menuItem}
            style={{ display: "flex", alignItems: "center" }}
          >
            <p>SERVICES</p>
            <MdOutlineArrowDropDown className={classes.dowpDownArrow} />
          </div>
          <p
            className={classes.menuItem}
            style={{
              color: location === "/contact" && "#000",
              fontWeight: location === "/contact" && "700",
            }}
            onClick={() => route("contact")}
          >
            CONTACT
          </p>
          <p
            className={classes.menuItem}
            style={{
              color: location === "/about" && "#000",
              fontWeight: location === "/about" && "700",
            }}
            onClick={() => route("about")}
          >
            ABOUT US
          </p>
          <p
            className={classes.menuItem}
            style={{
              color: location === "/testimonial" && "#000",
              fontWeight: location === "/testimonial" && "700",
            }}
            onClick={() => route("testimonial")}
          >
            TESTIMONIAL
          </p>
        </div>
        <div>
          <img src="mobileMenu.png" className={classes.mobileMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
