import { Divider, Typography } from '@mui/material';
import { removeItem, emptyBasket, checkout } from '../../store/pizzaSlice';
import { useSelector, useDispatch } from 'react-redux';

import './Cart.css';
import Button from '../Button/Button';
import EmptyBasket from './Empty';
import ShoppingCart from './ShoppingCart';
const Cart = () => {
  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket);

  const removeItemFromBasket = (id) => {
    dispatch(removeItem(id));
  }

  const onCheckout = () => {
    if(basket.length > 0) {
      dispatch(checkout());
    } 
  }
  const onEmptyBasketClick = () => {
    if(basket.length > 0) {
      dispatch(emptyBasket());
    } 
  }

  return (
    <>
      <div className='cart-container'>
        <div className='shopping-cart-container'>
          {basket.length > 0 ? <ShoppingCart basket={basket} removeItem={removeItemFromBasket} />: <EmptyBasket />}
          <Divider sx={{borderStyle:'dashed'}}/>
          <div className='total-container'>
            <Typography align='right'>Total ${basket.reduce((accu, item) => accu + item.price, 0)}</Typography>
          </div>
          <Button onClick={onCheckout} label="Checkout" disabled={basket.length === 0} />
        </div>
        <div className='empty-basket-container'>
          <Typography onClick={onEmptyBasketClick} className={`${basket.length > 0 ? 'enabled' : 'disabled'}`} fontWeight={'bold'}>Empty Basket</Typography>
        </div>
      </div>
    </>
    
  )
}

export default Cart