import { testimonials } from '@/lib/constants';
import TestimonialBackground from '@/../public/assets/images/testimonial-bg.png';

const Testimonials = () => {
  return (
    <section className="relative bg-primary w-full h-[247px] flex flex-col texture gap-2.5 overflow-hidden">
      <div className="flex items-start">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            testimonial={testimonial.testimonial}
            images={testimonial.images}
            name={testimonial.name}
            position={testimonial.position}
            key={index}
          />
        ))}
      </div>
      <div className="absolute z-10  top-0 flex items-center gap-2">
        {testimonials.map((_, index) => (
          <Indicator key={index} active={false} />
        ))}
        {/* Add any other content here */}
      </div>
      <div className="absolute opacity-40 inset-0 z-0">
        <img
          style={{
            filter: 'blur(6px)',
          }}
          src={TestimonialBackground}
          alt="testimonial texture"
          className="w-full h-full object-cover opacity-20 backdrop-blur-xl"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: '#030712',
            opacity: 0.5,
            filter: 'blur(10px)',
            mixBlendMode: 'overlay', // Optional: add for texture effect
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(var(--button-primary-gradient))',
            filter: 'blur(20px)',
            opacity: 0.2,
            mixBlendMode: 'overlay', // Optional: add for texture effect
          }}
        />
      </div>
    </section>
  );
};

const Indicator = ({ active = false }: { active?: boolean }) => {
  return (
    <div
      className={`w-[90px] rounded-xs h-0.5 ${
        active ? 'bg-[#636363]' : 'bg-[#636363]'
      }`}
    ></div>
  );
};

const Testimonial = ({
  testimonial,
  images,
  name,
  position,
}: {
  testimonial: string;
  images: string[];
  name: string;
  position: string;
}) => {
  return (
    <div className="flex flex-col z-30 gap-4 pl-4 py-8 pr-4">
      <h2 className="text-grey-opaque text-xl/[25.2px] font-light tracking-[-0.72px] text-start font-geist">
        “{testimonial}”
      </h2>

      <div className="flex items-center gap-4">
        <div className="flex items-center min-w-[67px] min-h-[38px] relative">
          {images[0] && (
            <img
              src={images[0]}
              className="object-cover shrink-0 size-10 absolute bottom-0 left-0 rounded-full border-2 border-[#EDEDEB] testimonial-image-shadow"
            />
          )}
          {images[1] && (
            <img
              src={images[1]}
              className="object-cover size-10 absolute bottom-0 left-7 rounded-full border-2 border-[#EDEDEB] testimonial-image-shadow"
            />
          )}
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#FCFFEC] text-start text-sm font-light font-geist">
            — {name},
          </h2>
          <h3 className="text-[#909090] font-geist text-sm tracking-[-0.42] text-start">
            {position}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
