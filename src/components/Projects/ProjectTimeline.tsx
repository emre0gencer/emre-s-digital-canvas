import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TechBadge from "@/components/Common/TechBadge";
import { Project } from "@/data/projects";
import { ExternalLink, Github, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

const AnimatedCounter = ({ value, label }: AnimatedCounterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div
        className={`text-2xl md:text-3xl font-bold text-primary transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {value}
      </div>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

interface ProjectTimelineProps {
  projects: Project[];
}

const ProjectTimeline = ({ projects }: ProjectTimelineProps) => {
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = projects.map((_, index) => {
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

  return (
    <div className="max-w-4xl mx-auto">
      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-transparent -translate-x-1/2" />

        {/* Timeline items */}
        <div className="space-y-8 md:space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`md:grid md:grid-cols-2 gap-8 transition-all duration-700 ${
                visibleIndexes.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Left side: Project Card (always on the left) */}
              <div className="md:col-span-1 flex items-center justify-center">
                <div className="relative w-full">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute right-0 top-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg -translate-y-1/2 translate-x-1/2" />

                  <Card className="h-full border-primary/30 hover:border-primary/60 hover:shadow-lg transition-smooth bg-gradient-to-br from-card via-card to-primary/5">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg md:text-xl line-clamp-2">
                          {project.title}
                        </CardTitle>
                        <TechBadge variant="outline" className="shrink-0 text-xs">
                          {project.date}
                        </TechBadge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{project.role}</p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-foreground">{project.description}</p>

                      {/* Impact Metrics */}
                      {project.impact && (
                        <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                          <p className="text-sm font-semibold text-primary">{project.impact}</p>
                        </div>
                      )}

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <TechBadge key={tech} className="text-xs">
                            {tech}
                          </TechBadge>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-2 pt-2">
                        {project.details && (
                          <Button asChild variant="default" size="sm" className="flex-1">
                            <Link to={`/projects/${project.id}`}>Details</Link>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button asChild variant="outline" size="icon">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button asChild variant="outline" size="icon">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right side: URL Button (always on the right) */}
              <div className="md:col-span-1 flex items-center justify-center">
                <div className="w-full flex justify-center">
                  {/* Hackathon projects: Details + View Awards */}
                  {project.category === "Hackathon" && project.liveUrl && project.awardsUrl ? (
                    <div className="flex gap-2 w-full max-w-xs">
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="flex-1 bg-transparent border-primary text-primary hover:bg-primary/10"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-5 w-5" />
                          Details
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="flex-1 bg-transparent border-primary text-primary hover:bg-primary/10"
                      >
                        <a
                          href={project.awardsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Award className="h-5 w-5" />
                          View Awards
                        </a>
                      </Button>
                    </div>
                  ) : (project.id === "duquesne-incline" || project.id === "currency-converter") && project.githubUrl && project.liveUrl ? (
                    <div className="flex gap-2 w-full max-w-xs">
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="flex-1 bg-transparent border-primary text-primary hover:bg-primary/10"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Github className="h-5 w-5" />
                          GitHub
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="flex-1 bg-transparent border-primary text-primary hover:bg-primary/10"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-5 w-5" />
                          {project.id === "currency-converter" ? "PDF" : "Live"}
                        </a>
                      </Button>
                    </div>
                  ) : project.githubUrl && project.category !== "Community Impact" && project.category !== "Hackathon" ? (
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full max-w-xs bg-transparent border-primary text-primary hover:bg-primary/10"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="h-5 w-5" />
                        GitHub
                      </a>
                    </Button>
                  ) : project.liveUrl ? (
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full max-w-xs bg-transparent border-primary text-primary hover:bg-primary/10"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Details
                      </a>
                    </Button>
                  ) : project.details ? (
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full max-w-xs bg-transparent border-primary text-primary hover:bg-primary/10"
                    >
                      <Link
                        to={`/projects/${project.id}`}
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Details
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
