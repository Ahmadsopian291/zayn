import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";



const ProductGrid = () => {
  const navigate = useNavigate();
  return (
    <section id="produk" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Produk <span className="text-primary">Premium</span> Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih layanan digital premium favorit Anda dengan harga terjangkau dan garansi terpercaya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.slice(0, 6).map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                icon={product.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
  <Button
    onClick={() => navigate("/all-products")}
    className="px-6 py-3 text-lg"
  >
    Lihat Semua Produk
  </Button>
</div>

    </section>
  );
};

export default ProductGrid;
