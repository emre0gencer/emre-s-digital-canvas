import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TechBadge from "@/components/Common/TechBadge";
import { experiences } from "@/data/experience";
import { Briefcase, BookOpen, Award, Eye, Download } from "lucide-react";

const getExperienceIcon = (type: string) => {
  switch (type) {
    case "work":
      return <Briefcase className="h-5 w-5" />;
    case "research":
      return <BookOpen className="h-5 w-5" />;
    case "education":
      return <Award className="h-5 w-5" />;
    default:
      return <Briefcase className="h-5 w-5" />;
  }
};

const getExperienceColor = (type: string) => {
  switch (type) {
    case "work":
      return "border-primary/30 hover:border-primary/60";
    case "research":
      return "border-accent/30 hover:border-accent/60";
    case "education":
      return "border-green-500/30 hover:border-green-500/60";
    default:
      return "border-primary/30 hover:border-primary/60";
  }
};

const getTimelineColor = (type: string) => {
  switch (type) {
    case "work":
      return "bg-primary";
    case "research":
      return "bg-accent";
    case "education":
      return "bg-green-500";
    default:
      return "bg-primary";
  }
};

const ExperienceTimeline = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = experiences.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => new Set(prev).add(index));
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );

      if (itemRefs.current[index]) {
        observer.observe(itemRefs.current[index]!);
      }

      return observer;
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Experiences are already in order
  const sortedExperiences = [...experiences];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Legend */}
      <div className="grid grid-cols-3 gap-4 mb-12 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <p className="text-xs font-semibold text-foreground">Work</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent"></div>
          <p className="text-xs font-semibold text-foreground">Research</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <p className="text-xs font-semibold text-foreground">Education</p>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-green-500 -translate-x-1/2 hidden md:block" />

        {/* Timeline items */}
        <div className="space-y-6 md:space-y-12">
          {sortedExperiences.map((experience, index) => {
            const isEven = index % 2 === 0;
            const isVisible = visibleIndexes.has(index);

            return (
              <div
                key={experience.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`md:grid md:grid-cols-2 gap-8 items-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${isEven ? "-translate-x-8" : "translate-x-8"}`
                }`}
              >
                {/* Content */}
                <div
                  className={`flex flex-col gap-4 ${
                    isEven ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Card
                    className={`h-full border-2 ${getExperienceColor(experience.type)} hover:shadow-lg transition-smooth group bg-gradient-to-br from-card to-muted/20`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1">
                          <div className={`p-2 rounded-lg bg-${experience.type === "work" ? "primary" : experience.type === "research" ? "accent" : "green-500"}/10 text-${experience.type === "work" ? "primary" : experience.type === "research" ? "accent" : "green-500"} group-hover:scale-110 transition-transform`}>
                            {getExperienceIcon(experience.type)}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              {experience.role}
                            </CardTitle>
                            <CardDescription className="text-base font-medium mt-1">
                              {experience.organization}
                            </CardDescription>
                          </div>
                        </div>
                        
                        {/* Attachment Buttons */}
                        {experience.attachments && (experience.attachments.pdf || experience.attachments.pptx) && (
                          <div className="flex flex-col gap-2">
                            {experience.attachments.pdf && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-2"
                                onClick={() => window.open(experience.attachments!.pdf, '_blank')}
                              >
                                <Eye className="h-4 w-4" />
                                Preview
                              </Button>
                            )}
                            {experience.attachments.pptx && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-2"
                                onClick={() => {
                                  const link = document.createElement('a');
                                  link.href = experience.attachments!.pptx!;
                                  link.download = `${experience.organization.replace(/\s+/g, '_')}_${experience.role.replace(/\s+/g, '_')}.pptx`;
                                  document.body.appendChild(link);
                                  link.click();
                                  document.body.removeChild(link);
                                }}
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Date range */}
                      <p className="text-sm text-muted-foreground">
                        {experience.date}
                      </p>

                      {/* Location */}
                      {experience.location && (
                        <p className="text-sm text-muted-foreground">
                          📍 {experience.location}
                        </p>
                      )}

                      {/* Description */}
                      <div className="space-y-2">
                        {experience.description.map((desc, idx) => (
                          <p key={idx} className="text-sm text-foreground leading-relaxed">
                            • {desc}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot and connector */}
                <div className="hidden md:flex items-center justify-center">
                  <div className={`relative w-6 h-6 rounded-full ${getTimelineColor(experience.type)} border-4 border-background shadow-lg`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
