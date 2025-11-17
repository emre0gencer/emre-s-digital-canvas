import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TechBadge from "@/components/Common/TechBadge";
import { Award, Calendar } from "lucide-react";

interface CourseCardProps {
  title: string;
  provider: string;
  date?: string;
  description?: string;
  categories?: string[];
  certified?: boolean;
}

const CourseCard = ({
  title,
  provider,
  date,
  description,
  categories = [],
  certified = false,
}: CourseCardProps) => {
  return (
    <Card className="hover:shadow-md transition-smooth border-border hover:border-primary/30">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{title}</CardTitle>
          {certified && (
            <Award className="h-5 w-5 text-accent shrink-0" />
          )}
        </div>
        <CardDescription className="font-medium">{provider}</CardDescription>
        {date && (
          <p className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
            <Calendar className="h-4 w-4" />
            {date}
          </p>
        )}
      </CardHeader>

      {(description || categories.length > 0) && (
        <CardContent className="space-y-3">
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <TechBadge key={category} variant="outline">
                  {category}
                </TechBadge>
              ))}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
};

export default CourseCard;
