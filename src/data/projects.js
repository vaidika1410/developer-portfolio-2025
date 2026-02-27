export const featuredProjects = [
  // MAKNE
  {
    title: "MAKNE",
    slug: "makne",

    description:
      "MAKNE is a full-stack SaaS platform designed to streamline brand–creator collaborations through structured agreements, milestone tracking, and secure workflow management. It transforms informal influencer deals into transparent, trackable, and contract-driven partnerships.",

    overview:
      "MAKNE was built to solve the lack of structure in brand–creator collaborations, where most partnerships rely on scattered chats, unclear expectations, and manual follow-ups. The goal was to design a scalable system that formalizes agreements, tracks deliverables through milestones, and ensures both brands and creators operate within a transparent, lifecycle-driven workflow.",

    coverImage: "/projectImages/MAKNEBanner.png",

    primaryTag: "SaaS",
    tags: ["Full Stack", "SaaS", "Product", "Workflow System"],

    role: "Full Stack Developer",
    timeline: {
      start: "Jan 2026",
      end: "Ongoing",
      events: [
        { label: "Product Research & Architecture Planning", date: "3 Jan 2026" },
        { label: "Agreement Lifecycle Implementation", date: "12 Jan 2026" },
        { label: "Milestone Workflow System", date: "20 Jan 2026" },
        { label: "Dashboard & UI Systemization", date: "28 Jan 2026" },
        { label: "MVP Completion", date: "In Progress" }
      ]
    },

    type: "Personal SaaS Product",

    services: [
      "Product ideation and SaaS workflow modeling",
      "Role-based system architecture design",
      "Full-stack application development",
    ],

    deliverables: [
      "Agreement lifecycle system (Draft → Sent → Active)",
      "Milestone submission, revision, and approval workflow",
      "Role-based dashboards (Brand & Creator)",
      "Deliverables and payment tracking structure",
      "Responsive dark-first SaaS UI",
    ],

    challenges: [
      "Designing a real-world agreement lifecycle that mimics legal workflows",
      "Maintaining clean state management across complex statuses",
      "Ensuring scalability for future AI-based extensions",
    ],

    solutions: [
      "Lifecycle-driven status modeling with strict state transitions",
      "Clear separation of server actions and route handlers",
      "Reusable UI patterns for agreement detail and dashboards",
    ],

    impact: [
      "Transforms informal brand–creator deals into structured partnerships",
      "Reduces miscommunication through milestone-driven execution",
      "Creates a scalable base for future AI and automation modules",
    ],

    learnings:
      "Strengthened expertise in workflow-driven SaaS architecture, role-based access control, lifecycle state modeling, and balancing scalable backend systems with minimal, consistent UI patterns.",

    stack: [
      // Core Framework
      "Next.js",
      "React",
      "TypeScript",

      // Styling & UI
      "Tailwind CSS",
      "Framer Motion",
      "Lucide Icons",

      // Backend & Database
      "Node.js",
      "MongoDB",
      "Mongoose",
      "REST API Design",

      // Authentication & Security
      "JWT Authentication",

      // Dev & Testing Tools
      "Thunder Client",

      // Version Control & Deployment
      "Git",
      "GitHub",
      "Vercel"
    ],

    liveUrl: "https://makne-os.vercel.app/",
    githubUrl: "https://github.com/MAKNE-Platform/makne-os",

    featured: true,
  },

  // Noctura 
  {
    title: "Noctura App",
    slug: "noctura",

    description:
      "Noctura is a full-stack productivity web application that combines task management, habit tracking, and Kanban-style workflows into a single system. It is designed to support both daily execution and long-term planning with a calm, distraction-free interface, while remaining scalable as features grow.",

    overview:
      "Noctura was built to solve the fragmentation found in many productivity tools, where tasks, habits, and workflows are managed across separate applications. The goal was to create a unified system that supports daily execution and long-term planning while remaining calm, predictable, and scalable through modular architecture.",

    coverImage: "/projectImages/NocturaBanner.png",

    primaryTag: "Full Stack",
    tags: ["Full Stack", "Web", "Product"],

    role: "Full Stack Developer",
    timeline: {
      start: "Dec 2025",
      end: "Dec 2025",
      events: [
        { label: "Brainstorming", date: "4 Dec 2025" },
        { label: "Core Features", date: "11 Dec 2025" },
        { label: "Deployed", date: "13 Dec 2025" },
        { label: "All Modules Done", date: "17 Dec 2025" },
        { label: "Public Release", date: "22 Dec 2025" }
      ]
    },

    type: "Personal Product",

    services: [
      "Product ideation and feature planning",
      "System architecture and database design",
      "Full-stack web application development",
    ],


    deliverables: [
      "Task, habit, and Kanban workflow modules",
      "User authentication and preference management",
      "Responsive, dark-first UI across devices",
    ],


    challenges: [
      "Preventing feature overload in a multi-module system",
      "Maintaining scalability as features expanded",
      "Ensuring calm UX during extended usage",
    ],

    solutions: [
      "Modular, feature-driven application architecture",
      "Clear separation between UI, state, and backend logic",
      "Predictable interaction patterns with dark-first design",
    ],

    impact: [
      "Reduced context switching by consolidating planning workflows",
      "Improved consistency in daily and long-term planning",
      "Established a scalable foundation for future features",
    ],


    learnings:
      "Developed a deeper understanding of balancing product design decisions with scalable engineering practices, particularly around UX trade-offs, modular architecture, and long-term maintainability.",

    stack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Nodemailer",
      // "Payment Gateway",
      "Render",
      "Git",
      "GitHub",
    ],

    liveUrl: "https://noctura-app.onrender.com",
    githubUrl: "https://github.com/vaidika1410/noctura-app",

    featured: true,
  },

  // Anomate Stream
  {
    title: "Anomate Stream",
    slug: "anomaly-detection-containers",

    description:
      "Anomate Stream is a machine learning–based anomaly detection system designed for containerized applications. It monitors runtime behavior and system-level events to identify abnormal patterns in container workloads. The project includes a dashboard that visualizes live system calls alongside anomaly indicators, enabling both automated detection and human analysis.",

    overview:
      "Anomate Stream was built to explore anomaly detection in containerized environments, where traditional monitoring tools often struggle to capture subtle behavioral deviations. The system combines machine learning–based detection with real-time observability to provide interpretable insights into abnormal container behavior.",

    coverImage: "/projectImages/AnomateStreamBanner.png",

    primaryTag: "AI / ML",
    tags: ["AI/ML", "Systems", "Research"],

    role: "ML Engineer",
    timeline: {
      start: "Sep 2025",
      end: "Nov 2025",
      events: [
        { label: "Research & Planning", date: "11 Sep 2025" },
        { label: "ML Model Ready", date: "19 Sep 2025" },
        { label: "Dashboard Built", date: "25 Sep 2025" },
        { label: "Documentation", date: "4 Oct 2025" },
        { label: "Finalized", date: "10 Nov 2025" }
      ]
    },
    type: "Academic Project",

    services: [
      "Machine learning model design and experimentation",
      "System-level data collection and behavioral analysis",
      "Dashboard development for anomaly visualization",
    ],

    deliverables: [
      "Anomaly detection pipeline for container workloads",
      "Live dashboard for monitoring system calls and anomalies",
      "Evaluation of anomaly detection performance",
    ],

    challenges: [
      "Handling noisy and high-frequency system-level data",
      "Detecting subtle anomalies without excessive false positives",
      "Making ML-driven detections interpretable for users",
    ],

    solutions: [
      "Isolation Forest–based anomaly detection approach",
      "Feature extraction from runtime and system call metrics",
      "Visualization layer to contextualize anomaly scores",
    ],

    impact: [
      "Improved visibility into container runtime behavior",
      "Demonstrated effectiveness of ML-based anomaly detection",
      "Provided interpretable insights alongside automated alerts",
    ],

    learnings:
      "Gained hands-on experience with system observability, noisy data handling, and applying machine learning techniques to real-world infrastructure problems.",

    stack: [
      "Python",
      "Isolation Forest",
      "Docker",
      "Linux System Calls",
      "Streamlit",
    ],

    githubUrl: "https://github.com/Anomate-stream/anomate-stream",

    featured: true,
  },

  // Aorus Gigabyte
  {
    title: "AORUS Gigabyte Website Redesign",
    slug: "aorus-redesign",

    description:
      "AORUS Gigabyte Website Redesign is a frontend-focused project created during a hackathon to reimagine the brand’s website with a modern visual hierarchy and improved layout structure. The project emphasizes clean typography, responsive design, and smoother user flow while staying aligned with the brand’s identity.",

    overview:
      "This project was built as a design and frontend exploration to improve clarity, visual balance, and engagement on a high-performance gaming brand’s website. The focus was on restructuring layout sections and typography to make content easier to scan while maintaining a bold, modern aesthetic.",

    coverImage: "/projectImages/AorusGigabyte.png",

    primaryTag: "Frontend",
    tags: ["Frontend", "Web", "UI"],

    role: "Frontend Developer",
    timeline: {
      start: "Jun 2024",
      end: "Jun 2024",
      events: [
        { label: "Requirements Finalized", date: "10 Jun 2024" },
        { label: "Design Completed", date: "12 Jun 2024" },
        { label: "Development Completed", date: "20 Jun 2024" },
        { label: "Hackathon Submission", date: "30 Jun 2024" }
      ]
    },
    type: "Hackathon Project",

    services: [
      "Frontend UI development",
      "Layout and visual hierarchy redesign",
      "Responsive design implementation",
    ],

    deliverables: [
      "Redesigned landing and section layouts",
      "Improved typography and spacing system",
      "Responsive UI across screen sizes",
    ],

    challenges: [
      "Working within a limited hackathon timeframe",
      "Maintaining brand consistency while redesigning layouts",
      "Balancing visual impact with readability",
    ],

    solutions: [
      "Clear section-based layout structure",
      "Consistent spacing and typography scale",
      "Mobile-first responsive design approach",
    ],

    impact: [
      "Improved visual clarity and content scanability",
      "More structured and modern page layout",
      "Stronger first impression for users",
    ],

    learnings:
      "Learned how to make rapid yet thoughtful UI decisions under time constraints while maintaining visual consistency and responsiveness.",

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
      "Git",
      "GitHub",
    ],

    liveUrl: "https://vaidika1410.github.io/Team-EXIA-ReimagineRound1/",
    githubUrl: "https://github.com/vaidika1410/Team-EXIA-ReimagineRound1",

    featured: true,
  },

  // K72 clone
  {
    title: "K72 React GSAP Clone",
    slug: "k72-gsap-clone",

    description:
      "K72 React GSAP Clone is a frontend recreation of the K72 website, built to explore advanced animations and smooth scrolling interactions. The project focuses on recreating the original site’s motion-heavy experience using React and GSAP while maintaining performance and responsiveness across devices.",

    overview:
      "This project was created as an animation-focused frontend exercise to better understand scroll-based interactions and motion-driven user experiences. The emphasis was on translating complex animations into a React-based architecture without compromising performance or visual smoothness.",

    coverImage: "/projectImages/K72Banner.png",

    primaryTag: "Frontend",
    tags: ["Frontend", "Web", "Animations"],

    role: "Frontend Developer",
    timeline: {
      start: "Nov 2025",
      end: "Ongoing",
      events: [
        { label: "Design Analysis", date: "24 Nov 2025" }
      ]
    },

    type: "Practice Project",

    services: [
      "Frontend animation development",
      "Scroll-based interaction implementation",
      "Performance-focused UI engineering",
    ],

    deliverables: [
      "Animated landing experience",
      "Smooth scroll and transition effects",
      "Responsive layout with motion consistency",
    ],

    challenges: [
      "Managing complex GSAP timelines in React",
      "Ensuring smooth animations across screen sizes",
      "Avoiding performance drops during scroll interactions",
    ],

    solutions: [
      "Used GSAP ScrollTrigger for controlled animations",
      "Optimized animation timelines and re-renders",
      "Careful synchronization between scroll and motion",
    ],

    impact: [
      "Improved understanding of animation-driven UX",
      "Stronger grasp of GSAP with React integration",
      "Experience building performance-conscious motion UIs",
    ],

    learnings:
      "Learned how to structure animation-heavy applications in React while balancing visual fidelity, performance, and maintainability.",

    stack: [
      "React",
      "GSAP",
      "ScrollTrigger",
      "JavaScript",
      "CSS",
      "Git",
      "GitHub",
    ],

    githubUrl: "https://github.com/vaidika1410/k72-react-gsap-clone",

  },
];

export const allProjects = [
  // Pastelane Planner
  {
    title: "Pastelane Planner App",
    slug: "pastelane-planner",

    description:
      "Pastelane Planner is a lightweight web application designed for simple task organization and daily planning. The project focuses on minimal UI, ease of use, and distraction-free workflows to help users manage routines and everyday tasks efficiently.",

    overview:
      "Pastelane Planner was built as an exploration into minimal productivity design, prioritizing clarity and ease of use over feature-heavy systems. The goal was to create a planner that feels approachable, quick to use, and visually calm for everyday task management.",

    coverImage: "/projectImages/PastelaneBanner.png",

    primaryTag: "Web",
    tags: ["Web", "Productivity"],

    role: "Frontend Developer",
    timeline: {
      start: "Apr 2025",
      end: "Jul 2025",
      events: [
        { label: "Requirements Defined", date: "8 Apr 2025" },
        { label: "Design Completed", date: "10 Apr 2025" },
        { label: "Core Features Built", date: "13 Apr 2025" },
        { label: "Iteration & Polish", date: "15 May 2025" }
      ]
    },

    type: "Personal Project",

    services: [
      "Frontend application development",
      "UI design focused on minimal workflows",
      "Basic state management for tasks",
    ],

    deliverables: [
      "Task creation and organization interface",
      "Routine-based planning flow",
      "Clean, minimal user interface",
    ],

    challenges: [
      "Keeping the UI minimal without limiting usability",
      "Designing workflows that require minimal user effort",
      "Maintaining visual consistency across views",
    ],

    solutions: [
      "Simplified task structure and interactions",
      "Clear visual hierarchy with minimal components",
      "Consistent spacing and typography system",
    ],

    impact: [
      "Provided a simple alternative to feature-heavy planners",
      "Improved focus through distraction-free UI design",
      "Strengthened understanding of minimal product design",
    ],

    learnings:
      "Learned how small design decisions and restraint can significantly improve usability and user focus in productivity tools.",

    stack: [
      "React",
      "JavaScript",
      "CSS",
      "Git",
      "GitHub",
    ],

    liveUrl: "https://vaidika1410.github.io/Pastelane-Planner/",
    githubUrl: "https://github.com/vaidika1410/pastelane-planner",
  },

  // Rejouice Website Recreation
  {
    title: "Rejouice Website Clone",
    slug: "rejouice-clone",

    description:
      "Rejouice Website Clone is a frontend recreation of the Rejouice brand website, focusing on smooth animations, modern layout structure, and interactive user experience. The project emphasizes motion-driven design, clean visual hierarchy, and precise implementation of the original site’s aesthetics.",

    overview:
      "This project was built as a frontend and animation-focused exercise to study how motion, layout, and interaction design work together in modern brand websites. The goal was to recreate the visual experience as closely as possible while maintaining responsiveness and performance.",

    coverImage: "/projectImages/RejouiceBanner.png",

    primaryTag: "Frontend",
    tags: ["Frontend", "Web", "Animations"],

    role: "Frontend Developer",
    timeline: {
      start: "May 2024",
      end: "Sep 2024",
      events: [
        { label: "Design & Interaction Study", date: "31 May 2024" },
        { label: "Layout & Structure Built", date: "20 Jun 2024" },
        { label: "Animations Implemented", date: "25 Jul 2024" },
        { label: "UI Refinement", date: "20 Aug 2024" },
        { label: "Recreation Finalized", date: "27 Sep 2024" }
      ]
    },
    type: "Practice Project",

    services: [
      "Frontend UI development",
      "Animation and interaction implementation",
      "Layout and visual hierarchy recreation",
    ],

    deliverables: [
      "Animated landing sections",
      "Interactive UI elements and transitions",
      "Responsive layout across devices",
    ],

    challenges: [
      "Recreating complex animations accurately",
      "Synchronizing motion with scroll behavior",
      "Maintaining performance during animations",
    ],

    solutions: [
      "Used GSAP for smooth and controlled animations",
      "Carefully structured animation timelines",
      "Optimized layout and animation triggers",
    ],

    impact: [
      "Strengthened understanding of motion-driven UI design",
      "Improved animation implementation skills",
      "Experience recreating high-fidelity brand websites",
    ],

    learnings:
      "Learned how animation, timing, and layout decisions influence user perception and engagement in modern web interfaces.",

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP",
      "Git",
      "GitHub",
    ],

    liveUrl: "https://vaidika1410.github.io/REJOUICE/",
    githubUrl: "https://github.com/vaidika1410/REJOUICE",
  },

  // TwoGoodCo. Website Recreation
  {
    title: "TwoGoodCo Website Recreation",
    slug: "twogoodco-clone",

    description:
      "TwoGoodCo Website Recreation is a frontend project focused on recreating the original website’s typography, layout structure, and visual rhythm. The project emphasizes precision in spacing, alignment, and content flow to closely match the brand’s clean and purposeful design language.",

    overview:
      "This project was built as a frontend exercise to study how typography, spacing, and layout structure contribute to strong brand communication. The focus was on accurately recreating the visual hierarchy and overall feel of the original site while ensuring responsiveness across screen sizes.",

    coverImage: "/projectImages/TooGoodCo..png",

    primaryTag: "Frontend",
    tags: ["Frontend", "Web", "UI"],

    role: "Frontend Developer",
    timeline: {
      start: "Jun 2024",
      end: "Jul 2024",
      events: [
        { label: "Design Study", date: "14 Jun 2024" },
        { label: "Layout & Styling Built", date: "20 Jun 2024" },
        { label: "Interactions Added", date: "28 Jun 2024" },
        { label: "UI Refinement", date: "6 Jul 2024" },
        { label: "Recreation Finalized", date: "12 Jul 2024" }
      ]
    },
    type: "Practice Project",

    services: [
      "Frontend layout implementation",
      "Typography and spacing recreation",
      "Responsive design execution",
    ],

    deliverables: [
      "Pixel-accurate layout recreation",
      "Typography-focused UI implementation",
      "Responsive design across devices",
    ],

    challenges: [
      "Achieving visual accuracy without design assets",
      "Maintaining consistent spacing and alignment",
      "Ensuring typography scales well across screens",
    ],

    solutions: [
      "Careful inspection and replication of layout patterns",
      "Consistent spacing and typography scale",
      "Responsive breakpoints aligned with content flow",
    ],

    impact: [
      "Improved attention to detail in frontend development",
      "Stronger understanding of typography-led design",
      "Experience recreating design-focused brand websites",
    ],

    learnings:
      "Developed a deeper appreciation for how small layout and typography decisions significantly impact the overall user experience.",

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
    ],

    liveUrl: "https://vaidika1410.github.io/TwoGoodCo./",
    githubUrl: "https://github.com/vaidika1410/TwoGoodCo.",
  },

  // Steganography Detection 
  {
    title: "Satellite Image Steganography",
    slug: "steganography-detection",

    description:
      "Steganography Detection in Satellite Images is a research-oriented machine learning project focused on identifying hidden information embedded within satellite imagery. The project uses convolutional neural networks to analyze subtle pixel-level patterns that indicate steganographic manipulation.",

    overview:
      "This project was conducted to study how deep learning techniques can be applied to detect steganography in high-resolution satellite images. The goal was to evaluate the effectiveness of CNN-based models in identifying hidden data while handling complex visual patterns present in real-world imagery.",

    coverImage: "/projectImages/SteganographyBanner.png",

    primaryTag: "AI / ML",
    tags: ["AI/ML", "Research", "Computer Vision"],

    role: "ML Researcher",
    timeline: {
      start: "Jun 2025",
      end: "Jul 2025",
      events: [
        { label: "Literature Review", date: "11 Jun 2025" },
        { label: "CNN Model Developed", date: "17 Jun 2025" },
        { label: "Research Writing", date: "20 Jun 2025" },
        { label: "Final Paper Submitted", date: "2 Jul 2025" }
      ]
    },
    type: "Research Project",

    services: [
      "Dataset analysis and preprocessing",
      "Model design and training using CNNs",
      "Evaluation and result analysis",
    ],

    deliverables: [
      "Trained CNN model for steganography detection",
      "Experimental results and performance evaluation",
      "Research documentation and findings",
    ],

    challenges: [
      "Detecting subtle steganographic patterns in images",
      "Handling high-dimensional satellite image data",
      "Avoiding overfitting on limited datasets",
    ],

    solutions: [
      "Applied convolutional neural networks for feature extraction",
      "Used data preprocessing and normalization techniques",
      "Evaluated model performance using standard metrics",
    ],

    impact: [
      "Demonstrated feasibility of CNN-based steganography detection",
      "Improved understanding of image-based security threats",
      "Contributed insights into applying ML for satellite image analysis",
    ],

    learnings:
      "Developed a stronger understanding of applying deep learning techniques to image security problems and conducting structured experimentation in research-driven projects.",

    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Numba",
      "Scikit-learn",
      "OpenCV",
      "Git",
      "GitHub",
    ],

    githubUrl: "https://github.com/vaidika1410/Satellite-Image-Steganography-Model",
  },

  // Forest Fire Detection System
  {
    title: "Forest Fire Detection System",
    slug: "forest-fire-detection",

    description:
      "Forest Fire Detection System is a computer vision–based project designed to detect forest fires from image data at early stages. The system uses deep learning techniques to identify fire-related visual patterns, aiming to support faster response and risk mitigation.",

    overview:
      "This project was developed to explore how computer vision and deep learning can be applied to real-world environmental monitoring problems. The focus was on detecting visual indicators of fire from images and evaluating the model’s ability to generalize across varied conditions.",

    coverImage: "/projectImages/ForestFireDetectionBanner.png",

    primaryTag: "AI / ML",
    tags: ["AI/ML", "Computer Vision", "Research"],

    role: "ML Engineer",
    timeline: {
      start: "Apr 2025",
      end: "May 2025",
      events: [
        { label: "Project Onboarding", date: "28 Apr 2025" },
        { label: "Model Design", date: "5 May 2025" },
        { label: "CNN Model Trained", date: "15 May 2025" },
        { label: "Final Report Submitted", date: "28 May 2025" }
      ]
    },
    type: "Academic Project",

    services: [
      "Dataset preparation and image preprocessing",
      "Model training and experimentation using CNNs",
      "Evaluation of detection performance",
    ],

    deliverables: [
      "Forest fire detection model",
      "Image preprocessing and augmentation pipeline",
      "Performance evaluation results",
    ],

    challenges: [
      "Handling visual variations in fire and non-fire images",
      "Reducing false positives caused by lighting conditions",
      "Training robust models with limited data",
    ],

    solutions: [
      "Applied CNN-based feature extraction",
      "Used image preprocessing and augmentation techniques",
      "Evaluated models using standard classification metrics",
    ],

    impact: [
      "Demonstrated feasibility of image-based fire detection",
      "Strengthened understanding of applied computer vision",
      "Explored ML applications for environmental monitoring",
    ],

    learnings:
      "Gained practical experience applying deep learning models to real-world vision problems and understanding the challenges of dataset variability and model generalization.",

    stack: [
      "Python",
      "Flask",
      "TensorFlow",
      "Keras",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
    ],

    githubUrl: "https://github.com/vaidika1410/Forest_Fire_Detection_System_DL",
  },
];
