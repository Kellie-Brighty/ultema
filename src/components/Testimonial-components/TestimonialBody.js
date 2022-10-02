import React from "react";
import { makeStyles } from "@material-ui/core";
import Footer from "../General-components/Footer";

const useStyles = makeStyles((theme) => ({
  body: {
    maxWidth: 1200,
    margin: "auto",
    marginTop: 68,
  },
  testimonial_box: {
    display: "flex",
    marginTop: 40,
  },
  image: {
    width: 100,
    height: 100,
  },
  text_box: {
    marginLeft: 21,
  },
  name: {
    fontSize: 16,
  },
  title: {
    fontSize: 14,
  },
  testimonial_text_box: {
    marginTop: 26,
  },
  testimonial_text: {
    fontSize: 14,
    marginTop: 30,
  },
  footer: {
    marginTop: 73
  }
}));

const TestimonialBody = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.body}>
        <div className={classes.inner_flex}>
          <div className={classes.testimonial_box}>
            <img src="Ellipse1.png" className={classes.image} />
            <div className={classes.text_box}>
              <p className={classes.name}>Meghan Yolo</p>
              <p className={classes.title}>The lettuve</p>
              <div className={classes.testimonial_text_box}>
                <p className={classes.testimonial_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer blandit vulputate vehicula turpis. Vitae, nisi, semper
                  neque amet nulla odio mi elit. Proin viverra viverra urna
                  libero urna, dolor posuere nec erat. Pretium interdum congue
                  magna massa, turpis aliquam lorem aenean. Vitae risus mattis
                  vestibulum mi faucibus leo eget vitae. Nibh viverra ipsum sed
                  commodo quis purus. Orci bibendum eget suspendisse in molestie
                  quam placerat tempor morbi. Vitae nunc quam ut blandit massa
                  pellentesque. Commodo euismod eu ante nibh gravida risus
                  pretium. Est turpis adipiscing amet consectetur in pulvinar
                  arcu et. Nullam tellus nam ultrices fusce. Sed proin metus
                  consequat eget faucibus semper. Ornare sit urna amet enim
                  consequat. Imperdiet massa viverra proin congue in. Urna
                  tellus tellus ultricies risus amet. Risus quisque lectus diam
                  ipsum vitae. Vitae nam ante habitant quis convallis sed
                  aenean. Tincidunt sed facilisis orci sed posuere suscipit id.
                  Morbi tortor in arcu ultrices elit mauris.
                </p>
              </div>
            </div>
          </div>

          <div className={classes.testimonial_box}>
            <div
              className={classes.testimonial_text_box}
              style={{ textAlign: "right" }}
            >
              <div className={classes.text_box} style={{ marginRight: 21 }}>
                <p className={classes.name}>Meghan Yolo</p>
                <p className={classes.title}>The lettuve</p>
              </div>
              <p
                className={classes.testimonial_text}
                style={{ marginRight: 21 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                blandit vulputate vehicula turpis. Vitae, nisi, semper neque
                amet nulla odio mi elit. Proin viverra viverra urna libero urna,
                dolor posuere nec erat. Pretium interdum congue magna massa,
                turpis aliquam lorem aenean. Vitae risus mattis vestibulum mi
                faucibus leo eget vitae. Nibh viverra ipsum sed commodo quis
                purus. Orci bibendum eget suspendisse in molestie quam placerat
                tempor morbi. Vitae nunc quam ut blandit massa pellentesque.
                Commodo euismod eu ante nibh gravida risus pretium. Est turpis
                adipiscing amet consectetur in pulvinar arcu et. Nullam tellus
                nam ultrices fusce. Sed proin metus consequat eget faucibus
                semper. Ornare sit urna amet enim consequat. Imperdiet massa
                viverra proin congue in. Urna tellus tellus ultricies risus
                amet. Risus quisque lectus diam ipsum vitae. Vitae nam ante
                habitant quis convallis sed aenean. Tincidunt sed facilisis orci
                sed posuere suscipit id. Morbi tortor in arcu ultrices elit
                mauris.
              </p>
            </div>
            <img src="Ellipse2.png" className={classes.image} />
          </div>

          <div className={classes.testimonial_box}>
            <img src="Ellipse3.png" className={classes.image} />
            <div className={classes.text_box}>
              <p className={classes.name}>Meghan Yolo</p>
              <p className={classes.title}>The lettuve</p>
              <div className={classes.testimonial_text_box}>
                <p className={classes.testimonial_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer blandit vulputate vehicula turpis. Vitae, nisi, semper
                  neque amet nulla odio mi elit. Proin viverra viverra urna
                  libero urna, dolor posuere nec erat. Pretium interdum congue
                  magna massa, turpis aliquam lorem aenean. Vitae risus mattis
                  vestibulum mi faucibus leo eget vitae. Nibh viverra ipsum sed
                  commodo quis purus. Orci bibendum eget suspendisse in molestie
                  quam placerat tempor morbi. Vitae nunc quam ut blandit massa
                  pellentesque. Commodo euismod eu ante nibh gravida risus
                  pretium. Est turpis adipiscing amet consectetur in pulvinar
                  arcu et. Nullam tellus nam ultrices fusce. Sed proin metus
                  consequat eget faucibus semper. Ornare sit urna amet enim
                  consequat. Imperdiet massa viverra proin congue in. Urna
                  tellus tellus ultricies risus amet. Risus quisque lectus diam
                  ipsum vitae. Vitae nam ante habitant quis convallis sed
                  aenean. Tincidunt sed facilisis orci sed posuere suscipit id.
                  Morbi tortor in arcu ultrices elit mauris.
                </p>
              </div>
            </div>
          </div>

          <div className={classes.testimonial_box}>
            <div
              className={classes.testimonial_text_box}
              style={{ textAlign: "right" }}
            >
              <div className={classes.text_box} style={{ marginRight: 21 }}>
                <p className={classes.name}>Meghan Yolo</p>
                <p className={classes.title}>The lettuve</p>
              </div>
              <p
                className={classes.testimonial_text}
                style={{ marginRight: 21 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                blandit vulputate vehicula turpis. Vitae, nisi, semper neque
                amet nulla odio mi elit. Proin viverra viverra urna libero urna,
                dolor posuere nec erat. Pretium interdum congue magna massa,
                turpis aliquam lorem aenean. Vitae risus mattis vestibulum mi
                faucibus leo eget vitae. Nibh viverra ipsum sed commodo quis
                purus. Orci bibendum eget suspendisse in molestie quam placerat
                tempor morbi. Vitae nunc quam ut blandit massa pellentesque.
                Commodo euismod eu ante nibh gravida risus pretium. Est turpis
                adipiscing amet consectetur in pulvinar arcu et. Nullam tellus
                nam ultrices fusce. Sed proin metus consequat eget faucibus
                semper. Ornare sit urna amet enim consequat. Imperdiet massa
                viverra proin congue in. Urna tellus tellus ultricies risus
                amet. Risus quisque lectus diam ipsum vitae. Vitae nam ante
                habitant quis convallis sed aenean. Tincidunt sed facilisis orci
                sed posuere suscipit id. Morbi tortor in arcu ultrices elit
                mauris.
              </p>
            </div>
            <img src="Ellipse4.png" className={classes.image} />
          </div>

          <div className={classes.testimonial_box}>
            <img src="Ellipse5.png" className={classes.image} />
            <div className={classes.text_box}>
              <p className={classes.name}>Meghan Yolo</p>
              <p className={classes.title}>The lettuve</p>
              <div className={classes.testimonial_text_box}>
                <p className={classes.testimonial_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer blandit vulputate vehicula turpis. Vitae, nisi, semper
                  neque amet nulla odio mi elit. Proin viverra viverra urna
                  libero urna, dolor posuere nec erat. Pretium interdum congue
                  magna massa, turpis aliquam lorem aenean. Vitae risus mattis
                  vestibulum mi faucibus leo eget vitae. Nibh viverra ipsum sed
                  commodo quis purus. Orci bibendum eget suspendisse in molestie
                  quam placerat tempor morbi. Vitae nunc quam ut blandit massa
                  pellentesque. Commodo euismod eu ante nibh gravida risus
                  pretium. Est turpis adipiscing amet consectetur in pulvinar
                  arcu et. Nullam tellus nam ultrices fusce. Sed proin metus
                  consequat eget faucibus semper. Ornare sit urna amet enim
                  consequat. Imperdiet massa viverra proin congue in. Urna
                  tellus tellus ultricies risus amet. Risus quisque lectus diam
                  ipsum vitae. Vitae nam ante habitant quis convallis sed
                  aenean. Tincidunt sed facilisis orci sed posuere suscipit id.
                  Morbi tortor in arcu ultrices elit mauris.
                </p>
              </div>
            </div>
          </div>

          <div className={classes.testimonial_box}>
            <div
              className={classes.testimonial_text_box}
              style={{ textAlign: "right" }}
            >
              <div className={classes.text_box} style={{ marginRight: 21 }}>
                <p className={classes.name}>Meghan Yolo</p>
                <p className={classes.title}>The lettuve</p>
              </div>
              <p
                className={classes.testimonial_text}
                style={{ marginRight: 21 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                blandit vulputate vehicula turpis. Vitae, nisi, semper neque
                amet nulla odio mi elit. Proin viverra viverra urna libero urna,
                dolor posuere nec erat. Pretium interdum congue magna massa,
                turpis aliquam lorem aenean. Vitae risus mattis vestibulum mi
                faucibus leo eget vitae. Nibh viverra ipsum sed commodo quis
                purus. Orci bibendum eget suspendisse in molestie quam placerat
                tempor morbi. Vitae nunc quam ut blandit massa pellentesque.
                Commodo euismod eu ante nibh gravida risus pretium. Est turpis
                adipiscing amet consectetur in pulvinar arcu et. Nullam tellus
                nam ultrices fusce. Sed proin metus consequat eget faucibus
                semper. Ornare sit urna amet enim consequat. Imperdiet massa
                viverra proin congue in. Urna tellus tellus ultricies risus
                amet. Risus quisque lectus diam ipsum vitae. Vitae nam ante
                habitant quis convallis sed aenean. Tincidunt sed facilisis orci
                sed posuere suscipit id. Morbi tortor in arcu ultrices elit
                mauris.
              </p>
            </div>
            <img src="Ellipse6.png" className={classes.image} />
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default TestimonialBody;
