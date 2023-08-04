import { useState } from "react";
import { Typography, } from "@mui/material";
import { useSelector } from "react-redux";
import './Card.css';
import PropTypes from 'prop-types';

import ModalComponent from "../Modal/Modal";
import Button from "../Button/Button";

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
        <Typography noWrap align="center">{pizza.name}</Typography>
        <Typography sx={{color: 'rgba(0,0,0, 0.5)'}} variant="subtitle2" align="center">starts at ${pizza.price[0]}</Typography>
        <Button onClick={handleClickOpen} label="Choose" disabled={false}>Choose</Button>
      </div>

      <ModalComponent pizza={pizza} toppings={toppings} open={open} handleClose={handleClose} />
    </>
  )
}

Card.propTypes = {
  pizza: PropTypes.object
};


export default Card