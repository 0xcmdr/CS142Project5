import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from 'react-router-dom'
import {
  Typography
} from '@material-ui/core';

//kart için gerekli transform ve stille

//KART Komponenti
export default function Comment(props) {
  


  return (
    <Card elevation={5}>
      <CardHeader
        avatar={
            <Avatar aria-label="avatar">
            <PersonIcon/>
          </Avatar>
        }
        title={<Link to={'/users/'+props.user._id}>{props.user.first_name +" "+props.user.last_name}</Link>}
        subheader={props.date_time}
      />
      <CardContent>
          <Typography paragraph>{props.comment}</Typography>
        </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="dislike">
          <ThumbDownIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
  
}
