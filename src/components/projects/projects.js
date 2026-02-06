import conversion from "./assets/conversion.png";
import customerReview from "./assets/customerreview.png";
import excel from "./assets/excel.png";
import figma from "./assets/pngwing.png";
import powerbi from "./assets/powerbi.png";
import python from "./assets/python.png";
import sql from "./assets/sql.png";

import blinkittitle from "./assets/Blinkit/Blinkit_Home.png";
import home from "./assets/Blinkit/Blinkit_Overview.png";
import blinkit_3 from "./assets/Blinkit/Blinkit_customer.png";
import blinkit_4 from "./assets/Blinkit/Blinkit_feedbacks.png";
import blinkit_5 from "./assets/Blinkit/Blinkit_inventory.png";
import blinkit_6 from "./assets/Blinkit/Blinkit_marketing.png";
import blinkit_7 from "./assets/Blinkit/Blinkit_sales_overview.png";
import overview from "./assets/overview.png";
import socialMedia from "./assets/socilamedia.png";

import hospitalhome from "./assets/Hospital/Home.png";
import hospitaltitle from "./assets/Hospital/overview.png";


import hospitaldoctor from "./assets/Hospital/doctor.png";
import hos_finance from "./assets/Hospital/finance.png";
import hos_hosptal from "./assets/Hospital/hospital.png";
import hos_patient from "./assets/Hospital/patient.png";



const projects = [
  {
    case: "1",
    title: "Marketing Analysis Business Case",
    link: "https://app.powerbi.com/groups/me/reports/b14b5071-93a0-4753-8c62-656c47b7117d/d4b237e09bcad0738366?experience=power-bi",
    titleImg: customerReview,
    github: "https://www.linkedin.com/feed/update/urn:li:activity:7421614402006614016/",
    image:
      customerReview,
    text: "This project focuses on improving customer engagement, conversion rates, and satisfaction through data-driven analysis. By examining website traffic, marketing content performance, and customer feedback, key challenges such as declining interactions, low conversions, and underperforming campaigns were identified. Targeted strategies were implemented, including optimizing high-performing products, revitalizing content, and addressing customer concerns, resulting in actionable insights to enhance overall business performance and drive measurable growth.",
    stacks: [
      {
        image: excel,
        text: "Excel",
      },
      {
        text: "PowerBI",
        image: powerbi,
      },
      {
        text: "SQL(Sqlserver)",
        image: sql,
      },
      {
        text: "Python",
        image: python
      },
      {
        text: "Figma",
        image: figma
      },
   
    ],
    approaches: [
      {
        problem: `Reduced customer engagement across the website and social media platforms.`,
        solution: `Analyzed conversion rates, customer interactions, and engagement metrics throughout the year.`,
      },
      {
        problem: `Decreased conversion rates, with some months performing significantly lower than others.`,
        solution: `Studied content performance across blogs, social media, and video channels to identify what drives engagement.`,
      },
      {
        problem: `Decreased conversion rates, with some months performing significantly lower than others.`,
        solution: `Performed sentiment and rating analysis on customer feedback to pinpoint recurring issues.`,
      },
      {
        problem: `High marketing expenses yielding low returns.`,
        solution: `Monitored seasonal trends and high-performing product categories to optimize marketing focus.`,
      },
      {
        problem: `Customer feedback scores below target, highlighting areas needing improvement
        `,
        solution: `Monitored seasonal trends and high-performing product categories to optimize marketing focus.`,
       
      },
    ],
    tagline: "Data Driven Marketing Analysis for Enhanced Customer Engagement",
    
    
    gallery: [
      {
        src:overview,
        title: "Overview",
      },
      {
        src:conversion,
        title:
          "Conversion DetailsS",
      },
      {
        src:socialMedia,
        title: "Social Media Details",
      },
      {
        src:customerReview,
        title: "Customer Review Details",
      }
    ],
    learnings:
      "The project has taught me the image upload functionality, real time database update using mongoose, and payment integration. Also my existing knowledge of JavaScript, React, and TailwindCSS were improved and solidified. I had a tremendous confidence boost to build large scale web applications using these technologies and increase my horizon to the unknown in the world of web.",
    improvements:
      "I could've increased the security of the backend by using the JWT authentication. Future plans includes this to implement. I can add Dark mode and additional pages for furthur improvements. Also, Some basic animations could have been added over here using Framer motion.",
  },
  {
    case: "2",
    title: "Blinkit Power BI Dashboard",
    image: home,
    link: "https://app.powerbi.com/groups/me/reports/ef041f19-6708-42f3-a626-7e0a67161dc0/5014db5ecc65cb01751a?experience=power-bi",
    github:"https://www.linkedin.com/feed/update/urn:li:activity:7413426389338521600/",
    titleImg: blinkittitle,
    tagline: "Blinkit Quick-Commerce Analysis",
    text: "Blinkit is a quick-commerce platform where operational efficiency and real-time insights are critical. This project focuses on building an interactive Power BI dashboard to analyze deliveries, sales, inventory, marketing performance, and customer behavior in a centralized view.",
    stacks: [
      {
        text: "Excel",
        image:excel,
      },
      {
        text: "PowerBI",
        image: powerbi,
      },
      {
        text: "Sql(Mysql)",
        image: sql,
      },
      {
        text: "Figma",
        image: figma,
      }
    ],
    colorcodes: ["#bf9444", "#0f142a"],
   approaches : [
  {
    problem:
      "Handling a large volume of operational, sales, inventory, and customer data from multiple sources made analysis slow and unstructured.",
    solution:
      "I used Power Query to clean, transform, and optimize the dataset. I removed unnecessary columns, standardized data types, and designed a star schema data model to improve performance and scalability.",
  },
  {
    problem:
      "Displaying complex KPIs like delivery completion rate, average order value, and customer retention in a way that non-technical stakeholders could easily understand was challenging.",
    solution:
      "I created custom DAX measures and visualized them using KPI cards, gauge charts, and donut charts to clearly represent performance metrics and trends.",
  },
  {
    problem:
      "Stakeholders needed to analyze performance by time, region, and product category without switching between multiple dashboards.",
    solution:
      "I implemented slicers, drill-down, and drill-through functionality to enable dynamic filtering and deeper data exploration within a single dashboard.",
  },
  {
    problem:
      "Identifying delivery delays and operational bottlenecks was difficult using raw data alone.",
    solution:
      "I built line charts and completion rate visuals to track delivery trends over time, helping identify peak delay periods and logistics inefficiencies.",
  },
  {
    problem:
      "Customer feedback data was unstructured and difficult to analyze for actionable insights.",
    solution:
      "I categorized feedback into positive, neutral, and negative sentiment and visualized recurring keywords using a word cloud to quickly highlight customer pain points.",
  },
  {
    problem:
      "Monitoring inventory levels manually increased the risk of stockouts and overstocking.",
    solution:
      "I created stock level charts, inventory turnover KPIs, and low-stock alert visuals using conditional formatting to support proactive inventory management.",
  },
  {
    problem:
      "Comparing marketing spend and ROI across different campaigns and regions was not straightforward.",
    solution:
      "I designed campaign ROI and acquisition channel visuals using bar and funnel charts, allowing clear comparison of marketing performance and budget effectiveness.",
  },
],

    gallery: [
      {
        src: blinkittitle,
        title: "Home",
      },
      {
        src: home,
        title: "Overview",
      },
      {
        src: blinkit_7,
        title: "Sales Overview",
      },
      {
        src: blinkit_3,
        title: "Customer",
      },
      {
        src: blinkit_4,
        title: "Feedbacks",
      },
      {
        src: blinkit_5,
        title:
          "Inventory",
      },
      {
        src: blinkit_6,
        title:
          "marketing",
      }
        
    ],
    learnings:
      "Through the Blinkit Power BI Dashboard project, I learned how to transform large, complex datasets into clear, actionable insights. I gained hands-on experience in data modeling, creating interactive visualizations, and building custom DAX measures for key performance indicators like revenue, customer retention, and delivery performance. The project also taught me how to design user-friendly dashboards with dynamic filtering and drill-down capabilities, enabling stakeholders to make data-driven decisions efficiently.",
    
  },
  {
    case: "3",
    title: "Hospital Management Dashboard",
    image:hospitaltitle,
    text:"This Hospital Management Dashboard project uses Power BI to transform healthcare data from MySQL and Excel into meaningful, decision-ready insights. It features interactive dashboards for hospital performance, operations, doctors, patients, finance, and staff management. By leveraging Power Query, data modeling, and DAX, I focused on creating clean, intuitive visuals that simplify complex data and support real-world healthcare decision-making.",
    link: "https://app.powerbi.com/groups/me/reports/aa2fdfa2-cc7d-44b6-b4a0-521115f7c1e9/811877e6736d215bc177?experience=power-bi",
    github: "https://www.linkedin.com/feed/update/urn:li:activity:7413130312576065537/",
    tagline: "Turning hospital data into actionable insights for smarter healthcare decisions.",
    titleImg: hospitalhome,
    stacks: [
      {
        text: "Excel",
        image:excel,
      },
      {
        text: "PowerBI",
        image:powerbi,
      },
      {
        text: "Sql(Mysql)",
        image:sql
      },
      {
        text: "Figma",
        image:figma,
      }
    ],
    colorcodes: ["#17a2b8", "#f9aa49", "#1487be", "#1fc678"],
    approaches: [
  {
    problem:
      "Hospital data was coming from multiple sources like MySQL databases and Excel files, which made analysis difficult due to inconsistent formats and structures.",
    solution:
      "I used Power Query in Power BI to clean, transform, and standardize the data. This included removing duplicates, handling missing values, normalizing fields, and reshaping tables to make them analysis-ready."
  },
  {
    problem:
      "Raw data alone didn’t provide meaningful insights, and it was difficult to understand hospital performance at a glance.",
    solution:
      "I designed multiple dashboards focused on specific business perspectives such as hospital performance overview, operations, doctor insights, patient analysis, financial performance, and staff management to break down complexity into actionable views."
  },
  {
    problem:
      "Establishing accurate relationships between different datasets (patients, doctors, departments, finance, staff) was critical but challenging.",
    solution:
      "I implemented a proper data model using fact and dimension tables and created relationships carefully to ensure accurate filtering, cross-highlighting, and KPI calculations across dashboards."
  },
  {
    problem:
      "Key performance indicators like patient count, revenue trends, doctor efficiency, and operational metrics were not directly available in the raw data.",
    solution:
      "I wrote custom DAX measures to calculate KPIs, trends, ratios, and aggregated metrics that support data-driven decision-making in a healthcare context."
  },
  {
    problem:
      "Presenting complex healthcare data in a way that is easy for non-technical users to understand was a major challenge.",
    solution:
      "I focused on clean and interactive dashboard design using proper visual hierarchy, slicers, tooltips, and consistent color themes. I also used Figma to plan layouts before implementing them in Power BI."
  },
  {
    problem:
      "Understanding what questions to ask from the data was as challenging as building the dashboards themselves.",
    solution:
      "Through this project, I practiced analytical thinking by identifying business questions first and then building visuals and metrics that directly answer those questions instead of just showing data."
  }

],
    gallery: [
      {
        src: hospitalhome,
        title: "Home Page",
      },
      {
        src: hospitaltitle,
        title: "Overview",
      },
      {
        src: hos_patient,
        title: "Patient Info",
      },
      {
        src: hospitaldoctor,
        title: "Doctor Info",
      },
      {
        src: hos_hosptal,
        title: "Hospital Info",
      },
      {
        src: hos_finance,
        title: "Finance Info",
      }
    ],
    learnings:
      "This project helped me understand how raw data from multiple sources can be transformed into structured, reliable datasets using Power Query and proper data modeling. I learned how to create meaningful KPIs with DAX and how well-designed dashboards can turn complex healthcare data into clear, actionable insights. More importantly, the project strengthened my analytical thinking by teaching me to start with the right business questions and present insights in a simple, user-friendly way for decision-makers.",
  },
 
];
export default projects;
