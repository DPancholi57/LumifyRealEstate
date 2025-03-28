import { motion } from "framer-motion";
import { Star, DollarSign } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "James Davis",
      role: "First-time Homebuyer",
      initials: "JD",
      content: "As a first-time buyer, I was intimidated by the process. Lumify made everything simple. The AI appraisal was spot-on, and the offer letter was generated in minutes. Best of all, I got over $7,000 back at closing!",
      cashback: "$7,125"
    },
    {
      name: "Sarah Martinez",
      role: "Property Investor",
      initials: "SM",
      content: "I've bought 12 properties over the years, and Lumify is a game-changer. The AI-generated offers saved me thousands in negotiation, and their senior agents provided valuable insight before submissions.",
      cashback: "$12,450"
    },
    {
      name: "Robert & Emily Wilson",
      role: "First Home in Canada",
      initials: "RW",
      content: "Being new to Canada, we were nervous about buying a home here. Lumify's AI tools helped us understand the market, and their cashback program helped us afford upgrades for our new home.",
      cashback: "$9,375"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Real people, real results, real cashback with our AI-powered brokerage.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                    {testimonial.initials}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-gray-600">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="mt-4 flex items-center justify-center p-2 bg-emerald-50 rounded-md">
                <DollarSign className="h-5 w-5 text-emerald-600 mr-1" />
                <span className="font-bold text-emerald-600">Cashback Received: {testimonial.cashback}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
