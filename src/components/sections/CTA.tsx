"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/ui/ThemeContext';

export default function CTA() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const bgGradient = isDark 
    ? 'from-gannetCardBg to-gannetDarkBg'
    : 'from-green-600 to-green-800';
    
  const textColor = isDark ? 'text-gannetTextLight' : 'text-white';
  const subtextColor = isDark ? 'text-gray-400' : 'text-green-100';
  const buttonTextColor = isDark ? 'text-gannetDarkBg' : 'text-green-600';
  
  return (
    <section className={`relative py-24 bg-gradient-to-br ${bgGradient}`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-white/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${textColor}`}>
            Ready to transform humanitarian response?
          </h2>
          <p className={`mt-4 text-xl ${subtextColor} max-w-2xl mx-auto`}>
            Experience the power of GANNET technology. Request a demo today or learn more about our sponsorship options.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://app.gannet.ai/sign-in"
              className={`rounded-lg bg-white px-8 py-4 text-center text-base font-medium ${buttonTextColor} shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with GANNET
            </Link>
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1L0hfYi_Go8OWgzc3t1gO_JIg0wRwxIs3Uzyvuyx_dnP7VrE5SDbfbZjZCKk9PeIV1XhztDYBj"
              className={`rounded-lg bg-gannetGreen px-8 py-4 text-center text-base font-medium ${textColor} shadow-lg ring-1 ring-white/20 hover:bg-gannetGreen/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gannetGreen`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Demo
            </Link>
          </div>

          <p className={`mt-8 text-sm ${subtextColor}`}>
            No commitment required. Customized to your humanitarian needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 