import React from "react";
import Slider from "react-slick";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import carouselData from "../../../fakeData/CarouselData/CarouselData";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 150,
  },
}));
let settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Header() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Slider {...settings}>
        {carouselData.map((product) => (
          <div>
            <Card style={{ margin: "50px 35px" }} className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Grid container spcing={2}>
                    <Grid item xs={5}>
                      <Typography component="h5" variant="h5">
                        {product?.name}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {product?.description}
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <img src={product?.image} style={{width: '100%'}} alt=""/>
                    </Grid>
                  </Grid>
                </CardContent>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default Header;
