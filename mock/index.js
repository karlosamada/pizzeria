const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

export const generatePizza = [...Array(10)].map((_, index) => ({
  id: `pizza-${index}`,
  image: '/images/pizza.jpg',
  name: `Pizza Name #${index+1}`,
  price: [getRandomArbitrary(5, 10), getRandomArbitrary(15, 20) ,getRandomArbitrary(25, 30)]
}));

export const generateToppings = [...Array(10)].map((_, index) => ({
  id: `toppings-${index}`,
  name: `Topping #${index+1}`,
}));

