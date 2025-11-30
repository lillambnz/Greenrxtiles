import React, { useState } from 'react';
import { CalendarCheck, Video, Stethoscope, Pill, Activity as ActivityIcon, Wifi, Package, HeartHandshake } from 'lucide-react';
// noop: trigger Cloudflare Pages deployment
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
        {/* Home Anchor */}
        <div id="home" />
        {/* Services Section (Hero) */}
        <section id="services">
          <Hero />
        </section>
        
        {/* How it Works */}
        <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">How it Works</h2>
              <p className="text-slate-600">A simple, clinician-led process from booking to follow-up.</p>
            </div>

            <div className="relative">
              {/* Progress line on desktop */}
              <div className="hidden md:block absolute left-0 right-0 top-[46px] h-[2px] bg-gradient-to-r from-emerald-300/40 via-teal-300/40 to-emerald-300/40" />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch relative">
                {[
                  { n: 1, t: 'Book online', d: 'Choose a time that suits you and complete a brief intake.', icon: CalendarCheck },
                  { n: 2, t: 'Consult a doctor', d: 'Discuss your health goals and medical history via telehealth.', icon: Video },
                  { n: 3, t: 'Clinical decision', d: 'Doctor advises whether any treatment is appropriate for you.', icon: Stethoscope },
                  { n: 4, t: 'Prescription & supply', d: 'If suitable, scripts are sent digitally. Dispensing and delivery arranged.', icon: Pill },
                  { n: 5, t: 'Follow‑up care', d: 'Check‑ins to monitor progress and adjust care where appropriate.', icon: ActivityIcon },
                ].map(step => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.n}
                      className="group relative rounded-2xl bg-white/70 backdrop-blur border border-slate-200/60 shadow-sm hover:shadow-xl transition-all p-6 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg ring-1 ring-white/40">
                          <Icon size={22} />
                        </div>
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">Step {step.n}</span>
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-1 tracking-tight">{step.t}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.d}</p>
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-emerald-500/0 group-hover:ring-2 group-hover:ring-emerald-400/40 transition" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Why Choose GreenRx?</h2>
              <p className="text-slate-600">We streamline the process of getting the care you need without the wait.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "100% Online",
                  desc: "No waiting rooms. Consult with doctors via video or phone call from anywhere in Australia.",
                  icon: Wifi
                },
                {
                  title: "Discreet Delivery",
                  desc: "Prescriptions sent to your phone or medication delivered directly to your door in discreet packaging.",
                  icon: Package
                },
                {
                  title: "Ongoing Support",
                  desc: "Follow-up consultations and dedicated patient support team available 7 days a week.",
                  icon: HeartHandshake
                }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="group relative rounded-2xl p-7 bg-white/70 backdrop-blur border border-slate-200/60 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 text-center"
                  >
                    <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg ring-1 ring-white/40">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-emerald-500/0 group-hover:ring-2 group-hover:ring-emerald-400/40 transition" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">General information about our Alternate Health service. This is not medical advice.</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: 'What is Alternate Health at GreenRx?',
                  a: 'Telehealth consultations with registered doctors to discuss your health goals and whether certain therapies may be clinically appropriate for you. We do not advertise prescription-only medicines.'
                },
                {
                  q: 'Will I receive a prescription?',
                  a: 'Not necessarily. Any prescription is at the sole discretion of the doctor after assessing your individual circumstances, medical history, and suitability. Treatment is not guaranteed.'
                },
                {
                  q: 'Why don\'t you list product names?',
                  a: 'Australian TGA advertising rules restrict promoting prescription medicines to the public. Your doctor can discuss options during your consultation if clinically appropriate.'
                },
                {
                  q: 'Who is eligible?',
                  a: 'Adults 18+ living in Australia. Eligibility and suitability are determined by the consulting doctor based on clinical need and safety.'
                },
                {
                  q: 'Is this an emergency service?',
                  a: 'No. If you need urgent help, call 000 or visit your nearest emergency department.'
                },
              ].map((item, idx) => (
                <details key={idx} className="bg-white border border-slate-200 rounded-xl p-5">
                  <summary className="cursor-pointer font-semibold text-slate-900">{item.q}</summary>
                  <p className="mt-3 text-slate-700 text-sm">{item.a}</p>
                </details>
              ))}

              <p className="text-xs text-slate-500 mt-6">
                Information provided is general in nature and does not constitute medical advice. Always consult a registered health professional. GreenRx complies with Australian TGA advertising guidelines and does not promote specific prescription medicines.
              </p>
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
