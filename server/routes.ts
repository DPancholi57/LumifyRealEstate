import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse({
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        interest: req.body.interest
      });

      const contactRequest = await storage.createContactRequest({
        ...validatedData,
        createdAt: new Date().toISOString()
      });

      res.status(201).json({ 
        message: "Contact request submitted successfully", 
        id: contactRequest.id 
      });
    } catch (error) {
      res.status(400).json({ message: "Invalid form data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
