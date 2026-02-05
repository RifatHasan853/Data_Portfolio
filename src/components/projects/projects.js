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
    title: "UrbanEats",
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
    title: "WorkFlowr",
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740980740/portfolio/mhurwsauum5vq3apuamj.png",
    text: "A kanban-UI based drag and drop Todo application that solves a simple problem which is managing tasks. the kanban board is divided into 3 columns, Todo, Ongoing and Done. Drag and Drop can be done in both direction vertically and horizontally. It is a full stack application built with MERN stack technologies with user authentication and data persistence feature.",
    link: "https://workflowrr.netlify.app/",
    github: "https://github.com/shihabhq/workflowrr",
    tagline: "A Kanban UI-based Drag and Drop productivity management app",
    titleImg:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1741527769/workflowr/les4jdtjw2eq26j3jv2b.png",
    stacks: [
      {
        text: "JavaScript",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740930103/portfolio/elvkxssthlbadqlgw4r6.svg",
      },
      {
        text: "TailwindCSS",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740930461/portfolio/ruvxlmoqoohotter530t.svg",
      },
      {
        text: "ReactJS",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740929822/portfolio/tqefwmnan7wrq1nyzpbg.svg",
      },
      {
        text: "Router",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740931452/portfolio/iap37xwaafm4ywws2nqw.svg",
      },

      { text: "dnd-kit", image: "https://dndkit.com/dnd-kit-logo.svg" },
      {
        text: "NodeJS",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/pnr3cycovxym6sx3nmuf.svg",
      },
      {
        text: "Firebase",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/yiurfwklddlitackfwqt.svg",
      },
      {
        text: "ExpressJS",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740934918/portfolio/svtv77hzyg6pyt9agpm9.svg",
      },
      {
        text: "MongoDB",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/i8qmy6ztj7mbhyvb3340.svg",
      },
      {
        text: "Axios",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740929821/portfolio/l6hlysjru26w4xq4f7ba.svg",
      },
      {
        text: "Mongoose",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740934918/portfolio/lfcsfnfsoqwk2x19bhzx.svg",
      },
    ],
    colorcodes: ["#17a2b8", "#f9aa49", "#1487be", "#1fc678"],
    approaches: [
      {
        problem:
          "As each different user has different tasks to save, User authentication was required to get into the application.",
        solution:
          "I used the firebase authentication with React's PrivateRoute component combined with loading component to implement this.",
      },
      {
        problem:
          "Through the documentation and some youtube video, I could easily write the code of a single column vertically task drag and drop functionality. But The main and most painfull challenge was to implement the horizontal drag and drop system through columns. The main problem was that, the task object specifically was added in a column by checking the 'column' property of that task object. Each 'column' property of a task was fixed to that particular Column. If I drag horizontally, the fixed 'column' property name didn't make it switch tasks from one columen to another column.",
        solution:
          "I have watched countless tutorials and read a huge amount of documentation and finally found a solution to this problem. I created a handleDragOver() function of dnd-kit/core that check for the column name difference while dragging. If the column name was different from the initial column, this function changes the column's name. this ensured the horizontal drag and drop functionality. ",
      },
      {
        problem:
          "Data persistency is a challenge. As client can change the state of task by dragging and dropping them in various ways. It is a challenge to maintain this and persist the data in the database in this exact location.",
        solution:
          "There is no easy solution in JavaScript just like arrayMove() in dnd-kit. For large scale application I could've made my own arrayMove() function and sent the changed data in MongoDB but as it is just a small project, I can just send the whole array of tasks data in the database and that is completely fine for this. If you open the network tab you can see that in each drag and drop a network request is sent in the database to save this current data.",
      },
    ],
    gallery: [
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741527550/workflowr/wg1zebjgt4j4cnn6hzq3.png",
        title: "Home Page",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741542643/workflowr/n59ufk3wn9rgkf1halky.png",
        title: "Blank Kanban board without any task",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741542565/workflowr/xr7qwz8cetflh67qqbsd.png",
        title: "Adding a new Task functionality through a modal.",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741542566/workflowr/jyezhwqe5iin9efdr5xy.png",
        title: "Direct editing functionality through clicking the task title.",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741542566/workflowr/r7spviehygwaqn2kv4xt.png",
        title: "Login Page",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741542565/workflowr/balry2i45ytvcclt2465.png",
        title: "Register Page",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741542565/workflowr/iyco5hpuopb3slx77i7v.png",
        title: "While Dragging a task from one column to another.",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741542565/workflowr/mncalpuzkarjmzqkqzmp.png",
        title: "Loading Spinner of the app",
      },
    ],
    learnings:
      "It is one of my best small projects. I really enjoyed a lot while building this. This Project not just has enhanced my MERN stack skills with tailwind UI building but taught me how to dive deep and implement something from reading documentation of a package. Initially, the dnd-kit was a hassle for me to implement and it generated a huge frustation. But I remained calm and steady to build this.",
    improvements:
      "Currently in the project, There are fixed amount of columns(only 3). Future improvements can be adding the functionality to increase the column count dynamically. I could've improved the UI and implemented dark mode using Tailwind. Also, data persistency is not that much secured. JWT authorization can be added over here. Lastly, This project chould have a better data persistency method instead of the whole array saving. But for a small project like this, it is completely fine.",
  },
  {
    case: "4",
    title: "ColorZapp",
    text: "ColorZapp is a web-based color-generating application built with HTML, CSS, and JavaScript. In this app, users can generate a random color by clicking 'Generate Color', the color will be displayed in the box below the button. Additionally, the User can copy that color's RGB and HEX code. The red, green, and blue toggles are for adjusting the color. This app also has a dark mode option.This was the final project of my CS50 course. Through this, I got my CS50 certificate.",
    image:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1740985833/portfolio/o007nzbrevlezgh0tzfk.png",
    link: "https://colorzapp.netlify.app/",
    titleImg:
      "https://res.cloudinary.com/deyzzky20/image/upload/v1741548647/colorzapp/qtsemmyzzknmh1eyiykr.png",
    github: "",
    tagline:
      "A color-generating web-based application that gives different format of color codes with copying functionality.",
    stacks: [
      {
        text: "HTML",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740986067/portfolio/rkaqclndmrjaeftdlp5a.svg",
      },
      {
        text: "CSS",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740986058/portfolio/hetlmcpjiecfvkcistsd.svg",
      },
      {
        text: "JavaScript",
        image:
          "https://res.cloudinary.com/deyzzky20/image/upload/v1740930103/portfolio/elvkxssthlbadqlgw4r6.svg",
      },
    ],
    colorcodes: ["#08cc70", "#ff2323", "#30cb30", "#2caeff", "#121212"],
    approaches: [
      {
        problem: "Generating a random color was a challenge",
        solution:
          "I used JavaScript's Math.random() function to create 3 different value between 0 to 255. then I dynamically changed the css of the box using rgb color code.",
      },
      {
        problem:
          "From RGB to HEX code color transform functionality was needed.",
        solution:
          "On the left side of the app, there are two input fields. One is for RGB and another is for HEX. These two fields will give the RGB and HEX values of the generated color.Toggling each input field will change the corresponding another field's value accordingly as I have implemented isRGBValid, isHexValid and event listeners to change values realtime. Also, I have used CSS absolute property and a copy icon from the fontawesome website to add the copy function from these inputs. There is a CSS animation is used to assure the user that the color code has been copied.",
      },
      {
        problem:
          "Toggleing RGB range inputs should change the box's color accordingly.",
        solution:
          "I used JavaScript dom manipulation to implement this functionality.",
      },
      {
        problem: "I had to implement dark mode in the app",
        solution:
          "this app is not created by using any framework or library. I used vanilla JavaScript's dom manipulation and localStorage's data persistency to save the background state and change the background color of the app accordingly.",
      },
    ],
    gallery: [
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741549348/colorzapp/gt0ngpmajmptnok27lrj.jpg",
        title: "My CS50X certificate",
      },

      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741548647/colorzapp/a48zjcysjjczq13qspmk.png",
        title: "The application UI",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741548648/colorzapp/huebuz5x8megfbubwfnv.png",
        title: "Dark mode of the UI",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741548647/colorzapp/vscqzwcpdtcyj1njojgm.png",
        title: "RGB to HEX color change and copy functionality",
      },
      {
        src: "https://res.cloudinary.com/deyzzky20/image/upload/v1741548647/colorzapp/qtsemmyzzknmh1eyiykr.png",
        title: "Generate Color functionality",
      },
    ],
    learnings:
      "This was my CS50 final project. I submitted this one and got my CS50X certificate. It was very hard and took a lot time to complete this course but it gave me an overview of the whole computer science world. I really enjoyed each of the lectures and tasks of this course and it ensured my commitment and consistency in the tech world.",
    improvements:
      "This project was created using just HTML, CSS and JavaScript. I am now profiecient enough to write code in TypeScript and React and these modern web technologies can be used to build this type of small apps. Also, I could've used MongoDB and firebase authentication over here. As, I got my CS50 certificate through only JavaScript, I can say that it was a success.",
  },
];
export default projects;
