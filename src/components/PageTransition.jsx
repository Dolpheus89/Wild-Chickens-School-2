import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";

export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setDisplayChildren(children);
  }, [children]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { ease: "easeOut", duration: 0.3 },
        }}
        exit={{
          opacity: 0,
          scale: 0,
          transition: {
            opacity: { duration: 0 },
            scale: { ease: "easeIn", duration: 0.3 },
          },
        }}
      >
        {displayChildren}
      </motion.div>
    </AnimatePresence>
  );
}

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};
