import { Beaker, ChartBar, Cloud, Code, Database, GitBranch, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Database className="h-6 w-6" />,
      name: "Data Management & SQL",
      description: "Proficient in querying and managing large datasets using SQL and relational databases.",
    },
    {
      icon: <ChartBar className="h-6 w-6" />,
      name: "Data Visualization",
      description: "Skilled in creating impactful visualizations using Power BI, Tableau, and Matplotlib.",
    },
    {
      icon: <Beaker className="h-6 w-6" />,
      name: "Machine Learning & AI",
      description: "Experienced in building predictive models and deploying AI solutions with Scikit-learn and TensorFlow.",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      name: "Cloud Computing",
      description: "Leveraging cloud platforms like Azure for deploying scalable data science solutions.",
    },
  ];  

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-foreground/80">
           I am a seasoned data scientist with a proven track record of unraveling complex and challenging topics through the lens of data. 
            With 3+ years of hands-on experience in the field, I thrive on leveraging the power of data to drive informed decision-making. 
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-foreground/60">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
