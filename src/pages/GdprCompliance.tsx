
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GdprCompliance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-cogintech-dark">GDPR Compliance</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Our Commitment to GDPR</h2>
              <p className="text-gray-700">
                CoginTech Ltd ("we," "our," or "us") is committed to ensuring the security and protection of the personal information that we process, and to provide a compliant and consistent approach to data protection. We have always had a robust and effective data protection program in place which complies with existing law and abides by the data protection principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">What is GDPR?</h2>
              <p className="text-gray-700">
                The General Data Protection Regulation (GDPR) is a legal framework that sets guidelines for the collection and processing of personal information from individuals who live in the European Union (EU). The GDPR sets out the principles for data management and the rights of the individual, while also imposing fines that can be revenue-based. The GDPR covers all companies that deal with the data of EU citizens, so it is a critical regulation for corporate compliance officers at banks, insurers, and other financial companies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">How We Comply with GDPR</h2>
              <p className="text-gray-700 mb-4">
                We have implemented the following measures to ensure our compliance with GDPR:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We have appointed a Data Protection Officer (DPO) to oversee our data protection strategy and implementation;</li>
                <li>We have conducted a comprehensive audit of all our data processing activities;</li>
                <li>We have updated our privacy policies and procedures to comply with GDPR requirements;</li>
                <li>We have implemented technical and organizational measures to ensure data protection by design and by default;</li>
                <li>We have established procedures to handle data subject rights requests;</li>
                <li>We have implemented procedures to detect, report, and investigate personal data breaches;</li>
                <li>We have conducted Data Protection Impact Assessments (DPIAs) for high-risk processing activities;</li>
                <li>We have ensured that our employees are trained on GDPR requirements and data protection best practices.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Your Rights Under GDPR</h2>
              <p className="text-gray-700 mb-4">
                The GDPR provides the following rights for individuals:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li><strong>The right to be informed</strong> about how we collect and use your personal data;</li>
                <li><strong>The right of access</strong> to your personal data and any supplementary information;</li>
                <li><strong>The right to rectification</strong> if your personal data is inaccurate or incomplete;</li>
                <li><strong>The right to erasure</strong> of your personal data in certain circumstances;</li>
                <li><strong>The right to restrict processing</strong> of your personal data in certain circumstances;</li>
                <li><strong>The right to data portability</strong>, allowing you to obtain and reuse your personal data for your own purposes across different services;</li>
                <li><strong>The right to object</strong> to the processing of your personal data in certain circumstances;</li>
                <li><strong>Rights in relation to automated decision making and profiling</strong>, ensuring that you are not subject to decisions based solely on automated processing.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Data Subject Access Requests</h2>
              <p className="text-gray-700">
                If you wish to exercise any of the rights set out above, please contact our Data Protection Officer using the contact details provided below. We aim to respond to all legitimate requests within one month. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Data Protection Officer</h2>
              <p className="text-gray-700">
                We have appointed a Data Protection Officer (DPO) who is responsible for overseeing questions in relation to this GDPR compliance statement and our privacy policy. If you have any questions about this GDPR compliance statement, including any requests to exercise your legal rights, please contact the DPO at <a href="mailto:dpo@cogintech.com" className="text-cogintech-accent hover:underline">dpo@cogintech.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700">
                We use cookies and similar tracking technologies on our website to enhance user experience and analyze website traffic. We have implemented a cookie banner that appears when users first visit our website, providing information about the cookies we use and obtaining your consent where required by GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cogintech-dark">Updates to This Statement</h2>
              <p className="text-gray-700">
                We may update this GDPR compliance statement from time to time. Any changes will be posted on this page and, where appropriate, notified to you by email or when you next visit our website.
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

export default GdprCompliance;
