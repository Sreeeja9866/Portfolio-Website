import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Web Developer | Backend Specialist | Cloud & DevOps
              Enthusiast
            </h3>

            <p className="text-muted-foreground">
              With over 3 years of experience in full-stack development, I
              specialize in building high-performance, scalable applications
              using Java, Spring Boot, Next.js, TypeScript, Node.js, and modern
              DevOps tools. I’ve contributed to both startup and
              enterprise-level projects — implementing backend microservices,
              designing REST APIs, setting up CI/CD pipelines, and building
              dynamic frontend UIs.
            </p>

            <p className="text-muted-foreground">
              I’m passionate about writing clean, maintainable code and
              constantly exploring new frameworks and technologies to improve
              product reliability and user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive, secure, and scalable web applications
                    using full-stack technologies like Java, Spring Boot,
                    Node.js, and PostgreSQL.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Frontend Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    Creating fast, accessible UIs with React, Next.js, and
                    TypeScript—focused on modern design systems and performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    End-to-end application development combining backend
                    services, API integrations, frontend UI, and database
                    management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
