
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChatProject from './ChatProject';
import BirthDayCards from './BirthDayCards';
import MovieProject from './MovieProject';
import FireBase from './FireBase';
import { requirePropFactory } from '@material-ui/core';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "50px",
        marginLeft: "25%",
        marginRight: "20%",
        marginBottom: "100px"

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        marginRight: "4%",

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
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
        minHeight: "100px"
    }
}));

const Education = (props, ref) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div ref={ref} className={classes.root}>
            <Grid container justify="center" spacing={3}>

                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Education
                    </Typography>
                </Grid>



                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            M.Sc. Computer science
                      </Typography>
                        <Typography variant="h5" component="h2">
                            Open university israel
                      </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            2020 -
                        </Typography>
                        <Typography variant="body2" component="p">
                            {bull} Starting with completion of first degree syllabus. <br />
                            <br />
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            B.Sc. in industrial and information system engineering
                      </Typography>
                        <Typography variant="h5" component="h2">
                            Ort braude college of engineering
                      </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            2012 — 2016
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}

export default React.forwardRef(Education);