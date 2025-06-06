interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="border rounded-lg shadow p-4 bg-white">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

const cartItems = [
  { id: 101, name: 'Modern Chair', quantity: 2, price: 120 },
  { id: 102, name: 'Stylish Lamp', quantity: 1, price: 45 },
];

const Cart: React.FC = () => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {cartItems.map(item => (
        <Card key={item.id} title={item.name}>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
        </Card>
      ))}
      <div className="mt-4 font-bold text-lg">Total: ${total}</div>
    </>
  );
};

export default Cart;
