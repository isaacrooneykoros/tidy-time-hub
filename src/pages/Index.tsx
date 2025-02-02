import { useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { BookingForm } from "@/components/BookingForm";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Star, Download } from "lucide-react";

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
    <div className="min-h-screen bg-[#121212]">
      {/* Hero Section */}
      <header className="relative bg-[#121212] text-white">
        <nav className="container mx-auto py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full" />
            <span className="text-xl font-bold">Smart Laundry</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-yellow-400">Home</a>
            <a href="#" className="hover:text-yellow-400">About</a>
            <a href="#" className="hover:text-yellow-400">Services</a>
            <a href="#" className="hover:text-yellow-400">Contact</a>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              Download App
            </Button>
          </div>
        </nav>

        <div className="container mx-auto py-20 flex justify-between items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              A Better You Start With Clean Clothes
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Laundry & dry cleaning picked up and delivered to your door. Hassle free and affordable. 24/7 cleaning and delivered to your home or office.
            </p>
            <div className="flex gap-4 mb-8">
              <img src="/lovable-uploads/770c787e-ed8c-45a0-b78f-30bd749591ca.png" alt="App Store" className="h-12 cursor-pointer hover:opacity-80 transition-opacity" />
              <img src="/lovable-uploads/770c787e-ed8c-45a0-b78f-30bd749591ca.png" alt="Play Store" className="h-12 cursor-pointer hover:opacity-80 transition-opacity" />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.8</span>
              <span className="text-gray-400">(2.5k Reviews)</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-80 h-80 bg-yellow-400 rounded-full opacity-20 blur-3xl" />
            <img 
              src="/lovable-uploads/770c787e-ed8c-45a0-b78f-30bd749591ca.png" 
              alt="App Screenshot" 
              className="relative w-80 rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto py-20">
        {/* Services Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400">Choose from our professional laundry services</p>
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

        {/* Features Section */}
        <section className="mb-20 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">
            We Are Working Hard To Earn Your Trust
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1a] p-8 rounded-2xl">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Happiness Guarantee</h3>
              <p className="text-gray-400">If you're not completely satisfied with the work or service, we will process your clothes for free.</p>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-2xl">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">High Quality Services</h3>
              <p className="text-gray-400">We work hard to make sure that the clothes you get back are spotless and ready for service.</p>
            </div>
          </div>
        </section>

        {selectedServices.length > 0 && (
          <section className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white">Book Your Service</h2>
              <p className="text-gray-400 mt-2">Fill in your details below</p>
            </div>
            <BookingForm />
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-yellow-400 rounded-full" />
                <span className="text-xl font-bold">Smart Laundry</span>
              </div>
              <p className="text-gray-400">Your trusted laundry service provider.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400">Home</a></li>
                <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400">Services</a></li>
                <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@smartlaundry.com</li>
                <li>+254 700 000 000</li>
                <li>Nairobi, Kenya</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Download App</h3>
              <div className="flex flex-col gap-4">
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                  <Download className="w-4 h-4 mr-2" />
                  App Store
                </Button>
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                  <Download className="w-4 h-4 mr-2" />
                  Play Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;