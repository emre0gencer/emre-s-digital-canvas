import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TechBadge from "@/components/Common/TechBadge";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
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

const ProjectTimeline = () => {
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
              {/* Alternating layout for desktop */}
              <div
                className={`md:col-span-1 flex items-center justify-center ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
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

              {/* Impact/Stats for mobile */}
              <div className="md:hidden flex items-center justify-center">
                {project.impact && (
                  <div className="text-center p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-sm font-semibold text-primary">{project.impact}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
