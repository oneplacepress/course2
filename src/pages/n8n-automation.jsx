import React from "react";
import { Link } from "gatsby";

const PageLayout = ({ title, children }) => (
  <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
    <header style={{ marginBottom: "20px" }}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
    <h1>{title}</h1>
    {children}
  </div>
);

const N8nAutomation = () => {
  return (
    <PageLayout title="n8n Automation">
      <p>
        Unlock the full potential of your business with our n8n automation
        course. Learn how to connect your apps and services to create powerful
        workflows that will save you time and money.
      </p>
      <h2>What You'll Learn</h2>
      <ul>
        <li>
          <b>Workflow Automation:</b> Learn how to automate your business
          processes with n8n. We'll cover everything from basic workflows to
          advanced topics like error handling and conditional logic.
        </li>
        <li>
          <b>App Integration:</b> Discover how to connect your favorite apps and
          services to create seamless integrations. We'll cover everything from
          CRMs and email marketing platforms to social media and e-commerce.
        </li>
        <li>
          <b>Custom Nodes:</b> Learn how to create your own custom nodes for
          n8n, so you can connect to any app or service with an API.
        </li>
        <li>
          <b>Free Workflows:</b> As a course participant, you'll get access to
          our library of free n8n workflows, so you can get started right away.
        </li>
      </ul>
    </PageLayout>
  );
};

export default N8nAutomation; 