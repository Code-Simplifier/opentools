import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { fira, lato_regular, mont_bold } from "@/styles/fonts";

function prometheus() {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="bg-gray-700 relative h-[86vh] text-white p-3 rounded-lg shadow-lg shadow-purple-500"
    >
      <div className="flex modelTitle items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image src="/prometheus.png" width={54} height={54} />
        </motion.div>
        <div className="flex justify-between w-full">
          <div
            style={{ fontFamily: mont_bold.style.fontFamily }}
            className="text-xl pl-2"
          >
            <AnimatedText text="Prometheus" />
          </div>
          <div
            style={{ fontFamily: fira.style.fontFamily }}
            className="text-xl pl-2"
          >
            <AnimatedText text="text-davinci-003" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-[98%]">
        <textarea
          style={{ fontFamily: lato_regular.style.fontFamily }}
          placeholder="Ask Prometheus..."
          className="bg-gray-800 w-full rounded-lg p-2"
        ></textarea>
      </div>
    </motion.div>
  );
}

export default prometheus;
