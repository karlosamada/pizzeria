import { useSelector } from "react-redux";
import Card from "../Card/Card";
import './PizzaContainer.css';

const PizzaContainer = () => {
  const pizzas = useSelector((state) => state.pizzas);

  return (
    <div className="pizza-container">
      {pizzas.map((pizza) => (
        <Card key={pizza.id} pizza={pizza} />
      ))}
    </div>
  )
}

export default PizzaContainer