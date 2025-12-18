import { useState } from "react";
import { Button } from "@/components/ui/button";
import Section from "@/components/Common/Section";
import PageHeader from "@/components/Common/PageHeader";
import CourseCard from "@/components/Courses/CourseCard";
import { courses } from "@/data/courses";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Define 5 main categories that best distinguish courses
  const mainCategories = [
    "All",
    "Programming",
    "AI & Machine Learning",
    "Data Science",
    "Distributed Systems",
    "Research Methods"
  ];

  // Map courses to main categories
  const getCourseMainCategory = (course: typeof courses[0]): string[] => {
    const categoryMap: { [key: string]: string } = {
      "cs50": "Programming",
      "ml-course": "AI & Machine Learning",
      "cv-course": "AI & Machine Learning",
      "blockchain": "Distributed Systems",
      "whisper-hackathon": "AI & Machine Learning",
      "research-skills": "Research Methods",
      "stats": "Data Science",
      "java-duke": "Programming",
      "mechanics": "Research Methods",
    };
    return [categoryMap[course.id]];
  };

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => getCourseMainCategory(course).includes(selectedCategory));

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Section>
        <PageHeader
          title="Courses & Certificates"
          subtitle="Continuous learning through online courses and certifications"
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {mainCategories.map((category) => (
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

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in items-stretch">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              provider={course.provider}
              date={course.date}
              description={course.description}
              categories={course.categories}
              certified={course.certified}
              certificateUrl={course.certificateUrl}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No courses found in this category.</p>
          </div>
        )}
      </Section>
    </div>
  );
};

export default Courses;
