import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  searchBox: {
    margin: "0px auto",
    width: "35%",
    maxWidth: 672,
  },
  inner_flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchIcon: {
    height: 25,
    width: 25,
    marginTop: 8,
    cursor: "pointer",
  },
  searchSection: {
    marginTop: 29,
    display: "flex",
    border: "0.5px solid #ccc",
    alignItems: "center",
    width: "100%",
    margin: "0px 10px",
    padding: "2px 10px",
    borderRadius: 4,
  },
  searchInput: {
    border: "none",
    outline: "none",
    marginLeft: 20,
    width: 200,
  },
  button: {
    background: "#000",
    marginTop: 29,
    color: "white",
    padding: "8px 10px",
    margin: "0px 10px",
    borderRadius: 4,
    cursor: "pointer",
  },
}));

const SearchBox = () => {
  const classes = useStyles();
  return (
    <div className={classes.searchBox}>
      <div className={classes.inner_flex}>
        <div className={classes.searchSection}>
          <div>
            <img src="searchIcon.png" className={classes.searchIcon} />
          </div>
          <div>
            <input
              className={classes.searchInput}
              placeholder="Search items & Categories"
            />
          </div>
        </div>

        <div className={classes.button}>
          <p>Search</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
