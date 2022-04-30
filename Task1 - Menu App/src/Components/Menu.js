import { Button, ButtonGroup, Grid} from '@mui/material';
import React, { useState } from 'react';
import Item from "./Item";

export default function Menu({ menu, addItem}) {
  const [storeItem,setStoreItem]=useState(menu);
  const [filteredItems, setfilteredItems]=useState(menu);
  const categoryBar= ()=>{
    const category=[];
    storeItem.map((item)=>{
      category.push(item.category)
    })
    let uniqueCategory = [...new Set(category)];
    return (
    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group" style={{position:"fixed",left:"0"}}>
      <Button onClick={()=>{setfilteredItems(menu)}}>All</Button>
    {uniqueCategory.map((item) => (
          <Button onClick={()=>{
            let f=storeItem.filter((hey)=>hey.category.toLowerCase().includes(item)
            );
            setfilteredItems(f);
          }}>{item}</Button>
      ))}
  </ButtonGroup>)
  }

  return (
    <div style={{marginTop:"115px"}}>
      {categoryBar()}
      <Grid container>
        {filteredItems.map((pizza) => (
            <Item key={pizza.id} item={pizza} addItem={addItem}/>
        ))}
    </Grid>
    </div>
  )
}

