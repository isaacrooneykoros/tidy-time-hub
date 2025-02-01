import { useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { BookingForm } from "@/components/BookingForm";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container py-6">
          <h1 className="text-3xl font-bold text-gray-900">Smart Laundry Hub</h1>
          <p className="text-gray-600 mt-2">Professional Laundry Services</p>
        </div>
      </header>

      <main className="container py-12">
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Our Services</h2>
            <p className="text-gray-600 mt-2">Choose from our professional laundry services</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              type="washing"
              selected={selectedServices.includes("washing")}
              onSelect={() => toggleService("washing")}
            />
            <ServiceCard
              type="ironing"
              selected={selectedServices.includes("ironing")}
              onSelect={() => toggleService("ironing")}
            />
            <ServiceCard
              type="dry-cleaning"
              selected={selectedServices.includes("dry-cleaning")}
              onSelect={() => toggleService("dry-cleaning")}
            />
            <ServiceCard
              type="stain-removal"
              selected={selectedServices.includes("stain-removal")}
              onSelect={() => toggleService("stain-removal")}
            />
            <ServiceCard
              type="express"
              selected={selectedServices.includes("express")}
              onSelect={() => toggleService("express")}
            />
            <ServiceCard
              type="folding"
              selected={selectedServices.includes("folding")}
              onSelect={() => toggleService("folding")}
            />
          </div>
        </section>

        {selectedServices.length > 0 && (
          <>
            <Separator className="my-12" />
            <section className="max-w-md mx-auto space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">Book Your Service</h2>
                <p className="text-gray-600 mt-2">Fill in your details below</p>
              </div>
              <BookingForm />
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Index;