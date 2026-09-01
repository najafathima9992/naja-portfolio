import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Cloud,
  Server,
  Container,
  Workflow,
  ShieldCheck,
  Terminal,
  Database,
  Activity,
  Users,
  Eye
} from "lucide-react";

import "./styles.css";


// ===============================
// SKILLS
// ===============================

const skills =[
    {
        name : "AWS",
        icon : Cloud,
        description: "EC2, VPC, Load Balancing, Auto Scaling, EBS, RDS, S3, IAM, Lambda, EFS, Route 53, SNS, SQS, SES, Elastic Beanstalk, CloudWatch, EventBridge, CloudFront, API Gateway and DynamoDB "
    
    },
    {
        name: "Python",
        icon: Terminal,
        description:
            "Python programming, functions, OOP, file handling, exception handling and backend development."

    },
    {
        name: "Django",
        icon: Server,
        description:
            "Django applications using models, views, URLs, templates, forms and Django ORM."

    },
    {
        name:"SQL",
        icon: Database,
        description:
         "SQL queries, relational databases, CRUD operations, joins, filtering and database design."

    },
    {
         name: " REST API",
        icon: Workflow,
        description:
            "REST API development, HTTP methods, JSON, status codes, authentication and API integration."
    
    },
    {
        name: "Linux",
        icon: Terminal,
        description:
         "RHEL 9, Ubuntu, SELinux, SSH, firewalld, users, storage, processes and services."
    },
    {

    
      name: "IaC & Automation",
      icon: Workflow,
      description:
       "Terraform, Ansible, Bash and infrastructure automation."
    },
    {
        name: "Containers",
        icon: Container,
        description:
            "Docker, Docker Compose, Kubernetes and OpenShift."
    },
    {
         name: "CI/CD",
        icon: Activity,
        description:
            "Jenkins, Git, GitHub and automated deployment pipelines."
    },
    {
        name: "Security & Networking",
        icon: ShieldCheck,
        description:
            "IAM, Security Groups, SSH, SFTP, NFS, DNS, TCP/IP and firewalls."
    },
    {
         name: "Databases",
        icon: Database,
        description:
            "MySQL, MariaDB, RDS, DynamoDB and SQLite."
    },
    {
        name: "Monitoring",
        icon: Activity,
        description:
            "Amazon CloudWatch, Prometheus and Grafana."
    }

];

// ===============================
// PROJECTS
// ===============================

const projects = [
    {
        number: "01",

        title:
        "Highly Available & Scalable Web Application on AWS",

        icon: Cloud,

        tags: [
            "AWS",
            "EC2",
            "ALB",
            "Auto Scaling",
            "RDS",
            "VPC"
        ],

        points: [
            "Deployed a 3-tier Web application using EC2, ALB, Auto Scaling and RDS.",
             "Designed a secure VPC with public and private subnets, NAT Gateway and restricted access.",
             "Implemented CloudWatch monitoring and SNS alerts for automated notifications.",
             "Built a Lambda auto-healing solution for unhealthy EC2 instances."

        ]
    },
    {
        number: "02",

        title: "LEMP Stack Deployment Using Ansible",

        icon: Server,

        tags: [
            "Ansible",
            "Nginx",
            "MariaDB",
            "PHP",
            "SFTP",
            "SSL"
        ],
        points: [
             "Reduced LEMP stack setup from 3+ hours to under 5 minutes.",
             "Created 5 idempotent Ansible roles for nginx, mariadb, php, sftp and ssl.",
             "Hardened the server using OpenSSH SFTP, SELinux contexts and firewalld rules.",
             "Configured WordPress and phpMyAdmin entirely using Ansible."
        ]
    },
    {
        number: "03",

        title: "CI/CD Pipeline Automation with Jenkins",

        icon: Workflow,

        tags: [
            "Jenkins",
            "GitHub",
            "AWS EC2",
            "CI/CD"
        ],
        points: [
             "Built a Jenkins CI/CD pipeline integrated with GitHub and AWS EC2.",
             "Configured automated deployment when changes are pushed to GitHub."
        ]
    },
    {
        number: "04",

        title: "Weather Dashboard Web Application",

        icon: Activity,

        tags:[
            "Python",
            "Flask",
            "SQLite",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        points: [
              "Developed a weather forecasting web application using Flask.",
              "Integrated Open-Meteo API to fetch real-time weather information.",
              "Implemented city search functionality.",
              "Stored weather search history using SQLite.",
              "Designed a responsive user interface.",
              "Implemented API error handling and response validation."
        ]
    },
    {
        number: "05",
        title: "Serberless Quiz Application Deployment on AWS",
        icon: Cloud,

        tags: [
            "AWS",
            "Lambda",
            "API Gateway",
            "DynamoDB",
            "EC2"
        ],
        points: [
             "Built and deployed a quiz application on AWS.",
             "Integrated Lambda with API Gateway for quiz processing and backend communication.",
             "Stored user details and quiz results in DynamoDB."
             
        ]
    },
    {
       number: "06",

       title: "Highly Available AWS Infrastructure using Terraform",

       icon: Cloud,

       tags: [
        "Terraform",
        "AWS",
        "EC2",
        "VPC",
        "ALB",
        "RDS",
        "Auto Scaling"
      ],

      points: [
         "Designed a highly available Multi-AZ AWS infrastructure using Terraform.",
         "Created modular VPC, EC2, ALB, and RDS infrastructure.",
         "Implemented ALB with EC2 Auto Scaling for scalability.",
         "Deployed RDS MySQL in private subnets.",
         "Configured security groups, IAM roles, and NAT Gateway.",
         "Automated infrastructure provisioning using Terraform."
        ]
    },
    {
     number: "07",

     title: "Student Management System",

     icon: Users,

     tags: [
       "Python",
       "Flask",
       "SQLite",
       "HTML",
       "Bootstrap",
       "Jinja2"
     ],

     points: [
       "Developed a full-stack student management application using Flask.",
       "Implemented CRUD operations for student records.",
       "Added student search and form validation functionality.",
       "Integrated SQLite for persistent data storage.",
      "Designed a responsive UI using Bootstrap and Jinja2."
     ]   
    },
    {
        number: "08",

       title: "Drowsiness and Yawn Detection System",

       icon: Eye,

       tags: [
         "Python",
         "OpenCV",
         "dlib",
         "Numpy"
        ],

        points: [
          "Developed a real-time driver drowsiness and yawn detection system using Python.",
          "Implemented facial landmark detection using OpenCV and dlib.",
          "Calculated Eye Aspect Ratio (EAR) to detect prolonged eye closure.",
          "Implemented mouth/lip distance analysis to detect yawning.",
          "Integrated text-to-speech alerts to warn drivers during drowsiness.",
          "Developed a web-based interface for real-time monitoring."
        ]
    }


];


// ===============================
// NAVIGATION
// ===============================

const navigation = [
  "about",
  "skills",
  "projects",
  "experience",
  "contact"
];


// ===============================
// APP
// ===============================

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          NFP<span>.</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`nav-links ${
            menuOpen ? "nav-open" : ""
          }`}
        >
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </div>

      </nav>


      <main>

        {/* ================= HERO ================= */}

        <section
          id="home"
          className="hero"
        >

          <div className="hero-content">

            <p className="eyebrow">
              JUNIOR DEVOPS ENGINEER
            </p>

            <h1>
              Building reliable
              <br />
              <span>cloud infrastructure.</span>
            </h1>

            <p className="hero-description">
              I'm Naja Fathima P.T., a Computer Science graduate
              with hands-on experience in Python, SQL, REST API, AWS, Linux administration,
              infrastructure automation, CI/CD and container
              orchestration.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="button primary-button"
              >
                View Projects
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#contact"
                className="button secondary-button"
              >
                Let's Connect
              </a>

            </div>

          </div>


          {/* TERMINAL */}

          <div className="terminal">

            <div className="terminal-header">

              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>~/naja</p>

            </div>


            <pre>
{`$ whoami
naja-fathima

$ focus
aws • linux • devops • python

$ toolkit
python
sql
terraform
ansible
docker
kubernetes
jenkins

$ status
ready_to_build`}
            </pre>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section split-section"
        >

          <div>

            <p className="eyebrow">
              01 / ABOUT
            </p>

            <h2>
              From Linux servers
              <br />
              to cloud systems.
            </h2>

          </div>


          <div className="about-content">

            <p>
              I'm a BSc Computer Science graduate with a
              CGPA of 7.3, focused on Python, cloud infrastructure
              and DevOps engineering.
            </p>

            <p>
              During my Cloud & DevOps internship, I worked
              with AWS EC2 and RHEL 9, Linux administration,
              Docker, Docker Compose and AWS resource
              provisioning.
            </p>

            <p>
              I also gained hands-on exposure to Kubernetes,
              OpenShift, Ansible, Jenkins and Terraform.
            </p>


            <div className="stats">

              <div className="stat">
                <strong>10+</strong>

                <span>
                  AWS EC2 instances provisioned
                  and hardened
                </span>
              </div>


              <div className="stat">
                <strong>50+</strong>

                <span>
                  Users supported on RHEL 9 servers
                </span>
              </div>


              <div className="stat">
                <strong>50%</strong>

                <span>
                  Faster environment setup
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section"
        >

          <p className="eyebrow">
            02 / TOOLKIT
          </p>

          <h2>
            Technologies I work with.
          </h2>


          <div className="skills-grid">

            {skills.map(
              ({ name, icon: Icon, description }) => (

                <article
                  className="skill-card"
                  key={name}
                >

                  <Icon
                    size={25}
                    className="skill-icon"
                  />

                  <h3>
                    {name}
                  </h3>

                  <p>
                    {description}
                  </p>

                </article>

              )
            )}

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="section"
        >

          <div className="section-heading">

            <div>

              <p className="eyebrow">
                03 / PROJECTS
              </p>

              <h2>
                Selected work.
              </h2>

            </div>

            <span className="project-count">
              05 PROJECTS
            </span>

          </div>


          <div className="projects-grid">

            {projects.map(
              ({
                number,
                title,
                icon: Icon,
                tags,
                points
              }) => (

                <article
                  className="project-card"
                  key={title}
                >

                  <div className="project-top">

                    <span>
                      {number}
                    </span>

                    <Icon size={25} />

                  </div>


                  <h3>
                    {title}
                  </h3>


                  <div className="tags">

                    {tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>


                  <ul>

                    {points.map((point) => (
                      <li key={point}>
                        {point}
                      </li>
                    ))}

                  </ul>

                </article>

              )
            )}

          </div>

        </section>


        {/* ================= EXPERIENCE ================= */}

        <section
          id="experience"
          className="section split-section experience-section"
        >

          <div>

            <p className="eyebrow">
              04 / EXPERIENCE
            </p>

            <h2>
              Cloud & DevOps
              <br />
              Intern.
            </h2>

          </div>


          <div>

            <div className="role-header">

              <div>

                <h3>
                  ipsr solutions ltd
                </h3>

                <span>
                  Kochi, Kerala
                </span>

              </div>


              <strong>
                2025 — 2026
              </strong>

            </div>


            <ul className="experience-list">

              <li>
                Provisioned and hardened 10+ AWS EC2
                instances running RHEL 9 using IAM
                least-privilege access, security groups
                and SSH controls.
              </li>

              <li>
                Administered RHEL 9 production servers
                for 50+ users, managing user accounts,
                firewalld and SELinux.
              </li>

              <li>
                Containerized 3 web applications using
                Docker and Docker Compose.
              </li>

              <li>
                Automated AWS resource provisioning
                across EC2, IAM, S3 and VPC.
              </li>

              <li>
                Supported DNS, NFS, firewall rules,
                storage, packages, processes and
                services on Linux systems.
              </li>

            </ul>

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="contact-section"
        >

          <p className="eyebrow">
            05 / CONTACT
          </p>

          <h2>
            Have a project or
            <br />
            <span>opportunity?</span>
          </h2>

          <p className="contact-description">
            I'm open to junior DevOps, cloud and
            Python opportunities.
          </p>


          <div className="contact-buttons">

            <a
              href="mailto:najafathimapt123@gmail.com"
              className="button primary-button"
            >
              <Mail size={17} />
              Email Me
            </a>


            {/* Replace # with your LinkedIn URL */}

            <a
              href="https://www.linkedin.com/in/naja-fathima-944ab12a6"
              className="social-button"
              aria-label="LinkedIn"
            >
              <Linkedin size={21} />
            </a>


            {/* Replace # with your GitHub URL */}

            <a
              href="https://github.com/najafathima9992"
              className="social-button"
              aria-label="GitHub"
            >
              <Github size={21} />
            </a>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <span>
          © 2026 Naja Fathima P.T.
        </span>

        <span>
          Built with React
        </span>

      </footer>

    </div>
  );
}


createRoot(
  document.getElementById("root")
).render(
  <App />
);