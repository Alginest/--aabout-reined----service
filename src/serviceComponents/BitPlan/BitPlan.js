import React from "react";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
import { Box, Container, Typography } from "@material-ui/core";
const BitPlan = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.bitPlan}>
      <Container className={classes.bigCont}>
        <Typography variant="h3" align="center">
          How To Get Started
        </Typography>
        <Box className={classes.center}>
          <div className={classes.underline}></div>
        </Box>
        <Box className={classes.center}>
          <Typography variant="body1" align="center" className={classes.lorem}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            dolorem dicta libero veritatis reiciendis quis pariatur magni.
          </Typography>
        </Box>
      </Container>
    </section>
  );
};

export default BitPlan;
