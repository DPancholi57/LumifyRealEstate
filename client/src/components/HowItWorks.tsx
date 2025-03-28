import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Bot, UserCheck, PiggyBank } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "AI-Powered Search",
      description: "Browse MLS listings while our AI learns your preferences and suggests matching properties.",
      icon: <Bot className="h-6 w-6 text-white" />
    },
    {
      number: "2",
      title: "Generate Offers & Documents",
      description: "AI creates personalized offers, contracts, and paperwork in minutes, not days.",
      icon: <Shield className="h-6 w-6 text-white" />
    },
    {
      number: "3",
      title: "Senior Agent Review",
      description: "A licensed senior agent reviews all AI-generated documents before submission to ensure accuracy.",
      icon: <UserCheck className="h-6 w-6 text-white" />
    },
    {
      number: "4",
      title: "Receive Your Cashback",
      description: "Get 1.25% of our 2.5% commission back to put towards your new home purchase.",
      icon: <PiggyBank className="h-6 w-6 text-white" />
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            The Lumify Workflow
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We combine AI efficiency with human expertise to save you time and money on your real estate journey.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="relative">
            {/* The line connecting the steps for desktop */}
            <div className="hidden absolute top-12 left-16 w-[calc(100%-4rem)] h-0.5 bg-gray-200 md:block"></div>

            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    {step.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="mt-16 p-6 bg-gray-50 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 text-center">AI Efficiency + Human Expertise = Your Perfect Home</h3>
            <p className="mt-4 text-gray-600 text-center">
              Our AI handles the tedious paperwork, research, and administrative tasks that slow down traditional agents. 
              This gives you more time to research properties and make offers, while our senior agents focus on reviewing 
              documents and negotiating the best deals for you.
            </p>
            <div className="mt-8 text-center">
              <Button asChild size="lg" className="px-6 py-3">
                <a href="#contact">Start Saving Today</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
