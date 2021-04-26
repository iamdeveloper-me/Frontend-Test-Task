import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Buttons from "../../Components/Button";
import "../../Styles/Components/Carousel.css";
import Carousel from '../../Components/Carousel';

const Home = () => {
  return (
    <div className="bgColor">
      <Container>
        <h1 className="">What We Do</h1>
        <p className="firstPara">
          We develop successful apps for our clients who range from startup{" "}
          <br /> enterpreneurs to Fortune 500s.
        </p>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xl={9} md={11} sm={12} xs={12}>
            <Carousel />

            <div className="buttonCenter">
              <Buttons
                variant="contained"
                color="secondary"
                className="btnSlider"
              >
                View all projects
              </Buttons>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Home;
