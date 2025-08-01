import React from 'react';

export const metadata = {
  title: 'Privacy Policy | VR IT Solutions',
  description: 'Privacy Policy for VR IT Solutions - Learn about how we collect, use, and protect your personal information.',
  keywords: 'privacy policy, data protection, personal information, VR IT Solutions',
  authors: [{ name: 'VR IT Solutions' }],
  publisher: 'VR IT Solutions',
  category: 'Legal',
  classification: 'Policy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Privacy Policy | VR IT Solutions',
    description: 'Privacy Policy for VR IT Solutions - Learn about how we collect, use, and protect your personal information.',
    url: 'https://vrit-ten.vercel.app/privacy-policy',
    siteName: 'VR IT Solutions',
    images: [
      {
        url: 'https://vrit-ten.vercel.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - VR IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | VR IT Solutions',
    description: 'Privacy Policy for VR IT Solutions - Learn about how we collect, use, and protect your personal information.',
    images: ['https://vrit-ten.vercel.app/logo.png'],
    creator: '@vritsolutions',
    site: '@vritsolutions',
  },
  alternates: {
    canonical: 'https://vrit-ten.vercel.app/privacy-policy',
    languages: {
      'en-US': 'https://vrit-ten.vercel.app/privacy-policy',
    },
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-slate-800/50 via-gray-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/30 shadow-2xl">
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>

          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            
            <section className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Purpose</h2>
              <p className="text-gray-300 leading-relaxed">
                VRIT solutions ("VRIT solutions," "we," or "us") is committed to protecting your privacy. We take data protection and privacy very seriously. This Privacy Policy ("Policy") describes how VRIT solutions collects, uses, shares and secures the personal information you provide when you visit the Websites and Mobile Apps owned and operated by VRIT solutions (listed below), and when you use our Service(s). It also describes your choices regarding the use, access, and correction of your personal information. The use of information collected through our Service(s) shall be limited to the purpose of providing the service for which you have engaged VRIT solutions. The capitalized terms used in this Policy but not defined herein shall have the same meaning as defined in our Terms of Service.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Please read this Privacy Policy carefully, as it governs how you use VRIT solutions or its affiliate products. If you do not agree to this Privacy Policy, please do not use VRIT solutions.
              </p>
            </section>

            <section className="bg-purple-500/10 rounded-xl p-6 border border-purple-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Notice to End Users</h2>
              <p className="text-gray-300 leading-relaxed">
                In some cases, an administrator may create an account in VRIT solutions on the behalf of an "End-User" and may provide his/her information, including Personal Information. In such cases, the administrator who may be your Employer or a VRIT solutions Authorized Training Partner (ATP) is our "Customer." We collect Information under the direction of our customers and have no direct relationship with the End-User whose personal data we process.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                An end-user's use of the VRIT solutions platform may be subject to the Customer's policies if any.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Our Customer must have the authority to act on behalf of the End-User and to consent to the collection and use of their Personal Information as described in this Privacy Policy.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                If you are an End-user using our platform, please direct your privacy inquiries to your administrator. VRIT solutions is not responsible for the privacy or security practices of our customers, which may differ from those outlined in this privacy statement.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                VRIT solutions does not send personalized advertisements or Marketing communication to end-users.
              </p>
            </section>

            <section className="bg-teal-500/10 rounded-xl p-6 border border-teal-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">International Transfer</h2>
              <p className="text-gray-300 leading-relaxed">
                Personal data collected by VRIT solutions may be stored and processed in your region, and in any other country where VRIT solutions or its affiliates and data sub-processors operate facilities.
              </p>
            </section>

            <section className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
              <h2 className="text-2xl font-bold text-white mb-4">Use of your Personal Information and Other Data</h2>
              <p className="text-gray-300 leading-relaxed">
                VRIT solutions uses this Privacy Policy to govern the use of personal information you provide to us. We use your personal information solely to provide our services to you.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
