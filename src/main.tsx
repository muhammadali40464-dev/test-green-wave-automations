import { createRoot } from "react-dom/client";
import { usePerformance } from "@/hooks/usePerformance";
import { useMetaPixel } from "@/hooks/useMetaPixel";
import App from "./App.tsx";
import "./index.css";

// Performance monitoring component
const PerformanceMonitor = () => {
  usePerformance();
  useMetaPixel();
  return null;
};

// Enhanced App with performance monitoring
const EnhancedApp = () => {
  return (
    <>
      <PerformanceMonitor />
      <App />
    </>
  );
};

createRoot(document.getElementById("root")!).render(<EnhancedApp />);
