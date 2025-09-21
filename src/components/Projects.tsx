import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import {
  ExternalLink,
  GraduationCap,
  ShoppingCart,
  Heart,
  Building,
  Briefcase,
  Smartphone,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projectCategories = [
    {
      id: "edtech",
      label: "EdTech & Learning",
      icon: <GraduationCap className="h-4 w-4" />,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      accentColor: "border-green-200 dark:border-green-800",
      image:
        "https://images.unsplash.com/photo-1753613648137-602c669cbe07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5JTIwbGVhcm5pbmclMjBhcHB8ZW58MXx8fHwxNzU4NDQ1NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      projects: [
        {
          name: "EduAchiever",
          description:
            "Educational platform with pixel-perfect UIs across iOS & Android, designed for enhanced learning experiences.",
          tags: [
            "React Native",
            "Cross-Platform",
            "UI/UX",
            "Education",
          ],
        },
        {
          name: "Brainzeus",
          description:
            "Comprehensive multimedia editor supporting video, image, tone, alarms, and ringtones with advanced editing capabilities.",
          tags: [
            "React Native",
            "Media Processing",
            "Audio/Video",
            "Editor",
          ],
        },
      ],
    },
    {
      id: "ecommerce",
      label: "E-Commerce",
      icon: <ShoppingCart className="h-4 w-4" />,
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      accentColor: "border-orange-200 dark:border-orange-800",
      image:
        "https://images.unsplash.com/photo-1758274252144-6421f856e770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBtb2JpbGUlMjBzaG9wcGluZyUyMGFwcHxlbnwxfHx8fDE3NTg0NDU2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      projects: [
        {
          name: "BeannaStyles",
          description:
            "Complete E-Commerce application featuring product catalog, wishlist, shopping cart, and seamless checkout experience.",
          tags: [
            "React Native",
            "E-Commerce",
            "Payment Gateway",
            "Shopping",
          ],
        },
        {
          name: "AndorraPets",
          description:
            "Pet products marketplace with integrated RedSys payment gateway for secure transactions in European market.",
          tags: [
            "React Native",
            "Payment Integration",
            "RedSys",
            "Pet Products",
          ],
        },
        {
          name: "FinoLix",
          description:
            "Finance and investment platform providing comprehensive tools for financial management and investment tracking.",
          tags: [
            "React Native",
            "FinTech",
            "Investment",
            "Financial",
          ],
        },
      ],
    },
    {
      id: "healthcare",
      label: "Healthcare & Fitness",
      icon: <Heart className="h-4 w-4" />,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      accentColor: "border-red-200 dark:border-red-800",
      image:
        "https://images.unsplash.com/photo-1633613287441-3f72304088ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZml0bmVzcyUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NTg0NDU2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      projects: [
        {
          name: "BetterLix",
          description:
            "Liver health application available on both Play Store & iOS, focusing on health monitoring and wellness guidance.",
          tags: [
            "React Native",
            "Healthcare",
            "iOS",
            "Android",
            "Wellness",
          ],
        },
        {
          name: "Tranquility",
          description:
            "Meditation and health precaution app designed to promote mental wellness and stress management.",
          tags: [
            "React Native",
            "Meditation",
            "Mental Health",
            "Wellness",
          ],
        },
        {
          name: "Professional Gymnastics Centre (PGC)",
          description:
            "Comprehensive fitness platform with class booking, attendance tracking, and coaching management system.",
          tags: [
            "React Native",
            "Fitness",
            "Booking System",
            "Coaching",
          ],
        },
      ],
    },
    {
      id: "government",
      label: "Government & Law",
      icon: <Building className="h-4 w-4" />,
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      accentColor: "border-indigo-200 dark:border-indigo-800",
      image:
        "https://images.unsplash.com/photo-1552308995-2baac1ad5490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZWFjdCUyMG5hdGl2ZSUyMG1vYmlsZSUyMGFwcCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc1ODQ0NTY1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      projects: [
        {
          name: "RediPlan",
          description:
            "Australian Government disaster and hospital management application for emergency response coordination.",
          tags: [
            "React Native",
            "Government",
            "Emergency",
            "Hospital Management",
          ],
        },
        {
          name: "PocketLaw",
          description:
            "US legal application featuring AI chat functionality with comprehensive 14th Amendment coverage and legal guidance.",
          tags: [
            "React Native",
            "Legal",
            "AI Chat",
            "Constitutional Law",
          ],
        },
      ],
    },
    {
      id: "social",
      label: "Social & Lifestyle",
      icon: <Smartphone className="h-4 w-4" />,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      accentColor: "border-pink-200 dark:border-pink-800",
      image:
        "https://images.unsplash.com/photo-1552308995-2baac1ad5490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZWFjdCUyMG5hdGl2ZSUyMG1vYmlsZSUyMGFwcCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc1ODQ0NTY1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      projects: [
        {
          name: "Danzflo",
          description:
            "Social networking application with Firebase integration for real-time communication and content sharing.",
          tags: [
            "React Native",
            "Firebase",
            "Social Media",
            "Real-time",
          ],
        },
        {
          name: "Two Hearts",
          description:
            "Relationship and lifestyle application available on both Android and iOS platforms for couples and relationships.",
          tags: [
            "React Native",
            "Lifestyle",
            "Relationships",
            "Cross-Platform",
          ],
        },
      ],
    },
    {
      id: "business",
      label: "Job & Utility",
      icon: <Briefcase className="h-4 w-4" />,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      accentColor: "border-purple-200 dark:border-purple-800",
      image:
        "https://images.unsplash.com/photo-1552308995-2baac1ad5490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZWFjdCUyMG5hdGl2ZSUyMG1vYmlsZSUyMGFwcCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc1ODQ0NTY1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      projects: [
        {
          name: "TekSOL",
          description:
            "Comprehensive job portal with integrated employee time management system for HR and recruitment processes.",
          tags: [
            "React Native",
            "Job Portal",
            "Time Management",
            "HR",
          ],
        },
        {
          name: "Tapitag",
          description:
            "NFC-based RF card scanning application with text recognition capabilities for contactless data capture.",
          tags: [
            "React Native",
            "NFC",
            "RFID",
            "Text Recognition",
            "Scanning",
          ],
        },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Diverse portfolio spanning multiple industries
              with focus on mobile apps and hardware integration
            </p>
          </div>

          <Tabs defaultValue="edtech" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8 bg-gray-100 dark:bg-gray-800">
              {projectCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center space-x-1 text-xs data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
                >
                  {category.icon}
                  <span className="hidden sm:inline">
                    {category.label}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {projectCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
              >
                <div className="mb-6">
                  <div
                    className={`relative h-48 rounded-2xl overflow-hidden ${category.bgColor} ${category.accentColor} border-2`}
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r opacity-90"
                      style={{
                        background: `linear-gradient(135deg, var(--${category.id}-color, #3b82f6) 0%, transparent 100%)`,
                      }}
                    ></div>
                    <ImageWithFallback
                      src={category.image}
                      alt={`${category.label} Projects`}
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div
                          className={`inline-flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30`}
                        >
                          <div className="p-2 bg-white/20 rounded-lg">
                            {category.icon}
                          </div>
                          <h3 className="text-xl font-bold">
                            {category.label}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.projects.map((project, index) => (
                    <Card
                      key={index}
                      className={`h-full hover:shadow-xl transition-all duration-300 ${category.bgColor} ${category.accentColor} border-2`}
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span className="text-gray-800 dark:text-gray-200">
                            {project.name}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover:bg-white/50 dark:hover:bg-gray-800/50"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}