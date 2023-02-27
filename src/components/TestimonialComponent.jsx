import React from 'react'


const TestimonialComponent = (props) => {
  const testimonial = props.testimonial;
  
  return (
    <section className="testimonial">
      <div className="testimonialImg">
        <img src={`${process.env.PUBLIC_URL}/assets/images/${testimonial.image_url}`} alt="" />
      </div>
      <div className="testimonialText">
        <p>"{testimonial.text}"</p>
        <p className="testimonialAuthor">{testimonial.name}</p>
      </div>
    </section>
  )
}

export default TestimonialComponent