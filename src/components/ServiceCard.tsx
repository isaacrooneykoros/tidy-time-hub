import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shirt, Scissors, Wind } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  type: "washing" | "ironing" | "dry-cleaning";
  selected?: boolean;
  onSelect: () => void;
}

const serviceInfo = {
  washing: {
    title: "Washing",
    description: "Professional washing service with premium detergents",
    price: "$10/kg",
    Icon: Shirt,
  },
  ironing: {
    title: "Ironing",
    description: "Expert ironing service for wrinkle-free clothes",
    price: "$5/item",
    Icon: Scissors,
  },
  "dry-cleaning": {
    title: "Dry Cleaning",
    description: "Specialized dry cleaning for delicate fabrics",
    price: "$15/item",
    Icon: Wind,
  },
};

export function ServiceCard({ type, selected = false, onSelect }: ServiceCardProps) {
  const { title, description, price, Icon } = serviceInfo[type];

  return (
    <Card 
      className={cn(
        "transition-all duration-300 hover:shadow-lg cursor-pointer animate-fadeIn",
        selected && "ring-2 ring-primary"
      )}
      onClick={onSelect}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary">{price}</span>
          <Button 
            variant={selected ? "default" : "outline"}
            onClick={onSelect}
          >
            {selected ? "Selected" : "Select"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}