import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <AnimatePresence>
            <motion.div
                key="page"
                initial={{ opacity: 0.5, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>

        </AnimatePresence>
    );
};

export default PageTransition;
