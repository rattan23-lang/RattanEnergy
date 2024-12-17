"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ContactForm } from "@/components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Map } from "@/components/ui/map";

export function ContactFormSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-full">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="mb-6 text-center text-2xl font-bold">Send Us a Message</h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-full">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="mb-6 text-center text-2xl font-bold">Our Location</h2>
                  <Map address="Rattan Motors Chandigarh, 23C, Sector 23C, Chandigarh, 160023" />
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}