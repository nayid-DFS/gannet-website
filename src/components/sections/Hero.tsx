"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-24 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              <span className="block">Elevate Your Analysis with</span>
              <span className="block mt-2 bg-gradient-to-r from-gannetGreen to-gannetLightGreen bg-clip-text text-transparent">
                GANNET Tools
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
            GANNET is a Generative AI initiative offering ethical, AI-powered tools to provide accessible, real-time information, enhancing efficiency and driving impactful growth in the humanitarian sector.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                href="https://app.gannet.ai/sign-in"
                className="bg-gannetGreen text-white px-6 py-3 text-center text-base font-medium shadow-sm hover:bg-gannetGreen/90 rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with GANNET
              </Link>
              <Link
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1L0hfYi_Go8OWgzc3t1gO_JIg0wRwxIs3Uzyvuyx_dnP7VrE5SDbfbZjZCKk9PeIV1XhztDYBj"
                className="bg-white text-gannetGreen px-6 py-3 text-center text-base font-medium shadow-sm border border-gannetGreen hover:bg-gray-50 rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-x-6 text-sm">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="inline-block h-8 w-8 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                    <Image
                      src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`}
                      alt="User avatar"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold">500+</span> satisfied users
              </div>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div 
            className="flex-1 mt-12 lg:mt-0 lg:ml-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] lg:h-[500px] w-full">
              <Image
                src="/images/gannet-hero.png"
                alt="GANNET Platform Dashboard"
                fill
                className="object-contain rounded-2xl shadow-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 