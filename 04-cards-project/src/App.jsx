import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Data Analyst",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Seattle, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hour",
      location: "Cupertino, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hour",
      location: "Los Gatos, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hour",
      location: "Redmond, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "2 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Palo Alto, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "AI Research Scientist",
      tag1: "Full Time",
      tag2: "Expert Level",
      pay: "$95/hour",
      location: "Santa Clara, USA",
    },
    {
      brandLogo:
        "https://blog.adobe.com/de/publish/2020/05/28/media_16b3b0de339a5aa325a34196c56343c8b18522cf8.png?width=750&format=png&optimize=medium",
      companyName: "Adobe",
      datePosted: "10 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$55/hour",
      location: "Noida, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      datePosted: "6 days ago",
      post: "Prompt Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$100/hour",
      location: "San Francisco, USA",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
            company={elem.companyName}
            post={elem.post}
            datePosted={elem.datePosted}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
            brandLogo={elem.brandLogo}
          />
          </div>
        );
      })}
    </div>
  );
};

export default App;
