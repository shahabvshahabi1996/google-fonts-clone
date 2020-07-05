import React, { useContext, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import Card from "../../Components/Card/Card";
import { CustomThemeContext } from "../../Components/CustomThemeProvider/CustomThemeProvider";
import CardSkeleton from "../../Components/CardSkeleton/CardSkeleton";
import LazyLoad from "react-lazyload";
import styles from "./Home.style";
import { useRecoilValue } from "recoil";
import { searchInputStateValue } from "../../Selectors/SeachInput.selector";

const Home = () => {
  const { containerStyle } = useContext(CustomThemeContext);
  const classes = styles({ containerStyle });
  const [fonts, setFonts] = React.useState([]);
  const [sentences, setSentences] = React.useState({});
  const [mounted, setMounted] = React.useState(false);
  const searchInputValue = useRecoilValue(searchInputStateValue);

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

  const filteredList = fonts.filter(({ familyInPersian }) =>
    familyInPersian.match(new RegExp(`${searchInputValue}`, "i"))
  );

  return (
    <Layout>
      <div className={classes.parent}>
        {mounted ? (
          filteredList.length > 0 ? (
            filteredList.map((font, index) => (
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
            <div>
              <h2>فونت مورد نظر پیدا نشد</h2>
            </div>
          )
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
