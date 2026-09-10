import { createRoot, hydrateRoot } from "react-dom/client";
import { usePerformance } from "@/hooks/usePerformance";
import App from "./App.tsx";
import "./index.css";

const PerformanceMonitor = () => {
  usePerformance();
  return null;
};

const EnhancedApp = () => (
  <>
    <PerformanceMonitor />
    <App />
  </>
);

const container = document.getElementById("root")!;

// Pages are prerendered at build time, so the container already holds markup.
// Hydrate that instead of throwing it away and re-rendering from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, <EnhancedApp />);
} else {
  createRoot(container).render(<EnhancedApp />);
}
