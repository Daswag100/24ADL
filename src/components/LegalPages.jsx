import { useEffect } from 'react';
import { ArrowLeft, Shield, FileText, Cookie, AlertTriangle, Mail, Phone, MapPin } from 'lucide-react';

export default function LegalPages({ currentPage }) {
  
  useEffect(() => {
    // Scroll to top on mount/page switch
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    if (window.__navigate) {
      window.__navigate(path);
    } else {
      window.location.pathname = path;
    }
  };

  const docTabs = [
    { id: 'privacy', label: 'Privacy Policy', icon: <Shield className="w-4 h-4" /> },
    { id: 'terms', label: 'Terms & Conditions', icon: <FileText className="w-4 h-4" /> },
    { id: 'cookies', label: 'Cookie Policy', icon: <Cookie className="w-4 h-4" /> },
    { id: 'disclaimer', label: 'Disclaimer', icon: <AlertTriangle className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-dmsans transition-colors duration-300 pb-20">
      
      {/* Mini-Header for Legal Pages */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center"
          >
            <img
              src="/24ADL_Logo__Coloured_.png"
              className="h-7 max-w-[140px] sm:h-8 sm:max-w-[180px] w-auto object-contain dark:brightness-0 dark:invert"
              alt="24ADL Inspection and Audit Services logo"
            />
          </a>
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center gap-2 font-syne font-bold text-sm text-brand-purple-primary dark:text-brand-green-lemon hover:opacity-85 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
        </div>
      </header>

      {/* Main Layout Container */}
      <main className="max-w-7xl mx-auto px-6 lg:px-10 mt-10">
        
        {/* Title Section */}
        <div className="mb-10 border-b border-gray-200 dark:border-gray-850 pb-6">
          <span className="text-xs font-semibold tracking-widest text-brand-purple-mid dark:text-brand-green-lemon uppercase block mb-2">
            24ADL LEGAL CENTER
          </span>
          <h1 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white tracking-tight">
            Website Legal & Policy Documents
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Effective Date: June 2026 | Document Reference: 24ADL-LEGAL-2026-01
          </p>
        </div>

        {/* Desktop Sidebar & Content Grid */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Sidebar (Desktop) / Select Tabs (Mobile) */}
          <aside className="w-full lg:w-64 lg:sticky lg:top-24 shrink-0 flex flex-col gap-2">
            <div className="hidden lg:block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 px-3">
              Documents
            </div>
            
            {/* Nav List */}
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-3 lg:pb-0 w-full border-b lg:border-b-0 border-gray-200 dark:border-gray-800">
              {docTabs.map((tab) => {
                const isActive = currentPage === tab.id;
                return (
                  <a
                    key={tab.id}
                    href={`/${tab.id}`}
                    onClick={(e) => handleLinkClick(e, `/${tab.id}`)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-syne font-bold transition-all shrink-0 whitespace-nowrap ${
                      isActive
                        ? 'bg-brand-purple-primary text-white dark:bg-brand-green-lemon dark:text-brand-black shadow-md shadow-brand-purple-primary/10 dark:shadow-none'
                        : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/80 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </a>
                );
              })}
            </div>
          </aside>

          {/* Legal Document Display Content panel */}
          <article className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-10 shadow-sm transition-colors duration-300 w-full">
            
            {/* Render Privacy Policy */}
            {currentPage === 'privacy' && (
              <div className="space-y-6">
                <h2 className="font-syne font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3">
                  Privacy Policy
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  24ADL Inspection & Audit Services is committed to respecting and protecting the privacy of all individuals who visit or interact with this Site. This Privacy Policy explains what information we collect, why we collect it, how we use and protect it, and the choices available to you.
                </p>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  1.1 Who We Are
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  24ADL Inspection & Audit Services is an independent audit and inspection business operating in Nigeria, providing stock auditing, inventory verification, retail and manufacturing audit, and compliance verification services to businesses across various sectors.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  For the purposes of this Policy, 24ADL acts as the data controller in respect of personal information collected through this Site.
                </p>

                {/* Company details list */}
                <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-xl p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-brand-purple-primary dark:text-brand-green-lemon shrink-0" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase">Organisation</div>
                      <div className="font-semibold text-gray-700 dark:text-gray-200">24ADL Inspection & Audit Services</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand-purple-primary dark:text-brand-green-lemon shrink-0" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase">Email</div>
                      <a href="mailto:info@24adlinspection.com" className="font-semibold text-brand-purple-primary dark:text-brand-green-lemon hover:underline">info@24adlinspection.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-purple-primary dark:text-brand-green-lemon shrink-0" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase">Phone / WhatsApp</div>
                      <a href="tel:+2348033179732" className="font-semibold text-gray-700 dark:text-gray-200 hover:underline">+234 8033179732</a> / <a href="tel:+2347030637458" className="font-semibold text-gray-700 dark:text-gray-200 hover:underline">+234 7030637458</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-brand-purple-primary dark:text-brand-green-lemon shrink-0" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase">Address</div>
                      <div className="font-semibold text-gray-700 dark:text-gray-200">22b happy home avenue, kirikiri industrial estate, Lagos Nigeria</div>
                    </div>
                  </div>
                </div>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  1.2 Information We Collect
                </h3>
                
                <h4 className="font-syne font-bold text-sm text-gray-800 dark:text-gray-200 uppercase mt-4">
                  1.2.1 Information You Provide Directly
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 font-light text-sm sm:text-base">
                  <li><strong>Contact form submissions:</strong> name, company name, email address, phone number, and nature of enquiry.</li>
                  <li><strong>Email and WhatsApp communications:</strong> content of messages, attachments, and contact details shared.</li>
                  <li><strong>Service engagement information:</strong> business name, contact persons, and operational information shared during audit scoping or delivery.</li>
                </ul>

                <h4 className="font-syne font-bold text-sm text-gray-800 dark:text-gray-200 uppercase mt-6">
                  1.2.2 Information Collected Automatically
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 font-light text-sm sm:text-base">
                  <li>IP address and approximate geographic location.</li>
                  <li>Browser type, operating system, and device type.</li>
                  <li>Pages visited, time spent on the Site, and navigation path.</li>
                  <li>Referral source (how you arrived at the Site).</li>
                  <li>Cookies and similar tracking technologies (see Section 3 - Cookie Policy).</li>
                </ul>

                <h4 className="font-syne font-bold text-sm text-gray-800 dark:text-gray-200 uppercase mt-6">
                  1.2.3 Information We Do Not Collect
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 font-light text-sm sm:text-base">
                  <li>We do not collect payment card or financial account information through this Site.</li>
                  <li>We do not collect sensitive personal data (such as health, biometric, religious, or political data) unless expressly required for a specific engagement and with your clear agreement.</li>
                  <li>We do not knowingly collect personal data from persons under 18 years of age.</li>
                </ul>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  1.3 Legal Basis for Processing
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  We process personal information only where there is a valid and reasonable basis for doing so. The table below summarises the purposes for which we process data and the corresponding basis:
                </p>

                {/* Legal Basis Table */}
                <div className="overflow-x-auto mt-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800">
                        <th className="p-4 font-bold font-syne text-gray-700 dark:text-gray-200">Processing Purpose</th>
                        <th className="p-4 font-bold font-syne text-gray-700 dark:text-gray-200">Legal Basis</th>
                        <th className="p-4 font-bold font-syne text-gray-700 dark:text-gray-200">Example</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr>
                        <td className="p-4 font-semibold">Contact form submissions</td>
                        <td className="p-4">Delivering services</td>
                        <td className="p-4 text-gray-500 dark:text-gray-400">Audit engagement communications</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">Analytics</td>
                        <td className="p-4">Understanding website traffic</td>
                        <td className="p-4 text-gray-500 dark:text-gray-400">Optimizing loading speed and UX</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">Marketing emails</td>
                        <td className="p-4">Consent</td>
                        <td className="p-4 text-gray-500 dark:text-gray-400">Optional newsletter or industry updates</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">Legal record-keeping</td>
                        <td className="p-4">Legal obligation</td>
                        <td className="p-4 text-gray-500 dark:text-gray-400">Retaining engagement records</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  1.4 How We Use Your Information
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 font-light text-sm sm:text-base">
                  <li>To respond to enquiries and provide audit and inspection services.</li>
                  <li>To manage our business relationship with clients and prospective clients.</li>
                  <li>To improve the functionality, content, and user experience of our website.</li>
                  <li>To send service-related communications such as appointment confirmations or report delivery.</li>
                  <li>To send marketing and promotional content where you have clearly opted in.</li>
                  <li>To comply with applicable legal obligations, court orders, or regulatory requirements.</li>
                  <li>To detect, investigate, and prevent fraudulent or unauthorised use of our services.</li>
                </ul>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  1.5 Data Sharing & Disclosure
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  We do not sell, rent, or trade your personal information to third parties. We may share data in the following limited circumstances:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 font-light text-sm sm:text-base">
                  <li><strong>Service providers:</strong> hosting providers, email delivery services, and analytics platforms, each bound by appropriate data handling commitments.</li>
                  <li><strong>Professional advisors:</strong> legal, financial, or accounting professionals, where necessary for the conduct of our business.</li>
                  <li><strong>Authorities:</strong> government bodies or law enforcement agencies where required by applicable law or legal process.</li>
                  <li><strong>Business transfers:</strong> in the event of a merger, acquisition, or restructuring, with appropriate safeguards applied to any transferred data.</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base mt-2">
                  We do not transfer personal data internationally without ensuring that appropriate protections are in place to keep your data secure.
                </p>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  1.6 Data Retention
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 font-light text-sm sm:text-base">
                  <li><strong>Client and prospect contact data:</strong> retained for up to 5 years from the date of last interaction.</li>
                  <li><strong>Website analytics data:</strong> retained for up to 26 months in line with standard analytics platform defaults.</li>
                  <li><strong>Email and communication records:</strong> retained for up to 3 years.</li>
                  <li><strong>Audit service records:</strong> retained for a minimum of 7 years in line with standard business record-keeping practice.</li>
                </ul>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  1.7 Your Rights Over Your Personal Data
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  You have the following rights in relation to personal data we hold about you. To exercise any of these rights, please contact us at the email address provided in Section 1.1. We will respond within 30 days of receiving your request.
                </p>

                {/* Rights Table */}
                <div className="overflow-x-auto mt-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800">
                        <th className="p-4 font-bold font-syne text-gray-700 dark:text-gray-200">Right</th>
                        <th className="p-4 font-bold font-syne text-gray-700 dark:text-gray-200">Description</th>
                        <th className="p-4 font-bold font-syne text-gray-700 dark:text-gray-200">How to Exercise</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr>
                        <td className="p-4 font-semibold">Access / Rectification</td>
                        <td className="p-4">Request a copy of your data or ask to correct errors.</td>
                        <td className="p-4">Email our privacy contact address</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">Erasure</td>
                        <td className="p-4">Request deletion of your data when no longer needed.</td>
                        <td className="p-4">Email with subject: Data Deletion Request</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">Restriction / Portability</td>
                        <td className="p-4">Limit processing or export data in structured format.</td>
                        <td className="p-4">Email with subject: Data Portability Request</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">Withdraw Consent</td>
                        <td className="p-4">Withdraw consent at any time for consent-based processing.</td>
                        <td className="p-4">Email or click unsubscribe</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-3 font-light">
                  If you are not satisfied with our response, you have the right to raise a concern with the relevant data protection authority in your country of residence.
                </p>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  1.8 Security
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  We take reasonable and appropriate technical and organisational steps to protect personal data against unauthorised access, loss, or misuse. Our measures include:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 font-light text-sm sm:text-base">
                  <li>SSL/TLS encryption for all data transmitted to and from this Site.</li>
                  <li>Access controls limiting personal data access to those who need it to perform their role.</li>
                  <li>Regular review of our data handling practices.</li>
                  <li>Procedures to identify and address any security incidents affecting personal data.</li>
                </ul>
              </div>
            )}

            {/* Render Terms & Conditions */}
            {currentPage === 'terms' && (
              <div className="space-y-6">
                <h2 className="font-syne font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3">
                  Terms & Conditions
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  These Terms and Conditions ("Terms") govern your access to and use of the website at 24adlinspection.com operated by 24ADL Inspection & Audit Services. By accessing or using this Site, you agree to be bound by these Terms.
                </p>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  2.1 Acceptance of Terms
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  Your continued use of this Site constitutes acceptance of these Terms and our Privacy Policy. These Terms apply to all visitors, prospective clients, and any person who accesses or uses the Site in any capacity.
                </p>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  2.2 Description of Services
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  24ADL provides independent audit and inspection services including stock auditing, inventory verification, retail audit, manufacturing audit, agro sector audit, and compliance verification. The information published on this Site is for general informational purposes only.
                </p>
                <p className="bg-brand-purple-light/10 dark:bg-purple-950/20 border border-brand-purple-primary/10 dark:border-brand-green-lemon/10 rounded-xl p-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  <strong>Important Notice:</strong> Service delivery is governed exclusively by a separate written agreement entered into between 24ADL and each client. Nothing on this Site constitutes a binding offer of services or a guarantee of specific outcomes. All service scope, timelines, fees, and deliverables are defined in individual client agreements.
                </p>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  2.3 Intellectual Property
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  All content on this Site  including text, graphics, logos, icons, and design elements  is the property of 24ADL Inspection & Audit Services or its licensors and is protected by applicable intellectual property laws.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  You may not reproduce, copy, redistribute, or exploit any portion of this Site or its content without express prior written permission from 24ADL. You may share links to this Site and reference 24ADL's name for legitimate, non-commercial purposes. The 24ADL brand name, logo, and marks may not be used without prior written consent.
                </p>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  2.4 Acceptable Use
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  By using this Site, you agree not to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 font-light text-sm sm:text-base">
                  <li>Use the Site for any unlawful, harmful, or fraudulent purpose.</li>
                  <li>Transmit unsolicited or unauthorised commercial communications (spam).</li>
                  <li>Introduce malicious software, viruses, or any code designed to disrupt or damage the Site.</li>
                  <li>Attempt to gain unauthorised access to any part of the Site, its servers, or related systems.</li>
                  <li>Use automated tools or bots to scrape or extract content from the Site without permission.</li>
                  <li>Misrepresent yourself as 24ADL, its personnel, or any other person or entity.</li>
                </ul>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  2.5 Disclaimer of Warranties
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  This Site and its content are provided on an "as is" and "as available" basis. 24ADL makes no representations or warranties, express or implied, regarding the accuracy, completeness, reliability, or suitability of the information on this Site.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  General information published on this Site does not constitute professional advice. For advice specific to your business situation, please engage a qualified professional or contact 24ADL directly to discuss a formal service engagement.
                </p>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  2.6 Limitation of Liability
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  To the fullest extent permitted by applicable law, 24ADL shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this Site or reliance on its content. Our liability in any matter arising from use of the Site is limited to the maximum extent permitted by law.
                </p>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  2.7 Third-Party Links
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  This Site may contain links to third-party websites included for convenience only. 24ADL has no control over and accepts no responsibility for the content, privacy practices, or availability of any third-party site. Accessing any linked site is at your own risk.
                </p>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  2.8 Governing Law & Dispute Resolution
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  Any dispute arising from these Terms or your use of the Site shall first be subject to good-faith negotiation between the parties. If negotiation fails, disputes shall be referred to mediation before a mutually agreed body. Any unresolved disputes shall be subject to the jurisdiction of the courts of the Federal Republic of Nigeria.
                </p>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  2.9 Modifications to Terms
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  24ADL reserves the right to update or amend these Terms at any time. Updated Terms will be published on this page with a revised effective date. Your continued use of the Site following any amendment constitutes acceptance of the revised Terms.
                </p>
              </div>
            )}

            {/* Render Cookie Policy */}
            {currentPage === 'cookies' && (
              <div className="space-y-6">
                <h2 className="font-syne font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3">
                  Cookie Policy
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  This Cookie Policy explains how 24ADL Inspection & Audit Services uses cookies and similar technologies when you visit 24adlinspection.com. It should be read alongside our Privacy Policy (Section 1).
                </p>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  3.1 What Are Cookies?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  Cookies are small text files placed on your device when you visit a website. They help websites function correctly, remember your preferences, and provide the website operator with information about how the site is being used.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 font-light text-sm sm:text-base">
                  <li><strong>Session cookies:</strong> temporary and are deleted when you close your browser.</li>
                  <li><strong>Persistent cookies:</strong> remain on your device until they expire or you delete them manually.</li>
                </ul>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  3.2 Cookies We Use
                </h3>
                
                {/* Cookies Table */}
                <div className="overflow-x-auto mt-4 border border-gray-200 dark:border-gray-800 rounded-xl">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800">
                        <th className="p-4 font-bold font-syne text-gray-700 dark:text-gray-200">Cookie Type</th>
                        <th className="p-4 font-bold font-syne text-gray-700 dark:text-gray-200">Purpose</th>
                        <th className="p-4 font-bold font-syne text-gray-700 dark:text-gray-200">Consent Required?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr>
                        <td className="p-4 font-semibold">Necessary</td>
                        <td className="p-4">Required for basic site navigation, secure features, and layout preference caching.</td>
                        <td className="p-4 text-red-500 font-medium">No</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">Analytics</td>
                        <td className="p-4">Aggregates anonymous visitor data via platforms like Google Analytics to evaluate site performance.</td>
                        <td className="p-4 text-green-500 font-medium">Yes</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">Functional</td>
                        <td className="p-4">Remembers user configuration values (like dark mode state) and form auto-fills.</td>
                        <td className="p-4 text-green-500 font-medium">Yes</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">Third-Party</td>
                        <td className="p-4">Powers embedded external widgets, such as our floating WhatsApp chat integration.</td>
                        <td className="p-4 text-green-500 font-medium">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  3.3 Managing Your Cookie Preferences
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  When you first visit this Site, you will be presented with a cookie consent notice allowing you to accept, decline, or customise your preferences.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  You may also manage or delete cookies at any time through your browser settings. Note that disabling certain cookies may affect the operational functionality of this Site.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  To opt out of Google Analytics tracking, you can download the browser add-on at:{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-purple-primary dark:text-brand-green-lemon hover:underline font-semibold break-all">tools.google.com/dlpage/gaoptout</a>
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  Your cookie preferences can be updated at any time by clearing your browser cookies and revisiting this Site, which will re-trigger the consent banner.
                </p>
              </div>
            )}

            {/* Render Disclaimer */}
            {currentPage === 'disclaimer' && (
              <div className="space-y-6">
                <h2 className="font-syne font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3">
                  Website Disclaimer
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  The information on 24adlinspection.com is provided for general informational purposes only. While we endeavour to keep the information on this Site accurate and current, 24ADL makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information, content, or services described on this Site.
                </p>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  4.1 Not Professional Advice
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  Nothing on this Site constitutes legal, financial, accounting, regulatory, or professional advice of any kind. For advice specific to your circumstances, you should engage a suitably qualified professional.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  Engaging 24ADL for a formal audit or inspection service constitutes a separate professional engagement governed by a written service agreement, independent of the general information published on this Site.
                </p>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  4.2 Audit & Inspection Information
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  Descriptions of 24ADL's services and methodologies on this Site are illustrative only. Actual audit findings, verification results, and recommendations are produced for a specific client and scope as defined in each engagement. Information on this Site does not represent a guarantee of specific outcomes for any prospective client.
                </p>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  4.3 External Links
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  Where this Site contains links to external websites or resources, these are provided for convenience only. 24ADL does not endorse and is not responsible for the content, accuracy, or practices of any linked external site.
                </p>

                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mt-8">
                  4.4 Site Availability
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                  24ADL does not guarantee uninterrupted or error-free availability of this Site. The Site may be temporarily unavailable due to maintenance, technical issues, or circumstances beyond our control. We accept no liability for any loss or inconvenience arising from unavailability of the Site.
                </p>
              </div>
            )}

            {/* Footer Signature */}
            <div className="border-t border-gray-150 dark:border-gray-800 pt-6 mt-12 text-xs text-gray-400 dark:text-gray-500 font-light flex flex-col sm:flex-row justify-between gap-3">
              <span>© 2026 24ADL Inspection & Audit Services</span>
              <span>Document Version: 1.0 (June 2026)</span>
            </div>

          </article>

        </div>
      </main>

    </div>
  );
}
