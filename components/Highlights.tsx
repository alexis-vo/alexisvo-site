// components/Highlights.tsx
import FeaturedProject from "./FeaturedProject";
import LatestNote from "./LatestNote";

export default function Highlights() {
  return (
    <section className="px-6 md:px-20 pb-20 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeaturedProject />
        <LatestNote />
      </div>
    </section>
  );
}