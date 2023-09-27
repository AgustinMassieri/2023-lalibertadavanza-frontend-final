
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import FoodForm from './FoodForm'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import FoodTable from './Tables/FoodTable';

const FoodList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ textAlign: 'center', color: 'black'}}> 
      <h2>Foods Table</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-start', maxWidth:'100%',}}>
        <FoodTable/>
      </div>
      <React.Fragment>
        <FoodForm  open={isModalOpen} setOpen={setIsModalOpen}/>
      </React.Fragment >

      <IconButton
        color="primary"
        onClick={()=> {setIsModalOpen(true)}}
      >
        <AddCircleRoundedIcon />
      </IconButton>
    </div>
  );
};

export default FoodList;