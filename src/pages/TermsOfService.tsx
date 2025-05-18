
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-cogintech-dark">Terms of Service</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Agreement to Terms</h2>
              <p className="text-gray-700">
                These Terms of Service constitute a legally binding agreement made between you and CoginTech Ltd ("we," "us," or "our"), concerning your access to and use of the CoginTech website and services. You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service.
              </p>
              <p className="text-gray-700 mt-4">
                IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Intellectual Property Rights</h2>
              <p className="text-gray-700">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
              </p>
              <p className="text-gray-700 mt-4">
                You are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">User Representations</h2>
              <p className="text-gray-700 mb-4">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>All registration information you submit will be true, accurate, current, and complete;</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service;</li>
                <li>You are not a minor in the jurisdiction in which you reside;</li>
                <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise;</li>
                <li>You will not use the Site for any illegal or unauthorized purpose;</li>
                <li>Your use of the Site will not violate any applicable law or regulation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Prohibited Activities</h2>
              <p className="text-gray-700 mb-4">
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              <p className="text-gray-700">
                As a user of the Site, you agree not to engage in activities including but not limited to: systematic retrieval of data to create a collection or database, circumventing security measures, or interfering with the proper working of the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Service Modifications</h2>
              <p className="text-gray-700">
                We reserve the right to modify or discontinue, temporarily or permanently, the Site or any services with or without notice. You agree that we will not be liable to you or to any third party for any modification, suspension, or discontinuance of the Site or any part thereof.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Governing Law</h2>
              <p className="text-gray-700">
                These Terms of Service and your use of the Site are governed by and construed in accordance with the laws of the United Kingdom applicable to agreements made and to be entirely performed within the United Kingdom, without regard to its conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Contact Information</h2>
              <p className="text-gray-700">
                Questions about the Terms of Service should be sent to us at <a href="mailto:contacts@cogintech.com" className="text-cogintech-accent hover:underline">contacts@cogintech.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of these Terms of Service.
              </p>
              <p className="text-gray-700 mt-4 font-semibold">
                Last Updated: May 18, 2025
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
