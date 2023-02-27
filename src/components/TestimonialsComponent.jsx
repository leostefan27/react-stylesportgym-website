import React, { useState } from "react";
import TestimonialComponent from "./TestimonialComponent";

const TestimonialsComponent = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Iliescu Leonard",
      text: "Am fost impresionat de experiența mea la StyleSportGym. Echipamentul este modern și bine întreținut, iar atmosfera este foarte prietenoasă și motivantă. Antrenorii sunt experți și mereu pregătiți să ofere sfaturi și suport pentru a ajuta fiecare client să-și atingă obiectivele",
      image_url: "leo.webp",
    },
    {
      name: "Iliescu Leonard",
      text: "I highly recommend this gym! The equipment is top-notch, the facilities are always clean and well-maintained, and the staff is friendly and professional. I've seen great results since joining and I'm so happy with my decision to become a member.",
      image_url: "leo.webp",
    },
  ]);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonialsTitle">
          <h2>More than a simple gym.</h2>
          <h3>Don't believe us? Look what our clients say!</h3>
        </div>
        <hr />
        {testimonials.map((e, idx) => {
          return <TestimonialComponent key={idx} testimonial={e} />;
        })}
      </div>
    </section>
  );
};

export default TestimonialsComponent;
