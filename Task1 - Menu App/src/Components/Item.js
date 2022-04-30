import {  Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Item({item,addItem}) {
  return (
        <Grid  item xs={12} sm={6} md={4} > 
        <Card className="card-container" raised >
          <Grid container direction='column'>
            <Grid item  xs={8}>
            <CardMedia component="img" alt="project" image={item.img}  style={{height:"250px"}}/>
            </Grid>
            <CardContent style={{paddingBottom:"5px",backgroundColor:"white",objectFit:"fill"}}>
                <Grid item >
                    <Typography style={{fontSize:'15px'}}>
                    <h3>
                    {item.name.toUpperCase() }<br/>
                    Price:Rs.{item.price}</h3>
                    </Typography>
                  </Grid>
                  <Divider/>                              
                  <Grid item  className='flex'>
                        <CardActions disableSpacing>
                            <button className='btn primary-btn' style={{fontSize:'20px'}} onClick={() => addItem(item)} type="button">
                                <Typography style={{color:'white'}}>Add to basket</Typography>
                            </button>
                      </CardActions>
                  </Grid>
            </CardContent> 
          </Grid>
        </Card>
      </Grid>
  )
}
