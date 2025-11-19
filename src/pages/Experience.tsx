import { useState } from "react";
import { Button } from "@/components/ui/button";
import Section from "@/components/Common/Section";
import PageHeader from "@/components/Common/PageHeader";
import ExperienceCard from "@/components/Experience/ExperienceCard";
import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";
import { experiences } from "@/data/experience";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = () => {
  const [selectedType, setSelectedType] = useState<"all" | "work" | "research" | "volunteer">("all");
  const [viewMode, setViewMode] = useState<"cards" | "timeline">("timeline");

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

        {/* Filter Bar and View Mode */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 flex-wrap">
          {/* Type Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={selectedType === "all" ? "default" : "outline"}
              onClick={() => setSelectedType("all")}
              size="sm"
            >
              All
            </Button>
            <Button
              variant={selectedType === "work" ? "default" : "outline"}
              onClick={() => setSelectedType("work")}
              size="sm"
            >
              Work
            </Button>
            <Button
              variant={selectedType === "research" ? "default" : "outline"}
              onClick={() => setSelectedType("research")}
              size="sm"
            >
              Research
            </Button>
            <Button
              variant={selectedType === "volunteer" ? "default" : "outline"}
              onClick={() => setSelectedType("volunteer")}
              size="sm"
            >
              Volunteer
            </Button>
          </div>

          {/* View Mode Tabs */}
          <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as "cards" | "timeline")}>
            <TabsList>
              <TabsTrigger value="cards">Card View</TabsTrigger>
              <TabsTrigger value="timeline">Timeline View</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Content */}
        {viewMode === "cards" ? (
          <>
            {/* Experience Cards */}
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
                  attachments={exp.attachments}
                />
              ))}
            </div>

            {filteredExperiences.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No experiences found in this category.</p>
              </div>
            )}
          </>
        ) : (
          <div className="animate-fade-in">
            {selectedType !== "all" && (
              <p className="text-center text-sm text-muted-foreground mb-8">
                Showing all experiences in timeline view
              </p>
            )}
            <ExperienceTimeline />
          </div>
        )}
      </Section>
    </div>
  );
};

export default Experience;
