"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Factory, Clock } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: Award,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    hasAnimation: true,
  },
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Satisfied Clients",
    hasAnimation: true,
  },
  {
    icon: Factory,
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    hasAnimation: true,
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available",
    hasAnimation: false,
  },
];

export function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center"
            >
              <Card className="w-11/12 md:w-full">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <stat.icon className="mb-4 h-8 w-8 text-primary" />
                  <div className="text-3xl font-bold">
                    {stat.hasAnimation ? (
                      <CountUp
                        start={0}
                        end={stat.value as number}
                        duration={2.5}
                        separator=","
                        suffix={stat.suffix}
                        enableScrollSpy
                        scrollSpyOnce
                      >
                        {({ countUpRef }) => (
                          <span ref={countUpRef} />
                        )}
                      </CountUp>
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}