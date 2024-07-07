import React from 'react';
import Card from '../Card';

const Layout = (props) => {
  const { products } = props;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <Card
          key={product.id}
          name={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default Layout;
