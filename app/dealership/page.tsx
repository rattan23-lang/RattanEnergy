"use client";

import { motion ,useInView } from "framer-motion";
import { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import axios from "axios";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  ownerName: z.string().min(2, "Owner name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  businessType: z.string().min(1, "Please select a business type"),
  location: z.string().min(5, "Location must be at least 5 characters"),
  experience: z.string().min(10, "Please provide more details about your experience"),
  investment: z.string().min(1, "Please select an investment range"),
});

const benefits = [
  {
    title: "Exclusive Territory Rights",
    description: "Secure your market with protected geographical territories",
    icon: CheckCircle,
  },
  {
    title: "Comprehensive Training",
    description: "Get extensive product and sales training for your team",
    icon: CheckCircle,
  },
  {
    title: "Marketing Support",
    description: "Access professional marketing materials and campaigns",
    icon: CheckCircle,
  },
  {
    title: "Technical Support",
    description: "24/7 technical assistance for you and your customers",
    icon: CheckCircle,
  },
  {
    title: "Competitive Pricing",
    description: "Benefit from wholesale pricing and special dealer discounts",
    icon: CheckCircle,
  },
  {
    title: "Lead Generation",
    description: "Receive qualified leads from our marketing efforts",
    icon: CheckCircle,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

const formContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const formItem = {
  hidden: { x: -20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function DealershipPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const isFormInView = useInView(formRef as React.RefObject<HTMLDivElement>, { once: true, amount: 0.2 });
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      ownerName: "",
      email: "",
      phone: "",
      businessType: "",
      location: "",
      experience: "",
      investment: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios.post("https://sheetdb.io/api/v1/nqfxbv2jox06z", values);
      if (response.status === 201) {
        toast.success("Details have been shared . Our team will get back to you soon!");
        form.reset();
      } else {
        toast.error("Failed to submit application. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the application.");
      console.error("Error submitting form:", error);
    }
  }

  

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="mb-4 text-4xl font-bold">Become a Dealer</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Join our network of successful dealers and grow your business with aGenerator.
              We provide comprehensive support to help you succeed in the power generation industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Dealer Benefits</h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg">
                  <CardContent className="flex h-full items-center p-6">
                    <div className="flex items-start space-x-4">
                      <benefit.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-muted py-20" ref={formRef}>
        <div className="container mx-auto max-w-2xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Dealership Application</h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isFormInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <Form {...form}>
                  <motion.form 
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className="space-y-6"
                    variants={formContainer}
                    initial="hidden"
                    animate={isFormInView ? "show" : "hidden"}
                  >
                    <motion.div variants={formItem}>
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Business Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={formItem}>
                      <FormField
                        control={form.control}
                        name="ownerName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Owner Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={formItem} className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={formItem}>
                      <FormField
                        control={form.control}
                        name="businessType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select business type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="retail">Retail</SelectItem>
                                <SelectItem value="wholesale">Wholesale</SelectItem>
                                <SelectItem value="service">Service Provider</SelectItem>
                                <SelectItem value="distributor">Distributor</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={formItem}>
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="City, State/Province" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    {/* <motion.div variants={formItem}>
                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Industry Experience</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your experience in the industry"
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={formItem}>
                      <FormField
                        control={form.control}
                        name="investment"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Investment Range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select investment range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                                <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                                <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                                <SelectItem value="500k+">$500,000+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div> */}

                    <motion.div variants={formItem}>
                      <Button type="submit" className="w-full">Submit Application</Button>
                    </motion.div>
                  </motion.form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}