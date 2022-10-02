import React from "react";
import { makeStyles } from "@material-ui/core";
import Footer from "../General-components/Footer";

const useStyles = makeStyles((theme) => ({
  body: {
    maxWidth: 1200,
    margin: "auto",
  },
  inner_flex_one: {
    display: "flex",
    justifyContent: "space-between",
  },
  inner_flex_two: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 96,
  },
  picture_sect: {
    display: "flex",
    flexDirection: "column",
  },
  picture: {
    marginTop: 20,
  },
  image: {
    width: 325,
  },
  picture_name: {
    fontSize: 16,
  },
  picture_title: {
    fontSize: 12,
  },
  text_body: {
    textAlign: "center",
  },
  text_sect: {
    marginTop: 12,
  },
  about_text: {
    textAlign: "right",
    width: 750,
    fontSize: 12,
  },
  footer: {
    marginTop: 213
  }
}));

const AboutBody = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.body}>
        <div className={classes.inner_flex_one}>
          <div className={classes.picture_sect}>
            <div className={classes.picture}>
              <img src="img1.png" className={classes.image} />
              <div className={classes.text_body}>
                <p className={classes.picture_name}>Kabiru Rabiu</p>
                <p className={classes.picture_title}>
                  Managing Director General
                </p>
              </div>
            </div>
            <div className={classes.picture}>
              <img src="img2.png" className={classes.image} />
              <div className={classes.text_body}>
                <p className={classes.picture_name}>Kabiru Rabiu</p>
                <p className={classes.picture_title}>
                  Managing Director General
                </p>
              </div>
            </div>
            <div className={classes.picture}>
              <img src="img3.png" className={classes.image} />
              <div className={classes.text_body}>
                <p className={classes.picture_name}>Kabiru Rabiu</p>
                <p className={classes.picture_title}>
                  Managing Director General
                </p>
              </div>
            </div>
          </div>

          <div className={classes.text_sect}>
            <p className={classes.about_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
              faucibus cursus sagittis fusce enim, feugiat. Vitae proin egestas
              consequat quam tortor, mi justo, duis. Ut augue morbi sem urna,
              non arcu vel feugiat. Posuere iaculis nunc justo, ac in mi quam
              fermentum. Euismod imperdiet quam enim arcu enim volutpat rhoncus,
              non quis. Sed euismod vitae vitae elementum vitae sed. Tincidunt
              imperdiet sed sem et adipiscing. Quam massa nullam sit amet
              pulvinar mattis imperdiet. Risus dolor, massa varius suspendisse.
              Neque, placerat mattis in mi quis egestas tellus integer cum. Arcu
              arcu arcu turpis fames a purus. Orci, est augue justo massa non
              quam non. In urna eu amet sed sit lectus dignissim morbi.
              Volutpat, volutpat enim nisl tempus. Mauris rhoncus, egestas
              consectetur vitae, elit tortor, nunc, sed facilisi. Nunc urna,
              fermentum a, ut pellentesque ut eget. Nisl elementum, vel a, sit
              amet sed phasellus. Mi enim ut tortor lobortis amet iaculis
              pretium velit. Accumsan sit pellentesque cras arcu libero,
              tincidunt sollicitudin adipiscing. Proin vitae fringilla enim sit
              blandit urna, sed. Aenean in aliquam consectetur commodo morbi
              risus pulvinar. Congue eu sem ultricies eleifend in integer et
              odio pellentesque. Lacus, nulla nunc sociis tristique phasellus
              bibendum ac. Pharetra morbi at neque diam potenti. Molestie in et
              mattis nam congue posuere mauris. In fermentum, tellus egestas
              viverra nunc erat in mauris. Quis ante mauris ut gravida enim
              purus est egestas nunc. Quis orci fringilla tincidunt nunc urna
              semper et. Vitae neque praesent non tellus libero, congue
              consequat nisi. Quam lacinia quam nibh sem augue gravida sit
              velit. Placerat pretium sollicitudin vitae commodo sociis aliquam
              semper. Posuere at nunc nulla mauris, urna, phasellus. Non est
              quis sed dis suspendisse tincidunt facilisi. Turpis amet,
              adipiscing sollicitudin odio sed ac fames mauris placerat. Urna
              turpis rhoncus, est turpis sit. Suspendisse ullamcorper laoreet
              aliquam imperdiet leo platea quam eget. Mauris ipsum, vitae
              scelerisque tellus. Tellus euismod id sit pellentesque mi. Viverra
              justo, tincidunt tortor vulputate. Vitae pellentesque massa cursus
              fringilla ut libero tortor pellentesque. Cras vel feugiat massa
              quis amet, ac vitae. Nibh ante praesent viverra eu, feugiat varius
              consectetur fusce. Vel duis luctus ut eget ut et odio. Scelerisque
              hac auctor massa maecenas blandit posuere libero. Eget duis est
              convallis pellentesque congue tellus ut pellentesque ut. Lacus
              lorem odio sem sapien in leo, pharetra id egestas. Morbi sit
              consequat arcu interdum nisi, fames. Pretium odio praesent sed
              convallis praesent commodo diam sed orci. Nunc enim, ut malesuada
              et non. Quis ullamcorper ut pulvinar semper purus. Eget nibh nisl
              vitae blandit maecenas. Massa pharetra, massa ipsum vel porta
              dolor turpis vitae pretium. Sem at turpis lacus in at pellentesque
              aliquam. Purus in elit quam id. Ac et morbi vulputate tempus nisl
              egestas ornare. Turpis eget sed eu orci nisi laoreet ut imperdiet.
              Sit id venenatis, dis faucibus. Sapien elit in eu platea nec
              tellus nascetur. Nascetur egestas nunc tincidunt id et. Fusce arcu
              orci massa et metus, in vitae. Pretium, mauris mi dignissim est.
              Cursus fames magnis urna fames egestas interdum ut id lorem. Eget
              ipsum varius aliquam sed at. Mi venenatis vel ipsum, turpis massa.
              Sodales sed euismod habitant ultricies urna. Sed elit sem commodo
              massa varius placerat egestas. Scelerisque facilisi fusce eu
              mauris duis est volutpat habitasse risus. Lectus sed lobortis
              fames in tortor porttitor. Et pellentesque nulla sapien magna at
              amet varius at. Dignissim egestas quam faucibus ipsum viverra.
              Diam sit ac natoque in feugiat ornare massa. Nisi enim egestas
              nibh iaculis in elementum. In in et dolor gravida. Sit ut sit at
              aliquam pellentesque nunc mauris commodo. Nullam quis amet
              accumsan at viverra ullamcorper tortor. Quam blandit tortor nulla
              tempus suspendisse fringilla nisi tristique. Nisl cursus
              adipiscing nunc quis nunc a arcu ultricies quam. Vitae, amet
              pharetra, eget et vitae, aliquam id volutpat. Non nullam tristique
              condimentum enim ultricies egestas varius urna. Aliquam
              consectetur malesuada ipsum diam non donec. Amet turpis montes,
              cursus sagittis. Interdum libero neque sit vitae elementum, augue
              ultricies vel ornare. Enim vel nunc venenatis, nunc diam urna
              purus. Hac non iaculis luctus sit habitasse congue quis. Eget
              aenean ac suspendisse amet, in a etiam sem. In tellus id turpis
              id. Nisi urna felis lacus et dignissim amet magna. Massa tortor eu
              justo, vitae vel ultricies lorem aliquam. Urna mauris in
              pellentesque quis. Lacus cras sit euismod lorem duis erat. Quis
              fringilla tortor eget magnis sollicitudin justo. Egestas egestas
              vitae orci erat. Ultricies elementum viverra leo id. Commodo
              porttitor viverra dolor, sit vitae sed. Purus sed morbi et fusce
              netus tristique et. Amet, pellentesque lacus auctor purus,
              dictumst. Etiam blandit urna, id turpis venenatis tempor velit.
              Congue id in in lacus et odio. Ut at nec scelerisque pellentesque
              tristique lacus. Adipiscing rhoncus velit pellentesque viverra.
              Vitae suspendisse malesuada ac ornare imperdiet sed sed. Lorem
              purus nunc, integer morbi sed eu nunc. Ac ultrices augue commodo
              scelerisque mi est mus facilisis. At nec faucibus velit
              sollicitudin egestas dignissim quam mattis ut. Cras morbi
              porttitor interdum a vulputate pellentesque turpis nec. Gravida
              consequat leo ipsum mauris sed faucibus. Congue faucibus penatibus
              a mauris risus, quam orci nibh. Faucibus vitae et dignissim est
              donec ut dui eget amet. Pellentesque eu at sit sed tempus,
              faucibus. Nisl dignissim mauris cursus vel fames sed viverra.
              Sagittis et, non, posuere in dui. Pellentesque tellus pulvinar
              massa montes, orci nec. Amet porttitor in sagittis, purus. Velit
              nisi, enim, cum consectetur praesent posuere. Erat dui,
              condimentum elementum enim egestas venenatis mi. At vel egestas
              ultrices vitae sed non ac. Senectus gravida ac diam habitant ut
              vestibulum pretium vel, a. Quis congue vulputate blandit id nibh
              volutpat venenatis, pellentesque. Pellentesque bibendum turpis
              mattis commodo nibh lacus, volutpat maecenas maecenas. Nullam vel
              at id bibendum sed quam amet, ac sit. Commodo quis hendrerit
              accumsan donec id dolor. Ornare vel massa sit id non parturient
              natoque. Aliquet amet pellentesque sed lorem sagittis, mattis
              porta viverra. Diam risus etiam condimentum consequat netus
              interdum malesuada vulputate fames. Ut diam volutpat in blandit
              turpis mauris cursus diam sed. Risus donec aliquam maecenas proin
              amet, ullamcorper sit amet. In nibh nullam suspendisse tortor nunc
              fermentum sed fermentum. Eget eget pretium, risus etiam diam morbi
              fringilla sit. Ornare nulla non convallis diam, sed a.
              Pellentesque at aliquam suspendisse cras commodo consectetur.
              Volutpat amet, dignissim nulla nibh. Diam neque vivamus at
              pellentesque tristique. Ac lectus curabitur rhoncus vel nec id
              felis dolor, curabitur. Lacus ullamcorper sit est hendrerit in
              amet. Vitae, suscipit amet facilisi lacus. Faucibus aenean odio
              elementum, fermentum ultricies pharetra. At massa massa euismod
              sed eget sed in diam. Turpis enim cursus a eleifend id ullamcorper
              sit. Tincidunt orci est elementum, leo at risus in ultrices.
              Neque, laoreet in enim, commodo urna. Lacinia adipiscing amet
              hendrerit mattis est odio ac eget. Lectus sit vulputate in justo,
              vitae. Euismod ut nisi mi enim, eleifend at eget egestas donec.
              Aenean hac sapien scelerisque sit magna tincidunt viverra. Et est,
              pellentesque rhoncus tellus nunc. Euismod eget auctor odio
              sodales. Et eget maecenas pretium mauris blandit non interdum sed
              facilisi. Urna dolor congue elit urna vulputate fusce tincidunt.
              Et ac lacus eros, et libero eu. Nisi, egestas placerat
              sollicitudin mauris. Sodales tellus convallis amet, amet amet ut.
              Sodales volutpat viverra faucibus senectus sit nunc, leo. Proin at
              cursus egestas eget lacus, faucibus platea sollicitudin ac. Ut
              felis molestie mi accumsan pretium sapien. Habitant sagittis, in
              tortor parturient faucibus malesuada. Egestas donec amet amet
              ipsum blandit. At egestas amet neque at. Placerat velit rutrum
              tortor ac cras at at scelerisque. Facilisis dignissim nunc mi ut
              viverra libero pellentesque laoreet eu. Mi hendrerit enim
              pellentesque scelerisque morbi. Eget tincidunt urna faucibus
              ultrices integer ipsum euismod. Rhoncus et condimentum pretium
              turpis magna ut sagittis. Urna, urna, ornare in tincidunt pulvinar
              vestibulum. Pellentesque tempus ut non tellus, semper commodo
              elit. Consectetur sit tortor ut nunc amet, hac consectetur
              pulvinar quis. Lacinia cursus cursus et sit. Massa a curabitur
              commodo arcu vitae. Lectus convallis volutpat placerat tortor vel
              elementum. Semper pretium, tortor sed volutpat elementum quis
              vulputate. Purus quis et, posuere consequat eu, netus leo, tortor
              id. Massa consequat facilisis platea massa leo vulputate maecenas.
              Elit donec et sit nibh ornare fermentum in. In id fringilla
              volutpat gravida ultrices purus aliquam dictum ac. Id at nunc
              venenatis, a aliquet duis maecenas. Amet, cursus sed condimentum
              suscipit lacus eget viverra sagittis, vulputate. Sed a, diam elit
              mus morbi enim. Enim sed eros, mauris vivamus leo volutpat. In
              congue integer urna egestas non bibendum amet ullamcorper
              faucibus. Ut ipsum sed semper sit sit nibh velit donec. Sit.
            </p>
          </div>
        </div>

        <div className={classes.inner_flex_two}>
          <div className={classes.picture}>
            <img src="img4.png" className={classes.image} />
            <div className={classes.text_body}>
              <p className={classes.picture_name}>Kabiru Rabiu</p>
              <p className={classes.picture_title}>Managing Director General</p>
            </div>
          </div>
          <div className={classes.picture}>
            <img src="img5.png" className={classes.image} />
            <div className={classes.text_body}>
              <p className={classes.picture_name}>Kabiru Rabiu</p>
              <p className={classes.picture_title}>Managing Director General</p>
            </div>
          </div>
          <div className={classes.picture}>
            <img src="img6.png" className={classes.image} />
            <div className={classes.text_body}>
              <p className={classes.picture_name}>Kabiru Rabiu</p>
              <p className={classes.picture_title}>Managing Director General</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default AboutBody;
