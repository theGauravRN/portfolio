import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Database, Cpu, Wrench, Monitor, Smartphone } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Java", "C", "C++", "Kotlin"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconBg: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Frameworks",
      skills: ["React Native", "React", "Node.js", "Android SDK"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconBg: "bg-green-100 dark:bg-green-900",
      iconColor: "text-green-600 dark:text-green-400"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Databases",
      skills: ["MongoDB", "SQLite", "Firebase", "AWS"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      iconBg: "bg-orange-100 dark:bg-orange-900",
      iconColor: "text-orange-600 dark:text-orange-400"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Hardware & IoT",
      skills: ["RS-485", "NFC", "RFID", "UHF Antenna", "UIC680", "ADH815/ADH812", "Lock Control Boards"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconBg: "bg-purple-100 dark:bg-purple-900",
      iconColor: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Tools & IDE",
      skills: ["Android Studio", "Xcode", "VS Code", "Git", "Node.js"],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      iconBg: "bg-pink-100 dark:bg-pink-900",
      iconColor: "text-pink-600 dark:text-pink-400"
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Operating Systems",
      skills: ["macOS", "Windows", "Android", "Linux"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      iconBg: "bg-indigo-100 dark:bg-indigo-900",
      iconColor: "text-indigo-600 dark:text-indigo-400"
    }
  ];

  const specializations = [
    { name: "Mobile-Hardware Integration", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
    { name: "RS-485 Communication Protocols", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
    { name: "NFC & RFID Implementation", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" }, 
    { name: "Vending Machine Control Systems", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
    { name: "IoT Solutions Development", color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200" },
    { name: "Cross-Platform Development", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200" },
    { name: "Payment Gateway Integration", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
    { name: "Real-time Data Processing", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive skill set spanning mobile development, embedded systems, and hardware integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className={`h-full hover:shadow-lg transition-all duration-300 border-0 ${category.bgColor}`}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`p-3 ${category.iconBg} ${category.iconColor} rounded-xl`}>
                      {category.icon}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-white/80 to-blue-50/80 dark:from-gray-900/80 dark:to-blue-900/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Core Specializations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {specializations.map((spec) => (
                  <Badge key={spec.name} className={`justify-center py-3 px-4 text-center font-medium ${spec.color} border-0`}>
                    {spec.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}