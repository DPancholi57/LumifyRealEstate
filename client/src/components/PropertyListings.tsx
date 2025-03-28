import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Home, Briefcase, MessageCircle } from "lucide-react";

// Mock data for Canadian property listings - simulating data from Realtor Canada
const propertyListings = [
  {
    id: 1,
    address: "123 Maple Avenue, Toronto, ON",
    price: "$749,000",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    type: "Detached",
    year: 2015,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    address: "456 Cedar Street, Vancouver, BC",
    price: "$899,000",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: "Condo",
    year: 2019,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    address: "789 Oak Road, Calgary, AB",
    price: "$529,000",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2200,
    type: "Semi-Detached",
    year: 2009,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    address: "101 River View, Montreal, QC",
    price: "$685,000",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1750,
    type: "Townhouse",
    year: 2017,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
  }
];

export default function PropertyListings() {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [aiTab, setAiTab] = useState("appraise");

  const handlePropertySelect = (property: any) => {
    setSelectedProperty(property);
  };

  const closeDialog = () => {
    setSelectedProperty(null);
    setAiTab("appraise");
  };

  return (
    <section id="listings" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Listings
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Browse our selection of properties from Realtor Canada with AI-powered tools to help you make smart decisions.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {propertyListings.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.address} 
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{property.price}</CardTitle>
                  <CardDescription className="truncate text-sm">{property.address}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex text-sm justify-between">
                    <span>{property.bedrooms} Beds</span>
                    <span>{property.bathrooms} Baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 flex flex-col space-y-2">
                  <Button className="w-full" onClick={() => handlePropertySelect(property)}>
                    View Details
                  </Button>
                  <Dialog open={selectedProperty?.id === property.id} onOpenChange={(open) => !open && closeDialog()}>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{selectedProperty?.address}</DialogTitle>
                        <DialogDescription>{selectedProperty?.price} - {selectedProperty?.type}</DialogDescription>
                      </DialogHeader>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div>
                          <img 
                            src={selectedProperty?.image} 
                            alt={selectedProperty?.address} 
                            className="w-full h-auto rounded-md"
                          />
                          <div className="mt-4 grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-3 rounded-md">
                              <p className="text-sm text-gray-500">Bedrooms</p>
                              <p className="font-semibold">{selectedProperty?.bedrooms}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md">
                              <p className="text-sm text-gray-500">Bathrooms</p>
                              <p className="font-semibold">{selectedProperty?.bathrooms}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md">
                              <p className="text-sm text-gray-500">Square Feet</p>
                              <p className="font-semibold">{selectedProperty?.sqft}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md">
                              <p className="text-sm text-gray-500">Year Built</p>
                              <p className="font-semibold">{selectedProperty?.year}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <Tabs defaultValue="appraise" value={aiTab} onValueChange={setAiTab} className="w-full">
                            <div className="bg-primary/5 p-1 rounded-lg">
                              <TabsList className="grid grid-cols-3 w-full">
                                <TabsTrigger value="appraise" className="text-xs md:text-sm">
                                  <Bot className="h-4 w-4 mr-1 md:mr-2" /> AI Appraise
                                </TabsTrigger>
                                <TabsTrigger value="offer" className="text-xs md:text-sm">
                                  <Briefcase className="h-4 w-4 mr-1 md:mr-2" /> Generate Offer
                                </TabsTrigger>
                                <TabsTrigger value="agent" className="text-xs md:text-sm">
                                  <MessageCircle className="h-4 w-4 mr-1 md:mr-2" /> Talk to Agent
                                </TabsTrigger>
                              </TabsList>
                            </div>
                            
                            <TabsContent value="appraise" className="mt-4">
                              <div className="bg-primary/5 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-3 flex items-center">
                                  <Bot className="h-5 w-5 mr-2 text-primary" /> 
                                  AI Appraisal
                                </h3>
                                <div className="space-y-3">
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">AI Estimated Value</span>
                                    <span className="font-bold">{selectedProperty?.price}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">Confidence Rating</span>
                                    <div className="w-32 bg-gray-200 rounded-full h-2.5">
                                      <div className="bg-emerald-500 h-2.5 rounded-full" style={{width: '92%'}}></div>
                                    </div>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">Potential Cashback</span>
                                    <span className="font-bold text-emerald-600">
                                      {parseInt(selectedProperty?.price.replace(/[^0-9]/g, '')) 
                                        ? '$' + Math.round(parseInt(selectedProperty?.price.replace(/[^0-9]/g, '')) * 0.0125).toLocaleString() 
                                        : 'Calculating...'}
                                    </span>
                                  </div>
                                </div>
                                <div className="mt-4 bg-white p-3 rounded border">
                                  <h4 className="font-medium">Market Analysis</h4>
                                  <p className="text-sm text-gray-600 mt-1">
                                    Based on 24 comparable properties sold in the last 90 days, this property is priced in line with the market. 
                                    The neighborhood has seen a 3.2% appreciation over the past year.
                                  </p>
                                </div>
                              </div>
                              <Button className="w-full mt-4">Request Full AI Appraisal Report</Button>
                            </TabsContent>
                            
                            <TabsContent value="offer" className="mt-4">
                              <div className="bg-primary/5 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-3 flex items-center">
                                  <Briefcase className="h-5 w-5 mr-2 text-primary" /> 
                                  AI Offer Generator
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">
                                  Our AI can generate a complete offer letter and all required documents based on your preferences.
                                </p>
                                <div className="space-y-3">
                                  <div className="bg-white p-3 rounded border">
                                    <h4 className="font-medium">Recommended Offer</h4>
                                    <div className="flex justify-between mt-1">
                                      <span className="text-gray-600">List Price</span>
                                      <span>{selectedProperty?.price}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Suggested Offer</span>
                                      <span className="font-bold">{selectedProperty?.price}</span>
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-500 italic">
                                    *All offers are reviewed by a senior agent before submission
                                  </p>
                                </div>
                              </div>
                              <Button className="w-full mt-4">Create AI-Generated Offer</Button>
                            </TabsContent>
                            
                            <TabsContent value="agent" className="mt-4">
                              <div className="bg-primary/5 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-3 flex items-center">
                                  <MessageCircle className="h-5 w-5 mr-2 text-primary" /> 
                                  Talk to a Senior Agent
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">
                                  Have questions about this property? Connect with a licensed agent instantly.
                                </p>
                                <div className="bg-white p-3 rounded border">
                                  <p className="text-sm text-gray-600">
                                    A senior agent can help with:
                                  </p>
                                  <ul className="mt-2 text-sm text-gray-600 space-y-1 list-disc pl-5">
                                    <li>Scheduling viewings</li>
                                    <li>Negotiation strategy</li>
                                    <li>Neighborhood insights</li>
                                    <li>Offer submission</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4 mt-4">
                                <Button>Call Agent</Button>
                                <Button variant="outline">Live Chat</Button>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </div>
                      </div>
                      
                      <DialogFooter className="mt-6">
                        <Button 
                          onClick={closeDialog} 
                          variant="outline" 
                          className="w-full sm:w-auto"
                        >
                          Close
                        </Button>
                        {aiTab === "appraise" && (
                          <Button className="w-full sm:w-auto">
                            Schedule Viewing
                          </Button>
                        )}
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center" 
                    onClick={() => handlePropertySelect(property)}
                  >
                    <Bot className="h-4 w-4 mr-2" /> 
                    AI Me
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="px-6 py-3">
            <a href="#contact">Browse All Listings</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}