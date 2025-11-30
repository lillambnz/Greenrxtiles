import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import LegalModal from './components/LegalModal';

const TERMS_TEXT = `Terms of Service & Privacy Policy
This website ("the Site") and telehealth/pharmacy services are owned and operated by GreenRx ("GreenRx", "we", "our", "us"). By using the Site or booking a consultation, you agree to the following Terms of Service and Privacy Policy ("the Terms"). If you do not agree, you must not use the Site or services. GreenRx may update these Terms without prior notice.

1. Eligibility
You must be 18 years or older to register or use GreenRx telehealth and pharmacy services.
By registering, you confirm you are legally able to enter into binding agreements.

2. Services Provided
GreenRx provides access to telehealth consultations, prescription dispensing, and related healthcare services.
No warranties are provided as to the accuracy, suitability, or effectiveness of any consultation.
Your treating doctor is solely responsible for your clinical care and records.
Telehealth consultations may not always be the most appropriate treatment.
You agree to:
- Contact your own doctor immediately if your condition changes or worsens.
- Call emergency services (000) if urgent medical attention is required.
Services are provided "as is" and used at your own risk.
GreenRx may modify, suspend, or withdraw services at its discretion.

3. Registration
By registering, you agree to provide accurate, complete, and up-to-date information.
You are responsible for maintaining the accuracy of your records.
GreenRx may cancel your registration at any time, without notice, at its sole discretion.

4. Privacy & Data Collection
GreenRx collects, stores, and uses personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.

We may collect your information when you:
- Register with GreenRx
- Use our website or telehealth/pharmacy services (including cookies)
- Provide information directly
- Contact us or apply for employment

Types of information collected:
- Name, date of birth, contact details, IP address, occupation
- Medical information relevant to your care
- Prescription and consultation records
If we cannot collect your information, some services may not be available to you.

5. Use & Disclosure
We may use or disclose your information to:
- Deliver healthcare services
- Communicate with your treating doctor
- Improve service quality and obtain feedback
- Comply with legal obligations or court orders

Third-party disclosure:
- Other GreenRx group entities
- Advisors, consultants, and contracted service providers (under confidentiality obligations)
- Cloud providers and IT support (some located overseas, e.g. Canada, USA, New Zealand)

Additional consents:
By using GreenRx services, you consent to:
- Access and upload of your My Health Record
- Digital script sharing via email/SMS
- Communications about your medical care via email (you are responsible for providing correct details)

6. Security of Information
GreenRx takes reasonable steps to protect your information, including:
- Mandatory password protections
- Firewall and anti-malware systems
- Regular staff training and security audits
Despite safeguards, no system is completely secure. GreenRx is not liable for unauthorised access, except as required by law.

7. Notifiable Data Breaches
If unauthorised access, loss, or disclosure of personal information occurs and may cause serious harm, GreenRx will promptly notify you and the Office of the Australian Information Commissioner (OAIC) as required.

8. Access & Corrections
You may request access to or correction of your personal information.
No fee applies for access requests, but reasonable costs (e.g. copying) may be charged.
Requests may be refused where legally permitted, in which case reasons will be provided.

9. Recording Policy
Recording consultations (video, audio, or otherwise) is strictly prohibited unless agreed by all participants.
Breaches may result in immediate termination of services.

10. Fees & Refunds
Consultation fees are payable at the time of booking.
Refunds will only be issued if:
- The doctor or GreenRx cancels the appointment, or
- A technological failure (as determined by the doctor) prevents a consultation
Refunds are not provided if you cancel within 24 hours, fail to attend, or miss your scheduled consultation.

11. Operational Policies
Cancellation Policy:
Appointments must be cancelled at least 24 hours in advance to receive a refund.
Cancellations can be made via email, phone, or through the booking confirmation link.

Missed Appointments:
Patients are responsible for ensuring availability at the scheduled time.
Missed appointments caused by patient error (e.g. wrong contact details, phone off/silent, unavailable to answer) will not be refunded and require re-booking.

Zero Tolerance Policy:
GreenRx has a zero tolerance approach to abuse, threats, or violence towards staff or doctors.
Unacceptable behaviour (including threats of self-harm or abuse) will result in immediate discharge from the clinic, and a discharge letter will be issued.

12. Intellectual Property
All content, software, and designs on the Site are the property of GreenRx and protected by copyright.
You may not reproduce or reuse content without prior written consent.

13. Release & Indemnity
By using GreenRx services, you agree to:
- Release GreenRx from liability for injury, disability, death, or loss resulting from use of the Site or services, except where liability cannot be excluded by law.
- Indemnify GreenRx against any third-party claims related to your use of the Site or services.

14. Governing Law
These Terms are governed by the laws of Western Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of Western Australia.

15. Contact Us
For privacy, service, or policy questions: info@greenrx.com.au`;

const PRIVACY_TEXT = `Privacy Policy
This Privacy Policy is part of our comprehensive Terms of Service & Privacy Policy. For complete terms and conditions, please view our full Terms of Service.

Privacy & Data Collection
GreenRx collects, stores, and uses personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.

We may collect your information when you:
- Register with GreenRx
- Use our website or telehealth/pharmacy services (including cookies)
- Provide information directly
- Contact us or apply for employment

Types of information collected:
- Name, date of birth, contact details, IP address, occupation
- Medical information relevant to your care
- Prescription and consultation records
If we cannot collect your information, some services may not be available to you.

Use & Disclosure
We may use or disclose your information to:
- Deliver healthcare services
- Communicate with your treating doctor
- Improve service quality and obtain feedback
- Comply with legal obligations or court orders

Third-party disclosure:
- Other GreenRx group entities
- Advisors, consultants, and contracted service providers (under confidentiality obligations)
- Cloud providers and IT support (some located overseas, e.g. Canada, USA, New Zealand)

Additional consents:
By using GreenRx services, you consent to:
- Access and upload of your My Health Record
- Digital script sharing via email/SMS
- Communications about your medical care via email (you are responsible for providing correct details)

Security of Information
GreenRx takes reasonable steps to protect your information, including:
- Mandatory password protections
- Firewall and anti-malware systems
- Regular staff training and security audits
Despite safeguards, no system is completely secure. GreenRx is not liable for unauthorised access, except as required by law.

Notifiable Data Breaches
If unauthorised access, loss, or disclosure of personal information occurs and may cause serious harm, GreenRx will promptly notify you and the Office of the Australian Information Commissioner (OAIC) as required.

Access & Corrections
You may request access to or correction of your personal information.
No fee applies for access requests, but reasonable costs (e.g. copying) may be charged.
Requests may be refused where legally permitted, in which case reasons will be provided.

Contact Us
For privacy, service, or policy questions: info@greenrx.com.au
Address: 202/37 Barrack Street, Perth, WA 6000, Australia
Phone: +61 2 3456 7890`;

const App: React.FC = () => {
  const [activeLegalDoc, setActiveLegalDoc] = useState<'terms' | 'privacy' | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Simple Info Section underneath Hero to add page weight */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose GreenRx?</h2>
              <p className="text-slate-600">We streamline the process of getting the care you need without the wait.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "100% Online",
                  desc: "No waiting rooms. Consult with doctors via video or phone call from anywhere in Australia."
                },
                {
                  title: "Discreet Delivery",
                  desc: "Prescriptions sent to your phone or medication delivered directly to your door in discreet packaging."
                },
                {
                  title: "Ongoing Support",
                  desc: "Follow-up consultations and dedicated patient support team available 7 days a week."
                }
              ].map((feature, idx) => (
                <div key={idx} className="text-center p-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl mx-auto mb-6 flex items-center justify-center text-xl font-bold text-emerald-700">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer 
        onOpenTerms={() => setActiveLegalDoc('terms')}
        onOpenPrivacy={() => setActiveLegalDoc('privacy')}
      />
      <ChatWidget />

      <LegalModal 
        isOpen={activeLegalDoc === 'terms'}
        onClose={() => setActiveLegalDoc(null)}
        title="Terms of Service & Privacy Policy"
        content={TERMS_TEXT}
      />
      
      <LegalModal 
        isOpen={activeLegalDoc === 'privacy'}
        onClose={() => setActiveLegalDoc(null)}
        title="Privacy Policy"
        content={PRIVACY_TEXT}
      />
    </div>
  );
};

export default App;