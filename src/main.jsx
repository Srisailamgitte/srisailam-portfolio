import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="page">
      <nav>
        <h2>Srisailam Gitte</h2>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="tag">Business Analyst • QA Functional Tester</p>
        <h1>Hi, I’m Srisailam Gitte</h1>
        <p className="heroText">
          I help teams deliver stable, high-quality systems through functional testing,
          UAT, regression testing, SQL backend validation, defect tracking, and
          test automation using Tosca.
        </p>
        <div className="buttons">
          <a href="#projects">View Projects</a>
          <a href="mailto:srisailamgitte@gmail.com">Contact Me</a>
        </div>
      </section>

      <section id="about" className="card">
        <h2>About Me</h2>
        <p>
          I am a Business Analyst / Functional Tester with 4+ years of experience
          working across government financial systems, healthcare systems, payroll,
          Medicaid, Medicare, and enterprise applications. I work on change requests,
          support tickets, smoke testing, regression testing, SIT, UAT, SQL validation,
          defect analysis, and release support.
        </p>
      </section>

      <section id="skills" className="card">
        <h2>Technical Skills</h2>
        <div className="skills">
          <span>Functional Testing</span>
          <span>Regression Testing</span>
          <span>Smoke Testing</span>
          <span>SIT / UAT</span>
          <span>Tricentis Tosca</span>
          <span>Oracle SQL Developer</span>
          <span>SQL Server</span>
          <span>PostgreSQL</span>
          <span>Jira</span>
          <span>ServiceNow</span>
          <span>IBM Rational Jazz</span>
          <span>Postman</span>
          <span>Tableau</span>
          <span>Power BI</span>
          <span>Excel / Power Query</span>
          <span>PeopleSoft / PayServ</span>
        </div>
      </section>

      <section id="experience" className="card">
        <h2>Experience</h2>

        <div className="job">
          <h3>Office of the New York State Comptroller</h3>
          <p className="role">Business Analyst | Albany, NY</p>
          <p>
            Worked on change requests and support tickets across customer, internal,
            and partner portals. Executed smoke, regression, SIT, and UAT testing
            across INTU, UAT, Lower, and Higher environments. Validated payroll and
            financial data using Oracle SQL Developer and tracked PIRs through resolution.
          </p>
        </div>

        <div className="job">
          <h3>New York State Office of General Services</h3>
          <p className="role">QA Analyst | Albany, NY</p>
          <p>
            Performed functional testing, SQL validation, data reconciliation, report
            validation, and defect documentation for contract and financial systems.
            Validated Tableau and Power BI reports against backend data.
          </p>
        </div>

        <div className="job">
          <h3>Tata Consultancy Services / UnitedHealth Group</h3>
          <p className="role">Functional Tester | Hyderabad, India</p>
          <p>
            Tested Medicaid and Medicare eligibility workflows, benefit calculations,
            API integrations, backend data accuracy, UAT scenarios, and compliance-driven
            healthcare workflows.
          </p>
        </div>
      </section>

      <section id="projects" className="card">
        <h2>Projects</h2>

        <div className="projectGrid">
          <div className="project">
            <h3>Payroll Data Validation Testing</h3>
            <p>
              Built SQL validation checks to compare frontend payroll values with backend
              data and identify mismatches in payment and eligibility records.
            </p>
            <p className="tools">SQL • Oracle SQL Developer • Excel</p>
          </div>

          <div className="project">
            <h3>Healthcare Eligibility Testing</h3>
            <p>
              Designed test scenarios for Medicaid and Medicare eligibility workflows,
              including income rules, approvals, denials, recertification, and case closure.
            </p>
            <p className="tools">SQL • Jira • Postman • UAT</p>
          </div>

          <div className="project">
            <h3>Tosca Regression Automation</h3>
            <p>
              Created and maintained regression test scripts to reduce repetitive manual
              testing and improve test coverage for release validation.
            </p>
            <p className="tools">Tricentis Tosca • Regression Testing</p>
          </div>

          <div className="project">
            <h3>Dashboard QA Validation</h3>
            <p>
              Validated Tableau and Power BI dashboards by comparing report outputs with
              backend SQL results and business rules.
            </p>
            <p className="tools">Power BI • Tableau • SQL</p>
          </div>
        </div>
      </section>

      <section id="contact" className="card contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:srisailamgitte@gmail.com">srisailamgitte@gmail.com</a></p>
        <p>Phone: (518) 844-5177</p>
        <p>Location: Albany, NY</p>
      </section>

      <footer>
        <p>© 2026 Srisailam Gitte. Built with React and deployed on Vercel.</p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
