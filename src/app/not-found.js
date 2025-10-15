'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Home, 
  BookOpen, 
  Phone, 
  ArrowLeft,
  Search,
  ExternalLink
} from 'lucide-react';

export default function NotFound() {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState('');
  const [suggestedRedirect, setSuggestedRedirect] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      setCurrentPath(path);
      
      // Check if it's an old PHP URL and suggest the new equivalent
      const phpMappings = {
        '/aboutus.php': '/aboutus',
        '/contactus.php': '/contactus',
        '/courses.php': '/courses',
        '/index.php': '/',
        '/services.php': '/courses',
        '/google-cloud-training.php': '/google-cloud-training-in-hyderabad',
        '/snowflake-training-in-hyderabad.php': '/snowflake-training-in-hyderabad',
        '/servicenow-training-in-hyderabad.php': '/servicenow-training-in-hyderabad',
        '/sap-mm-online-training.php': '/sap-mm-online-training',
        '/sap-security-training.php': '/sap-security-training',
        '/informatica-mdm-training.php': '/informatica-mdm-training',
        '/sap-basis-online-training.php': '/sap-basis-online-training',
        '/mulesoft-training-in-hyderabad.php': '/mulesoft-training-in-hyderabad',
        '/edi-training.php': '/edi-training',
      };

      // Check if it's a PDF request
      if (path.includes('.pdf') || path.includes('/studypdfs/')) {
        setSuggestedRedirect('/courses');
      } else if (phpMappings[path]) {
        setSuggestedRedirect(phpMappings[path]);
      } else if (path.endsWith('.php')) {
        // Generic PHP file - suggest courses page
        setSuggestedRedirect('/courses');
      }

      // Auto-redirect after a delay if we have a good match
      if (phpMappings[path]) {
        setTimeout(() => {
          router.push(phpMappings[path]);
        }, 3000);
      }
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            The page you're looking for doesn't exist on our new website.
          </p>
          
          {currentPath && (
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-500 mb-2">You were trying to access:</p>
              <code className="text-sm bg-white px-3 py-1 rounded border text-red-600">
                {currentPath}
              </code>
            </div>
          )}

          {suggestedRedirect && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center mb-2">
                <ExternalLink className="w-5 h-5 text-green-600 mr-2" />
                <p className="text-green-800 font-medium">We've updated our website!</p>
              </div>
              <p className="text-green-700 text-sm mb-3">
                This page has moved. You'll be automatically redirected to:
              </p>
              <Link 
                href={suggestedRedirect}
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Go to New Page
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
              <p className="text-xs text-green-600 mt-2">
                Auto-redirecting in 3 seconds...
              </p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Link 
            href="/"
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-blue-200"
          >
            <Home className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Go Home</h3>
            <p className="text-sm text-gray-600 text-center">Return to our homepage</p>
          </Link>

          <Link 
            href="/courses"
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-blue-200"
          >
            <BookOpen className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Browse Courses</h3>
            <p className="text-sm text-gray-600 text-center">Explore our training programs</p>
          </Link>

          <Link 
            href="/contactus"
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-blue-200"
          >
            <Phone className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Contact Us</h3>
            <p className="text-sm text-gray-600 text-center">Get in touch with our team</p>
          </Link>
        </div>

        {/* Popular Courses */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
            <Search className="w-5 h-5 mr-2" />
            Popular Training Courses
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            <Link href="/azure-devops-training-in-hyderabad" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
              Azure DevOps Training
            </Link>
            <Link href="/python-online-training" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
              Python Training
            </Link>
            <Link href="/salesforce-training-in-hyderabad" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
              Salesforce Training
            </Link>
            <Link href="/sap-fico-training-in-hyderabad" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
              SAP FICO Training
            </Link>
            <Link href="/data-science-training-in-hyderabad" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
              Data Science Training
            </Link>
            <Link href="/google-cloud-training-in-hyderabad" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
              Google Cloud Training
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-sm text-gray-500">
          <p className="mb-2">
            <strong>Note:</strong> We've recently updated our website. Old .php URLs and PDF links have been migrated.
          </p>
          <p>
            Need help? <Link href="/contactus" className="text-blue-600 hover:underline">Contact our support team</Link>
          </p>
        </div>
      </div>
    </div>
  );
}