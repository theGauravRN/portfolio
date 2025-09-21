import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-4xl">🌐</span>
                  <Badge variant="secondary" className="text-sm bg-green-100 text-green-800 border-green-200">Available for Projects</Badge>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Gaurav Kumar
                  </span>
                </h1>
                <div className="space-y-2">
                  <h2 className="text-xl lg:text-2xl text-blue-600 font-semibold">
                    Mobile Application Developer
                  </h2>
                  <h3 className="text-lg lg:text-xl text-purple-600 font-medium">
                    Embedded Hardware Communication Specialist
                  </h3>
                </div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                React Native & Android Developer with expertise in bridging mobile apps with embedded hardware systems. 
                Specializing in RS-485 communication, NFC, RFID, and IoT solutions across EdTech, Healthcare, 
                E-Commerce, and Government sectors.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>+(91) 9532249616</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-lg">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>theGauravRN@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400 rounded-lg">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>Noida, Uttar Pradesh, India</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get In Touch
                </Button>
                <Button variant="outline" size="lg" className="flex items-center space-x-2 border-blue-200 text-blue-600 hover:bg-blue-50">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center space-x-2 border-purple-200 text-purple-600 hover:bg-purple-50">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </Button>
              </div>
            </div>

            <div className="lg:order-last">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-green-400/10 via-blue-400/10 to-purple-400/10 rounded-3xl transform -rotate-3"></div>
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzU4NDQ1NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Mobile App Development Workspace"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 rounded-xl">
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">50+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Projects Delivered</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/50 dark:to-pink-900/50 rounded-xl">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">5+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}