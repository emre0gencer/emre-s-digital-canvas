import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "outline";
}

const TechBadge = ({ children, className, variant = "secondary" }: TechBadgeProps) => {
  return (
    <Badge
      variant={variant}
      className={cn(
        "px-3 py-1 text-xs font-medium rounded-full transition-fast hover:scale-105",
        className
      )}
    >
      {children}
    </Badge>
  );
};

export default TechBadge;
