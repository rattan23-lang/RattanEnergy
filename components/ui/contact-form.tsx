"use client";

import { motion, useInView } from "framer-motion";
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
import { toast } from "sonner";
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Number must be at least 8 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const formFields = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "your@email.com",
    type: "email",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "Enter your contact number",
    type: "number",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Tell us more about your inquiry...",
    type: "textarea",
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

export function ContactForm() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios.post("https://sheetdb.io/api/v1/6zfdxem3iwgu2", values);
      // console.log(response.data)
      if (response.status === 201) {
        toast.success("Details Submitted sucessfully. Our team member will contact you soon!");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again after some time.");
      }
    } catch (error) {
      toast.error("An error occurred while sending the message.");
      console.error("Error submitting form:", error);
    }
  }

  return (
    <motion.div
      ref={formRef}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="w-full"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {formFields.map((field, index) => (
            <motion.div key={field.name} variants={item}>
              <FormField
                control={form.control}
                name={field.name as keyof z.infer<typeof formSchema>}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">{field.label}</FormLabel>
                    <FormControl>
                      {field.type === "textarea" ? (
                        <Textarea
                          placeholder={field.placeholder}
                          className="min-h-[120px] resize-none transition-all duration-300 focus:ring-2 focus:ring-primary"
                          {...formField}
                        />
                      ) : (
                        <Input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                          {...formField}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
          ))}
          <motion.div
            variants={item}
            className="pt-4"
          >
            <Button
              type="submit"
              className="w-full transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
}