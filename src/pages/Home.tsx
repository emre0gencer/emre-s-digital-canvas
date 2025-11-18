import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/Common/Section";
import TechBadge from "@/components/Common/TechBadge";
import ProjectCard from "@/components/Projects/ProjectCard";
import ExperienceCard from "@/components/Experience/ExperienceCard";
import ParticleBackground from "@/components/Common/ParticleBackground";
import SkillGlobe from "@/components/Common/SkillGlobe";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { skills } from "@/data/skills";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Code,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-bg.jpg";

const Home = () => {
  const featuredProjects = projects.slice(0, 3);
  const recentExperiences = experiences
    .filter((e) => e.type === "work" || e.type === "research")
    .slice(0, 2);

  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const toggleCategorySelection = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  // Open resume in an online viewer (Office) and also trigger a download.
  const handleResumeClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const docxPath = "/resume.docx";
    const pdfPath = "/resume.pdf";
    const absoluteDocx = `${window.location.origin}${docxPath}`;

    // Try DOCX first
    try {
      const resp = await fetch(docxPath, { method: "HEAD" });
      if (resp.ok) {
        // open in Office viewer (works well for docx)
        const viewer = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(absoluteDocx)}`;
        window.open(viewer, "_blank");

        // trigger download
        const a = document.createElement("a");
        a.href = docxPath;
        a.download = "Emre_Gencer_Resume.docx";
        document.body.appendChild(a);
        a.click();
        a.remove();
        return;
      }
    } catch (err) {
      // fall through to try PDF
    }

    // Fallback: try PDF
    try {
      const resp2 = await fetch(pdfPath, { method: "HEAD" });
      if (resp2.ok) {
        const absolutePdf = `${window.location.origin}${pdfPath}`;
        // open in new tab (browsers usually preview PDFs)
        window.open(absolutePdf, "_blank");

        const a = document.createElement("a");
        a.href = pdfPath;
        a.download = "Emre_Gencer_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        return;
      }
    } catch (err) {
      // final fallback
    }

    // If neither available, notify user
    // eslint-disable-next-line no-alert
    alert("Resume file not found on the site. Please add 'resume.docx' or 'resume.pdf' to the public folder.");
  };

  return (
    <div
      className="
        min-h-screen 
        bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_55%),_radial-gradient(circle_at_bottom,_rgba(168,85,247,0.18),transparent_55%)]
        bg-background
        text-foreground
      "
    >
      {/* Hero Section with Particle Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Particle Background - Only in hero */}
        <ParticleBackground />

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-[6px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              Emre Gencer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Information Systems @ Carnegie Mellon University
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sophomore building web applications and AI-driven products.
              Passionate about creating technology that makes a meaningful
              impact.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="shadow-glow">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <Section className="bg-background/40 backdrop-blur-xl border-y border-border/40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <button
            type="button"
            className="focus:outline-none"
            onClick={() => {
              const el = document.getElementById("education");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Card className="border-primary/20 hover:border-primary/60 bg-background/60 backdrop-blur-sm transition-smooth cursor-pointer">
              <CardContent className="pt-6 text-center">
                <GraduationCap className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Sophomore @ CMU</h3>
                <p className="text-sm text-muted-foreground">
                  Information Systems | GPA 3.25
                </p>
              </CardContent>
            </Card>
          </button>

          <button
            type="button"
            className="focus:outline-none"
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Card className="border-accent/20 hover:border-accent/60 bg-background/60 backdrop-blur-sm transition-smooth cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Code className="h-10 w-10 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold text-lg mb-2">Web & AI Projects</h3>
                <p className="text-sm text-muted-foreground">
                  Full-stack development with ML
                </p>
              </CardContent>
            </Card>
          </button>

          <button
            type="button"
            className="focus:outline-none"
            onClick={() => {
              const el = document.getElementById("experience");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Card className="border-primary/20 hover:border-primary/60 bg-background/60 backdrop-blur-sm transition-smooth cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Briefcase className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Open to Internships</h3>
                <p className="text-sm text-muted-foreground">
                  Summer 2026 opportunities
                </p>
              </CardContent>
            </Card>
          </button>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section id="projects" className="bg-background/60 backdrop-blur-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my work in web development, AI, and social impact
            technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack.slice(0, 4)}
              category={project.category}
              slug={project.id}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Skills Overview with Neural Network Visual */}
      <Section className="bg-background/70 backdrop-blur-2xl border-y border-border/40">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A neural-style map of the languages, tools, and frameworks I use.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Neural Network Visual */}
          <div className="flex-1 flex justify-center">
            <SkillGlobe
              hoveredCategory={hoveredCategory}
              selectedCategory={selectedCategory}
              onSkillHover={(name, category) => {
                setHoveredSkill(name);
                setHoveredCategory(category);
              }}
              onCategorySelect={(category) => {
                if (!category) {
                  setSelectedCategory(null);
                } else {
                  toggleCategorySelection(category);
                }
              }}
            />
          </div>

          {/* Skills by Category (Legend + details) */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skillCategory) => {
              const isSelected = selectedCategory === skillCategory.category;
              const isHovered = hoveredCategory === skillCategory.category;

              return (
                <Card
                  key={skillCategory.category}
                  className={`transition-smooth cursor-pointer bg-background/70 backdrop-blur-md ${
                    isSelected
                      ? "border-primary shadow-md"
                      : isHovered
                      ? "border-primary/60"
                      : "hover:shadow-md border-border/60"
                  }`}
                  onMouseEnter={() =>
                    setHoveredCategory(skillCategory.category)
                  }
                  onMouseLeave={() => {
                    // Only clear hover if no node is currently hovered
                    if (!hoveredSkill) {
                      setHoveredCategory(null);
                    }
                  }}
                  onClick={() => toggleCategorySelection(skillCategory.category)}
                >
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-4 text-primary">
                      {skillCategory.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.skills.slice(0, 5).map((skill) => {
                        const isExact = hoveredSkill === skill;
                        const isSameCategoryActive =
                          hoveredCategory === skillCategory.category ||
                          selectedCategory === skillCategory.category;

                        let badgeClasses = "text-xs";
                        if (isExact) {
                          // exact skill hovered from network -> strong highlight
                          badgeClasses +=
                            " bg-primary/90 text-primary-foreground border border-primary shadow-sm";
                        } else if (isSameCategoryActive) {
                          // same category as hovered/selected -> softer highlight
                          badgeClasses +=
                            " bg-primary/10 text-primary border border-primary/40";
                        } else {
                          badgeClasses += " bg-muted text-muted-foreground";
                        }

                        return (
                          <TechBadge key={skill} className={badgeClasses}>
                            {skill}
                          </TechBadge>
                        );
                      })}
                      {skillCategory.skills.length > 5 && (
                        <TechBadge className="text-xs bg-muted text-muted-foreground">
                          +{skillCategory.skills.length - 5}
                        </TechBadge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Recent Experience */}
      <Section id="experience" className="bg-background/60 backdrop-blur-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recent Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional work and research in machine learning and data analysis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
          {recentExperiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              role={exp.role}
              organization={exp.organization}
              location={exp.location}
              date={exp.date}
              description={exp.description.slice(0, 3)}
              type={exp.type}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/experience">
              View All Experience <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Courses Preview */}
      <Section className="bg-background/50 backdrop-blur-xl border-y border-border/40">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Continuous Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expanding knowledge through coursework and certifications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          {[
            "Harvard CS50x",
            "Machine Learning",
            "Computer Vision",
            "Blockchain",
            "Research Skills",
            "Statistical Methods",
            "Java Programming",
            "Quantum Physics",
          ].map((course) => (
            <Card
              key={course}
              className="bg-background/70 backdrop-blur-md hover:border-primary/50 transition-fast"
            >
              <CardContent className="pt-4 pb-4 text-center">
                <p className="text-sm font-medium">{course}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/courses">
              View All Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Contact Strip */}
      <Section className="bg-transparent">
        <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20 backdrop-blur-xl">
          <CardContent className="pt-12 pb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I&apos;m open to summer 2026 internships, collaborations, and
              interesting projects. Let&apos;s connect!
            </p>
            <Button asChild size="lg" className="shadow-glow">
              <Link to="/contact">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
};

export default Home;
