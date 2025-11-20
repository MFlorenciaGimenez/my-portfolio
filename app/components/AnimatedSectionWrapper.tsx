"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedSectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  contentClassName?: string;
}

export default function AnimatedSectionWrapper({
  children,
  id,
  className = "",
  contentClassName = "max-w-4xl",
}: AnimatedSectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`relative w-full ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className={`h-full px-6 ${contentClassName} mx-auto`}>
        {children}
      </div>
    </motion.section>
  );
}
