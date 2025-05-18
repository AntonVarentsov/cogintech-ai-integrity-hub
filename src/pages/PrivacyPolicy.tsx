
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-cogintech-dark">Privacy Policy</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Introduction</h2>
              <p className="text-gray-700">
                CoginTech Ltd ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect several types of information from and about users of our website, including information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>By which you may be personally identified, such as name, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information");</li>
                <li>That is about you but individually does not identify you, such as your company name and job title;</li>
                <li>About your internet connection, the equipment you use to access our website, and usage details.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">How We Collect Your Information</h2>
              <p className="text-gray-700 mb-4">
                We collect this information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Directly from you when you provide it to us, such as when you fill out our contact form or request a demo;</li>
                <li>Automatically as you navigate through the site, which may include usage details, IP addresses, and information collected through cookies and other tracking technologies;</li>
                <li>From third parties, for example, our business partners.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use information that we collect about you or that you provide to us, including any personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To present our website and its contents to you;</li>
                <li>To provide you with information, products, or services that you request from us;</li>
                <li>To fulfill any other purpose for which you provide it;</li>
                <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us;</li>
                <li>To notify you about changes to our website or any products or services we offer or provide;</li>
                <li>In any other way we may describe when you provide the information;</li>
                <li>For any other purpose with your consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Data Retention</h2>
              <p className="text-gray-700">
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Request access to your personal data;</li>
                <li>Request correction of your personal data;</li>
                <li>Request erasure of your personal data;</li>
                <li>Object to processing of your personal data;</li>
                <li>Request restriction of processing your personal data;</li>
                <li>Request transfer of your personal data;</li>
                <li>Right to withdraw consent.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                If you wish to exercise any of these rights, please contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contacts@cogintech.com" className="text-cogintech-accent hover:underline">contacts@cogintech.com</a> or by mail at: CoginTech Ltd, Chester, United Kingdom.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Changes to Our Privacy Policy</h2>
              <p className="text-gray-700">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date below. You are advised to review this Privacy Policy periodically for any changes.
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

export default PrivacyPolicy;
