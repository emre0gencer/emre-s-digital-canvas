import { useState } from "react";
import { Button } from "@/components/ui/button";
import Section from "@/components/Common/Section";
import PageHeader from "@/components/Common/PageHeader";
import ExperienceCard from "@/components/Experience/ExperienceCard";
import { experiences } from "@/data/experience";

const Experience = () => {
  const [selectedType, setSelectedType] = useState<"all" | "work" | "research" | "volunteer">("all");

  const filteredExperiences =
    selectedType === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === selectedType);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Section>
        <PageHeader
          title="Experience"
          subtitle="Professional work, research, and community involvement"
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            variant={selectedType === "all" ? "default" : "outline"}
            onClick={() => setSelectedType("all")}
          >
            All
          </Button>
          <Button
            variant={selectedType === "work" ? "default" : "outline"}
            onClick={() => setSelectedType("work")}
          >
            Work
          </Button>
          <Button
            variant={selectedType === "research" ? "default" : "outline"}
            onClick={() => setSelectedType("research")}
          >
            Research
          </Button>
          <Button
            variant={selectedType === "volunteer" ? "default" : "outline"}
            onClick={() => setSelectedType("volunteer")}
          >
            Volunteer
          </Button>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          {filteredExperiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              role={exp.role}
              organization={exp.organization}
              location={exp.location}
              date={exp.date}
              description={exp.description}
              type={exp.type}
            />
          ))}
        </div>

        {filteredExperiences.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No experiences found in this category.</p>
          </div>
        )}
      </Section>
    </div>
  );
};

export default Experience;
