import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  bitPlan: {
    width: "100%",
    height: "auto",
    paddingTop: "50px",
    paddingBottom: "100px",
  },
  bigCont: {
    width: "100%",
  },
  center: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  underline: {
    marginTop: "20px",
    width: 100,
    height: 5,
    backgroundColor: (dark) => (dark ? "#fff" : "#222"),
    borderRadius: 10,
  },
  lorem: {
    width: "600px",
    marginTop: "20px",
    marginBottom: "100px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));
