import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shirt, Scissors, Wind, Sparkles, Clock, Package } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  type: "washing" | "ironing" | "dry-cleaning" | "stain-removal" | "express" | "folding";
  selected?: boolean;
  onSelect: () => void;
}

const serviceInfo = {
  washing: {
    title: "Washing",
    description: "Professional washing service with premium detergents",
    price: "Ksh. 1,000/kg",
    Icon: Shirt,
  },
  ironing: {
    title: "Ironing",
    description: "Expert ironing service for wrinkle-free clothes",
    price: "Ksh. 500/item",
    Icon: Scissors,
  },
  "dry-cleaning": {
    title: "Dry Cleaning",
    description: "Specialized dry cleaning for delicate fabrics",
    price: "Ksh. 1,500/item",
    Icon: Wind,
  },
  "stain-removal": {
    title: "Stain Removal",
    description: "Professional stain removal for tough spots",
    price: "Ksh. 1,200/item",
    Icon: Sparkles,
  },
  express: {
    title: "Express Service",
    description: "Same-day service for urgent needs",
    price: "+Ksh. 800 surcharge",
    Icon: Clock,
  },
  folding: {
    title: "Folding & Packaging",
    description: "Professional folding and packaging service",
    price: "Ksh. 300/kg",
    Icon: Package,
  }
};

export function ServiceCard({ type, selected = false, onSelect }: ServiceCardProps) {
  const { title, description, price, Icon } = serviceInfo[type];

  return (
    <Card 
      className={cn(
        "transition-all duration-300 hover:scale-105 cursor-pointer animate-fadeIn bg-[#1a1a1a] border-gray-800",
        selected && "ring-2 ring-yellow-400"
      )}
      onClick={onSelect}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <Icon className="w-5 h-5 text-black" />
          </div>
        </div>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-yellow-400">{price}</span>
          <Button 
            variant={selected ? "default" : "outline"}
            className={cn(
              selected 
                ? "bg-yellow-400 text-black hover:bg-yellow-500" 
                : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            )}
            onClick={onSelect}
          >
            {selected ? "Selected" : "Select"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}