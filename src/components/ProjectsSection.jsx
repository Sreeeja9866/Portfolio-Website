import { ArrowRight, ExternalLink, Github } from "lucide-react";
import cryptoImg from "../assets/crypto.png";
import Bud from "../assets/Bud.png";
import coding from "../assets/coding.png"; 
import candy from "../assets/candy.png"; // Ensure this image exists or update the path
const projects = [
  {
    id: 0,
    title: "Cryptocurrency Price Tracker",
    description:
      "A real-time cryptocurrency tracker using Next.js and CoinGecko API. It displays live market data, categories, exchanges, and trends.",
    image: cryptoImg,
    tags: ["Next.js", "TailwindCSS", "CoinGecko API"],
    demoUrl: "https://crypto-price-tracker-ruby-eight.vercel.app/",
    githubUrl: "https://github.com/Sreeeja9866/CryptoPrice-Tracker",
  },
  {
    id: 1,
    title: "BudgetPal – Personal Finance Manager",
    description:
      "A Flask-based personal finance and savings goal tracker with expense, income, forecasting, and recurring transaction features.",
    image: Bud,
    tags: ["Flask", "SQLite", "Bootstrap", "Render"],
    demoUrl: "https://budgetpal-1-eacz.onrender.com",
    githubUrl: "https://github.com/Sreeeja9866/Budgetpal",
  },
  {
    id: 2,
    title: "VocabVault – Interactive Dictionary App",
    description:
      "A responsive dictionary web app that lets users search definitions, hear pronunciations, bookmark words, and get daily motivational quotes with a sleek UI.",
    image: coding, // Ensure this image exists or update the path
    tags: ["JavaScript", "Bootstrap 5", "HTML", "CSS", "jQuery", "Vercel"],
    demoUrl: "https://vocabvault-peach.vercel.app",
    githubUrl: "https://github.com/Sreeeja9866/vocab-vault",
  },

  {
    id: 3,
    title: "Candy Crush Clone",
    description:
      "A browser-based match-3 game inspired by Candy Crush, featuring drag-and-drop, real-time score updates, and a dynamic game loop built in pure JavaScript.",
    image: candy, // Replace with actual image path in your assets folder
    tags: ["JavaScript", "HTML", "CSS", "Vanilla JS", "Game Logic"],
    demoUrl: "https://candy-crush-ochre-beta.vercel.app/", // replace with actual live link if hosted
    githubUrl: "https://github.com/Sreeeja9866/candy-crush-clone",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      rel="noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      rel="noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Sreeeja9866"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
