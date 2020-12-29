
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
    card : {
        width: "100%",
        marginLeft: "1.5%",
        marginRight: "5%",
        marginBottom: "15px",
        minHeight: "213px"
    }
}));

const Experience = (props, ref) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div ref={ref} className={classes.root}>
            <Grid container justify="center" spacing={3}>

                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Experience
                    </Typography>
                </Grid>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            System analyst and project manager
                      </Typography>
                        <Typography variant="h5" component="h2">
                            Rafael
                      </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Nov 2016 - 
                        </Typography>
                        <Typography variant="body2" component="p">
                            {bull} Managed ERP, CRM and BI projects across the globe in agile and waterfall methods. <br/>
                            {bull} Lead initiatives to improve processes in business, organizational, and operational areas. <br/>
                            {bull} Facilitate optimal internal communications by serving as liaison between services organization and product development. <br/>
                            {bull} Developed MES system from scratch.<br/>
                            {bull} Lead simulation development using javascript. <br/>
                        <br />
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Client Services Manager 
                      </Typography>
                        <Typography variant="h5" component="h2">
                            Rafael
                      </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        Feb, 2015— Nov, 2016
                        </Typography>
                        <Typography variant="body2" component="p">
                            {bull} coordinating internal projects and determining the best utilization to resource to increase customer satisfaction. <br/>
                            {bull} Encouraging revenue growth by inspiring clients to purchase accessories and additional service. <br/>
                            {bull} Managing the internal supply chain regarding post sale manufacturing. <br/>
                           
                        <br />
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Statistics, Probability and Computer science tutor
                      </Typography>
                        <Typography variant="h5" component="h2">
                        Ort braude college
                      </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        Feb, 2014 — Mar, 2015
                        </Typography>
                        <Typography variant="body2" component="p">
                            {bull} Practitioner on behalf of the College throughout the semester. <br/>
                            {bull} Teaching theoretical and practical topics. <br/>
                           
                           
                        <br />
                        </Typography>
                    </CardContent>
                </Card>





            </Grid>
        </div>
    );
}

export default React.forwardRef(Experience);