import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader = ({ title, subtitle, className }: PageHeaderProps) => {
  return (
    <div className={cn("text-center mb-16 md:mb-20 animate-fade-up", className)}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-relaxed pb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
