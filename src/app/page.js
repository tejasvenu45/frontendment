// pages/index.jsx
"use client";

import { useRef } from 'react';
export default function Home() {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const blogsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAboutUs={() => scrollToSection(aboutUsRef)}
        scrollToBlogs={() => scrollToSection(blogsRef)}
      />
      <div ref={homeRef}>
        <HeroSection />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={blogsRef}>
        <BlogsAndArticles />
      </div>
    </div>
  );
}

function Navbar({ scrollToHome, scrollToAboutUs, scrollToBlogs }) {
  return (
    <nav className="bg-slate-800 shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Logo/Image */}
        <img
          src="/logo.jpg"
          alt="Logo"
          className="h-20 w-20 mr-4 cursor-pointer"
          onClick={scrollToHome}
        />

      </div>

      {/* Center Links */}
      <div className="hidden bg-black border-4 border-pink-300 rounded-3xl md:flex space-x-4 text-4xl">
        <button
          onClick={scrollToHome}
          className="text-pink-600 hover:text-pink-400 p-4 focus:outline-none"
        >
          Home
        </button>
        <button
          onClick={scrollToAboutUs}
          className="text-pink-600 hover:text-pink-400 p-4 focus:outline-none"
        >
          About Us
        </button>
        <button
          onClick={scrollToBlogs}
          className="text-pink-600 hover:text-pink-400 p-4 focus:outline-none"
        >
          Blogs & Articles
        </button>
      </div>

      {/* Right Links */}
      <div className="flex space-x-4 text-4xl border-4 border-pink-300 rounded-3xl bg-black">
        <button
          onClick={() => window.location.href = "/login"}
          className="text-pink-600 hover:text-pink-400 p-2 rounded-md  transition-colors duration-200 "
        >
          Login
        </button>
        <button
          onClick={() => window.location.href = "/signup"}
          className=" text-pink-600 hover:text-pink-400 p-2 rounded-md transition-colors duration-200 "
        >
          Signup
        </button>
      </div>

    </nav>
  );
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-pink-500 via-white to-green-500 h-screen w-full flex items-center justify-center text-center">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-5xl md:text-7xl font-bold text-black">
          Find Peace of Mind with Our Support
        </h1>
        <p className="mt-4 text-xl text-gray-800">
          We offer a safe space to explore your thoughts, feelings, and well-being. 
          Try our <span className="text-pink-800 font-semibold">AI-powered mental health chatbot</span> for immediate support and guidance.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' })}
            className="bg-pink-500 text-black px-6 py-3 rounded-md shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
          >
            Learn More
          </button>
          <button
            onClick={() => window.location.href = "/chatbot"}
            className="ml-4 bg-white text-black px-6 py-3 rounded-md shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
          >
            Try the Chatbot
          </button>
        </div>
      </div>
    </section>
  );
}


function AboutUs() {
  return (
    <section id="about-us" className="py-20 px-8 bg-gradient-to-tr from-white to-pink-50 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
          About Us: Your Complete Mental Health Support Platform
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-700">
          We are a platform dedicated to providing holistic mental health support, making it easier for you to find peace of mind and professional care.
          Our AI-powered <span className="text-pink-500 font-semibold">mental health chatbot</span> is here to assist you whenever you need it, offering a safe space to express yourself.
        </p>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          With our chatbot, you can receive personalized recommendations for <span className="text-pink-500 font-semibold">certified psychiatrists</span> and therapists who are ready to assist.
          This platform is designed to connect you with the right professionals, helping you navigate life's challenges with expert support.
        </p>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          <span className="text-blue-600 font-semibold">Are you a psychiatrist?</span> Join our platform to reach patients who need your expertise and make a difference in their lives. Together, we can create a supportive community.
        </p>

        {/* Image Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src="/logo.jpg"
              alt="Chatbot Support"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 text-gray-600">24/7 Chatbot Support for Immediate Help</p>
          </div>
          <div>
            <img
              src="/logo.jpg"
              alt="Connect with Psychiatrists"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 text-gray-600">Find the Right Professional Support Tailored to You</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button
            onClick={() => window.location.href = "/signup"}
            className="bg-blue-600 text-white px-8 py-4 rounded-md shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Join as a Patient
          </button>
          <button
            onClick={() => window.location.href = "/psychiatrist-signup"}
            className="ml-4 bg-pink-500 text-white px-8 py-4 rounded-md shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
          >
            Join as a Psychiatrist
          </button>
        </div>
      </div>
    </section>
  );
}


function BlogsAndArticles() {
  return (
    <section id="blogs" className="py-16 px-4 bg-gradient-to-b from-pink-100 to-white text-center">
      <h2 className="text-4xl font-bold text-black mb-6">
        The Importance of Reading Mental Health Blogs
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-gray-700">
        Explore our collection of articles on mental health, well-being, and self-care tips. Learn how to improve your life one step at a time.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-pink-500 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img src="/logo.jpg" alt="Mental Health" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-black">Understanding Anxiety</h3>
            <p className="text-gray-600 mt-2">
              Learn about the causes of anxiety and how to manage it effectively.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-pink-500 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img src="/logo.jpg" alt="Mental Health" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-black">Coping with Depression</h3>
            <p className="text-gray-600 mt-2">
              Explore strategies to cope with depression and improve your mental well-being.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-pink-500 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img src="/logo.jpg" alt="Mental Health" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-black">The Benefits of Therapy</h3>
            <p className="text-gray-600 mt-2">
              Discover how therapy can help you navigate life's challenges.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-pink-500 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img src="/logo.jpg" alt="Mental Health" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-black">Mindfulness and You</h3>
            <p className="text-gray-600 mt-2">
              Learn how mindfulness can enhance your mental health and overall well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

