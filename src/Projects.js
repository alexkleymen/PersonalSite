import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChatProject from './ChatProject';
import BirthDayCards from './BirthDayCards';
import MovieProject from './MovieProject';
import FireBase from './FireBase';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "50px",
        marginLeft: "25%",
        marginRight: "20%",

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    grid : {
        [theme.breakpoints.down('md')]: {
            marginLeft: "0%"
        },
        [theme.breakpoints.up('md')] : {
            marginLeft: "4%"
        },
    }
}));

const Projects = (props, ref) => {
    const classes = useStyles();

    return (
        <div ref={ref} className={classes.root}>
            <Typography variant="h4" component="h2" gutterBottom style={{textAlign: "center"}}>
                        Projects
                    </Typography>
            <Grid className={classes.grid} style={{ marginTop: "20px"}} container justify="center" spacing={3}>

            

                <Grid item lg={6} xs={12}>
                    <ChatProject/>
                </Grid>

                <Grid item lg={6} xs={12}>
                    <BirthDayCards/>
                </Grid>

                <Grid item lg={6} xs={12}>
                    <MovieProject/>
                </Grid>

                <Grid item lg={6} xs={12}>
                    <FireBase/>
                </Grid>
            </Grid>
        </div>
    );
}

export default React.forwardRef(Projects);