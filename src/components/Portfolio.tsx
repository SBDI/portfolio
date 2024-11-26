const Portfolio = () => {
  const projects = [
  {
    title: "Predictive Analytics for Gold Recovery",
    description: "Developed machine learning models to optimize gold recovery processes, achieving a 2-point efficiency increase and a $3M production gain.",
    image: "https://images.unsplash.com/photo-1581091870621-1a580fe5e5ea?w=500",
    tags: ["Python", "Scikit-learn", "Tableau", "SQL"],
  },
  {
    title: "Geo-Metallurgical Predictive Model",
    description: "Created a predictive model to assist mine planning by analyzing key geo-metallurgical factors for resource allocation.",
    image: "https://images.unsplash.com/photo-1517960413843-0aee8e2d14e2?w=500",
    tags: ["Python", "Scikit-learn", "Data Analytics"],
  },
  {
    title: "Automated Email Categorization",
    description: "Built a Python-based machine learning solution to automate email data extraction and categorization, increasing operational efficiency by 25%.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500",
    tags: ["Python", "Flask", "NLP", "Azure"],
  },
  {
    title: "Reporting System for Decision Support",
    description: "Designed and implemented a reporting system using Power BI and SQL to support data-driven decision-making processes.",
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500",
    tags: ["Power BI", "SQL", "Data Visualization"],
  },
  {
    title: "Fruit Maturity Estimation",
    description: "Developed a computer vision model using TensorFlow to estimate fruit maturity stages, deployed on desktop and mobile applications.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500",
    tags: ["TensorFlow", "Keras", "OpenCV", "Python"],
  },
];


  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/60 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary rounded-full text-sm text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
