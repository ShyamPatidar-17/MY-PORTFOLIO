import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Certificates } from '../../constants'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section
      id='certificate'
      className='py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-slate-50 dark:bg-[#0a192f]'
    >
      {/* Section Heading */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
        className='text-center mb-16'
      >
        <h2 className='text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white'>
          Certifications
        </h2>
        <p className='mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-400'>
          Courses and certifications I’ve earned along my journey.
        </p>
      </motion.div>

      {/* Certificates Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {Certificates.map((cert, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='group p-6 rounded-2xl shadow-md bg-white dark:bg-[#112240] transition-all duration-300 transform hover:shadow-xl hover:scale-105 border border-transparent hover:border-[#8245ec]'
          >
            {/* Image with optional zoom */}
            <div className='overflow-hidden rounded-md mb-4'>
              <img
                src={cert.image}
                alt='Certificate Preview'
                className='w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </div>

            {/* Certificate Info */}
            <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
              {cert.title}
            </h3>
            <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
              {cert.platform}
            </p>
            <ul className='mt-3 list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1'>
              {cert.learnings.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            {/* View Button */}
            <div className='flex flex-wrap gap-3 mt-4'>
              <button
                onClick={() => setSelectedCert(cert)}
                className='px-4 py-2 border border-[#8245ec] text-[#8245ec] rounded-lg hover:bg-[#8245ec] hover:text-white text-sm transition-colors duration-300'
              >
                View
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[999]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className='bg-white dark:bg-[#112240] p-4 rounded-lg max-w-4xl w-[90%] relative'
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className='absolute top-3 right-3 text-gray-600 dark:text-gray-300 text-2xl hover:text-red-500'
                onClick={() => setSelectedCert(null)}
              >
                &times;
              </button>
              <img
                src={selectedCert.image}
                alt='Certificate'
                className='rounded-lg w-full max-h-[75vh] object-contain'
              />
              <p className='text-center text-sm mt-3 text-gray-700 dark:text-gray-300'>
                {selectedCert.title} - {selectedCert.platform}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certificate
