const LINKEDIN = "https://www.linkedin.com/in/philipp-r-353944216/";
const EMAIL = "philipp.rassele@outlook.de";

const nav = ["About", "Experience", "Skills", "Certifications", "Education", "Contact"];

const experience = [
  {
    title: "Developer", when: "Dec 2022 – today", org: "Konverto LAB department · KONVERTO, Bolzano",
    text: "Developer in the Konverto LAB department, working on data science, machine learning and AI projects, along with other software projects.",
    tags: ["Azure", "Databricks", "MLflow", "Python", "AI models", "ML algorithms", "React", "React Native", "Expo", "Vue", "CI/CD", "Power BI"],
  },
  {
    title: "Junior IT Consultant", when: "Nov 2021 – Oct 2022", org: "Raiffeisenverband Südtirol · Bolzano",
    text: "Supported the digitalisation of the Raiffeisen association (IT RVS 4.0) and the further development of its internal business intelligence strategy.",
  },
  {
    title: "Intern", when: "Summers 2013 – 2017", org: "TechnoAlpin AG · Bolzano",
    text: "Installed computers for snowmaking systems and configured the ATASS / ATASS Plus control software.",
  },
  {
    title: "School internship", when: "Jun 2014", org: "TIS Innovation Park · Bolzano",
    text: "Built a small web project with AngularJS, Ajax, HTML, CSS and JavaScript.",
  },
];

const skills = [
  ["Data & ML", ["Python", "Pandas", "SciPy", "R", "MLflow", "Spark ML", "Machine Learning", "MLOps"]],
  ["Data Platforms", ["Databricks", "Apache Spark", "Azure", "Unity Catalog", "Hadoop", "SQL"]],
  ["BI & Visualisation", ["Power BI", "Databricks AI/BI", "Plotly", "Visual Analytics"]],
  ["Web & Software", ["JavaScript", "React", "React Native", "Expo", "Vue", "Node.js", "PHP", "Java", "C#", "Bash"]],
  ["DevOps", ["CI/CD pipelines", "GitLab", "Databricks Asset Bundles"]],
  ["Modelling", ["BPMN", "ORM", "UML", "OWL / Semantic Web"]],
];

const certs = [
  { badge: "Microsoft · Nov 2025", title: "Azure Data Scientist Associate" },
  { badge: "Microsoft · Feb 2025", title: "Azure Data Engineer Associate" },
  { badge: "Microsoft · Aug 2023", title: "Azure Fundamentals" },
  { badge: "Microsoft · Aug 2022", title: "Power BI Data Analyst Associate" },
  {
    badge: "Databricks Training · 2026", title: "Advanced Machine Learning Operations",
    url: "https://www.databricks.com/training/catalog/advanced-machine-learning-operations-3508",
    text: "Production MLOps on Databricks: CI/CD with Declarative Automation Bundles, Lakeflow Jobs, Model Serving, A/B rollouts, monitoring and drift detection.",
  },
  {
    badge: "Databricks Training · 2026", title: "AI/BI for Data Analysts",
    url: "https://www.databricks.com/training/catalog/aibi-for-data-analysts-3707",
    text: "Building and publishing AI/BI dashboards and Genie spaces on Unity Catalog data, with scheduling and permissions.",
  },
];

const education = [
  {
    title: "M.Sc. Computational Data Science", when: "2018 – 2021", org: "Free University of Bozen-Bolzano · 103/110",
    thesis: "Visual Analysis of Health and Disease Data in the CHRIS Study",
  },
  {
    title: "B.Sc. Computer Science and Engineering", when: "2015 – 2018", org: "Free University of Bozen-Bolzano · 93/110",
    thesis: "A website for evaluating and managing topic models",
  },
  { title: "Technical high school diploma (Matura)", when: "2009 – 2015", org: "TFO Max Valier · Bolzano" },
];

// Content is static, so plain .map() is enough; no reactive <For> needed.
const Tags = (props) => <ul class="tags">{props.items.map((t) => <li>{t}</li>)}</ul>;
const Ext = (props) => <a class={props.class} href={props.href} target="_blank" rel="noopener">{props.children}</a>;

const Entry = (props) => (
  <article class="item">
    <div class="head"><h3>{props.title}</h3><span class="when">{props.when}</span></div>
    <div class="org">{props.org}</div>
    {props.children}
  </article>
);

const Section = (props) => (
  <section id={props.id}>
    <div class="wrap">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  </section>
);

export default function App() {
  return (
    <>
      <nav>
        <div class="wrap">
          <a class="brand" href="#top">Philipp Rassele</a>
          <ul>{nav.map((n) => <li><a href={`#${n.toLowerCase()}`}>{n}</a></li>)}</ul>
        </div>
      </nav>

      <main id="top">
        <header class="hero">
          <div class="wrap">
            <div class="eyebrow">Data Science · Machine Learning · Analytics</div>
            <h1>Hi, I'm Philipp.<br />I turn data into useful products.</h1>
            <p class="lead">
              I'm a developer in the Konverto LAB department at Konverto in Bolzano, South Tyrol. I build data science, machine learning
              and AI solutions on Azure and Databricks, from the data pipeline through the model to the dashboard
              or web app people actually use.
            </p>
            <div class="btns">
              <a class="btn primary" href="#contact">Get in touch</a>
              <Ext class="btn" href={LINKEDIN}>LinkedIn</Ext>
            </div>
          </div>
        </header>

        <Section id="about" title="About me">
          <p>
            I hold a Master's degree in <strong>Computational Data Science</strong> and a Bachelor's in{" "}
            <strong>Computer Science and Engineering</strong>, both from the Free University of Bozen-Bolzano.
            My Master's thesis was about <em>visual analytics for health and disease data</em> in the CHRIS study.
            I built an interactive system that helps scientists explore large, complex biomedical datasets,
            with the analyst kept in the loop.
          </p>
          <p>
            Since then I've worked on both the business and the engineering side. At the Raiffeisenverband Südtirol I
            supported the digitalisation programme and the business intelligence strategy. At Konverto I build
            ML models, MLOps pipelines with MLflow and CI/CD, Power BI reports, React/Vue front-ends and mobile apps with React Native and Expo.
          </p>
          <p>
            I like to work on my own and in an organised way, and I enjoy making complex information
            easy to understand. I speak German natively, plus fluent English and good Italian.
          </p>
        </Section>

        <Section id="experience" title="Experience">
          <div class="timeline">
            {experience.map((e) => (
              <Entry {...e}>
                <p>{e.text}</p>
                {e.tags && <Tags items={e.tags} />}
              </Entry>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div class="skills">
            {skills.map(([name, items]) => (
              <div class="item"><h3>{name}</h3><Tags items={items} /></div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications & Training">
          <div class="certs">
            {certs.map((c) => (
              <div class="item">
                <div class="badge">{c.badge}</div>
                <h3>{c.url ? <Ext href={c.url}>{c.title}</Ext> : c.title}</h3>
                {c.text && <p class="muted">{c.text}</p>}
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div class="timeline">
            {education.map((e) => (
              <Entry {...e}>{e.thesis && <p>Thesis: <em>{e.thesis}</em></p>}</Entry>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p>Want to talk about a data, ML or analytics project? I'd be happy to hear from you.</p>
          <div class="btns">
            <a class="btn primary" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <Ext class="btn" href={LINKEDIN}>LinkedIn</Ext>
            <Ext class="btn" href="https://github.com/Philipp-Rassele">GitHub</Ext>
          </div>
        </Section>
      </main>

      <footer>
        <div class="wrap">© {new Date().getFullYear()} Philipp Rassele · South Tyrol, Italy</div>
      </footer>
    </>
  );
}
