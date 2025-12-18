import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TechBadge from "@/components/Common/TechBadge";
import { Experience } from "@/data/experience";
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
  };
};

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
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
      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-green-500 -translate-x-1/2 hidden md:block" />

        {/* Timeline items */}
        <div className="space-y-6 md:space-y-12">
          {sortedExperiences.map((experience, index) => {
            const isVisible = visibleIndexes.has(index);

            return (
              <div
                key={experience.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`md:grid md:grid-cols-2 gap-8 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Left side: Experience Card (always on the left) */}
                <div className="md:col-span-1 flex items-center justify-center">
                  <div className="relative w-full">
                    {/* Timeline dot */}
                    <div className={`hidden md:block absolute right-0 top-1/2 w-4 h-4 rounded-full ${getTimelineColor(experience.type)} border-4 border-background shadow-lg -translate-y-1/2 translate-x-1/2`} />
                    <div className={`hidden md:block absolute right-0 top-1/2 w-4 h-4 rounded-full ${getTimelineColor(experience.type)} border-4 border-background shadow-lg -translate-y-1/2 translate-x-1/2`} />

                    <Card
                      className={`h-full border-2 ${getExperienceColor(experience.type)} hover:shadow-lg transition-smooth group bg-gradient-to-br from-card to-muted/20`}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2 mb-2">
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
                          <TechBadge variant="outline" className="shrink-0">
                            {experience.date}
                          </TechBadge>
                        </div>
                        {experience.location && (
                          <p className="text-sm text-muted-foreground ml-11">
                            📍 {experience.location}
                          </p>
                        )}
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Description */}
                        <div className="space-y-2">
                          {experience.description.map((desc, idx) => (
                            <p key={idx} className="text-sm text-foreground leading-relaxed">
                              • {desc}
                            </p>
                          ))}
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {experience.skills.map((skill) => (
                            <TechBadge key={skill}>{skill}</TechBadge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Right side: URL Buttons (always on the right) */}
                <div className="md:col-span-1 flex items-center justify-center">
                  <div className="w-full flex justify-center">
                    {experience.id === "cerrahpasa" && experience.url1 ? (
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="w-full max-w-xs bg-transparent border-primary text-primary hover:bg-primary/10"
                      >
                        <a
                          href={experience.url1}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Eye className="h-5 w-5" />
                          View Journal Article
                        </a>
                      </Button>
                    ) : (experience.id === "mastercard" || experience.id === "salesforce") && experience.url1 ? (
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="w-full max-w-xs bg-transparent border-primary text-primary hover:bg-primary/10"
                      >
                        <a
                          href={experience.url1}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Eye className="h-5 w-5" />
                          See Report
                        </a>
                      </Button>
                    ) : experience.id === "rcec" && experience.url1 ? (
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="w-full max-w-xs bg-transparent border-primary text-primary hover:bg-primary/10"
                      >
                        <a
                          href={experience.url1}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Eye className="h-5 w-5" />
                          See Technical Report
                        </a>
                      </Button>
                    ) : experience.url1 && experience.url2 ? (
                      <div className="flex gap-2 w-full max-w-xs">
                        <Button
                          asChild
                          variant="outline"
                          size="lg"
                          className="flex-1 bg-transparent border-primary text-primary hover:bg-primary/10"
                        >
                          <a
                            href={experience.url1}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <Eye className="h-5 w-5" />
                            View
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="lg"
                          className="flex-1 bg-transparent border-primary text-primary hover:bg-primary/10"
                        >
                          <a
                            href={experience.url2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <Download className="h-5 w-5" />
                            Download
                          </a>
                        </Button>
                      </div>
                    ) : null}
                  </div>
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
