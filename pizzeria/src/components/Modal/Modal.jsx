import { useState, useEffect } from 'react';
import { Modal, Box, Divider , FormControlLabel, Checkbox, Typography, RadioGroup, Radio, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBasket } from '../../store/pizzaSlice';

const ModalComponent = ({ id, toppings, open, handleClose}) => {
  const dispatch = useDispatch();
  const [toppingList,setToppingList] = useState([]);
  const [size, setSize] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  
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
    // width: 500,
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
      id,
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
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>Toppings</Typography>
          <div className="toppings-container">
            {toppingList.map((topping) => (
              <div key={topping.id}>
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
                <FormControlLabel value="Small" onChange={() => setSize('small')} control={<Radio />} label="Small" sx={{ fontSize: 10}} />
                <FormControlLabel value="Medium" onChange={() => setSize('medium')} control={<Radio />} label="Medium" />
                <FormControlLabel value="Large" onChange={() => setSize('large')} control={<Radio />} size="large" label="Large" />
              </RadioGroup>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <Button variant='outlined' onClick={onSubmit}>
              Submit
            </Button>
            <Button variant='outlined' onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

ModalComponent.propTypes = {
  id: PropTypes.string,
  toppings: PropTypes.array,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
}

export default ModalComponent