// components/PersonSchema.tsx
export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alexis VO",
    url: "https://alexisvo.fr",
    image: "https://alexisvo.fr/images/profile.png",
    jobTitle: "Engineering student",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "CentraleSupélec",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "CentraleSupélec",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Université Paris-Saclay",
      },
    ],
    sameAs: [
      "https://github.com/alexis-vo",
      "https://linkedin.com/in/alexis-vo",
    ],
    knowsAbout: [
      "Financial mathematics",
      "Artificial intelligence",
      "Quantitative finance",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}