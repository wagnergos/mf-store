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

const products = [
  { id: 1, name: 'Modern Chair', price: '$120' },
  { id: 2, name: 'Wooden Table', price: '$280' },
  { id: 3, name: 'Stylish Lamp', price: '$45' },
];

const Products: React.FC = () => {
  return (
    <>
      {products.map(product => (
        <Card key={product.id} title={product.name}>
          <p>{product.price}</p>
        </Card>
      ))}
    </>
  );
};

export default Products;
