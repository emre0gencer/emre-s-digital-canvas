import { useState, useEffect, useRef } from "react";
import { skills } from "@/data/skills";

interface SkillItem {
  name: string;
  proficiency: number;
  category: string;
}

const SkillGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const animationRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Flatten skills from all categories
  const allSkills: SkillItem[] = [];
  skills.forEach((skillCategory) => {
    skillCategory.skills.forEach((skill) => {
      allSkills.push({
        name: skill,
        proficiency: Math.random() * 0.5 + 0.5, // 0.5-1.0
        category: skillCategory.category,
      });
    });
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const rect = canvas.parentElement?.getBoundingClientRect();
    const isMobile = window.innerWidth < 768;

    canvas.width = isMobile ? 300 : 400;
    canvas.height = isMobile ? 300 : 400;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 2 - 40;

    // Handle mouse movement for interactivity
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / rect.width;
      mouseRef.current.y = (e.clientY - rect.top) / rect.height;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      animationRef.current += 0.002;

      // Clear canvas
      ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines between skills
      ctx.strokeStyle = "rgba(220, 90%, 55%, 0.05)";
      ctx.lineWidth = 1;

      // Draw skills as rotating nodes
      allSkills.forEach((skill, index) => {
        const angle = (index / allSkills.length) * Math.PI * 2 + animationRef.current;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        // Calculate distance from mouse for hover effect
        const dx = x - mouseRef.current.x * canvas.width;
        const dy = y - mouseRef.current.y * canvas.height;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const isNearMouse = distance < 60;

        // Draw node
        const size = isNearMouse ? 8 : 4 + skill.proficiency * 3;
        const opacity = isNearMouse ? 1 : 0.6;

        ctx.fillStyle = `rgba(220, 90%, 55%, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect on hover
        if (isNearMouse) {
          ctx.strokeStyle = "rgba(220, 90%, 55%, 0.3)";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(x, y, size + 6, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Connect nearby skills
        allSkills.forEach((otherSkill, otherIndex) => {
          if (otherIndex <= index) return;

          const otherAngle =
            (otherIndex / allSkills.length) * Math.PI * 2 + animationRef.current;
          const otherX = centerX + Math.cos(otherAngle) * radius;
          const otherY = centerY + Math.sin(otherAngle) * radius;

          const dist = Math.sqrt(Math.pow(x - otherX, 2) + Math.pow(y - otherY, 2));
          if (dist < 100) {
            ctx.strokeStyle = `rgba(220, 90%, 55%, ${0.05 * (1 - dist / 100)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(otherX, otherY);
            ctx.stroke();
          }
        });
      });

      // Draw central rotating circle
      ctx.strokeStyle = "rgba(190, 85%, 50%, 0.2)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.6, 0, Math.PI * 2);
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Count skills by category for legend
  const categoryCounts = skills.map((category) => ({
    category: category.category,
    count: category.skills.length,
  }));

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative">
        <canvas
          ref={canvasRef}
          className="w-full h-auto max-w-sm border border-primary/20 rounded-full bg-gradient-to-br from-background via-background to-primary/5 shadow-lg"
        />
        <div className="absolute inset-0 rounded-full pointer-events-none shadow-inner"></div>
      </div>

      {/* Skill Category Legend */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-md">
        {categoryCounts.map((item) => (
          <div
            key={item.category}
            className="p-3 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-smooth text-center"
          >
            <p className="font-semibold text-sm text-primary">{item.count}</p>
            <p className="text-xs text-muted-foreground capitalize">{item.category}</p>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-center text-sm text-muted-foreground max-w-md">
        <span className="font-semibold text-foreground">{allSkills.length} skills</span> across{" "}
        <span className="font-semibold text-foreground">{skills.length} categories</span>
        . Hover to interact with the globe.
      </p>
    </div>
  );
};

export default SkillGlobe;
