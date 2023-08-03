import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import PizzaContainer from "./components/PizzaContainer/PizzaContainer";
import Cart from "./components/Cart/Cart";
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <div className="app-container">
          <PizzaContainer />
          <Cart />
        </div>
      </Container>
    </>
  );
}