import React from "react";
import { makeStyles } from "@material-ui/core";
import { HiMail, HiPhone } from "react-icons/hi";

const useStyles = makeStyles((theme) => ({
  body: {
    background: "#D9D9D9",
    margin: "auto",
    maxWidth: 1200,
    padding: "60px 81px",
  },
  inner_flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 15,
  },
  sub_text: {
    fontSize: 12,
    margin: "3px 0px",
  },
  input_div: {
    display: "flex",
    alignItems: "center",
    border: "0.5px solid #000",
    background: "#fff",
    width: 301,
    borderRadius: 4,
    padding: 5,
  },
  first_flex_input: {
    width: "100%",
    border: "none",
    outline: "none",
    padding: "0px 10px",
    fontSize: 12,
  },
  first_flex_btn: {
    background: "#000",
    border: "none",
    outline: "none",
    color: "#fff",
    borderRadius: 2.8,
    padding: "5px 10px",
    marginTop: 7,
  },
  sub_text_second: {
    fontSize: 12,
  },
  images: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 262,
    marginTop: 5,
  },
  img: {
    width: 46.67,
  },
  btn_box: {
    display: "flex",
    alignItems: "center",
  },
  app_btn: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    background: "#000",
    color: "#fff",
    borderRadius: 2.8,
    cursor: "pointer",
  },
  btn_img: {
    width: 22,
  },
  btn_text: {
    width: 79,
    textAlign: "left",
    fontSize: 10,
    marginLeft: 3,
  },
  icon_flex: {
    display: "flex",
    alignItems: "center",
    width: 182.68,
    justifyContent: "space-between",
    marginTop: 5,
  },
  icon: {
    width: 27,
  },
  email_flex: {
    display: "flex",
    alignItems: "center",
  },
  mail_text: {
    marginLeft: 6,
    fontSize: 16,
  },
  logo_black: {
    background: "black",
    padding: 20,
    color: "#fff",
    borderRadius: 13.33,
  },
  logo_text: {
    fontSize: 30,
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  copyright: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 52
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.body}>
      <div className={classes.inner_flex}>
        <div className={classes.flex_box}>
          <p className={classes.title}>NEW TO ULTEMA?</p>
          <p className={classes.sub_text}>Get updates on our new offers</p>
          <div className={classes.input_div}>
            <HiMail className={classes.hi_mail} />
            <input
              className={classes.first_flex_input}
              placeholder="username@gmail.com"
              type="email"
            />
          </div>
          <button className={classes.first_flex_btn}>Done</button>
        </div>

        <div className={classes.flex_box}>
          <p className={classes.title}>ABOUT ULTEMA </p>
          <p className={classes.sub_text_second}>About Us</p>
          <p className={classes.sub_text_second}>Jumia Express</p>
          <p className={classes.sub_text_second}>Terms and Conditions</p>
          <p className={classes.sub_text_second}>Privacy and Cookie Notice</p>
        </div>

        <div className={classes.flex_box}>
          <p className={classes.title}>PAYMENT METHOD AND DELIVERY </p>
          <div className={classes.images}>
            <img src="mastercard.png" className={classes.img} />
            <img src="dhl.png" className={classes.img} />
            <img src="apple_pay.png" className={classes.img} />
            <img src="btc.png" className={classes.img} />
          </div>
        </div>

        <div className={classes.flex_box}>
          <p className={classes.title}>DOWNLOAD ULTEMA FREE APP</p>
          <p className={classes.sub_text}>
            Get more access to exclusive offers
          </p>
          <div className={classes.btn_box}>
            <button className={classes.app_btn}>
              <img src="apple_icon.png" className={classes.btn_img} />
              <p className={classes.btn_text}>DOWNLOAD ON APP STORE</p>
            </button>
            <button className={classes.app_btn} style={{ marginLeft: 2 }}>
              <img src="playstore_icon.png" className={classes.btn_img} />
              <p className={classes.btn_text}>DOWNLOAD ON GOOGLE PLAY</p>
            </button>
          </div>
        </div>
      </div>

      <div className={classes.inner_flex} style={{ marginTop: 71 }}>
        <div className={classes.first_flex}>
          <p className={classes.title}>JOIN US ON ULTEMA</p>
          <div className={classes.icon_flex}>
            <img src="twitter.png" style={{ width: 27 }} />
            <img src="youtube.png" style={{ width: 25 }} />
            <img src="whatsapp.png" style={{ width: 23 }} />
            <img src="instagram.png" style={{ width: 23 }} />
            <img src="facebook.png" style={{ width: 26 }} />
          </div>
        </div>

        <div className={classes.first_flex}>
          <div className={classes.email_flex}>
            <HiMail />
            <p className={classes.mail_text}>Ultemaservices@gmail.com</p>
          </div>
          <div className={classes.email_flex}>
            <HiPhone />
            <p className={classes.mail_text}>090158879431 or 0907374504</p>
          </div>
        </div>

        <div className={classes.logo}>
          <div className={classes.logo_black}>
            <p>Logo</p>
          </div>
          <p className={classes.logo_text}>ULTEMA</p>
        </div>
      </div>

      <div className={classes.copyright}>
        <p>&copy; copyright All Right Reserved, 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
