import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-white flex items-center justify-center z-50"
    >
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-blue-900">Loading IEEE Student Branch</h2>
      </div>
    </motion.div>
  );
};
