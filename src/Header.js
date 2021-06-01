import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { RiFacebookCircleFill } from 'react-icons/ri';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));
const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography className={classes.typographyStyles}>Hinzik</Typography>
        <RiFacebookCircleFill />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
