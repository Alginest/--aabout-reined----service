import React from "react";
import { motion } from "framer-motion";
import ServiceHeader from "../serviceComponents/serviceHeader/ServiceHeader";
import BitPlan from "../serviceComponents/BitPlan/BitPlan";
const Service = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <ServiceHeader />
      <BitPlan />
    </motion.div>
  );
};

export default Service;
