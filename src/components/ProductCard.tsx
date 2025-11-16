import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const ProductCard = ({ id, name, description, icon }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleViewDetail = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="card-cinematic group cursor-pointer" onClick={handleViewDetail}>
      <div className="flex flex-col items-start space-y-4">
        {/* Icon */}
        <div className="text-6xl mb-2 group-hover:scale-110 transition-transform">
          {icon}
        </div>

        {/* Content */}
        <div className="space-y-2 flex-1">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* CTA */}
        <Button
          variant="ghost"
          className="group/btn text-primary hover:text-primary hover:bg-primary/10 font-semibold p-0"
        >
          Lihat Detail
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
