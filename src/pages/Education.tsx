import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Section from "@/components/Common/Section";
import PageHeader from "@/components/Common/PageHeader";
import TechBadge from "@/components/Common/TechBadge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const cmsCourses = {
    systems: ["Data Structures", "Computer Systems", "Database Management"],
    aiml: ["Machine Learning", "Artificial Intelligence", "Computer Vision"],
    web: ["Web Application Development", "Software Development"],
    other: ["Technical Writing", "Organizational Design"],
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Section>
        <PageHeader
          title="Education"
          subtitle="Academic background and relevant coursework"
        />

        {/* Carnegie Mellon University */}
        <Card className="mb-8 border-primary/30 shadow-md animate-fade-up">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">Carnegie Mellon University</CardTitle>
                <CardDescription className="text-base">
                  Bachelor of Science in Information Systems
                </CardDescription>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                  <span>Pittsburgh, PA</span>
                  <span>•</span>
                  <span>Expected May 2028</span>
                  <span>•</span>
                  <span className="font-medium text-foreground">GPA: 3.25</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Pursuing a comprehensive education in information systems with a focus on software
              development, web technologies, and AI-driven solutions. The program combines
              technical computer science skills with business strategy and systems thinking.
            </p>

            {/* Relevant Coursework */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Relevant Coursework
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-sm text-primary mb-2">Systems & Data</h4>
                    <div className="flex flex-wrap gap-2">
                      {cmsCourses.systems.map((course) => (
                        <TechBadge key={course}>{course}</TechBadge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-primary mb-2">AI & Machine Learning</h4>
                    <div className="flex flex-wrap gap-2">
                      {cmsCourses.aiml.map((course) => (
                        <TechBadge key={course}>{course}</TechBadge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-primary mb-2">Web Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {cmsCourses.web.map((course) => (
                        <TechBadge key={course}>{course}</TechBadge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-primary mb-2">Communication & Design</h4>
                    <div className="flex flex-wrap gap-2">
                      {cmsCourses.other.map((course) => (
                        <TechBadge key={course}>{course}</TechBadge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Robert College */}
        <Card className="mb-8 animate-fade-up">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <GraduationCap className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">Robert College</CardTitle>
                <CardDescription className="text-base">High School Diploma</CardDescription>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                  <span>Istanbul, Turkey</span>
                  <span>•</span>
                  <span>Graduated June 2024</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Completed rigorous college-preparatory curriculum with focus on STEM subjects,
              leadership, and extracurricular excellence.
            </p>
          </CardContent>
        </Card>

        {/* Honors & Test Scores */}
        <Card className="animate-fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              Honors & Standardized Tests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">AP Scores</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Computer Science A</span>
                    <TechBadge variant="outline">5</TechBadge>
                  </div>
                  <div className="flex justify-between">
                    <span>Calculus BC</span>
                    <TechBadge variant="outline">5</TechBadge>
                  </div>
                  <div className="flex justify-between">
                    <span>Physics C: Mechanics</span>
                    <TechBadge variant="outline">5</TechBadge>
                  </div>
                  <div className="flex justify-between">
                    <span>Physics C: E&M</span>
                    <TechBadge variant="outline">5</TechBadge>
                  </div>
                  <div className="flex justify-between">
                    <span>Chemistry</span>
                    <TechBadge variant="outline">5</TechBadge>
                  </div>
                  <div className="flex justify-between">
                    <span>Macro & Microeconomics</span>
                    <TechBadge variant="outline">5</TechBadge>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Standardized Tests</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium mb-1">SAT</p>
                    <p className="text-muted-foreground">1530 (R&W: 740, Math: 790)</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">TOEFL</p>
                    <p className="text-muted-foreground">109 (L: 25, R: 30, W: 25, S: 29)</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Languages</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <TechBadge>Turkish (Native)</TechBadge>
                      <TechBadge>English (C1)</TechBadge>
                      <TechBadge>German (B1)</TechBadge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
};

export default Education;
