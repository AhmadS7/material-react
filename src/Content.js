import { Grid } from '@material-ui/core';
import React from 'react';
import CoffeCard from './CoffeCard';
import coffeMakerList from './contstants';

const Content = () => {
  const getCoffeMaketCard = (coffeMakerObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <CoffeCard {...coffeMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {coffeMakerList.map((coffeMakerObj) => getCoffeMaketCard(coffeMakerObj))}
    </Grid>
  );
};

export default Content;
