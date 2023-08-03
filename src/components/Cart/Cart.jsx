import { Divider, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { removeItem } from '../../store/pizzaSlice';
import { useSelector, useDispatch } from 'react-redux';

import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket);

  const EmptyBasket = () => {
    return (
      <div className='empty-basket'>
        No Items in your basket
      </div>
    )
  };

  const removeItemFromBasket = (id) => {
    dispatch(removeItem(id));
  }

  const generateSubtitle = (pizza) => {
    const { toppings } = pizza;
    const len = toppings.length;
    if (toppings.length > 0) {
      return (
        <Typography noWrap>{pizza.size}, {toppings.map((topping, index) => {
          if (index === len - 1) {
            return `${topping}`
          }

          return `${topping}, `
        })}</Typography >
      )
    }

    return <Typography>{pizza.size}</Typography>;
  }

  const ShoppingCart = () => {
    return (
      <div className='shopping-cart-container'>
        {basket.map((pizza, index) => (
          <div key={`cart-item-${pizza.id}-${index}`}>
            <div className='cart-item' >
              <div style={{ width: '10%'}} onClick={() => removeItemFromBasket(pizza.id)}>
                <CancelIcon fontSize='small' />
              </div>
              <div style={{ width: '75%'}}>
                <Typography textAlign="end">{pizza.name}</Typography>
                <div style={{ textAlign: 'end', color: 'rgba(0,0,0, 0.60)'}}>
                  {generateSubtitle(pizza)}
                </div>
              </div>
              <div style={{ width: '15%', textAlign: 'end'}}>${pizza.price}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className='cart-container'>
      {basket.length > 0 ? <ShoppingCart />: <EmptyBasket />}
      <Divider sx={{borderStyle:'dashed'}}/>
      <div>
        <Typography align='right'>Total ${basket.reduce((accu, item) => accu + item.price, 0)}</Typography>
      </div>
    </div>
  )
}

export default Cart