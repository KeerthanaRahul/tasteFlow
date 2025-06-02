import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Coffee className="h-10 w-10 text-secondary-500" />,
      title: 'Quality Ingredients',
      description: 'We source the finest beans from sustainable farms around the world and prepare them with care.'
    },
    {
      icon: <Users className="h-10 w-10 text-secondary-500" />,
      title: 'Community Focus',
      description: 'Our cafe is designed to be a welcoming space where neighbors become friends.'
    },
    {
      icon: <Award className="h-10 w-10 text-secondary-500" />,
      title: 'Award Winning',
      description: 'Recognized for excellence in both our coffee and cuisine by local and national organizations.'
    }
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Cafe interior" 
                className="rounded-lg shadow-medium w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-medium max-w-xs hidden md:block">
                <p className="font-serif text-primary-800 text-lg italic">
                  "Every cup tells a story. We're just here to help write it."
                </p>
                <p className="text-right text-sm text-accent-600 mt-2">- Maria, Founder</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Story</h2>
            <p className="mb-6 text-lg">
              Aroma Cafe was born from a simple yet powerful vision: to create a space where exceptional coffee, 
              delicious food, and genuine community could thrive together.
            </p>
            <p className="mb-10 text-accent-600">
              Since opening our doors in 2010, we've been dedicated to crafting memorable experiences for every guest. 
              Our team of passionate baristas, chefs, and servers work tirelessly to ensure that each visit exceeds your expectations.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-accent-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;