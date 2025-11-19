import { useState } from "react";
import { Button } from "@/components/ui/button";
import Section from "@/components/Common/Section";
import PageHeader from "@/components/Common/PageHeader";
import ProjectCard from "@/components/Projects/ProjectCard";
import ProjectTimeline from "@/components/Projects/ProjectTimeline";
import { projects, getProjectCategories } from "@/data/projects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("timeline");
  const categories = getProjectCategories();

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => 
          p.categories 
            ? p.categories.includes(selectedCategory)
            : p.category === selectedCategory
        );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Section>
        <PageHeader
          title="Projects"
          subtitle="Explore my work in web development, AI, and social impact technology"
        />

        {/* View Mode Toggle and Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-fast"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* View Mode Tabs */}
          <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as "grid" | "timeline")}>
            <TabsList>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="timeline">Timeline View</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Content */}
        {viewMode === "grid" ? (
          <>
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  category={project.category}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  slug={project.id}
                />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </>
        ) : (
          <div className="animate-fade-in">
            <ProjectTimeline projects={filteredProjects} />
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>
        )}
      </Section>
    </div>
  );
};

export default Projects;
