import ProductCard from "./ProductCard";

export default function ProductGrid(props) {
  var list = Array.isArray(props.products) ? props.products : [];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {list.map(function (product) {
        if (!product || !product.id) {
          return null;
        }

        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
