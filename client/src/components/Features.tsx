import { motion } from "framer-motion";
import { Calculator, FileText, Clock, DollarSign } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Calculator className="h-6 w-6 text-primary" />,
      title: "Instant AI Appraisals",
      description: "Get accurate property valuations in seconds using our advanced algorithm that analyzes thousands of comparable properties from Realtor Canada."
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "AI-Generated Offer Letters",
      description: "Create professional, legally-sound offer letters in seconds. Every document is reviewed by a senior agent before submission."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "10x Faster Process",
      description: "Our AI handles phone calls, emails, and paperwork, letting you focus on research and making offers. Skip the endless back-and-forth."
    },
    {
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: "1.25% Cash Back",
      description: "Get 1.25% of our 2.5% commission returned to you at closing. On a $500,000 home, that's $6,250 back in your pocket!"
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Canada's First AI-Powered Brokerage
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our advanced AI tools save you time and money while still providing the expertise of experienced agents.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-md flex items-center justify-center bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
              <a href="#contact" className="mt-4 inline-flex items-center text-primary hover:text-primary/80">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
