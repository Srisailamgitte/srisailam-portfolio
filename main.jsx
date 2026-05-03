import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div>
      <header>
        <h1>Srisailam Gitte</h1>
        <p>Business Analyst | Functional Tester | QA Analyst</p>
        <p>SQL • UAT • Regression Testing • Tosca • Tableau • Power BI</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          Business Analyst / Functional Tester with 4+ years of experience in
          change requests, support tickets, functional testing, smoke testing,
          regression testing, SIT, UAT, SQL backend validation, and defect
          tracking across government financial and healthcare systems.
        </p>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <div className="grid">
          <div>Functional Testing</div>
          <div>Regression Testing</div>
          <div>UAT</div>
          <div>Tricentis Tosca</div>
          <div>Oracle SQL Developer</div>
          <div>Jira / ServiceNow</div>
          <div>Tableau / Power BI</div>
          <div>PeopleSoft / PayServ</div>
        </div>
      </section>

      <section>
        <h2>Experience</h2>
        <h3>Office of the New York State Comptroller</h3>
        <p>
          Worked on change requests and support tickets, executed smoke,
          regression, SIT, and UAT testing, validated payroll and financial data
          using SQL, and tracked defects through resolution.
        </p>

        <h3>New York State Office of General Services</h3>
        <p>
          Performed functional testing, SQL validation, Tableau/Power BI report
          validation, data reconciliation, and defect documentation for contract
          and financial systems.
        </p>

        <h3>Tata Consultancy Services / UnitedHealth Group</h3>
        <p>
          Tested Medicaid and Medicare eligibility workflows, benefit
          calculations, APIs, UAT scenarios, and backend data accuracy.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="project">
          <h3>Payroll Data Validation Testing</h3>
          <p>SQL-based validation between UI and backend payroll/financial systems.</p>
        </div>
        <div className="project">
          <h3>Healthcare Eligibility Testing</h3>
          <p>End-to-end testing of Medicaid/Medicare eligibility workflows.</p>
        </div>
        <div className="project">
          <h3>Tosca Regression Automation</h3>
          <p>Automated regression testing to improve coverage and reduce manual effort.</p>
        </div>
        <div className="project">
          <h3>Dashboard QA Validation</h3>
          <p>Validated Tableau and Power BI reports using SQL backend checks.</p>
        </div>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: srisailamgitte@gmail.com</p>
        <p>Phone: (518) 844-5177</p>
      </section>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);