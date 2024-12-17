"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Rahul Aggarwal",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069",
  },
  {
    name: "Emily Chen",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076",
  },
  {
    name: "Michael Brown",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
  },
];

export function TeamSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Leadership Team</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex justify-center"
            >
              <Card className="w-full max-w-[350px]">
                <CardContent className="p-6 text-center">
                  <div className="relative mx-auto mb-4 h-64 overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}