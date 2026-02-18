
import React from 'react';
import { PERSONAL_INFO, CORE_TECH, EDUCATION } from '../constants';

const StructuredData: React.FC = () => {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PERSONAL_INFO.name,
    "jobTitle": PERSONAL_INFO.title,
    "url": window.location.origin,
    "sameAs": [
      PERSONAL_INFO.linkedin,
      PERSONAL_INFO.github
    ],
    "email": PERSONAL_INFO.email,
    "description": PERSONAL_INFO.summary,
    "knowsAbout": CORE_TECH.map(tech => tech.name),
    "alumniOf": EDUCATION.map(edu => ({
      "@type": "EducationalOrganization",
      "name": edu.institution
    })),
    "worksFor": {
      "@type": "Organization",
      "name": "VIT Infotech Pvt. Ltd."
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(personData)}
    </script>
  );
};

export default StructuredData;
