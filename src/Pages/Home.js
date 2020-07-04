import React, { useContext, useEffect } from "react";
import Layout from "../Components/Layout";
import Card from "../Components/Card";
import { createUseStyles } from "react-jss";
import { CustomThemeContext } from "../Components/CustomThemeProvider/";
import CardSkeleton from "../Components/CardSkeleton/CardSkeleton";
import LazyLoad from "react-lazyload";

const styles = createUseStyles({
  parent: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
  },
  child: {
    flex: ({ containerStyle }) => {
      return containerStyle === "GRID_BASE" ? "1 0 33%" : "1 0 100%";
    },
    maxWidth: ({ containerStyle }) => {
      return containerStyle === "GRID_BASE" ? "33%" : "100%";
    },
    width: ({ containerStyle }) => {
      return containerStyle === "GRID_BASE" ? "30%" : "90%";
    },
    minHeight: 100,
    padding: 10,
    "@media screen and (max-width:720px)": {
      flex: "1 0 100% !important",
      width: "100% !important",
      maxWidth: "100% !important",
    },
  },
});

const Home = () => {
  const { containerStyle } = useContext(CustomThemeContext);
  const classes = styles({ containerStyle });
  const [fonts, setFonts] = React.useState([]);
  const [sentences, setSentences] = React.useState({});
  const [mounted, setMounted] = React.useState(false);

  const fetchFonts = (resolve) => {
    fetch("https://api.fontgraphy.ir/metadata/fonts")
      .then((res) => res.json())
      .then((result) => {
        setFonts(result.fonts);
        resolve(true);
      });
  };

  const fetchSentenses = () => {
    fetch("https://api.fontgraphy.ir/metadata/sentences")
      .then((res) => res.json())
      .then((result) => {
        setSentences(
          result.sentences.reduce((prev, current, index) => {
            return {
              ...(prev || {}),
              [index]: current.text,
            };
          }, {})
        );
        setMounted(true);
      });
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    new Promise((resolve) => {
      fetchFonts(resolve);
    }).then((res) => {
      if (res) {
        fetchSentenses();
      }
    });
  }, []);

  return (
    <Layout>
      <div className={classes.parent}>
        {mounted ? (
          fonts.map((font, index) => (
            <div key={font._id} className={classes.child}>
              <LazyLoad height={250} offset={100}>
                <Card
                  content={
                    sentences[index % Object.keys(sentences).length] ||
                    "یک نوشته زیبا"
                  }
                  familyInPersian={font.familyInPersian}
                  family={font.family}
                />
              </LazyLoad>
            </div>
          ))
        ) : (
          <>
            <div className={classes.child}>
              <CardSkeleton />
            </div>
            <div className={classes.child}>
              <CardSkeleton />
            </div>
            <div className={classes.child}>
              <CardSkeleton />
            </div>
            <div className={classes.child}>
              <CardSkeleton />
            </div>
            <div className={classes.child}>
              <CardSkeleton />
            </div>
            <div className={classes.child}>
              <CardSkeleton />
            </div>
            <div className={classes.child}>
              <CardSkeleton />
            </div>
            <div className={classes.child}>
              <CardSkeleton />
            </div>
            <div className={classes.child}>
              <CardSkeleton />
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Home;
