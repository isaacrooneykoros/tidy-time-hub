import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function BookingForm() {
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Submitted",
      description: "We'll contact you shortly to confirm your booking.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">Full Name</Label>
        <Input 
          id="name" 
          placeholder="John Doe" 
          required 
          className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-white">Phone Number</Label>
        <Input 
          id="phone" 
          type="tel" 
          placeholder="+254 700 000 000" 
          required 
          className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-white">Pickup Address</Label>
        <Textarea 
          id="address" 
          placeholder="Enter your full address" 
          required 
          className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-500"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-white">Pickup Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal bg-[#1a1a1a] border-gray-800",
                !date && "text-gray-500"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-[#1a1a1a] border-gray-800">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              className="bg-[#1a1a1a]"
            />
          </PopoverContent>
        </Popover>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
      >
        Book Now
      </Button>
    </form>
  );
}