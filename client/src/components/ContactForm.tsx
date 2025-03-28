import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "buying",
    propertyPrice: ""
  });
  
  const [estimatedCashback, setEstimatedCashback] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Calculate cashback if property price is entered
    if (name === "propertyPrice") {
      const price = parseInt(value.replace(/[^0-9]/g, ''));
      if (price) {
        const cashback = (price * 0.0125).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        setEstimatedCashback(cashback);
      } else {
        setEstimatedCashback(null);
      }
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, interest: value });
  };

  const submitContact = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your interest. We'll be in touch soon!",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        interest: "buying",
        propertyPrice: ""
      });
      setEstimatedCashback(null);
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContact.mutate(formData);
  };

  return (
    <section id="contact" className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Get 1.25% Cashback on Your Next Home
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Save thousands with Lumify's AI-powered brokerage. Our technology makes buying a home faster and easier, while our 1.25% cashback puts money back in your pocket.
            </p>
            
            <div className="mt-8 bg-white/10 p-5 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white">How Our Cashback Works:</h3>
              <ul className="mt-4 space-y-2 text-indigo-100">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">1</div>
                  <span className="ml-2">We charge the standard 2.5% buyer's agent commission</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">2</div>
                  <span className="ml-2">Our AI reduces our operating costs dramatically</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">3</div>
                  <span className="ml-2">We share these savings by giving you 1.25% cashback</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-10 lg:mt-0 lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-amber-50 p-4 rounded-lg mb-6 border border-amber-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <DollarSign className="h-5 w-5 text-amber-500 mr-1" />
                  Calculate Your Cashback
                </h3>
                <div className="mt-2">
                  <Label htmlFor="propertyPrice">Estimated Property Price</Label>
                  <Input 
                    id="propertyPrice" 
                    name="propertyPrice" 
                    type="text" 
                    placeholder="e.g. $500,000"
                    value={formData.propertyPrice}
                    onChange={handleInputChange}
                    className="mt-1" 
                  />
                </div>
                {estimatedCashback && (
                  <div className="mt-3 p-3 bg-white rounded-md border border-green-100 text-center">
                    <p className="text-sm text-gray-600">Estimated Cashback:</p>
                    <p className="text-xl font-bold text-emerald-600">{estimatedCashback}</p>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    name="fullName" 
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="mt-1" 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1" 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1" 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="interest">I'm interested in:</Label>
                  <Select 
                    value={formData.interest}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buying">Buying a property</SelectItem>
                      <SelectItem value="selling">Selling a property</SelectItem>
                      <SelectItem value="cashback">Learning about cashback</SelectItem>
                      <SelectItem value="investing">Property investment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={submitContact.isPending}
                  >
                    {submitContact.isPending ? "Submitting..." : "Get Started & Claim Your Cashback"}
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 text-center mt-2">
                  By submitting, you agree to our privacy policy and terms of service.
                  We'll connect you with a licensed agent to explain the cashback process.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
