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

export default function BirthDayCards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        
        title="Birthday cards Application"
        
      />
      <CardMedia
        className={classes.media}
        image="https://rlv.zcache.com/happy_birthday_receptionist-r8309a7d6910546769aa5f3dcc70d26cf_xvuat_8byvr_704.jpg"
        title="Birthdaycard App"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Allows you loved ones to surprise you with online greeting from all your family and friends.
        Each user can customize is owen style.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="GitHub">
          <Link underline="none" href="https://github.com/alexkleymen/Birthdaycards/tree/master" target="_blank">
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
