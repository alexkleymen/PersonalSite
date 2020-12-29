import logo from './assets/html.svg'
import css from './assets/css.svg'
import bootstrap from './assets/bootstrap.svg'
import mu from './assets/mu.svg'
import js from './assets/js.svg'
import jq from './assets/jq.svg'
import react from './assets/react.svg'
import nodejs from './assets/nodejs.svg'
import mongo from './assets/mongo.svg'
import sql from './assets/sql.svg'
import c from './assets/c.svg'
import python from './assets/python.svg'
import git from './assets/git.svg'
import wb from './assets/wb.svg'
import heroku from './assets/heroku.svg'
import fb from './assets/fb.svg'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChatProject from './ChatProject';
import BirthDayCards from './BirthDayCards';
import MovieProject from './MovieProject';
import FireBase from './FireBase';
import { requirePropFactory } from '@material-ui/core';




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
        marginRight: "4%",
        
    },
}));

const Skills = (props, ref) => {
    const classes = useStyles();

    return (
        <div ref={ref} className={classes.root}>
            <Grid container justify="center" spacing={3}>

                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Skills
                    </Typography>
                    
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={1} className={classes.paper}>
                        <Typography variant="h5" component="h2" gutterBottom >
                           <span style={{borderBottom: "1px solid #ddd" , padding: "2px"}}>HTML AND CSS</span> 
                        </Typography>

                        <div class="item">
                          <img src={css}/>
                            <span class="caption">CSS</span>
                        </div>

                        <div class="item">
                           <img src={logo} alt="we are"/>
                            <span class="caption">HTML5</span>
                        </div>

                        <div class="item">
                           <img src={bootstrap} alt="we are"/>
                            <span class="caption">BOOTSTRAP</span>
                        </div>

                        <div class="item">
                           <img src={mu} alt="we are"/>
                            <span class="caption">MATERIAL-UI</span>
                        </div>

                        
                       
                            
                        
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={1} className={classes.paper}>
                        <Typography variant="h5" component="h2" gutterBottom >
                           <span style={{borderBottom: "1px solid #ddd" , padding: "2px"}}>Javascript</span> 
                        </Typography>
                        <div class="item">
                           <img src={js} alt="we are"/>
                            <span class="caption">Javascript</span>
                        </div>

                        <div class="item">
                           <img src={react} alt="we are"/>
                            <span class="caption">React</span>
                        </div>

                        <div class="item">
                           <img src={nodejs} alt="we are"/>
                            <span class="caption">Node</span>
                        </div>

                        <div class="item">
                           <img src={jq} alt="we are"/>
                            <span class="caption">jQuery</span>
                        </div>
                        
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={1} className={classes.paper}>
                        <Typography variant="h5" component="h2" gutterBottom >
                           <span style={{borderBottom: "1px solid #ddd" , padding: "2px"}}>Back-End</span> 
                        </Typography>

                        <div class="item">
                           <img src={python} alt="we are"/>
                            <span class="caption">Python</span>
                        </div>

                        <div class="item">
                           <img src={c} alt="we are"/>
                            <span class="caption">C++</span>
                        </div>

                        <div class="item">
                           <img src={sql} alt="we are"/>
                            <span class="caption">PLSQL</span>
                        </div>

                        <div class="item">
                           <img src={mongo} alt="we are"/>
                            <span class="caption">MongoDB</span>
                        </div>
                        
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={1} className={classes.paper}>
                        <Typography variant="h5" component="h2" gutterBottom >
                           <span style={{borderBottom: "1px solid #ddd" , padding: "2px"}}>Other</span> 
                        </Typography>
                        <div class="item">
                           <img src={git} alt="we are"/>
                            <span class="caption">Git</span>
                        </div>

                        <div class="item">
                           <img src={fb} alt="we are"/>
                            <span class="caption">Firebase</span>
                        </div>

                        <div class="item">
                           <img src={heroku} alt="we are"/>
                            <span class="caption">Heroku</span>
                        </div>

                        <div class="item">
                           <img src={wb} alt="we are"/>
                            <span class="caption">Webpack</span>
                        </div>
                    </Paper>
                </Grid>

                
            </Grid>
        </div>
    );
}

export default React.forwardRef(Skills);