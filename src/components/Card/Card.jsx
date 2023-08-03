import { useState } from "react";
import { Button, Typography, } from "@mui/material";
import { useSelector } from "react-redux";
import './Card.css';

import ModalComponent from "../Modal/Modal";

const Card = ({ pizza }) => {
  const toppings = useSelector(state => state.toppings);
  const [open ,setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <div className="card-container" key={pizza.id}>
        <div className="image-container">
          <img src={pizza.image} height={100} width={200} alt={pizza.name} className="rounded-courners" />
        </div>
        <Typography align="center">{pizza.name}</Typography>
        <Button fullWidth variant="outlined" onClick={handleClickOpen}>Choose</Button>
      </div>

      <ModalComponent id={pizza.id} toppings={toppings} open={open} handleClose={handleClose} />
    </>
  )
}

Card.propTypes = {
  pizza: {
    id: String,
    name: String,
    price: Number,
  }
};


export default Card