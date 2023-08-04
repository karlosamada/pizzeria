import { useState, useEffect } from 'react';
import { Modal, Box, Divider , FormControlLabel, Checkbox, Typography, RadioGroup, Radio } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBasket } from '../../store/pizzaSlice';
import Button from '../Button/Button';

const ModalComponent = ({ pizza, toppings, open, handleClose}) => {
  const dispatch = useDispatch();
  const [toppingList,setToppingList] = useState([]);
  const [size, setSize] = useState('');
  
  useEffect(() => {
    if (toppings.length > 0) {
      const newToppings = toppings.map(topping => ({
        ...topping,
        checked: false
      }));

      setToppingList(newToppings);
    }
  }, [toppings]);

  const onChange = (e, id) => {
    const newToppings = toppingList.map(topping => {
      if (id === topping.id) {
        return {
          ...topping,
          checked: e.target.checked
        }
      }
      return topping
    });

    setToppingList(newToppings);
  }
  

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '25px',
    boxShadow: 24,
    p: 4,
    color: '#000',
  };

  const onSubmit = () => {
    if (size === '') {
      return;
    }

    const payload = {
      id: pizza.id,
      size,
      toppings: toppingList.filter(item => item.checked).map(item => item.name)
    };

    dispatch(addBasket(payload));

    const newToppings = toppings.map(topping => ({
      ...topping,
      checked: false
    }));
    
    setToppingList(newToppings);
    setSize('');
    handleClose();
  }

  const onCancel = () => {
    const newToppings = toppings.map(topping => ({
        ...topping,
        checked: false
      }));
      
    setToppingList(newToppings);
    setSize('');
    handleClose();
  }
      
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {pizza.name}
          </Typography>
          <Typography>Toppings</Typography>
          <div className="toppings-container">
            {toppingList.map((topping) => (
              <div key={topping.id} className='toppings'>
                <FormControlLabel
                  control={
                    <Checkbox checked={topping.checked} onChange={(e) => onChange(e, topping.id)} name={topping.name} />
                  }
                  label={topping.name}
                />
              </div>
            ))}
          </div>
          <Divider />
          <Typography>Size</Typography>
          <div className="toppings-container">
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="Small" onChange={() => setSize('small')} control={<Radio />} label={`Small - $${pizza.price[0]}`} sx={{ fontSize: 10}} />
                <FormControlLabel value="Medium" onChange={() => setSize('medium')} control={<Radio />} label={`Medium - $${pizza.price[1]}`} />
                <FormControlLabel value="Large" onChange={() => setSize('large')} control={<Radio />} label={`Large - $${pizza.price[2]}`} />
              </RadioGroup>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <Button onClick={onSubmit} label="Submit" disabled={size === ''} />
            <Button onClick={onCancel} label="Cancel"/>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

ModalComponent.propTypes = {
  pizza: PropTypes.object,
  toppings: PropTypes.array,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
}

export default ModalComponent