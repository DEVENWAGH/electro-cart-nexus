
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    testimonial: "ElectroNexus delivered my new laptop faster than expected. The customer service was exceptional when I needed help with setup.",
    company: "Graphic Designer",
    rating: 5
  },
  {
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial: "I've been shopping here for years. They always have the best prices and latest tech products. Highly recommended!",
    company: "Software Engineer",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/40.jpg",
    testimonial: "The checkout process was quick and easy. My new headphones arrived in perfect condition and sound amazing!",
    company: "Music Producer",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
              company={testimonial.company}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
