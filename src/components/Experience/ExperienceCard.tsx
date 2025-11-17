import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";

interface ExperienceCardProps {
  role: string;
  organization: string;
  location?: string;
  date: string;
  description: string[];
  type?: "work" | "research" | "volunteer";
}

const ExperienceCard = ({
  role,
  organization,
  location,
  date,
  description,
  type = "work",
}: ExperienceCardProps) => {
  const typeColors = {
    work: "border-l-primary",
    research: "border-l-accent",
    volunteer: "border-l-green-500",
  };

  return (
    <Card className={`border-l-4 ${typeColors[type]} hover:shadow-md transition-smooth`}>
      <CardHeader>
        <CardTitle className="text-xl">{role}</CardTitle>
        <CardDescription className="text-base font-medium text-foreground">
          {organization}
        </CardDescription>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
          {location && (
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {location}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {date}
          </span>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-1.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
