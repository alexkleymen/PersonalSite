import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minHeight: 420
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MovieProject() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        
        title="Movie subscriptions App"
        
      />
      <CardMedia
        className={classes.media}
        image="https://imageproxy.themaven.net/https%3A%2F%2Fimages.saymedia-content.com%2F.image%2FMTY5ODE3MTkxNzY2NTY2MDg4%2Fnative-nerd-movie-list-of-45.jpg?w=788&q=40&h=525.2864787727435&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1&fp-debug=false"
        title="Movie subscription"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Movie subscription app allows the admin to manage the user and subscriptions. Works with over 4 Api's and 2 DB's. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="GitHub">
          <Link underline="none" href="https://github.com/alexkleymen/Movie" target="_blank">
            <GitHubIcon />
          </Link>
          
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Frontend:</Typography>
          <Typography paragraph>
            Developed with react hooks. 
            To manage the flow of the application used reat-router-dom (SPA).
            Designed the layout and aesthetics with plain CSS and materialUI.
          </Typography>

          <Typography paragraph>Bankend:</Typography>
          <Typography paragraph>
            Developed with Nodejs over express with mongoose and mongoDB.
          </Typography>
    
        </CardContent>
      </Collapse>
    </Card>
  );
}