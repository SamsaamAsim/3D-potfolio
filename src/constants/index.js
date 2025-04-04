import { meta, shopify, starbucks, tesla,funavri,deepembed,codealpha } from "../assets/images";
import {
    // Original Icons (ensure these are kept if needed elsewhere)
    mongodb,
    motion,
    mui,
    nextjs,
    redux,
    sass,
    typescript,
    summiz, // Removed threads as it was duplicated below

    // Your Icons & Icons Used
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    java,
    // funavri, // Remove commented out lines from import
    // deepembed,
    // codealpha,
    flutter,
    laravel,
    django,
    fastapi,
    sql,
    ai,
    nodejs,
    python,
    pricewise,
    react,
    colab,
    kaggle,
    huggingface,
    androidstudio,
    azure,
    tensorflow,
    sklearn,
    snapgram,
    tailwindcss, // Remove duplicate import
    threads,
    car,
    estate,
    // Added missing icons from original list above

} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: javascript,
        name: "Javascript", 
        type: "Frontend Framework",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Tool",
    },
    {
        imageUrl: ai,
        name: "Machine Learning",
        type: "AI/ML",
    },
    {
        imageUrl: tensorflow,
        name: "Tensorflow", 
        type: "AI/ML Library",
    },
    {
        imageUrl: sklearn,
        name: "Sklearn",
        type: "AI/ML Library", 
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend Framework",
    },
    {
        imageUrl: laravel,
        name: "Laravel",
        type: "Backend Framework",
    },
    {
        imageUrl: fastapi,
        name: "FastAPI",
        type: "Tool",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Tool",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Mobile Framework",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend Framework",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: huggingface,
        name: "Hugging face",
        type: "AI/ML Platform",
    },
    {
        imageUrl: colab,
        name: "Colab",
        type: "Tool",
    },
    {
        imageUrl: kaggle,
        name: "Kaggle",
        type: "Platform",
    },
    {
        imageUrl: azure,
        name: "Azure",
        type: "Cloud",
    },
    {
        imageUrl: androidstudio,
        name: "Android Studio",
        type: "Tool",
    }
];


export const experiences = [
    {
        title: "Software Engineer - AI Team",
        company_name: "Funavry Technology",
        icon: funavri,
        iconBg: "#4287f5",
        date: "February 2025 - Present",
        points: [
            "Developing backend services using FastAPI and Python for AI-powered applications",
            "Implementing RAG (Retrieval Augmented Generation) systems for enhanced AI capabilities",
            "Working with Azure cloud services for deployment and scaling",
            "Building AI integrations and APIs for product features",
            "Collaborating with cross-functional teams in a product-based environment"
        ],
    },
    {
        title: "Machine Learning Intern",
        company_name: "Deep Embed Lab (IUB)", 
        icon: deepembed,
        iconBg: "#a2d2ff",
        date: "October 2024 - February 2025",
        points: [
            "After the succesfull completion of internship at DEEP EMBED lab. I was invited to transition into a full-time role as a Technical Teaching Assistant, where I empower students and aspiring professionals to master machine learning, Python programming, and real-world AI applications."
        ],
    },
    {
        title: "Machine Learning Intern",
        company_name: "Deep Embed Lab (IUB)", 
        icon: deepembed,
        iconBg: "#a2d2ff",
        date: "October 2023 - August 2024",
        points: [
            "Mastered key ML algorithms (CNN, LSTM, RNN, SVM, Logistic Regression, Naive Bayes).",
            "Developed models like Urdu sentiment analysis, music generation, and deep fake audio.",
            "Built an Excel-integrated chatbot for automated responses.",
            "Learned and implemented AI technologies/tools (Tensorflow, Sklearn, Hugging Face).",
        ],
    },
    {
        title: "Backend Developer (Freelance/Personal Projects)",
        company_name: "Laravel / Django",
        icon: meta,
        iconBg: "#b7e4c7",
        date: "Approx 1 Year Experience",
        points: [
            "Developed a comprehensive management system using Laravel, optimizing performance and scalability.",
            "Created and integrated APIs for mobile app compatibility (Laravel).",
            "Built backend infrastructure for deep fake detection models using Django.",
            "Utilized SQL for database management.",
            "Implemented an email verification system for backend security.",
        ],
    },
    {
        title: "Machine Learning Intern",
        company_name: "Code Alpha",
        icon: codealpha,
        iconBg: "#fbc3bc",
        date: "November 2024 - December 2024",
        points: [
            "Implemented models utilizing transfer learning techniques.",
            "Integrated pretrained models for language translation (49 languages) using Hugging Face.",
            "Developed models from scratch, such as music generation using LSTM.",
            "Enhanced time management skills by meeting project deadlines.",
        ],
    },
];
export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'https://www.linkedin.com/in/samsaam-asim-b854231b6/',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/SamsaamAsim',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/samsaam-asim-b854231b6/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Deep Fake Detection',
        description: 'Developed a system for detecting deep fake audio, video, and images. Achieved 96% accuracy for audio and 93% for images. Backend built with Django.',
        link: 'link-to-your-repo-or-deployment', // Replace with actual link
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Urdu Sentiment Analysis (NLP)',
        description: 'Classifies Urdu text into positive/negative sentiments using Word2Vec (128 dim) embeddings and a combined CNN/LSTM model, achieving an F1 score of 85%.',
        link: 'link-to-your-repo-or-deployment', // Replace with actual link
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'QS World University Rankings Analysis',
        description: 'Interactive data analysis dashboard built with Python (Streamlit, Pandas) to visualize and analyze QS World University Rankings data.',
        link: 'link-to-your-repo-or-deployment', // Replace with actual link
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Inventory Management System',
        description: 'Developed an inventory management system for an online store using Laravel and SQL, including APIs for cross-platform integration.',
        link: 'link-to-your-repo-or-deployment', // Repl
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Brain Tumor Detection',
        description: 'Implemented a machine learning model using Support Vector Machine (SVM) for brain tumor detection, achieving 92% accuracy on data from BVH hospital.',
        link: 'link-to-your-repo-or-deployment', // Replace with actual 
    },
  
];