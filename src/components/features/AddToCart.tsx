import { Check, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

export default function AddToCart({ onClick }: Props) {
  const [phase, setPhase] = useState("idle");

  function handleClick() {
    if (phase !== "idle") return;
    onClick();

    setPhase("added");
    setTimeout(() => setPhase("idle"), 1000);
  }

  return (
    <motion.div
      onClick={handleClick}
      animate={{ background: phase === "added" ? "#16a34a" : "#4f46e5" }}
      transition={{ duration: 0.3 }}
      whileTap={phase === "idle" ? { scale: 0.95 } : {}}
      className="w-full h-11 text-background font-semibold"
      style={{
        borderRadius: 10,
        border: "none",
        cursor: phase === "idle" ? "pointer" : "default",
        display: "flex", justifyContent: "center", alignItems: "center",
        gap: 8, overflow: "hidden"
      }}
    >
      <AnimatePresence mode="wait">
        {phase === "idle" && (
          <motion.span key="idle"
            initial={{opacity: 0, y: 6}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -6}}
            transition={{ duration: 0.2 }}
            style={{
              display: "flex", justifyContent: "center", alignItems: "center", gap: 8
            }}
          >
            <ShoppingCart size={20} /> Add to Cart
          </motion.span>
        )}

        {phase === "added" && (
          <motion.span key="added"
            initial={{opacity: 0, y: 6}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -6}}
            transition={{ duration: 0.2 }}
            style={{
              display: "flex", justifyContent: "center", alignItems: "center", gap: 8
            }}
          >
            <Check size={20} /> Added!
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
