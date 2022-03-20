import React from 'react';

import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(5)
  },
  media: {
    height: 250,
    [theme.breakpoints.down('sm')]:{
      height: 150
    }
  }
}))

const Post = () => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia 
          className={classes.media}
          image='https://i.guim.co.uk/img/media/f02d97ed521a31d8e9f5c5d9f27c41aab73a0998/125_394_1980_1188/master/1980.jpg?width=700&quality=85&auto=format&fit=max&s=b1bee4d39c64b9c9b80d2b630eb0369a'
          title='My Post'
          />
        <CardContent>
          <Typography gutterBottom variant='h5'>My First Post</Typography>
          <Typography variant='body2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tempore id similique distinctio in aperiam deserunt non incidunt molestias maxime! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tempore id similique distinctio in aperiam deserunt non incidunt molestias maxime!</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>Share</Button>
        <Button size='small' color='primary'>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Post;