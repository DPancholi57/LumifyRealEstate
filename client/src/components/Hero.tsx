import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [address, setAddress] = useState("");

  const handleAppraisal = (e: React.FormEvent) => {
    e.preventDefault();
    // This would trigger an API call in a real application
    if (address) {
      window.location.href = "#contact";
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      {/* Hero background with overlay for better text visibility */}
      <div className="absolute inset-0 z-[-1]" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} />
      {/* Hero overlay */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-gray-900/70 to-gray-900/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <motion.div 
            className="md:w-1/2 md:pr-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Lumify: Canada's First <span className="text-amber-500">AI-Powered</span> Brokerage
            </h1>
            <p className="mt-4 text-lg text-gray-200 md:text-xl">
              Get up to <span className="font-bold text-amber-400">$15,000 cash back</span> on your home purchase! Our AI-powered platform slashes paperwork by 90%, letting you focus on what matters—finding your dream home.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Button asChild size="lg" className="px-6 py-3 bg-primary hover:bg-primary/90">
                <a href="#contact">Get Your Cashback</a>
              </Button>
              <Button asChild size="lg" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white">
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="mt-10 md:mt-0 md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-gray-200">
              <div className="absolute -top-3 -right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                1.25% CASH BACK
              </div>
              <h3 className="text-xl font-medium text-gray-900">Instant Property Valuation</h3>
              <form onSubmit={handleAppraisal} className="mt-4">
                <div className="relative">
                  <input 
                    type="text" 
                    className="block w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary shadow-sm" 
                    placeholder="Enter property address..." 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <Button 
                    type="submit"
                    className="mt-3 w-full bg-primary hover:bg-primary/90"
                  >
                    Get Instant Appraisal
                  </Button>
                </div>
              </form>
              <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-100 shadow-inner">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Estimated Value</span>
                  <span className="text-lg font-bold text-gray-900">$524,000</span>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Potential Cashback</span>
                  <span className="text-lg font-bold text-emerald-600">$6,550</span>
                </div>
                <div className="mt-2 text-xs text-gray-500 italic">
                  *Based on 1.25% of our 2.5% commission
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
