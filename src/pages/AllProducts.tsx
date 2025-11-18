// import Navbar from "@/components/Navbar";
// import { useLocation, useNavigate } from "react-router-dom";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import ProductCard from "@/components/ProductCard";
// import { products } from "@/data/products";


// const AllProducts = () => {
//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       <section className="py-24 container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-12 text-center">
//           Semua Produk Premium
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {products.map((product, index) => (
//             <div
//               key={product.id}
//               className="animate-fade-in"
//               style={{ animationDelay: `${index * 0.05}s` }}
//             >
//               <ProductCard
//                 id={product.id}
//                 name={product.name}
//                 description={product.description}
//                 icon={product.image}
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default AllProducts;

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const AllProducts = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-24 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Semua Produk Premium
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                icon={product.image}  // ← FIX
              />
            </div>
          ))}
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default AllProducts;
