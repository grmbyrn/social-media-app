import React, { useState } from 'react';

import {alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography} from '@material-ui/core'
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  search:{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    borderRadius: theme.shape.borderRadius,
    width: '50%',
    [theme.breakpoints.down('sm')]:{
      display: (props) => (props.open ? 'flex' : 'none'),
      width: '70%'
    }
  },
  input: {
    color: 'white',
    marginLeft: theme.spacing(1)
  },
  cancel: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]:{
      display: 'none'
    }
  },
  icons:{
    alignItems: 'center',
    display: (props) => (props.open ? 'none' : 'flex')
  },
  badge: {
    marginRight: theme.spacing(2)
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles({ open })
  return (
    <AppBar position='sticky'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' className={classes.logoLg}>
          FaceBrick
        </Typography>
        <Typography variant='h6' className={classes.logoSm}>
          FB
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder='Search...' className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search 
            className={classes.searchButton} 
            onClick={() =>  setOpen(true)}
            />
          <Badge badgeContent={4} color='secondary' className={classes.badge}>
           <Mail />
          </Badge>
          <Badge badgeContent={2} color='secondary' className={classes.badge}>
           <Notifications src={'https://i.guim.co.uk/img/uploads/2018/05/25/Sid-Lowe.jpg?width=140&height=140&quality=85&auto=format&fit=max&s=4ee8d5d1e19966526484fd76c4c86aab'} />
          </Badge>
          <Avatar />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;