"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91-7888733548",
  },
  {
    icon: Mail,
    title: "Email",
    content: "RattanEnergyindia@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Rattan Avenue, Sector 23, Chandigarh",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Sat: 9AM-7PM, Sun: 9AM-1PM",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export function ContactInfoSection() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
          <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
            Have questions? We&apos;re here to help. Reach out to us through any of
            the channels below or fill out the contact form.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <info.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mb-2 font-semibold">{info.title}</h3>
                  <p className="text-sm text-muted-foreground">{info.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}