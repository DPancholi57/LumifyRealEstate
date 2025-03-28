import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "98%", label: "Appraisal Accuracy" },
    { value: "3x", label: "Faster Transactions" },
    { value: "24/7", label: "AI Availability" },
    { value: "$0", label: "Hidden Fees" }
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
