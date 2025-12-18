import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TechBadge from "@/components/Common/TechBadge";
import { MapPin, Calendar, Eye, Download } from "lucide-react";

interface ExperienceCardProps {
  role: string;
  organization: string;
  location?: string;
  date: string;
  description: string[];
  skills: string[];
  type?: "work" | "research" | "volunteer";
  attachments?: {
    pdf?: string;
    pptx?: string;
  };
}

const ExperienceCard = ({
  role,
  organization,
  location,
  date,
  description,
  skills,
  type = "work",
  attachments,
}: ExperienceCardProps) => {
  const typeColors = {
    work: "border-l-primary",
    research: "border-l-accent",
    volunteer: "border-l-green-500",
  };

  return (
    <Card className={`border-l-4 ${typeColors[type]} hover:shadow-md transition-smooth`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1">
            <CardTitle className="text-xl">{role}</CardTitle>
            <CardDescription className="text-base font-medium text-foreground">
              {organization}
            </CardDescription>
          </div>
          <TechBadge variant="outline" className="shrink-0">
            {date}
          </TechBadge>
        </div>
        {location && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {location}
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-1.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {skills.map((skill) => (
            <TechBadge key={skill}>{skill}</TechBadge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
