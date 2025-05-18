import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-700">About Us</h2>
          <p className="text-lg text-gray-700 mt-4">
            Welcome to the GCC Language Club – your ultimate destination to learn and explore new languages!
          </p>
        </header>

        {/* Mission Section */}
        <section className="text-center mb-16">
          <h3 className="text-3xl font-semibold text-purple-700">Our Mission</h3>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            Our mission is to create a welcoming and supportive community for individuals who are passionate about
            learning new languages. Whether you are a beginner or an advanced learner, the GCC Language Club provides
            resources, opportunities, and guidance to help you improve your language skills.
          </p>
        </section>

        {/* Our Values Section */}
        <section className="bg-white shadow-md rounded-md p-8 mb-16">
          <h3 className="text-3xl font-semibold text-purple-700 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-purple-700">Inclusivity</h4>
              <p className="text-gray-700 mt-2">
                We believe that language learning should be accessible to everyone, regardless of background or
                experience level.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-purple-700">Community</h4>
              <p className="text-gray-700 mt-2">
                We foster a sense of belonging by connecting learners from diverse backgrounds to share experiences
                and support each other.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-purple-700">Growth</h4>
              <p className="text-gray-700 mt-2">
                We provide tools, guidance, and a growth-oriented environment to help learners continually progress
                in their language journey.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="text-center mb-16">
          <h3 className="text-3xl font-semibold text-purple-700">Our Story</h3>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            The GCC Language Club was founded with the goal of bringing together language enthusiasts from across the
            world. Our founders realized the power of learning new languages to connect people and open doors to new
            cultures and opportunities. Today, we offer a wide range of learning resources and activities to help
            language learners at every level.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mb-16">
          <h3 className="text-3xl font-semibold text-purple-700">Join Us Today!</h3>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            Whether you're just starting out or looking to practice your skills, the GCC Language Club is here to
            support you. Join us today and begin your language-learning journey with a community that cares.
          </p>
          <div className="mt-6">
            <a
              href="/registration"
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition duration-200"
            >
              Become a Member
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
