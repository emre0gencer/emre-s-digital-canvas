import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "@/components/Common/Section";
import TechBadge from "@/components/Common/TechBadge";
import { getProjectById } from "@/data/projects";
import { ArrowLeft, Github, ExternalLink, Award } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : null;

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <Section>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Link>
            </Button>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </Button>

          {/* Project Header */}
          <div className="mb-8 animate-fade-up">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
                <p className="text-lg text-muted-foreground">{project.role} • {project.date}</p>
              </div>
              <TechBadge variant="outline" className="shrink-0">
                {project.category}
              </TechBadge>
            </div>

            {project.impact && (
              <div className="flex items-start gap-2 p-4 bg-accent/10 border border-accent/20 rounded-lg mb-6">
                <Award className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm font-medium">{project.impact}</p>
              </div>
            )}

            <p className="text-lg mb-6">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {project.githubUrl && (
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild variant="outline">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Project Details */}
          {project.details && (
            <div className="space-y-6 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>The Problem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.details.problem}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>The Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.details.solution}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>My Contribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.details.contribution}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What I Learned</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.details.learned.map((item, index) => (
                      <li key={index} className="flex gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

export default ProjectDetail;
