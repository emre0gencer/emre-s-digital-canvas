import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TechBadge from "@/components/Common/TechBadge";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  category?: string;
  githubUrl?: string;
  liveUrl?: string;
  slug?: string;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  category,
  githubUrl,
  liveUrl,
  slug,
}: ProjectCardProps) => {
  return (
    <Card className="group h-full flex flex-col overflow-hidden border-border hover:border-primary/50 hover:shadow-lg transition-smooth">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-xl group-hover:text-primary transition-fast">
            {title}
          </CardTitle>
          {category && (
            <TechBadge variant="outline" className="shrink-0">
              {category}
            </TechBadge>
          )}
        </div>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {slug && (
            <Button asChild variant="default" size="sm" className="flex-1">
              <Link to={`/projects/${slug}`}>View Details</Link>
            </Button>
          )}
          {githubUrl && (
            <Button asChild variant="outline" size="icon">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button asChild variant="outline" size="icon">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
