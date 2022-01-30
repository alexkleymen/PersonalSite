import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ChatProject from "./ChatProject";
import BirthDayCards from "./BirthDayCards";
import MovieProject from "./MovieProject";
import FireBase from "./FireBase";
import { requirePropFactory } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "50px",
    marginLeft: "25%",
    marginRight: "20%",
    marginBottom: "100px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginRight: "4%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    width: "100%",
    marginLeft: "1.5%",
    marginRight: "5%",
    marginBottom: "15px",
    minHeight: "100px",
  },
}));

const Volunteer = (props, ref) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div ref={ref} className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Volunteer experience
          </Typography>
        </Grid>

        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Mathematics Teacher <br />
              Created a free educational environment for children from
              underprivileged backgrounds, to help them achieve full
              matriculation certificates.
            </Typography>
            <Typography variant="h5" component="h2">
              JDC (The Joint)
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2014-2016
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Tutor <br />
              PERACH pairs up needy children from underprivileged backgrounds
              with university students who act as their tutors, giving the child
              personal attention (often sorely lacking) and serving as a role
              model. The care that PERACH children receive from their mentors,
              helps them realize their potential and blossom into motivated
              individuals.
            </Typography>
            <Typography variant="h5" component="h2">
              Perach - Tutorial Project
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2014-2016
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Guest Lecturer <br />
              advanced topics in software development in LOW CODE, Agile
              framework 3 and System design
            </Typography>
            <Typography variant="h5" component="h2">
              Shenkar - Engineering. Design. Art.
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2021
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default React.forwardRef(Volunteer);
