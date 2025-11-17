import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/Common/Section";
import TechBadge from "@/components/Common/TechBadge";
import ProjectCard from "@/components/Projects/ProjectCard";
import ExperienceCard from "@/components/Experience/ExperienceCard";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { skills } from "@/data/skills";
import { ArrowRight, Briefcase, GraduationCap, Code, Download } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-bg.jpg";

const Home = () => {
  const featuredProjects = projects.slice(0, 3);
  const recentExperiences = experiences.filter(e => e.type === "work" || e.type === "research").slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              Emre Gencer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Information Systems @ Carnegie Mellon University
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sophomore building web applications and AI-driven products. Passionate about creating technology that makes a meaningful impact.
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
      <Section className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-primary/20 hover:border-primary/50 transition-smooth">
            <CardContent className="pt-6 text-center">
              <GraduationCap className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2">Sophomore @ CMU</h3>
              <p className="text-sm text-muted-foreground">Information Systems | GPA 3.25</p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent/50 transition-smooth">
            <CardContent className="pt-6 text-center">
              <Code className="h-10 w-10 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold text-lg mb-2">Web & AI Projects</h3>
              <p className="text-sm text-muted-foreground">Full-stack development with ML</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/50 transition-smooth">
            <CardContent className="pt-6 text-center">
              <Briefcase className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2">Open to Internships</h3>
              <p className="text-sm text-muted-foreground">Summer 2026 opportunities</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section id="projects">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my work in web development, AI, and social impact technology
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

      {/* Skills Overview */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical expertise across software development, AI, and data analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skillCategory) => (
            <Card key={skillCategory.category} className="hover:shadow-md transition-smooth">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4 text-primary">{skillCategory.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill) => (
                    <TechBadge key={skill}>{skill}</TechBadge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Recent Experience */}
      <Section id="experience">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Experience</h2>
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
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Continuous Learning</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expanding knowledge through coursework and certifications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          {["Harvard CS50x", "Machine Learning", "Computer Vision", "Blockchain", "Research Skills", "Statistical Methods", "Java Programming", "Quantum Physics"].map((course) => (
            <Card key={course} className="hover:border-primary/50 transition-fast">
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
      <Section>
        <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
          <CardContent className="pt-12 pb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm open to summer 2026 internships, collaborations, and interesting projects. Let's connect!
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
