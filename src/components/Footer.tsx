import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Hardware', href: '#hardware' },
    { label: 'Contact', href: '#contact' }
  ];

  const specializations = [
    { name: 'React Native Development', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
    { name: 'Android Development', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' }, 
    { name: 'Hardware Integration', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
    { name: 'IoT Solutions', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Gaurav Kumar
                </span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
                Mobile Application Developer & Embedded Hardware Communication Specialist. 
                Bridging the gap between mobile apps and hardware systems with innovative IoT solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec) => (
                  <Badge key={spec.name} className={`text-xs ${spec.color} border-0`}>
                    {spec.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-medium mb-4 text-gray-800 dark:text-gray-200">Quick Links</h4>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium mb-4 text-gray-800 dark:text-gray-200">Get In Touch</h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div>Noida, Uttar Pradesh</div>
                <div>India</div>
                <a 
                  href="mailto:theGauravRN@gmail.com"
                  className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  theGauravRN@gmail.com
                </a>
                <a 
                  href="tel:+919532249616"
                  className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  +(91) 9532249616
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-200/50 dark:bg-gray-700/50" />

          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              © {currentYear} Gaurav Kumar. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}