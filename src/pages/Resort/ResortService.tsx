import a from "./../../assets/a.jpg";
import b from "./../../assets/b.jpg";


const ResortService = () => {
  const services = [
    {
      title: "Luxury Resort Experience",
      description: "Enjoy premium amenities, stunning views, and a relaxing atmosphere. Perfect for your vacation or weekend getaway.",
      image: b,
      reverse: false,
      features: ["Infinity pool", "Private beach access", "24/7 concierge"]
    },
    {
      title: "Gourmet Dining",
      description: "Savor world-class cuisine prepared by our award-winning chefs, featuring locally-sourced ingredients and international flavors.",
      image: a,
      reverse: true,
      features: ["5-star restaurant", "Rooftop bar", "24-hour room service"]
    }
  ];

  return (
    <div className="pt-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Premium Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience unparalleled comfort and luxury at our resort
          </p>
        </div>

        {services.map((service, index) => (
          <section key={index} className="mb-16">
            <div className={`bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-all duration-500 hover:shadow-2xl ${service.reverse ? 'md:flex-row-reverse' : ''}`}>
              <figure className="md:w-1/2 h-96 md:h-auto relative overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </figure>
              
              <div className="p-8 md:p-10 flex flex-col justify-center md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="self-start px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors duration-300 transform hover:-translate-y-1">
                  Discover More
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ResortService;