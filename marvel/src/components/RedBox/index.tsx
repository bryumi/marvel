import React from "react";
import { RedContainer } from "./styles";
import { motion } from "framer-motion";

export function RedBox() {
    const variants = {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -100, opacity: 0 }
      };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
        >
            <RedContainer>
                <h1>Mar
                    vel</h1>
            </RedContainer>
        </motion.div>
    )
}