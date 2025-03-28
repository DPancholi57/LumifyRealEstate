import { motion } from "framer-motion";
import { CheckCircle, DollarSign, Clock, ShieldCheck, UserCheck } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "Get 1.25% Cash Back",
      description: "Receive 1.25% of our 2.5% commission back at closing. On a $500,000 home, that's $6,250 in your pocket.",
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      title: "Save Countless Hours",
      description: "Our AI handles calls, paperwork, and scheduling, giving you more time to research properties and make decisions.",
      icon: <Clock className="h-5 w-5" />
    },
    {
      title: "Senior Agent Oversight",
      description: "Every AI-generated document is reviewed by a licensed senior agent before submission to ensure accuracy.",
      icon: <UserCheck className="h-5 w-5" />
    },
    {
      title: "Canada-Specific Knowledge",
      description: "Our AI is trained on Canadian real estate regulations and integrates with Realtor Canada listings.",
      icon: <ShieldCheck className="h-5 w-5" />
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Lumify?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Our AI-powered brokerage delivers benefits that traditional agencies simply can't match, without sacrificing expert human oversight.
            </p>

            <div className="mt-8 space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                    <p className="mt-1 text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <CheckCircle className="h-5 w-5 text-amber-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Our Cashback Promise</p>
                  <p className="mt-1 text-sm text-gray-600">We guarantee 1.25% cashback from our 2.5% commission on any home purchase. No hidden fees, no complicated terms.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-10 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How Much Will You Save?</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Home Purchase Price</span>
                    <span className="text-lg font-bold text-gray-900">$500,000</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">Standard Commission (2.5%)</span>
                    <span className="text-md text-gray-700">$12,500</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">Your Cashback (1.25%)</span>
                    <span className="text-lg font-bold text-emerald-600">$6,250</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Home Purchase Price</span>
                    <span className="text-lg font-bold text-gray-900">$750,000</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">Standard Commission (2.5%)</span>
                    <span className="text-md text-gray-700">$18,750</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">Your Cashback (1.25%)</span>
                    <span className="text-lg font-bold text-emerald-600">$9,375</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
