import CancelIcon from '@mui/icons-material/Cancel';
import { Typography } from '@mui/material';
const ShoppingCart = ({ basket, removeItem }) => {
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

  return basket.map((pizza, index) => (
      <div key={`cart-item-${pizza.id}-${index}`}>
        <div className='cart-item' >
          <div style={{ width: '10%'}} onClick={() => removeItem(pizza.id)}>
            <CancelIcon className="remove-item" fontSize='small' />
          </div>
          <div style={{ width: '75%'}}>
            <Typography textAlign="end">1 x {pizza.name}</Typography>
            <div style={{ textAlign: 'end', color: 'rgba(0,0,0, 0.60)'}}>
              {generateSubtitle(pizza)}
            </div>
          </div>
          <div style={{ width: '15%', textAlign: 'end'}}>${pizza.price}</div>
        </div>
      </div>
  ));
}

export default ShoppingCart;