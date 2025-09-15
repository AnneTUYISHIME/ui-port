import React from "react";
import Section from "./Section";

export default function Services() {
  const services = [
    { title: "Web Development", desc: "Building responsive and interactive websites." },
    { title: "UI/UX Design", desc: "Designing intuitive and modern user interfaces." },
    { title: "Backend APIs", desc: "Developing scalable and secure server-side solutions." },
  ];

  return (
    <Section id="services" title="Services">
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.title} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
