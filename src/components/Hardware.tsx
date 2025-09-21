import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Cpu, Radio, Lock, Zap, Settings, Monitor } from 'lucide-react';

export function Hardware() {
  const hardwareProjects = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Vending Machine Integration",
      description: "Android application for ADH815/ADH812 boards with comprehensive vending machine control",
      features: [
        "RS-485 polling implementation",
        "RUN, ACK, SCAN, TEMP commands",
        "Aisle and motor control systems",
        "Temperature monitoring",
        "Shipment detection & monitoring"
      ],
      technologies: ["Android", "RS-485", "ADH815/ADH812", "Java", "Hardware Communication"],
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconBg: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Smart Lock Systems",
      description: "RS-485 Lock Board communication for 8–50 position lock management",
      features: [
        "Individual and multiple channel unlock",
        "Lock status query systems",
        "Proactive feedback mechanisms",
        "Long power-on capabilities",
        "Real-time status monitoring"
      ],
      technologies: ["RS-485", "Lock Boards", "Android", "Real-time Communication", "IoT"],
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconBg: "bg-green-100 dark:bg-green-900",
      iconColor: "text-green-600 dark:text-green-400"
    },
    {
      icon: <Radio className="h-6 w-6" />,
      title: "UHF Antenna & UIC680 Projects",
      description: "UHF scanning integration for inventory management and authentication systems",
      features: [
        "UHF antenna integration",
        "UIC680 chip communication",
        "Inventory management systems",
        "Authentication protocols",
        "Range optimization"
      ],
      technologies: ["UHF", "UIC680", "RFID", "Android", "Inventory Management"],
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      iconBg: "bg-orange-100 dark:bg-orange-900",
      iconColor: "text-orange-600 dark:text-orange-400"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Embedded SDK Integration",
      description: "Advanced integration with Iproton ADH Series SDK and hardware control systems",
      features: [
        "libserial_port.so integration",
        "adh_series_sdk.jar implementation",
        "Vending/elevator driver board control",
        "Callback registration systems",
        "Error state management"
      ],
      technologies: ["SDK Integration", "JNI", "Native Libraries", "Hardware Drivers", "Error Handling"],
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconBg: "bg-purple-100 dark:bg-purple-900",
      iconColor: "text-purple-600 dark:text-purple-400"
    }
  ];

  const communicationProtocols = [
    { name: "RS-485", description: "Industrial communication standard", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
    { name: "NFC", description: "Near Field Communication", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
    { name: "RFID", description: "Radio Frequency Identification", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
    { name: "UHF", description: "Ultra High Frequency", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
    { name: "UIC680", description: "UHF RFID Chip", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
    { name: "ADH815/812", description: "Vending Driver Boards", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200" }
  ];

  return (
    <section id="hardware" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hardware & IoT Expertise
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Specialized experience in bridging mobile applications with embedded hardware systems 
              and industrial communication protocols
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-6">
              {hardwareProjects.map((project, index) => (
                <Card key={index} className={`hover:shadow-xl transition-all duration-300 border-0 ${project.bgColor}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className={`p-3 ${project.iconBg} ${project.iconColor} rounded-xl`}>
                        {project.icon}
                      </div>
                      <span className="text-gray-800 dark:text-gray-200">{project.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                            <div className={`w-2 h-2 ${project.iconColor.replace('text-', 'bg-')} rounded-full`}></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator className="mb-4 bg-gray-200/50 dark:bg-gray-700/50" />

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border-gray-200/50 dark:border-gray-700/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-gray-900/80 dark:to-blue-900/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg">
                      <Settings className="h-5 w-5" />
                    </div>
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Communication Protocols</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {communicationProtocols.map((protocol, index) => (
                      <div key={index} className="p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg border border-gray-200/50 dark:border-gray-700/50">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-gray-800 dark:text-gray-200">{protocol.name}</span>
                          <Badge className={protocol.color}>Active</Badge>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-300">{protocol.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white/80 to-purple-50/80 dark:from-gray-900/80 dark:to-purple-900/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Hardware Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1605387132052-357a341cc515?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3QlMjBoYXJkd2FyZSUyMHNlbnNvcnMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1ODQ0NTY1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="IoT Hardware Sensors Technology"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 rounded-xl">
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Hardware Projects</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/50 dark:to-pink-900/50 rounded-xl">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">6</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Protocols Mastered</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-white/80 to-purple-50/80 dark:from-gray-900/80 dark:to-purple-900/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Core Hardware Strengths</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl border border-blue-200/50 dark:border-blue-800/50">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-xl mx-auto mb-3 w-fit">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h4 className="font-medium mb-1 text-gray-800 dark:text-gray-200">Real-time Communication</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Low-latency hardware protocols</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl border border-green-200/50 dark:border-green-800/50">
                  <div className="p-3 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-xl mx-auto mb-3 w-fit">
                    <Settings className="h-8 w-8" />
                  </div>
                  <h4 className="font-medium mb-1 text-gray-800 dark:text-gray-200">Industrial Integration</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Robust industrial systems</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl border border-orange-200/50 dark:border-orange-800/50">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-xl mx-auto mb-3 w-fit">
                    <Monitor className="h-8 w-8" />
                  </div>
                  <h4 className="font-medium mb-1 text-gray-800 dark:text-gray-200">System Monitoring</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Advanced diagnostic tools</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl border border-purple-200/50 dark:border-purple-800/50">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-xl mx-auto mb-3 w-fit">
                    <Cpu className="h-8 w-8" />
                  </div>
                  <h4 className="font-medium mb-1 text-gray-800 dark:text-gray-200">SDK Integration</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Native library implementation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}