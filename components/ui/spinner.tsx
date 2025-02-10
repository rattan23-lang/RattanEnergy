"use client";

import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export function Spinner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-center min-h-[400px]"
    >
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </motion.div>
  );
}