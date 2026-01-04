export type Language = 'en' | 'lt' | 'ru';

export const translations: Record<Language, any> = {
  en: {
    seo: {
      title: "newmindr. Interactive Learning"
    },
    cookies: {
      title: "WE USE COOKIES",
      description: "We use cookies to enhance your experience, analyze site traffic, and serve personalized content. By clicking \"Accept All\", you consent to our use of cookies.",
      accept: "ACCEPT ALL",
      decline: "DECLINE",
      settings: "SETTINGS",
      privacyPolicy: "Privacy Policy"
    },
    popups: {
      awesome: "AWESOME!",
      current: "Current",
      globalLearning: "Global Learning",
      availableLanguages: "Available languages",
      comingSoonList: "Polish, Latvian, Estonian, German, French, Spanish, Italian, Portuguese, Japanese, Korean, Chinese, Ukrainian, Swedish, Dutch, Norwegian",
      andMore: "and more... (Coming Soon!)"
    },
    minigame: {
      title: "BRAIN SNAP!",
      startTitle: "ACTIVATE YOUR MIND!",
      startDesc: "Clicking the logo was a test... and you passed! Now, click as many jumping brains as you can in 10 seconds.",
      startBtn: "START CHALLENGE",
      levelUp: "LEVEL UP!",
      agility: "Mental agility increased",
      score: "Score",
      best: "Best",
      retry: "RETRY CHALLENGE",
      back: "BACK TO LEARNING",
      warning: "Warning: Clicking too many brains may result in extreme intelligence."
    },
    hero: {
      title: "YOUR BRAIN IS YOUR",
      superpower: "SUPERPOWER",
      subtitle: "USE IT.",
      description: "Get full access free for 7 days. Decide later.",
      emailPlaceholder: "Enter your email",
      ctaButton: "Claim 7-Day Trial",
      ready: "READY! 🚀",
      tryAgain: "TRY AGAIN!",
      vibeCheck: "Vibe check passed! Check inbox! ✨",
      backgroundQuotes: {
        system: "NEW LEARNING SYSTEM",
        curiosity: "SPARK CURIOSITY",
        skills: "BUILD REAL SKILLS",
        potential: "UNLOCK POTENTIAL",
        future: "MASTER THE FUTURE",
        thinkBigger: "THINK BIGGER",
        creativeMinds: "CREATIVE MINDS",
        reachHigher: "REACH HIGHER",
        activeLearning: "ACTIVE LEARNING",
        futureLeaders: "FUTURE LEADERS",
        innovateNow: "INNOVATE NOW",
        designLife: "DESIGN YOUR LIFE",
        limitless: "LIMITLESS"
      },
    },
    features: {
      title: "LEARNING THAT JUST",
      titleHighlight: "CLICKS",
      minigames: {
        launchMission: "LAUNCH MISSION",
        beginMission: "BEGIN MISSION",
        startAgain: "START AGAIN?",
        exit: "EXIT",
        missionFailed: "Mission Failed",
        score: "SCORE",
        level: "LVL",
        logic: {
          name: "Logic Quest",
          task: "Math Challenge",
          instruction: "Mental Agility: Select the two numbers that add up to the target value as fast as possible."
        },
        creative: {
          name: "Creative Spark",
          task: "Catch & Avoid",
          instruction: "Inspiration is fleeting: Catch the Gold Mind, but DO NOT touch the Red Void of doubt."
        },
        social: {
          name: "Social Surge",
          task: "Word Unscramble",
          instruction: "Communication: Rebuild the broken sentence. Even if you make mistakes, find the core message.",
          words: ['MINDSET', 'PERSIST', 'BRAVERY', 'LEARN']
        },
        visual: {
          name: "Visual Vision",
          task: "Path Tracing",
          instruction: "Hyper-Focus: Stay on the lines. Connect the nodes in order without going off-track."
        }
      },
      avatars: {
        creative: { name: "Creative", desc: "Explore artistic and innovative thinking" },
        logical: { name: "Logical", desc: "Develop analytical and problem-solving skills" },
        social: { name: "Social", desc: "Build communication and teamwork abilities" },
        visual: { name: "Visual", desc: "Enhance spatial and visual learning" }
      },
      growingRevenue: "Learn from Real People",
      growingRevenueDesc: "Courses built by experience, not corporations.",
      bestInClass: "Practical Skills",
      bestInClassDesc: "Apply what you learn immediately in real situations.",
      competitiveAdvantage: "Flexible Learning",
      competitiveAdvantageDesc: "Study anytime, anywhere, at your own pace.",
      growthPotential: "Career-Focused Results",
      growthPotentialDesc: "Learn skills that actually move you forward.",
      learningVirtually: "Learning That Feels Like Play",
      learningVirtuallyDesc: "Young Explorers learn through games, live activities, and guided challenges. They click, play, ask questions, and discover new ideas - all while actively participating.",
      totallyFree: "Try It Free",
      scholarshipForEveryone: "Support That Moves Students Forward",
      scholarshipForEveryoneDesc: "Programs designed to build practical skills and confidence.",
      limitedSpots: "APPLY NOW",
      trackStudentProgress: "See Learning in Action",
      trackStudentProgressDesc: "Progress is built through projects, challenges, and live interaction - so growth is visible as students create, solve, and improve.",
      realTime: "Live Progress",
      important: "IMPORTANT",
      play: "PLAY",
      masteryAchieved: "MASTERY ACHIEVED.",
      masteryDesc: "Your limits are only in your mind. By pushing through the red light, you've proven the core idea: ",
      neverGiveUp: "NEVER GIVE UP.",
      continueExploring: "CONTINUE EXPLORING",
      skillPath: "Skill Path",
      nonLinear: "Your learning is non-linear.",
      targetSum: "Target Sum",
      stayOnPath: "Stay on path: click in sequence",
      gamesDisclaimer: "These games are just for fun and demonstration! They're not connected to our actual courses - just a playful way to show what interactive learning can feel like. Real courses are way more structured and educational. 🎮",
    },
    programs: {
      title: "THE FUTURE OF LEARNING",
      subtitle: "IS",
      education: "INTERACTIVE",
      description: "Live sessions, smart challenges, and playful design - tailored for every stage of growth.",
      virtualClass: "Interactive Exploring",
      virtualClassDesc: "Click, play, ask, discover. Learning made magical.",
      studentMonitoring: "Creative Building",
      studentMonitoringDesc: "Hands-on projects and interactive lessons that stick.",
      scholarshipProgram: "Future Ready",
      scholarshipProgramDesc: "Focused learning with real impact and real results.",
    },
    pricing: {
      title: "Pricing",
      monthly: "Monthly",
      yearly: "Yearly",
      save: "(Save 20%)",
      basic: "BASIC",
      professional: "PRO",
      getStarted: "Get Started",
      getProfessional: "Get Pro",
      perMonth: "/month",
      perfectPlan: "Best for: curious beginners who want to try interactive learning.",
      idealForCreators: "Best for: students who want more guidance, and interaction.",
    },
    heroStats: {
      freeLessons: "100+ Free Lessons",
      activeStudents: "More than 500 Active Students in Our Courses",
      worldwideStudents: "1000+ Worldwide Students",
    },
    header: {
      ourCourses: "OUR ALL COURSES",
      about: "About",
      studyingProcess: "Studying Process",
      blog: "Blog",
      contact: "Contact",
      tryForFree: "Try For Free",
    },
    footer: {
      explore: "Explore",
      aboutUs: "About Us",
      ourCourses: "Our Courses",
      programs: "Programs",
      pricing: "Pricing",
      blog: "Blog",
      contact: "Contact",
      followMe: "Follow Me",
      callNewmindr: "Call newmindr",
      letsWorkTogether: "Let's work together",
      coursesTools: "Courses & Tools",
      creativeTools: "Creative tools",
      newsletter: "Newsletter",
      newsletterDescription: "Subscribe to our newsletter for the latest updates and educational resources.",
      enterEmail: "Enter your email",
      subscribe: "Subscribe",
      email: "Email",
      phone: "Phone",
      address: "Everyones hearts",
      learningPlatform: "Learning Platform",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      ignitePotential: "Ignite your Potential",
      stopConsuming: "Stop Consuming. Start Creating.",
      learning: "LEARNING",
      reimagined: "REIMAGINED.",
      brandDescription: "We're building the infrastructure for the next generation of creative minds. Interactive, immersive, and built for you.",
      locationLabel: "Location",
      loveYou: "WE LOVE YOU TOO! ❤️",
      poweredBy: "Powered by Curiosity",
      navigation: "Navigation",
      connect: "Connect"
    },
    about: {
      title: "About",
      subtitle: "newmindr",
      heroSubtitle: "Building the future of interactive learning for the next generation.",
      since2022: "Since 2022",
      missionTitle: "Our Mission",
      missionDescription: "We’re here to make learning active, engaging, and accessible - so students don’t just consume information, they take part in it. Through interactive experiences, we help learners build real skills, confidence, and curiosity at every stage.",
      scratchPrompt: "SCRATCH TO REVEAL",
      valuesTitle: "Our Values",
      innovation: "Innovation",
      innovationDesc: "We design learning experiences that feel more like games than lessons - interactive, modern, and built for how students learn today.",
      community: "Community",
      communityDesc: "Learning works better together. We create spaces where students participate, collaborate, and grow with others their age.",
      excellence: "Excellence",
      excellenceDesc: "Every class, activity, and interaction is carefully designed to deliver meaningful learning - not passive screen time.",
      achievement: "Achievement",
      achievementDesc: "Celebrating every milestone and success, no matter how small, on the path to learning.",
      creativity: "Creativity",
      creativityDesc: "Encouraging creative thinking and innovative approaches to problem-solving and learning.",
      growth: "Growth",
      growthDesc: "Empowering learners to reach new heights and unlock their full potential.",
      description1: "We're on a mission to revolutionize education and make learning accessible, engaging, and transformative for everyone, everywhere.",
      description2: "At newmindr, we believe that education should be a journey of discovery, not a destination. Our platform combines innovative technology with proven pedagogical methods to create learning experiences that truly unlock potential.",
      activeStudents: "Active Students",
      freeLessons: "Free Lessons",
      worldwideStudents: "Worldwide Students",
      cta: "Start Your Journey",
      services: {
        education: "Education",
        learning: "Learning",
        courses: "Courses",
        programs: "Programs",
        more: "& more"
      },
      ecosystem: {
        title: "Our Ecosystem",
        philosophy: "Philosophy",
        philosophyQuote: "We are flipping the script.",
        philosophyDesc: "Our platform isn't about memorizing facts. It's about engagement, curiosity, and real-world application. Discover how we're changing the game.",
        methodology: "Methodology",
        methodologyQuote: "Hands on. Minds on.",
        methodologyDesc: "Why just read when you can do? Interactive challenges, games, and live feedback make learning stick. See our OS in action.",
        structure: "Structure",
        structureQuote: "Tailored for every stage.",
        structureDesc: "From playful exploration for kids to career-ready skills for teens. Our curriculum adapts to age and mindset. Explore the tracks.",
        impact: "Impact",
        impactQuote: "Skills that matter.",
        impactDesc: "Long-term growth through structured paths. Mentorship, code reviews, and real projects. Inspect the source of our success."
      },
      who: {
        title: "Who It's For",
        students: "Students (8-19)",
        studentsDesc: "Ideally suited for curious minds who want to move beyond passive textbooks.",
        parents: "Parents",
        parentsDesc: "For parents seeking a safe, educational environment that builds tangible skills."
      },
      popups: {
        education: {
          title: "A New Way to Think About Education",
          desc1: "Education shouldn't be passive or one-size-fits-all.",
          desc2: "We focus on learning through participation - where students actively engage, experiment, and grow instead of just watching.",
          diffTitle: "What makes it different:",
          diff1: "Active learning instead of lectures",
          diff2: "Designed for real attention spans",
          diff3: "Built around curiosity, not memorization"
        },
        learning: {
          title: "Learning by Doing",
          desc1: "Learning on our platform is interactive from start to finish.",
          desc2: "Students participate in live activities, games, and challenges that turn understanding into experience.",
          insideTitle: "Inside a session:",
          inside1: "Real-time interaction",
          inside2: "Guided activities",
          inside3: "Immediate feedback",
          inside4: "Age-appropriate pacing"
        },
        courses: {
          title: "Courses Built for Every Stage",
          desc1: "Our courses are designed around age and mindset - not just subjects.",
          desc2: "Each course blends play, structure, and challenge depending on the learner’s level.",
          ageGroups: "Age Groups",
          group1: "Playful exploration & curiosity",
          group2: "Hands-on projects & problem solving",
          group3: "Focused learning & real-world skills"
        },
        programs: {
          comment: "// Programs That Go Deeper",
          desc: "Programs are structured, long-term options for students who want to master a subject.",
          item1: "Live instructor-led classes",
          item2: "Guided learning paths",
          item3: "Progress feedback"
        },
        more: {
          title: "More About Us",
          founded: "Founded in 2022, we’re building a learning platform designed for the next generation.",
          includes: "Also includes:",
          missionValues: "Our mission & values",
          whoItsFor: "Who it’s for",
          designPhil: "Design Philosophy",
          location: "Location",
          missionValuesTitle: "Mission & Values",
          ourMissionLabel: "Our Mission",
          missionShortDesc: "We’re here to make learning active, engaging, and accessible.",
          designPhilosophyDesc: "We believe that screen time can be active, not passive.",
          designPhil1: "Interaction First",
          designPhil2: "Gamified Progress",
          designPhil3: "Social Learning",
          whoItsForTitle: "Who It's For",
          whoItsForDesc: "Students & Parents."
        }
      }
    },
    contact: {
      title: "Get in Touch",
      chatTitle: "Chat to us:",
      chatDescription: "Our friendly team is here to help.",
      visitTitle: "Visit us:",
      visitDescription: "Come say hello at our office HQ.",
      callTitle: "Call us:",
      callDescription: "Mon-Fri from 8am to 5pm.",
      headline: "Got ideas? We've got the skills. Let's team up.",
      subheadline: "Tell us more about yourself and what you've got in mind.",
      fullName: "Full Name",
      emailAddress: "Email Address",
      yourMessage: "Your Message",
      dogAlt: "Dog",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      messagePlaceholder: "Tell us a little about the project...",
      helpTitle: "How can we help?",
      websiteDesign: "I'M A STUDENT",
      uxDesign: "I'M A PARENT",
      userResearch: "I REPRESENT A COMPANY",
      contentCreation: "SOMETHING'S NOT WORKING",
      strategyConsulting: "PAYMENTS & BILLING",
      other: "GENERAL QUESTION",
      submitButton: "Let's get started!",
      successTitle: "Message Successfully Sent!",
      successMessage: "Thank you for reaching out! We'll get back to you as soon as possible.",
      sendAnother: "Send Another Message"
    },
    studyingProcess: {
      howItWorks: "How It Works",
      learningRoadmap: "THE LEARNING ROADMAP",
      interactiveJourney: "Forget passive lectures. This is an interactive journey where you take control.",
      steps: {
        step1: {
          title: "Spark Curiosity",
          description: "It starts with a hook. Not a lecture, but a challenge. We present a problem that makes you ask 'How?' before we ever tell you 'What'.",
          action: "Click to Ignite the Spark"
        },
        step2: {
          title: "Active Immersion",
          description: "Jump into the deep end. You start doing immediately. Simulators, coding environments, and interactive canvases replace text editors.",
          action: "Dive In"
        },
        step3: {
          title: "Collaborative Friction",
          description: "Learning is social. You test your ideas against others. Live debates, team sprints, and peer feedback loops create deeper understanding.",
          action: "Join the Team"
        },
        step4: {
          title: "Instant Feedback",
          description: "No waiting for grades. The environment reacts to you. Pass unit tests, unlock levels, or crash the simulation-feedback is immediate.",
          action: "Get Results"
        },
        step5: {
          title: "Mastery & Growth",
          description: "You don't just memorize, you master. Skills are verified through creation, leading to a portfolio of real work, not just a report card.",
          action: "Claim Mastery"
        }
      },
      completed: "Completed",
      journeyUnlocked: "Journey Unlocked!",
      experienceReal: "You understand the process. Now experience it for real.",
      startFirstClass: "Start Your First Class",
      modal: {
        back: "Back",
        readyToStart: "Ready to Start?",
        choosePath: "Choose how you want to begin your journey.",
        startFreeTrial: "Start Free Trial",
        sevenDays: "7 Days",
        or: "OR",
        buyNow: "Buy Now",
        trial: {
          title: "Start Your Free Trial",
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email Address",
          phone: "Phone Number",
          optional: "(Optional)",
          activate: "Activate 7-Day Trial",
          noCreditCard: "Only available to new users"
        },
        buy: {
          title: "Choose Your Plan",
          basic: {
            title: "BASIC",
            desc: "Explore & Get Started. Best for: curious beginners who want to try interactive learning.",
            features: [
              "Access to interactive learning games and classes",
              "Self-paced activities & challenges",
              "Age-appropriate learning paths",
              "Community access"
            ],
            notIncluded: "Not included: live instructor-led classes",
            button: "Get Started"
          },
          pro: {
            title: "PRO",
            desc: "Learn Live. Build Real Skills. Best for: students who want more guidance, and interaction.",
            features: [
              "Everything in Basic",
              "Live interactive classes with instructors",
              "Real-time participation (games, challenges, teamwork)",
              "Guided learning paths by age group",
              "Continuous feedback during sessions",
              "Priority access to new features"
            ],
            button: "Get Pro"
          }
        }
      }
    },
    infoModal: {
      gotIt: "Got it!",
      about: {
        title: "About newmindr",
        subtitle: "Building the next generation of creators",
        intro: "At newmindr, we believe that the traditional education system is struggling to keep up with the pace of technology. We're here to bridge that gap.",
        missionTitle: "Our Mission",
        missionDesc: "To empower students with practical, future-ready skills through immersive learning and creation.",
        methodTitle: "Our Method",
        methodDesc: "Project-based learning, zero-pressure environment, and mentorship from industry experts.",
        footer: "Join over 1,000+ students worldwide who are already building their futures today."
      },
      programs: {
        title: "Our Programs",
        subtitle: "Custom-built for every age group",
        youngExplorers: "Young Explorers (8-12)",
        youngExplorersDesc: "Gamified learning focusing on logic, storytelling, and basic tech literacy.",
        teenInnovators: "Teen Innovators (13-16)",
        teenInnovatorsDesc: "Practical workshops in design, coding, and collaborative projects.",
        futureLeaders: "Future Leaders (17-19)",
        futureLeadersDesc: "Advanced tracks in AI, automation, leadership, and startup building."
      },
      pricing: {
        title: "Pricing Plans",
        subtitle: "Transparent and flexible for everyone",
        monthly: "Monthly",
        yearly: "Yearly",
        save: "Save 20%",
        basic: {
          title: "Basic Plan",
          desc: "Complete access to interactive library and self-paced tracks.",
          feature1: "Infinite Games",
          feature2: "Global Community"
        },
        pro: {
          title: "PRO",
          desc: "Daily live workshops with dedicated industry instructors.",
          feature1: "1-on-1 Mentorship",
          feature2: "Portfolio Building",
          badge: "Best Value"
        }
      },
      contact: {
        title: "Contact Us",
        subtitle: "We're here to help you grow",
        directContact: "Direct Contact",
        ourStudio: "Our Studio",
        visitSocial: "Visit our social media",
        socialDesc: "Follow us for daily tips and student highlights!",
        address: "YOUR HEARTS"
      }
    },
    coursesModal: {
      title: "Our All Courses",
      subtitle: "Discover the perfect learning path for every age and interest.",
      groups: {
        "8-12": {
          age: "8–12 Years",
          theme: "Explorers & Creators",
          list: [
            "Coding Stories", "Comic & Visual Storytelling", "Creative Writing Studio",
            "Design & Creativity Lab", "Digital Builder Lab", "Game Creator Studio",
            "How Things Work", "Logic Quest", "Math Adventures", "Mini Scientists (Digital Lab)",
            "Nature & Earth Explorer", "Problem Solvers Lab", "Space Explorers",
            "Speak & Share", "Tech Smarts", "Thinking Like a Pro", "and more!"
          ]
        },
        "13-16": {
          age: "13–16 Years",
          theme: "Innovators & Builders",
          list: [
            "AI & Future Tech Explorer", "Change-Making Projects", "Code Your First App",
            "Confident Public Speaking", "Creative Portfolio Sprint", "Debate & Critical Thinking",
            "Engineering & Robotics Basics", "Idea to Startup", "Leadership in Teams",
            "Marketing & Branding for Teens", "Money, Projects & Smart Decisions",
            "Music & Sound Creation", "Pitch Like a Founder", "Science Experiments That Matter",
            "Storytelling for Games & Film", "Visual Design Lab", "and more!"
          ]
        },
        "17-19": {
          age: "17–19 Years",
          theme: "Future Leaders",
          list: [
            "AI Tools & Promptcraft", "Automation & No-Code Systems", "Biotech & Health Explorations",
            "Brand Design Studio", "Cybersecurity Essentials", "Data Science Foundations",
            "Digital Illustration & Visual Style", "Engineering Design Challenge",
            "Leadership and Negotiation", "Marketing & Content Strategy", "Physics of Everyday Tech",
            "Short Film & Storytelling", "Social Impact Lab", "Startup Idea to MVP",
            "UX & Product Design Sprint", "Web App Builder", "and more!"
          ]
        }
      }
    },
    legal: {
      privacy: {
        title: "Privacy Policy",
        lastUpdated: "December 30, 2025",
        intro: "At newmindr., we are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy describes how we collect, use, process, and disclose your information, including personal information, in conjunction with your access to and use of our platform.",
        sections: [
          {
            title: "1. Information We Collect",
            content: "We collect several types of information from and about users of our Website, including information by which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline.",
            list: [
              "Information you provide directly to us (registration, profile, communication).",
              "Information collected automatically (usage data, cookies, IP addresses).",
              "Information from third-party sources (social login, partners)."
            ]
          },
          {
            title: "2. Use of Your Information",
            content: "We use information that we collect about you or that you provide to us, including any personal information:",
            list: [
              "To provide and improve our educational services.",
              "To process transactions and manage your account.",
              "To respond to your inquiries and offer support.",
              "To personalize your learning experience.",
              "To communicate important updates and promotional content.",
              "To ensure the security and integrity of our platform."
            ]
          },
          {
            title: "3. Data Protection and Security",
            content: "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential."
          },
          {
            title: "4. Disclosure of Your Information",
            content: "We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential."
          },
          {
            title: "5. Your Rights and Choices",
            content: "You have the right to access, update, or delete the information we have on you. Whenever made possible, you can access, update or request deletion of your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you."
          },
          {
            title: "6. Data Retention",
            content: "We retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies."
          },
          {
            title: "7. International Transfer of Data",
            content: "Your information, including Personal Data, may be transferred to - and maintained on - computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer."
          },
          {
            title: "8. Cookie Policy",
            content: "Our Website uses \"Cookies\" to identify the areas of our Website that you have visited. A Cookie is a small piece of data stored on your computer or mobile device by your web browser. We use Cookies to personalize the Content that you see on our Website. Most web browsers can be set to disable the use of Cookies. However, if you disable Cookies, you may not be able to access functionality on our Website correctly or at all. We never place Personally Identifiable Information in Cookies."
          },
          {
            title: "9. Changes to This Privacy Policy",
            content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
          },
          {
            title: "10. Contact Us",
            content: "If you have any questions about this Privacy Policy, please contact us at legal@newmindr.edu."
          }
        ],
        footer: "© 2025 newmindr. All rights reserved. Precise compliance with GDPR, CCPA, and international data protection standards."
      },
      terms: {
        title: "Terms of Service",
        lastUpdated: "December 30, 2025",
        intro: "PLEASE READ THESE TERMS OF SERVICE CAREFULLY. BY ACCESSING OR USING THE NEWMINDR. PLATFORM, YOU AGREE TO BE BOUND BY THESE TERMS AND ALL TERMS INCORPORATED BY REFERENCE.",
        sections: [
          {
            title: "1. Acceptance of Terms",
            content: "By using newmindr. (the \"Platform\"), you agree to these Terms of Service. If you do not agree to all of these terms, do not use the Platform. We reserve the right to change or modify these Terms at any time and in our sole discretion."
          },
          {
            title: "2. Eligibility and Account",
            content: "To use certain features of the Platform, you must register for an account. By creating an account, you agree to:",
            list: [
              "Provide accurate, current, and complete information.",
              "Maintain the security of your password and accept all risks of unauthorized access to your account.",
              "Promptly notify us if you discover or otherwise suspect any security breaches related to the Platform."
            ]
          },
          {
            title: "3. Intellectual Property Rights",
            content: "Unless otherwise indicated by us, the Platform and all content and other materials contained therein, including, without limitation, the newmindr. logo and all designs, text, graphics, pictures, information, data, software, sound files, other files and the selection and arrangement thereof (collectively, \"Content\") are the proprietary property of newmindr. or our licensors."
          },
          {
            title: "4. User Conduct",
            content: "You agree that you will not violate any law, contract, intellectual property or other third-party right or commit a tort, and that you are solely responsible for your conduct while accessing or using our Platform. You agree that you will abide by these Terms and will not:",
            list: [
              "Use the Platform for any illegal or unauthorized purpose.",
              "Engage in any harassing, threatening, intimidating, predatory or stalking conduct.",
              "Attempt to circumvent any content-filtering techniques we employ.",
              "Develop or use any third-party applications that interact with the Platform without our prior written consent."
            ]
          },
          {
            title: "5. Payments and Subscriptions",
            content: "Some aspects of the Platform may be provided for a fee. If you choose to use paid aspects of the Platform, you agree to the pricing and payment terms, as we may update them from time to time. newmindr. may add new services for additional fees and charges, or amend fees and charges for existing services, at any time in its sole discretion."
          },
          {
            title: "6. Limitation of Liability",
            content: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEWMINDR. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES."
          },
          {
            title: "7. Indemnification",
            content: "You agree to defend, indemnify and hold harmless newmindr., our independent contractors, service providers and consultants, and our respective directors, employees and agents, from and against any claims, damages, costs, liabilities and expenses arising out of or related to your use of the Platform."
          },
          {
            title: "8. Termination",
            content: "Notwithstanding any of these Terms, newmindr. reserves the right, without notice and in its sole discretion, to terminate your license to use the Platform, and to block or prevent your future access to and use of the Platform."
          },
          {
            title: "9. Severability",
            content: "If any provision of these Terms shall be deemed unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions."
          },
          {
            title: "10. Governing Law and Jurisdiction",
            content: "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which newmindr. is headquartered, without giving effect to any principles of conflicts of law."
          }
        ],
        footer: "BY USING THIS PLATFORM, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND AGREE TO BE BOUND BY THEM. FAILURE TO COMPLY WITH THESE TERMS MAY RESULT IN IMMEDIATE TERMINATION OF YOUR ACCOUNT."
      }
    },
    devPopup: {
      badge: "Coming Soon",
      title: "We're Building Something Amazing!",
      subtitle: "The future of interactive learning is almost here.",
      description: "We're in active development and will be launching very soon! Reserve your spot now and be among the first to experience the next generation of learning.",
      emailLabel: "Your Email",
      emailPlaceholder: "you@example.com",
      ctaButton: "Reserve My Spot",
      skipButton: "I'll check back later",
      successTitle: "You're In!",
      successMessage: "We'll notify you as soon as we launch. Get ready! 🚀"
    },
    validation: {
      required: "Please fill out this field",
      invalidEmail: "Please enter a valid email address"
    },
    emails: {
      newsletter: {
        subject: "Welcome to the newmindr. newsletter! 💌",
        title: "You're In!",
        greeting: "Thanks for subscribing to the <b>newmindr.</b> newsletter.",
        content: "You'll be the first to know about new interactive courses, learning roadmap updates, and exclusive tips for your negotiation and leadership skills.",
        footer: "newmindr. Learning Reimagined"
      },
      trial: {
        subject: "Your 7-Day Free Trial is Active! 🚀",
        title: "Ready to Learn?",
        greeting: "Hi {name},",
        subGreeting: "Your 7-day free trial at <b>newmindr.</b> is officially active!",
        content: "You now have full access to our interactive learning roadmap and premium course content.",
        cta: "START LEARNING NOW",
        disclaimer: "No credit card required for your trial. Enjoy!"
      },
      contact: {
        subject: "New Message from Contact Form: {name} 📩",
        title: "New Message from Contact Form",
        name: "Name",
        email: "Email",
        help: "Help Needed With",
        message: "Message",
        footer: "Submitted via newmindr.com",
        unsubscribe: "Don't want to get newsletters? UNSUBSCRIBE"
      }
    },
    blog: {
      title: "NEWMINDR",
      subtitle: "More than just learning. It's an evolution.",
      scanning: "LATEST UPDATES...",
      pulse: "FEATURED STORIES",
      activeFeed: "FEED",
      distributed: "DISTRIBUTED",
      loadMore: "Loading more...",
      readArticle: "Read Article",
      readMore: "Read More",
      posts: [
        {
          id: 1,
          platform: "Insights",
          title: "Why Interactive Learning Is On The Rise",
          content: "70% better retention. 300% more engagement. The data is clear: static textbook learning is obsolete. Here is the future.",
          image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop",
          date: "Jan 2, 2026",
          likes: "12k",
          comments: "340",
          url: "/blog/interactive-rise"
        },
        {
          id: 2,
          platform: "Education",
          title: "Why Students Fail (And How We're Changing That)",
          content: "30% fail due to lack of engagement. 45% struggle with traditional methods. Discover the shocking statistics and how interactive learning is revolutionizing education.",
          image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop",
          date: "Jan 4, 2026",
          likes: "15k",
          comments: "520",
          url: "/blog/why-students-fail"
        }
      ]
    }
  },
  lt: {
    seo: {
      title: "newmindr. Interaktyvus mokymasis"
    },
    cookies: {
      title: "NAUDOJAME SLAPUKUS",
      description: "Naudojame slapukus, kad pagerintume jūsų naršymo patirtį, analizuotume svetainės srautą ir pateiktume personalizuotą turinį. Spustelėdami „Sutinku su visais“, sutinkate su mūsų slapukų naudojimu.",
      accept: "SUTINKU SU VISAIS",
      decline: "ATMESTI",
      settings: "NUSTATYMAI",
      privacyPolicy: "Privatumo politika"
    },
    popups: {
      awesome: "NUOSTABU!",
      current: "Dabartinė",
      globalLearning: "Globalus mokymasis",
      availableLanguages: "Prieinamos kalbos",
      comingSoonList: "Lenkų, Latvių, Estų, Vokiečių, Prancūzų, Ispanų, Italų, Portugalų, Japonų, Korėjiečių, Kinų, Ukrainiečių, Švedų, Olandų, Norvegų",
      andMore: "ir dar daugiau... (Netrukus!)"
    },
    minigame: {
      title: "BRAIN SNAP!",
      startTitle: "AKTYVUOK PROTĄ!",
      startDesc: "Logotipo paspaudimas buvo testas... ir jūs jį išlaikėte! Dabar per 10 sekundžių spustelėkite kuo daugiau šokinėjančių smegenų.",
      startBtn: "PRADĖTI IŠŠŪKĮ",
      levelUp: "NAUJAS LYGIS!",
      agility: "Protinis miklumas padidėjo",
      score: "Rezultatas",
      best: "Geriausias",
      retry: "BANDYTI DAR KARTĄ",
      back: "GRĮŽTI Į MOKSLUS",
      warning: "Įspėjimas: per didelis smegenų kiekis gali sukelti ekstremalų intelektą."
    },
    hero: {
      title: "TAVO SMEGENYS YRA TAVO",
      superpower: "SUPERGALIA",
      subtitle: "IŠNAUDOK JAS.",
      description: "Gauk pilną prieigą nemokamai 7 dienas. Nuspręsk vėliau.",
      emailPlaceholder: "Įvesk savo el. paštą",
      ctaButton: "Gauti 7 dienų bandymą",
      ready: "PARUOŠTA! 🚀",
      tryAgain: "BANDYKITE DAR KARTĄ!",
      vibeCheck: "Patikra sėkminga! Tikrinkite el. paštą! ✨",
      backgroundQuotes: {
        system: "NAUJA MOKYMOSI SISTEMA",
        curiosity: "ŽADINK SMALSUMĄ",
        skills: "KURK TIKRUS ĮGŪDŽIUS",
        potential: "ATSKLEISK POTENCIALĄ",
        future: "VALDYK ATEITĮ",
        thinkBigger: "MĄSTYK PLAČIAU",
        creativeMinds: "KŪRYBINGI PROTAI",
        reachHigher: "SIEK AUKŠČIAU",
        activeLearning: "AKTYVUS MOKYMASIS",
        futureLeaders: "ATEITIES LYDERIAI",
        innovateNow: "INOVUOK DABAR",
        designLife: "KŪRK SAVO GYVENIMĄ",
        limitless: "BE RIBŲ"
      },
    },
    features: {
      title: "MOKYMASIS, KURIS TIESIOG",
      titleHighlight: "PAVYKSTA",
      minigames: {
        launchMission: "PRADĖTI MISIJĄ",
        beginMission: "PRADĖTI",
        startAgain: "BANDYTI DAR KARTĄ?",
        exit: "IŠEITI",
        missionFailed: "Misija nepavyko",
        score: "REZULTATAS",
        level: "LYGIS",
        logic: {
          name: "Logikos iššūkis",
          task: "Matematikos testas",
          instruction: "Protinis miklumas: kuo greičiau pasirinkite du skaičius, kurių suma lygi tikslui."
        },
        creative: {
          name: "Kūrybinė kibirkštis",
          task: "Gaudyk ir venk",
          instruction: "Įkvėpimas yra trumpalaikis: pagauk auksinę mintį, bet NELIESK raudonos abejonių tuštumos."
        },
        social: {
          name: "Socialinis proveržis",
          task: "Žodžių sudėliojimas",
          instruction: "Komunikacija: atkurkite sakinį. Net jei klystate, raskite pagrindinę žinutę.",
          words: ['MĄSTYMAS', 'SIEKTI', 'DRĄSA', 'MOKYTIS']
        },
        visual: {
          name: "Vizualinė vizija",
          task: "Kelio sekimas",
          instruction: "Didelis susikaupimas: likite linijose. Sujunkite mazgus eilės tvarka neišklysdami iš kelio."
        }
      },
      avatars: {
        creative: { name: "Kūrybiškumas", desc: "Tyrinėkite meninį ir inovatyvų mąstymą" },
        logical: { name: "Logika", desc: "Ugdyti analitinius ir problemų sprendimo įgūdžius" },
        social: { name: "Socialumas", desc: "Ugdyti bendravimo ir komandinio darbo gebėjimus" },
        visual: { name: "Vizualumas", desc: "Gerinti erdvinį ir vizualinį mokymąsi" }
      },
      important: "SVARBU",
      play: "ŽAISTI",
      masteryAchieved: "MEISTRYSTĖ PASIEKTA.",
      masteryDesc: "Tavo ribos yra tik tavo galvoje. Įveikęs sunkumus, įrodei pagrindinę idėją: ",
      neverGiveUp: "NIEKADA NEPASIDUOK.",
      continueExploring: "TĘSTI TYRINĖJIMĄ",
      skillPath: "Įgūdžių kelias",
      nonLinear: "Tavo mokymasis nėra linijinis.",
      targetSum: "Tikslinė suma",
      stayOnPath: "Likite kelyje: spauskite eilės tvarka",
      gamesDisclaimer: "Šie žaidimai skirti tik pramogai ir demonstracijai! Jie nesusiję su mūsų tikraisiais kursais - tai tik žaismingas būdas parodyti, kaip gali atrodyti interaktyvus mokymasis. Tikri kursai yra daug labiau struktūruoti ir edukaciniai. 🎮",
      growingRevenue: "Mokykis iš tikrų žmonių",
      growingRevenueDesc: "Kursai, kuriuos kuria patirtis, o ne korporacijos.",
      bestInClass: "Praktiniai įgūdžiai",
      bestInClassDesc: "Pritaikyk tai, ką išmokai, realiose situacijose iškart.",
      competitiveAdvantage: "Lankstus mokymasis",
      competitiveAdvantageDesc: "Mokykis bet kada, bet kur ir savo tempu.",
      growthPotential: "Karjeros rezultatai",
      growthPotentialDesc: "Išmok įgūdžių, kurie iš tikrųjų veda tave į priekį.",
      learningVirtually: "Mokymasis kaip žaidimas",
      learningVirtuallyDesc: "Jaunieji atradėjai mokosi per žaidimus, gyvas veiklas ir vadovaujamus iššūkius. Jie spaudžia, žaidžia, klausia ir atranda naujas idėjas – aktyviai dalyvaudami.",
      totallyFree: "Išbandyk nemokamai",
      scholarshipForEveryone: "Parama, judinanti į priekį",
      scholarshipForEveryoneDesc: "Programos, skirtos praktiniams įgūdžiams ir pasitikėjimui ugdyti.",
      limitedSpots: "KREIPTIS DABAR",
      trackStudentProgress: "Mokymasis veiksme",
      trackStudentProgressDesc: "Progresas kuriamas per projektus, iššūkius ir gyvą bendravimą – todėl augimas matomas, kai mokiniai kuria, sprendžia ir tobulėja.",
      realTime: "Gyvas progresas",
    },
    programs: {
      title: "MOKYMOSI ATEITIS",
      subtitle: "YRA",
      education: "INTERAKTYVI",
      description: "Gyvos sesijos, protingi iššūkiai ir žaismingas dizainas – pritaikyta kiekvienam augimo etapui.",
      virtualClass: "Interaktyvus Tyrinėjimas",
      virtualClassDesc: "Spausk, žaisk, klausk, atrask. Mokymasis tampa magija.",
      studentMonitoring: "Kūrybinis Konstravimas",
      studentMonitoringDesc: "Praktiniai projektai ir interaktyvios pamokos, kurios įsimena.",
      scholarshipProgram: "Ateities lyderiai",
      scholarshipProgramDesc: "Fokusuotas mokymasis su realiu poveikiu ir rezultatais.",
    },
    pricing: {
      title: "Kainos",
      monthly: "Mėnesinis",
      yearly: "Metinis",
      save: "(Sutaupykite 20%)",
      basic: "Atrask ir Pradėk",
      professional: "Mokykis gyvai. Kurk įgūdžius.",
      getStarted: "Pradėti",
      getProfessional: "Gauti Profesionalų",
      perMonth: "/mėn",
      perfectPlan: "Geriausia: smalsiems pradedantiesiems, norintiems išbandyti interaktyvų mokymąsi.",
      idealForCreators: "Geriausia: mokiniams, norintiems daugiau vadovavimo ir bendravimo.",
    },
    heroStats: {
      freeLessons: "100+ Nemokamų pamokų",
      activeStudents: "Daugiau nei 500 aktyvių mokinių",
      worldwideStudents: "1000+ Studentų visame pasaulyje",
    },
    header: {
      ourCourses: "Visi kursai",
      about: "Apie",
      studyingProcess: "Mokymosi procesas",
      blog: "Tinklas",
      contact: "Kontaktai",
      tryForFree: "Išbandyti nemokamai",
    },
    footer: {
      explore: "Naršyti",
      aboutUs: "Apie mus",
      ourCourses: "Mūsų kursai",
      programs: "Programos",
      pricing: "Kainos",
      blog: "Tinklas",
      contact: "Kontaktai",
      followMe: "Sekite mus",
      callNewmindr: "Skambinti newmindr",
      letsWorkTogether: "Dirbkime kartu",
      coursesTools: "Kursai ir įrankiai",
      creativeTools: "Kūrybiniai įrankiai",
      newsletter: "Naujienlaiškis",
      newsletterDescription: "Prenumeruokite naujienlaiškį, kad gautumėte naujausius atnaujinimus ir švietimo išteklius.",
      enterEmail: "Įvesk el. paštą",
      subscribe: "Prenumeruoti",
      email: "El. paštas",
      phone: "Telefonas",
      address: "Visų širdyse",
      learningPlatform: "Mokymosi platforma",
      privacyPolicy: "Privatumo politika",
      termsOfService: "Paslaugų teikimo sąlygos",
      cookiePolicy: "Slapukų politika",
      ignitePotential: "Atskleisk Savo Potencialą",
      stopConsuming: "Nustok Vartoti. Pradėk Kurti.",
      learning: "MOKYMASIS",
      reimagined: "IŠ NAUJO.",
      brandDescription: "Mes kuriame infrastruktūrą sekančiai kūrybingų protų kartai. Interaktyvu, įtraukiantį ir sukurta tau.",
      locationLabel: "Vieta",
      loveYou: "MES TAIP PAT TAVE MYLIME! ❤️",
      poweredBy: "Sukurta Smalsumo",
      navigation: "Navigacija",
      connect: "Susisiekime"
    },
    about: {
      title: "Apie",
      subtitle: "newmindr",
      heroSubtitle: "Kuriame interaktyvaus mokymosi ateitį sekančiai kartai.",
      since2022: "Nuo 2022 m.",
      missionTitle: "Mūsų misija",
      missionDescription: "Mes čia tam, kad mokymasis būtų aktyvus, įtraukiantis ir prieinamas – kad mokiniai ne tik vartotų informaciją, bet ir joje dalyvautų. Per interaktyvias patirtis padedame mokiniams ugdyti tikrus įgūdžius, pasitikėjimą ir smalsumą kiekviename etape.",
      scratchPrompt: "NUTRINK, KAD PAMATYTUM",
      valuesTitle: "Mūsų vertybės",
      innovation: "Inovacijos",
      innovationDesc: "Kuriame mokymosi patirtis, kurios labiau primena žaidimus nei pamokas – interaktyvios, modernios ir sukurtos taip, kaip mokiniai mokosi šiandien.",
      community: "Bendruomenė",
      communityDesc: "Mokytis geriau kartu. Kuriame erdves, kuriose mokiniai dalyvauja, bendradarbiauja ir auga su savo bendraamžiais.",
      excellence: "Kokybė",
      excellenceDesc: "Kiekviena klasė, veikla ir sąveika yra kruopščiai sukurta, kad suteiktų prasmingą mokymąsi – ne pasyvų laiką prie ekrano.",
      achievement: "Pasiekimai",
      achievementDesc: "Švenčiame kiekvieną pasiekimą ir sėkmę, kad ir kokia maža ji būtų.",
      creativity: "Kūrybiškumas",
      creativityDesc: "Skatiname kūrybinį mąstymą ir novatoriškus problemų sprendimo būdus.",
      growth: "Augimas",
      growthDesc: "Įgaliname mokinius pasiekti naujų aukštumų ir atskleisti savo pilną potencialą.",
      description1: "Mes siekiame revoliucionizuoti švietimą ir padaryti mokymąsi prieinamą, įtraukiantį ir transformuojantį.",
      description2: "newmindr tikime, kad švietimas turėtų būti atradimų kelionė. Mūsų platforma sujungia inovatyvią technologiją su patikrintais metodais.",
      activeStudents: "Aktyvūs mokiniai",
      freeLessons: "Nemokamų pamokų",
      worldwideStudents: "Mokiniai visame pasaulyje",
      cta: "Pradėti kelionę",
      services: {
        education: "Švietimas",
        learning: "Mokymasis",
        courses: "Kursai",
        programs: "Programos",
        more: "& daugiau"
      },
      ecosystem: {
        title: "Mūsų Ekosistema",
        philosophy: "Filosofija",
        philosophyQuote: "Mes verčiame puslapį.",
        philosophyDesc: "Mūsų platforma nėra skirta faktų kalimui. Tai apie įsitraukimą, smalsumą ir pritaikymą realiame pasaulyje. Atraskite, kaip mes keičiame žaidimą.",
        methodology: "Metodologija",
        methodologyQuote: "Rankos dirba. Protai veikia.",
        methodologyDesc: "Kam skaityti, kai gali daryti? Interaktyvūs iššūkiai, žaidimai ir gyvas grįžtamasis ryšys paverčia mokymąsi įsimintinu. Pamatykite mūsų OS veiksme.",
        structure: "Struktūra",
        structureQuote: "Pritaikyta kiekvienam etapui.",
        structureDesc: "Nuo žaismingo tyrinėjimo vaikams iki karjerai skirtų įgūdžių paaugliams. Mūsų programos prisitaiko prie amžiaus ir mąstysenos.",
        impact: "Poveikis",
        impactQuote: "Įgūdžiai, kurie svarbūs.",
        impactDesc: "Ilgalaikis augimas per struktūruotus kelius. Mentorystė, kodo peržiūros ir realūs projektai."
      },
      who: {
        title: "Kam tai skirta",
        students: "Mokiniai (8-19)",
        studentsDesc: "Idealiai tinka smalsiems protams, norintiems daugiau nei pasyvių vadovėlių.",
        parents: "Tėvai",
        parentsDesc: "Tėvams, ieškantiems saugios, ugdančios aplinkos, kuri formuoja apčiuopiamus įgūdžius."
      },
      popups: {
        education: {
          title: "Naujas požiūris į švietimą",
          desc1: "Švietimas neturi būti pasyvus ar vienodas visiems.",
          desc2: "Mes fokusuojamės į mokymąsi per dalyvavimą – kai mokiniai aktyviai įsitraukia, eksperimentuoja ir auga, o ne tik stebi.",
          diffTitle: "Kuo mes skirtingi:",
          diff1: "Aktyvus mokymasis vietoje paskaitų",
          diff2: "Sukurta tikram dėmesio išlaikymui",
          diff3: "Paremtas smalsumu, ne kalimu"
        },
        learning: {
          title: "Mokymasis Darant",
          desc1: "Mokymasis mūsų platformoje yra interaktyvus nuo pat pradžių.",
          desc2: "Mokiniai dalyvauja gyvose veiklose, žaidimuose ir iššūkiuose, kurie paverčia supratimą patirtimi.",
          insideTitle: "Sesijos viduje:",
          inside1: "Bendraavimas realiu laiku",
          inside2: "Vadovaujamos veiklos",
          inside3: "Momentinis grįžtamasis ryšys",
          inside4: "Tempas pagal amžių"
        },
        courses: {
          title: "Kursai Kiekvienam Etapui",
          desc1: "Mūsų kursai sukurti pagal amžių ir mąstyseną, ne tik pagal dalykus.",
          desc2: "Kiekvienas kursas sujungia žaidimą, struktūrą ir iššūkį, priklausomai nuo mokinio lygio.",
          ageGroups: "Amžiaus Grupės",
          group1: "Žaismingas tyrinėjimas ir smalsumas",
          group2: "Praktiniai projektai ir problemų sprendimas",
          group3: "Fokusuotas mokymasis ir realūs įgūdžiai"
        },
        programs: {
          comment: "// Programos, kurios eina giliau",
          desc: "Programos yra struktūruotos, ilgalaikės galimybės studentams, norintiems įsisavinti dalyką.",
          item1: "Gyvos instruktorių pamokos",
          item2: "Vadovaujami mokymosi keliai",
          item3: "Pažangos grįžtamasis ryšys"
        },
        more: {
          title: "Daugiau Apie Mus",
          founded: "Įkurta 2022 m., mes kuriame mokymosi platformą, skirtą sekančiai kartai.",
          includes: "Taip pat apima:",
          missionValues: "Mūsų misija ir vertybės",
          whoItsFor: "Kam tai skirta",
          designPhil: "Dizaino filosofija",
          location: "Vieta",
          missionValuesTitle: "Misija ir vertybės",
          ourMissionLabel: "Mūsų misija",
          missionShortDesc: "Mes esame čia, kad mokymasis taptų aktyvus, įtraukiantis ir prieinamas.",
          designPhilosophyDesc: "Mes tikime, kad laikas prie ekrano gali būti aktyvus, o ne pasyvus.",
          designPhil1: "Svarbiausia – interakcija",
          designPhil2: "Žaidybinis progresas",
          designPhil3: "Socialinis mokymasis",
          whoItsForTitle: "Kam tai skirta",
          whoItsForDesc: "Mokiniams ir tėvams."
        }
      }
    },
    contact: {
      title: "Susisiekite",
      chatTitle: "Parašyk mums:",
      chatDescription: "Mūsų draugiška komanda pasiruošusi padėti.",
      visitTitle: "Aplankyk mus:",
      visitDescription: "Užeik pasisveikinti į mūsų biurą.",
      callTitle: "Paskambink:",
      callDescription: "Pr-Pn, 8:00 - 17:00",
      headline: "Turi idėjų? Mes turime įgūdžių. Dirbkime kartu.",
      subheadline: "Papasakok daugiau apie save ir ką sugalvojai.",
      fullName: "Pilnas vardas",
      emailAddress: "El. pašto adresas",
      yourMessage: "Jūsų žinutė",
      dogAlt: "Šuo",
      namePlaceholder: "Tavo vardas",
      emailPlaceholder: "tavo@email.com",
      messagePlaceholder: "Trumpai apie projektą...",
      helpTitle: "Kaip galime padėti?",
      websiteDesign: "AŠ ESU MOKINYS",
      uxDesign: "AŠ ESU TĖVAS/MAMA",
      userResearch: "ATSTOVAUJU ĮMONĘ",
      contentCreation: "KAŽKAS NEVEIKIA",
      strategyConsulting: "MOKĖJIMAI IR SĄSKAITOS",
      other: "BENDRAS KLAUSIMAS",
      submitButton: "Pradėkime!",
      successTitle: "Žinutė Sėkmingai Išsiųsta!",
      successMessage: "Ačiū, kad susisiekėte! Atsakysime kiek įmanoma greičiau.",
      sendAnother: "Siųsti Kitą Žinutę"
    },
    studyingProcess: {
      howItWorks: "Kaip tai veikia",
      learningRoadmap: "MOKYMOSI KELIAS",
      interactiveJourney: "Pamiršk nuobodžias paskaitas. Tai interaktyvi kelionė, kurioje viską valdai tu.",
      steps: {
        step1: {
          title: "Smalsumo kibirkštis",
          description: "Viskas prasideda nuo kabliuko. Ne paskaita, o iššūkis. Pateikiame problemą, kuri priverčia klausti 'Kaip?', prieš mums pasakant 'Kas'.",
          action: "Įžiebti kibirkštį"
        },
        step2: {
          title: "Aktyvus įsitraukimas",
          description: "Šok tiesiai į gylį. Pradedi veikti iškart. Simuliatoriai, kodavimo aplinkos ir interaktyvios drobės pakeičia vadovėlius.",
          action: "Nerti gilyn"
        },
        step3: {
          title: "Komandinė trintis",
          description: "Mokymasis yra socialus. Tikrini savo idėjas su kitais. Gyvi debatai, komandiniai sprintai ir grįžtamasis ryšys sukuria gilesnį supratimą.",
          action: "Prisijungti prie komandos"
        },
        step4: {
          title: "Momentinis atsakas",
          description: "Jokio laukimo pažymių. Aplinka reaguoja į tave. Išlaikyk testus, atrakink lygius arba sudaužyk simuliaciją – atsakas yra momentinis.",
          action: "Gauti rezultatus"
        },
        step5: {
          title: "Meistrystė ir Augimas",
          description: "Tu ne tik įsimeni, tu įvaldai. Įgūdžiai patvirtinami kuriant, kaupiant realių darbų portfelį, o ne pažymių knygelę.",
          action: "Atsiimti meistrų laipsnį"
        }
      },
      completed: "Įveikta",
      journeyUnlocked: "Kelionė Atrakinta!",
      experienceReal: "Tu supranti procesą. Dabar patirk tai realybėje.",
      startFirstClass: "Pradėk Pirmąją Pamoką",
      modal: {
        back: "Atgal",
        readyToStart: "Pasiruošęs pradėti?",
        choosePath: "Pasirink, kaip nori pradėti savo kelionę.",
        startFreeTrial: "Pradėti nemokamą bandymą",
        sevenDays: "7 Dienos",
        or: "ARBA",
        buyNow: "Pirkti Dabar",
        trial: {
          title: "Pradėk nemokamą bandymą",
          firstName: "Vardas",
          lastName: "Pavardė",
          email: "El. paštas",
          phone: "Tel. numeris",
          optional: "(Neprivaloma)",
          activate: "Aktyvuoti 7 d. bandymą",
          noCreditCard: "Tik naujiems vartotojams"
        },
        buy: {
          title: "Pasirink planą",
          basic: {
            title: "Atrask ir Pradėk",
            desc: "Geriausia: smalsiems pradedantiesiems.",
            features: [
              "Prieiga prie interaktyvių mokymosi žaidimų ir pamokų",
              "Savarankiška veikla ir iššūkiai",
              "Amžių atitinkantys mokymosi keliai",
              "Prieiga prie bendruomenės"
            ],
            notIncluded: "Neįeina: gyvos instruktorių pamokos",
            button: "Pradėti"
          },
          pro: {
            title: "PRO",
            desc: "Geriausia: norintiems daugiau vedimo.",
            features: [
              "Viskas, kas įeina į Basic",
              "Gyvos interaktyvios pamokos su instruktoriais",
              "Dalyvavimas realiu laiku (žaidimai, iššūkiai, komandinis darbas)",
              "Vadovaujami mokymosi keliai pagal amžiaus grupes",
              "Nuolatinis grįžtamasis ryšys sesijų metu",
              "Pirmenybė naujoms funkcijoms"
            ],
            button: "Gauti Pro"
          }
        }
      }
    },
    infoModal: {
      gotIt: "Supratau!",
      about: {
        title: "Apie newmindr",
        subtitle: "Kuriame ateities kūrėjų kartą",
        intro: "newmindr tikime, kad tradicinė švietimo sistema nespėja su technologijų tempu. Mes esame čia, kad užpildytume šią spragą.",
        missionTitle: "Mūsų Misija",
        missionDesc: "Suteikti studentams praktinių, ateičiai aktualių įgūdžių per įtraukiantį mokymąsi ir kūrybą.",
        methodTitle: "Mūsų Metodas",
        methodDesc: "Projektinis mokymasis, aplinka be spaudimo ir ekspertų mentorystė.",
        footer: "Prisijunk prie daugiau nei 1000 studentų visame pasaulyje, kurie savo ateitį kuria jau šiandien."
      },
      programs: {
        title: "Mūsų Programos",
        subtitle: "Pritaikyta kiekvienai amžiaus grupei",
        youngExplorers: "Jaunieji atradėjai (8-12)",
        youngExplorersDesc: "Žaidybinis mokymasis, orientuotas į logiką, pasakojimą ir bazinį technologinį raštingumą.",
        teenInnovators: "Paaugliai Inovatoriai (13-16)",
        teenInnovatorsDesc: "Praktinės dizaino dirbtuvės, kodavimo ir bendrų projektų sritys.",
        futureLeaders: "Ateities Lyderiai (17-19)",
        futureLeadersDesc: "Pažangūs AI, automatizavimo, lyderystės ir startuolių kūrimo kursai."
      },
      pricing: {
        title: "Kainų Planai",
        subtitle: "Skaidru ir lankstu kiekvienam",
        monthly: "Mėnesio",
        yearly: "Metų",
        save: "Sutaupykite 20%",
        basic: {
          title: "Bazinis Planas",
          desc: "Pilna prieiga prie interaktyvios bibliotekos ir savarankiškų kursų.",
          feature1: "Begalybė žaidimų",
          feature2: "Pasaulinė bendruomenė"
        },
        pro: {
          title: "PRO",
          desc: "Kasdienės gyvos dirbtuvės su atsidavusiais instruktoriais.",
          feature1: "Asmeninė mentorystė (1 prieš 1)",
          feature2: "Portfolio kūrimas",
          badge: "Geriausia Vertė"
        }
      },
      contact: {
        title: "Susisiekite",
        subtitle: "Mes esame čia, kad padėtume jums augti",
        directContact: "Tiesioginis Kontaktas",
        ourStudio: "Mūsų Studija",
        visitSocial: "Aplankykite mūsų socialinius tinklus",
        socialDesc: "Sekite mus kasdieniam įkvėpimui ir studentų pasiekimams!",
        address: "VISŲ ŠIRDYSE"
      }
    },
    coursesModal: {
      title: "Visi Mūsų Kursai",
      subtitle: "Atraskite tobulą mokymosi kelią kiekvienam amžiui ir pomėgiui.",
      groups: {
        "8-12": {
          age: "8–12 Metų",
          theme: "Tyrinėtojai ir Kūrėjai",
          list: [
            "Kodavimo Istorijos", "Komiksai ir Vizualinis Pasakojimas", "Kūrybinio Rašymo Studija",
            "Dizaino ir Kūrybiškumo Laboratorija", "Skaitmeninių Statybų Laboratorija", "Žaidimų Kūrimo Studija",
            "Kaip Viskas Veikia", "Logikos Ieškojimai", "Matematikos Nuotykiai", "Mažieji Mokslininkai (Skaitmeninė Laboratorija)",
            "Gamtos ir Žemės Tyrinėtojas", "Problemų Sprendimo Laboratorija", "Kosmoso Tyrinėtojai",
            "Kalbėk ir Dalinkis", "Technologijų Gudrybės", "Mąstyk Kaip Profesionalas", "ir daugiau!"
          ]
        },
        "13-16": {
          age: "13–16 Metų",
          theme: "Novatoriai ir Statytojai",
          list: [
            "AI ir Ateities Technologijos", "Pokyčių Projektai", "Sukurk Savo Pirmąją Programėlę",
            "Viešasis Kalbėjimas Su Pasitikėjimu", "Kūrybinio Aplanko Sprintas", "Debatai ir Kritinis Mąstymas",
            "Inžinerijos ir Robotikos Pagrindai", "Nuo Idėjos Iki Startuolio", "Lyderystė Komandose",
            "Rinkodara ir Prekės Ženklo Kūrimas", "Pinigai, Projektai ir Protingi Sprendimai",
            "Muzikos ir Garso Kūrimas", "Pristatyk Kaip Įkūrėjas", "Mokslo Eksperimentai, Kurie Svarbūs",
            "Pasakojimas Žaidimams ir Filmams", "Vizualinio Dizaino Laboratorija", "ir daugiau!"
          ]
        },
        "17-19": {
          age: "17–19 Metų",
          theme: "Ateities Lyderiai",
          list: [
            "AI Įrankiai ir Promptų Kūrimas", "Automatizacija ir No-Code Sistemos", "Biotechnologijų ir Sveikatos Tyrinėjimai",
            "Prekės Ženklo Dizaino Studija", "Kibernetinio Saugumo Pagrindai", "Duomenų Mokslo Pagrindai",
            "Skaitmeninė Iliustracija ir Vizualinis Stilius", "Inžinerinio Dizaino Iššūkis",
            "Lyderystė ir Derybos", "Rinkodara ir Turinio Strategija", "Kasdienių Technologijų Fizika",
            "Trumpametražiai Filmai ir Pasakojimas", "Socialinio Poveikio Laboratorija", "Startuolio Idėja iki MVP",
            "UX ir Produkto Dizaino Sprintas", "Web Programėlių Kūrimas", "ir daugiau!"
          ]
        }
      }
    },
    legal: {
      privacy: {
        title: "Privatumo politika",
        lastUpdated: "2025 m. gruodžio 30 d.",
        intro: "newmindr. esame pasiryžę saugoti jūsų privatumą ir užtikrinti jūsų asmens duomenų saugumą. Šioje privatumo politikoje aprašoma, kaip mes renkame, naudojame, tvarkome ir atskleidžiame jūsų informaciją, įskaitant asmeninę informaciją, susijusią su jūsų prieiga prie mūsų platformos ir naudojimusi ja.",
        sections: [
          {
            title: "1. Informacija, kurią renkame",
            content: "Mes renkame kelių rūšių informaciją iš mūsų svetainės vartotojų ir apie juos, įskaitant informaciją, pagal kurią jus galima asmeniškai atpažinti, pavyzdžiui, vardą, pašto adresą, el. pašto adresą, telefono numerį ar bet kurį kitą identifikatorių, pagal kurį su jumis galima susisiekti internetu arba neprisijungus.",
            list: [
              "Informacija, kurią mums pateikiate tiesiogiai (registracija, profilis, bendravimas).",
              "Automatiškai renkama informacija (naudojimo duomenys, slapukai, IP adresai).",
              "Informacija iš trečiųjų šalių šaltinių (socialinis prisijungimas, partneriai)."
            ]
          },
          {
            title: "2. Jūsų informacijos naudojimas",
            content: "Mes naudojame informaciją, kurią surenkame apie jus arba kurią mums pateikiate, įskaitant bet kokią asmeninę informaciją:",
            list: [
              "Mūsų švietimo paslaugoms teikti ir tobulinti.",
              "Sandoriams apdoroti ir jūsų paskyrai valdyti.",
              "Atsakyti į jūsų užklausas ir pasiūlyti pagalbą.",
              "Suasmeninti jūsų mokymosi patirtį.",
              "Pranešti apie svarbius atnaujinimus ir reklaminį turinį.",
              "Užtikrinti mūsų platformos saugumą ir vientisumą."
            ]
          },
          {
            title: "3. Duomenų apsauga ir saugumas",
            content: "Mes įgyvendiname įvairias saugumo priemones, kad išlaikytume jūsų asmeninės informacijos saugumą. Jūsų asmeninė informacija saugoma už saugių tinklų ir yra prieinama tik ribotam skaičiui asmenų, turinčių specialias prieigos teises prie tokių sistemų ir privalančių laikytis informacijos konfidencialumo."
          },
          {
            title: "4. Jūsų informacijos atskleidimas",
            content: "Mes neparduodame, neprekiaujame ir kitaip neperduodame trečiosioms šalims jūsų asmenį identifikuojančios informacijos, nebent apie tai iš anksto informuotume vartotojus. Tai neapima svetainės prieglobos partnerių ir kitų šalių, padedančių mums valdyti mūsų svetainę, vykdyti verslą ar aptarnauti vartotojus, jei tos šalys sutinka laikyti šią informaciją konfidencialia."
          },
          {
            title: "5. Jūsų teisės ir pasirinkimai",
            content: "Jūs turite teisę pasiekti, atnaujinti arba ištrinti informaciją, kurią turime apie jus. Kai tik įmanoma, asmens duomenis galite pasiekti, atnaujinti arba prašyti juos ištrinti tiesiogiai savo paskyros nustatymų skiltyje. Jei negalite atlikti šių veiksmų patys, susisiekite su mumis ir mes jums padėsime."
          },
          {
            title: "6. Duomenų saugojimas",
            content: "Mes saugome jūsų asmens duomenis tik tiek laiko, kiek tai būtina šioje privatumo politikoje nurodytiems tikslams. Mes saugosime ir naudosime jūsų asmens duomenis tiek, kiek tai būtina, kad įvykdytume savo teisinius įsipareigojimus (pavyzdžiui, jei privalome saugoti jūsų duomenis laikydamiesi galiojančių įstatymų), spręstume ginčus ir vykdytume savo teisinius susitarimus bei politiką."
          },
          {
            title: "7. Tarptautinis duomenų perdavimas",
            content: "Jūsų informacija, įskaitant asmens duomenis, gali būti perduota ir saugoma kompiuteriuose, esančiuose už jūsų valstybės, provincijos, šalies ar kitos valstybinės jurisdikcijos ribų, kur duomenų apsaugos įstatymai gali skirtis nuo jūsų jurisdikcijos įstatymų. Jūsų sutikimas su šia privatumo politika ir tokios informacijos pateikimas reiškia jūsų sutikimą su tokiu perdavimu."
          },
          {
            title: "8. Slapukų politika",
            content: "Mūsų svetainė naudoja „slapukus“, kad atpažintų svetainės sritis, kuriose lankėtės. Slapukas yra nedidelis duomenų fragmentas, kurį jūsų interneto naršyklė išsaugo jūsų kompiuteryje ar mobiliajame įrenginyje. Slapukus naudojame turiniui, kurį matote mūsų svetainėje, suasmeninti. Daugumą interneto naršyklių galima nustatyti taip, kad slapukai būtų išjungti. Tačiau, jei išjungsite slapukus, gali būti, kad negalėsite tinkamai arba visai naudotis mūsų svetainės funkcijomis. Mes niekada į slapukus nededame asmenį identifikuojančios informacijos."
          },
          {
            title: "9. Šios privatumo politikos pakeitimai",
            content: "Mes galime laikas nuo laiko atnaujinti savo privatumo politiką. Apie bet kokius pakeitimus informuosime paskelbdami naują privatumo politiką šiame puslapyje. Patariama periodiškai peržiūrėti šią privatumo politiką, ar nėra pakeitimų. Šios privatumo politikos pakeitimai įsigalioja juos paskelbus šiame puslapyje."
          },
          {
            title: "10. Susisiekite su mumis",
            content: "Jei turite klausimų dėl šios privatumo politikos, susisiekite su mumis el. paštu legal@newmindr.edu."
          }
        ],
        footer: "© 2025 newmindr. Visos teisės saugomos. Griežtas BDAR, CCPA ir tarptautinių duomenų apsaugos standartų laikymasis."
      },
      terms: {
        title: "Paslaugų teikimo sąlygos",
        lastUpdated: "2025 m. gruodžio 30 d.",
        intro: "PRAŠOME ATIDŽIAI PERSKAITYTI ŠIAS PASLAUGŲ TEIKIMO SĄLYGAS. PRISIJUNGDAMI PRIE NEWMINDR. PLATFORMOS AR NAUDODAMIESI JA, JŪS SUTINKATE LAIKYTIS ŠIŲ SĄLYGŲ IR VISŲ SĄLYGŲ, ĮTRAUKTŲ NUORODOMIS.",
        sections: [
          {
            title: "1. Sutikimas su sąlygomis",
            content: "Naudodamiesi newmindr. („Platforma“), jūs sutinkate su šiomis Paslaugų teikimo sąlygomis. Jei nesutinkate su visomis šiomis sąlygomis, nesinaudokite Platforma. Mes pasiliekame teisę bet kuriuo metu ir savo nuožiūra keisti ar modifikuoti šias Sąlygas."
          },
          {
            title: "2. Tinkamumas ir paskyra",
            content: "Norėdami naudotis tam tikromis Platformos funkcijomis, turite užregistruoti paskyrą. Kurdami paskyrą sutinkate:",
            list: [
              "Pateikti tikslią, naujausią ir išsamią informaciją.",
              "Užtikrinti savo slaptažodžio saugumą ir prisiimti visą riziką, susijusią su neteisėta prieiga prie jūsų paskyros.",
              "Nedelsdami pranešti mums, jei pastebėsite ar kai kitaip įtarsite bet kokius su Platforma susijusius saugumo pažeidimus."
            ]
          },
          {
            title: "3. Intelektinės nuosavybės teisės",
            content: "Jei nenurodyta kitaip, Platforma ir visa joje esanti medžiaga, įskaitant, be apribojimų, newmindr. logotipą ir visus dizainus, tekstą, grafiką, paveikslėlius, informaciją, duomenis, programinę įrangą, garso failus, kitus failus bei jų parinkimą ir išdėstymą (kartu vadinama „Turiniu“), yra newmindr. arba mūsų licencijos išdavėjų nuosavybė."
          },
          {
            title: "4. Vartotojo elgesys",
            content: "Jūs sutinkate, kad nepažeisite jokių įstatymų, sutarčių, intelektinės nuosavybės ar kitų trečiųjų šalių teisių ir nepadarysite teisės pažeidimo, bei esate visiškai atsakingi už savo elgesį prisijungiant prie mūsų Platformos ar naudojantis ja. Jūs sutinkate, kad laikysitės šių Sąlygų ir nedarysite šių veiksmų:",
            list: [
              "Nenaudosite Platformos jokiems neteisėtiems ar neleistiniems tikslams.",
              "Nedalyvausite jokiame priekabiavime, grasinime, gąsdinime ar persekiojime.",
              "Nebandysite apeiti jokių mūsų taikomų turinio filtravimo metodų.",
              "Nekursite ir nenaudosite jokių trečiųjų šalių programėlių, kurios sąveikauja su Platforma be mūsų išankstinio raštiško sutikimo."
            ]
          },
          {
            title: "5. Mokėjimai ir prenumeratos",
            content: "Kai kai kurie Platformos aspektai gali būti mokami. Jei nuspręsite naudotis mokamais Platformos aspektais, sutinkate su kainodaros ir mokėjimo sąlygomis, kurias galime laikas nuo laiko atnaujinti. newmindr. gali bet kuriuo metu savo nuožiūra pridėti naujų paslaugų už papildomą mokestį arba pakeisti esamų paslaugų mokesčius."
          },
          {
            title: "6. Atsakomybės ribojimas",
            content: "KIEK TAI LEIDŽIA GALIOJANTYS ĮSTATYMAI, NEWMINDR. NEATSAKO UŽ JOKIĄ NETIESIOGINĘ, ATSITIKTINĘ, SPECIALIĄJĄ ARBA BAUDŽIAMĄJĄ ŽALĄ, ARBA JOKĮ PELNO AR PAJAMŲ PRARADIMĄ, NESVARBU, AR JIE BUVO PATIRTI TIESIOGIAI AR NETIESIOGIAI, ARBA JOKĮ DUOMENŲ, NAUDOJIMO, GEROS VALIOS AR KITŲ NEMATERIALIŲ NUOSTOLIŲ PRARADIMĄ."
          },
          {
            title: "7. Žalos atlyginimas",
            content: "Jūs sutinkate ginti, atlyginti žalą ir apsaugoti newmindr., našų nepriklausomus rangovus, paslaugų teikėjus ir konsultantus bei mūsų atitinkamus direktorius, darbuotojus ir agentus nuo bet kokių pretenzijų, žalos, išlaidų, atsakomybės ir sąnaudų, kylančių dėl jūsų naudojimosi Platforma arba susijusių su juo."
          },
          {
            title: "8. Nutraukimas",
            content: "Nepaisant bet kurios iš šių Sąlygų, newmindr. pasilieka teisę be įspėjimo ir savo nuožiūra nutraukti jūsų licenciją naudotis Platforma bei užblokuoti arba užkirsti kelią jūsų būsimai prieigai prie Platformos ir naudojimuisi ja."
          },
          {
            title: "9. Nuostatų atskiriamumas",
            content: "Jei kuri nors šių Sąlygų nuostata pripažįstama neteisėta, negaliojančia arba dėl kokių nors priežasčių neįvykdoma, ši nuostata laikoma atskiriama nuo šių Sąlygų ir neturi įtakos kitų nuostatų galiojimui ir įvykdomumui."
          },
          {
            title: "10. Taikytina teisė ir jurisdikcija",
            content: "Šioms Sąlygoms taikomi ir jos aiškinamos pagal šalies, kurioje yra newmindr. būstinė, įstatymus, neatsižvelgiant į jokių teisių kolizijos principų poveikį."
          }
        ],
        footer: "NAUDODAMIESI ŠIA PLATFORMA JŪS PATVIRTINATE, KAD PERSKAITĖTE ŠIAS SĄLYGAS IR SUTINKATE JŲ LAIKYTIS. ŠIŲ SĄLYGŲ NESILAIKYMAS GALI LEMTI NEATIDĖLIOTINĄ JŪSŲ PASKYROS NUTRAUKIMĄ."
      }
    },
    devPopup: {
      badge: "Netrukus",
      title: "Kuriame Kažką Nuostabaus!",
      subtitle: "Interaktyvaus mokymosi ateitis jau čia pat.",
      description: "Aktyviai kuriame ir netrukus pradėsime veiklą! Užsirezervuokite vietą dabar ir būkite tarp pirmųjų, kurie patirs naujos kartos mokymąsi.",
      emailLabel: "Jūsų El. paštas",
      emailPlaceholder: "jusu@pastas.lt",
      ctaButton: "Rezervuoti Vietą",
      skipButton: "Sugrįšiu vėliau",
      successTitle: "Jūs Užsiregistravote!",
      successMessage: "Pranešime jums, kai tik pradėsime veiklą. Pasiruoškite! 🚀"
    },
    validation: {
      required: "Prašome užpildyti šį laukelį",
      invalidEmail: "Įveskite galiojantį el. pašto adresą"
    },
    emails: {
      newsletter: {
        subject: "Sveiki prisijungę prie newmindr. naujienlaiškio! 💌",
        title: "Jūs jau čia!",
        greeting: "Ačiū, kad užsiprenumeravote <b>newmindr.</b> naujienlaiškį.",
        content: "Jūs pirmieji sužinosite apie naujus interaktyvius kursus, mokymosi gairių atnaujinimus ir išskirtinius patarimus derybų bei lyderystės srityse.",
        footer: "newmindr. Mokymasis iš naujo"
      },
      trial: {
        subject: "Jūsų 7 dienų nemokamas bandomasis laikotarpis aktyvuotas! 🚀",
        title: "Pasiruošę mokytis?",
        greeting: "Sveiki, {name},",
        subGreeting: "Jūsų 7 dienų nemokamas bandomasis laikotarpis <b>newmindr.</b> platformoje oficialiai įjungtas!",
        content: "Dabar turite pilną prieigą prie mūsų interaktyvių mokymosi gairių ir aukščiausios kokybės kursų turinio.",
        cta: "PRADĖTI MOKYTIS DABAR",
        disclaimer: "Bandomajam laikotarpiui kreditinė kortelė nereikalinga. Mėgaukitės!"
      },
      contact: {
        subject: "Nauja žinutė iš kontaktų formos: {name} 📩",
        title: "Nauja žinutė iš kontaktų formos",
        name: "Vardas",
        email: "El. paštas",
        help: "Reikalinga pagalba dėl",
        message: "Žinutė",
        footer: "Pateikta per newmindr.com",
        unsubscribe: "Nenorite gauti naujienlaiškių? ATSISAKYTI"
      }
    },
    blog: {
      title: "NEWMINDR",
      subtitle: "Daugiau nei mokymasis. Tai evoliucija.",
      scanning: "NUSKAITOMI TINKLAI...",
      pulse: "SOCIALINIS PULSAS / 100% RAW",
      activeFeed: "AKTYVUS SRAUTAS",
      distributed: "PLATINAMA",
      loadMore: "Sinchronizuojama daugiau naujienų...",
      readArticle: "Skaityti straipsnį",
      readMore: "Skaityti daugiau",
      posts: [
        {
          id: 1,
          platform: "Įžvalgos",
          title: "Kodėl interaktyvus mokymasis populiarėja",
          content: "70% geresnis informacijos įsiminimas. 300% didesnis įsitraukimas. Vadovėliai – pasenusi klasika. Štai ateitis.",
          image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop",
          date: "Sau 2, 2026",
          likes: "12k",
          comments: "340",
          url: "/blog/interactive-rise"
        },
        {
          id: 2,
          platform: "Švietimas",
          title: "Kodėl mokiniai patiria nesėkmes (ir kaip mes tai keičiame)",
          content: "30% patiria nesėkmes dėl įsitraukimo stokos. 45% kovoja su tradiciniais metodais. Sužinokite šokiruojančią statistiką ir kaip interaktyvus mokymasis revoliucionuoja švietimą.",
          image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop",
          date: "Sau 4, 2026",
          likes: "15k",
          comments: "520",
          url: "/blog/why-students-fail"
        }
      ]
    }
  },
  ru: {
    seo: {
      title: "newmindr. Интерактивное обучение"
    },
    cookies: {
      title: "МЫ ИСПОЛЬЗУЕМ COOKIE",
      description: "Мы используем файлы cookie для улучшения вашего опыта, анализа трафика сайта и предоставления персонализированного контента. Нажимая «Принять все», вы соглашаетесь с использованием нами файлов cookie.",
      accept: "ПРИНЯТЬ ВСЕ",
      decline: "ОТКЛОНИТЬ",
      settings: "НАСТРОЙКИ",
      privacyPolicy: "Политика конфиденциальности"
    },
    popups: {
      awesome: "КРУТО!",
      current: "Текущий",
      globalLearning: "Глобальное обучение",
      availableLanguages: "Доступные языки",
      comingSoonList: "Польский, Латышский, Эстонский, Немецкий, Французский, Испанский, Итальянский, Португальский, Японский, Корейский, Китайский, Украинский, Шведский, Голландский, Норвежский",
      andMore: "и многое другое... (Скоро!)"
    },
    minigame: {
      title: "BRAIN SNAP!",
      startTitle: "АКТИВИРУЙТЕ РАЗУМ!",
      startDesc: "Нажатие на логотип было тестом... и вы его прошли! Теперь кликните на как можно больше прыгающих мозгов за 10 секунд.",
      startBtn: "НАЧАТЬ ИСПЫТАНИЕ",
      levelUp: "НОВЫЙ УРОВЕНЬ!",
      agility: "Умственная гибкость повышена",
      score: "Счет",
      best: "Лучший",
      retry: "ПОВТОРИТЬ",
      back: "ВЕРНУТЬСЯ К ОБУЧЕНИЮ",
      warning: "Предупреждение: Слишком много кликов по мозгам может привести к экстремальному интеллекту."
    },
    hero: {
      title: "ВАШ МОЗГ - ЭТО ВАША",
      superpower: "СУПЕРСИЛА",
      subtitle: "ИСПОЛЬЗУЙТЕ ЕЁ.",
      description: "Получите полный доступ бесплатно на 7 дней. Решите позже.",
      emailPlaceholder: "Введите ваш email",
      ctaButton: "Получить 7-дневный период",
      ready: "ГОТОВО! 🚀",
      tryAgain: "ПОПРОБУЙТЕ ЕЩЕ РАЗ!",
      vibeCheck: "Проверка пройдена! Проверьте почту! ✨",
      backgroundQuotes: {
        system: "НОВАЯ СИСТЕМА ОБУЧЕНИЯ",
        curiosity: "ПРОБУЖДАЙТЕ ЛЮБОПЫТСТВО",
        skills: "РАЗВИВАЙТЕ РЕАЛЬНЫЕ НАВЫКИ",
        potential: "РАСКРЫВАЙТЕ ПОТЕНЦИАЛ",
        future: "УПРАВЛЯЙТЕ БУДУЩИМ",
        thinkBigger: "ДУМАЙТЕ МАСШТАБНЕЕ",
        creativeMinds: "ТВОРЧЕСКИЙ ПОДХОД",
        reachHigher: "СТРЕМИТЕСЬ ВЫШЕ",
        activeLearning: "АКТИВНОЕ ОБУЧЕНИЕ",
        futureLeaders: "ЛИДЕРЫ БУДУЩЕГО",
        innovateNow: "ИННОВАЦИИ СЕЙЧАС",
        designLife: "СОЗИДАЙТЕ ЖИЗНЬ",
        limitless: "БЕЗ ГРАНИЦ"
      },
    },
    features: {
      title: "ОБУЧЕНИЕ, КОТОРОЕ ПРОСТО",
      titleHighlight: "ЦЕПЛЯЕТ",
      minigames: {
        launchMission: "ЗАПУСТИТЬ МИССИЮ",
        beginMission: "НАЧАТЬ МИССИЮ",
        startAgain: "ПОПРОБОВАТЬ СНОВА?",
        exit: "ВЫХОД",
        missionFailed: "Миссия провалена",
        score: "СЧЕТ",
        level: "УР",
        logic: {
          name: "Квест логики",
          task: "Математический вызов",
          instruction: "Умственная гибкость: Выберите два числа, сумма которых равна целевому значению, как можно быстрее."
        },
        creative: {
          name: "Творчество",
          task: "Лови и избегай",
          instruction: "Вдохновение мимолетно: Поймайте 'Золотой Разум', но НЕ касайтесь 'Красной Пустоты' сомнений."
        },
        social: {
          name: "Общение",
          task: "Собери слово",
          instruction: "Коммуникация: Восстановите сломанную фразу. Даже если вы ошибаетесь, найдите суть сообщения.",
          words: ['МЫШЛЕНИЕ', 'СТОЙКОСТЬ', 'СМЕЛОСТЬ', 'УЧИТЬСЯ']
        },
        visual: {
          name: "Визуализация",
          task: "Построение пути",
          instruction: "Гипер-фокус: Оставайтесь на линиях. Соединяйте узлы по порядку, не сбиваясь с пути."
        }
      },
      avatars: {
        creative: { name: "Творчество", desc: "Развивайте креатив и новаторское мышление" },
        logical: { name: "Логика", desc: "Укрепляйте логику и решение сложных задач" },
        social: { name: "Социализация", desc: "Улучшайте навыки общения и командной работы" },
        visual: { name: "Визуализация", desc: "Развивайте пространственное восприятие и вкус" }
      },
      growingRevenue: "Учитесь у реальных людей",
      growingRevenueDesc: "Курсы созданы опытом, а не корпорациями.",
      bestInClass: "Практические навыки",
      bestInClassDesc: "Применяйте знания сразу в реальных ситуациях.",
      competitiveAdvantage: "Гибкое обучение",
      competitiveAdvantageDesc: "Учитесь когда угодно, где угодно и в своем темпе.",
      growthPotential: "Результаты для карьеры",
      growthPotentialDesc: "Осваивайте навыки, которые реально двигают вас вперед.",
      learningVirtually: "Обучение как игра",
      learningVirtuallyDesc: "Юные участники учатся через игры, живые занятия и задания. Они кликают, играют и открывают новое, активно участвуя.",
      totallyFree: "Попробуйте бесплатно",
      scholarshipForEveryone: "Поддержка, ведущая вперед",
      scholarshipForEveryoneDesc: "Программы, созданные для развития практических навыков и уверенности.",
      limitedSpots: "ПОДАТЬ ЗАЯВКУ",
      trackStudentProgress: "Следите за прогрессом",
      trackStudentProgressDesc: "Прогресс виден через проекты и задачи - рост заметен, когда студенты создают и решают.",
      realTime: "Живой прогресс",
      important: "ВАЖНО",
      play: "ИГРАТЬ",
      masteryAchieved: "МАСТЕРСТВО ДОСТИГНУТО.",
      masteryDesc: "Ваши границы только в вашей голове. Пройдя через испытания, вы доказали суть: ",
      neverGiveUp: "НИКОГДА НЕ СДАВАЙТЕСЬ.",
      continueExploring: "ПРОДОЛЖИТЬ ИССЛЕДОВАНИЕ",
      skillPath: "Путь развития",
      nonLinear: "Ваше обучение нелинейно.",
      targetSum: "Целевая сумма",
      stayOnPath: "На пути: кликайте по порядку",
      gamesDisclaimer: "Эти игры предназначены только для развлечения и демонстрации! Они не связаны с нашими основными курсами - это лишь способ показать, каким может быть интерактивное обучение. Настоящие курсы гораздо более структурированы. 🎮",
    },
    programs: {
      title: "БУДУЩЕЕ ОБРАЗОВАНИЯ",
      subtitle: "ЭТО",
      education: "ИНТЕРАКТИВ",
      description: "Живые сессии, интересные вызовы и игровой дизайн - для каждого этапа роста.",
      virtualClass: "Интерактивное Исследование",
      virtualClassDesc: "Кликай, играй, спрашивай, открывай. Магия обучения.",
      studentMonitoring: "Творческое Создание",
      studentMonitoringDesc: "Практические проекты и интерактивные уроки, которые запоминаются.",
      scholarshipProgram: "Шаг в будущее",
      scholarshipProgramDesc: "Фокусированное обучение с реальным результатом.",
    },
    pricing: {
      title: "Цены",
      monthly: "Ежемесячно",
      yearly: "Ежегодно",
      save: "(Экономия 20%)",
      basic: "BASIC",
      professional: "PRO",
      getStarted: "Начать",
      getProfessional: "Стать Pro",
      perMonth: "/мес",
      perfectPlan: "Идеально для начинающих, которые хотят попробовать интерактивное обучение.",
      idealForCreators: "Лучший выбор для тех, кому нужно больше руководства и общения.",
    },
    heroStats: {
      freeLessons: "100+ бесплатных уроков",
      activeStudents: "Более 500 активных студентов на наших курсах",
      worldwideStudents: "1000+ студентов по всему миру",
    },
    header: {
      ourCourses: "ВСЕ НАШИ КУРСЫ",
      about: "О нас",
      studyingProcess: "Процесс обучения",
      blog: "Блог",
      contact: "Контакты",
      tryForFree: "Попробовать бесплатно",
    },
    footer: {
      explore: "Исследовать",
      aboutUs: "О нас",
      ourCourses: "Наши курсы",
      programs: "Программы",
      pricing: "Цены",
      blog: "Блог",
      contact: "Контакты",
      followMe: "Следите за мной",
      callNewmindr: "Позвонить в newmindr",
      letsWorkTogether: "Давайте работать вместе",
      coursesTools: "Курсы и инструменты",
      creativeTools: "Творческие инструменты",
      newsletter: "Рассылка",
      newsletterDescription: "Подпишитесь на нашу рассылку для получения последних новостей и ресурсов.",
      enterEmail: "Введите ваш email",
      subscribe: "Подписаться",
      email: "Email",
      phone: "Телефон",
      address: "В сердцах каждого",
      learningPlatform: "Платформа обучения",
      privacyPolicy: "Политика конфиденциальности",
      termsOfService: "Условия использования",
      cookiePolicy: "Политика cookie",
      ignitePotential: "Раскрой свой потенциал",
      stopConsuming: "Перестань потреблять - начни создавать",
      learning: "ОБУЧЕНИЕ",
      reimagined: "ПО-НОВОМУ.",
      brandDescription: "Мы строим инфраструктуру для нового поколения творческих умов. Интерактивно и специально для вас.",
      locationLabel: "Местоположение",
      loveYou: "МЫ ТОЖЕ ВАС ЛЮБИМ! ❤️",
      poweredBy: "Движимы любопытством",
      navigation: "Навигация",
      connect: "Контакты"
    },
    about: {
      title: "О нас",
      subtitle: "newmindr",
      heroSubtitle: "Создаем будущее интерактивного обучения для нового поколения.",
      since2022: "С 2022 года",
      missionTitle: "Наша миссия",
      missionDescription: "Мы здесь, чтобы сделать обучение активным и доступным - чтобы студенты не просто потребляли информацию, а участвовали в ней. Через интерактив мы помогаем строить навыки и уверенность на любом этапе.",
      scratchPrompt: "СОТРИТЕ, ЧТОБЫ УВИДЕТЬ",
      valuesTitle: "Наши ценности",
      innovation: "Инновации",
      innovationDesc: "Мы создаем обучение, которое больше похоже на игру, чем на сухой урок - для тех, кто учится сегодня.",
      community: "Сообщество",
      communityDesc: "Учиться вместе эффективнее. Мы создаем пространство для сотрудничества и совместного роста.",
      excellence: "Превосходство",
      excellenceDesc: "Каждое занятие продумано так, чтобы давать реальные знания, а не просто пассивное время у экрана.",
      achievement: "Достижения",
      achievementDesc: "Празднуем каждый успех на пути к новым знаниям, каким бы маленьким он ни был.",
      creativity: "Творчество",
      creativityDesc: "Поощряем нестандартное мышление и креативный подход к решению задач.",
      growth: "Рост",
      growthDesc: "Развиваем способности учеников достигать новых высот и раскрывать свой потенциал.",
      description1: "Наша цель - революционизировать образование и сделать обучение увлекательным для каждого.",
      description2: "В newmindr мы верим, что учеба - это путь открытий. Наша платформа сочетает технологии с проверенными методами для раскрытия потенциала.",
      activeStudents: "Активных студентов",
      freeLessons: "Бесплатных уроков",
      worldwideStudents: "Студентов по всему миру",
      cta: "Начать путешествие",
      services: {
        education: "Образование",
        learning: "Учеба",
        courses: "Курсы",
        programs: "Программы",
        more: "и другое"
      },
      ecosystem: {
        title: "Наша экосистема",
        philosophy: "Философия",
        philosophyQuote: "Мы меняем правила игры.",
        philosophyDesc: "Платформа не про заучивание фактов. Она про вовлеченность, любопытство и практику. Узнайте, как мы это делаем.",
        methodology: "Методология",
        methodologyQuote: "Руки делают - мозг работает.",
        methodologyDesc: "Зачем просто читать, если можно делать? Игры и живая обратная связь помогают знаниям закрепиться.",
        structure: "Структура",
        structureQuote: "Для любого этапа.",
        structureDesc: "От игр для детей до профессиональных навыков для подростков. Наша программа адаптируется под возраст.",
        impact: "Результат",
        impactQuote: "Навыки, которые важны.",
        impactDesc: "Долгосрочный рост через менторство и реальные проекты. Увидьте источник нашего успеха."
      },
      who: {
        title: "Для кого это",
        students: "Студенты (8-19 лет)",
        studentsDesc: "Идеально подходит для любознательных умов, готовых выйти за рамки учебников.",
        parents: "Родители",
        parentsDesc: "Для тех, кто ищет безопасную образовательную среду для развития реальных навыков."
      },
      popups: {
        education: {
          title: "Новый взгляд на образование",
          desc1: "Образование не должно быть пассивным или однотипным.",
          desc2: "Мы фокусируемся на обучении через участие - где студенты активно действуют вместо простого просмотра.",
          diffTitle: "В чем отличие:",
          diff1: "Активное обучение вместо лекций",
          diff2: "Создано с учетом внимания ученика",
          diff3: "Основано на любопытстве, а не зубрежке"
        },
        learning: {
          title: "Обучение через действие",
          desc1: "Обучение на нашей платформе интерактивно от начала до конца.",
          desc2: "Ученики участвуют в живых занятиях и играх, которые превращают теорию в опыт.",
          insideTitle: "Внутри сессии:",
          inside1: "Общение в реальном времени",
          inside2: "Задания под руководством",
          inside3: "Мгновенная обратная связь",
          inside4: "Темп согласно возрасту"
        },
        courses: {
          title: "Курсы для любого этапа",
          desc1: "Наши курсы созданы с учетом возраста и мышления, а не просто предметов.",
          desc2: "Каждый курс сочетает игру и структуру в зависимости от уровня ученика.",
          ageGroups: "Возрастные группы",
          group1: "Игровое исследование и любопытство",
          group2: "Практические проекты и решение задач",
          group3: "Фокус на навыках реального мира"
        },
        programs: {
          comment: "// Программы, идущие глубже",
          desc: "Программы - это структурированные пути для тех, кто хочет стать мастером в предмете.",
          item1: "Живые классы с инструктором",
          item2: "Проработанные пути обучения",
          item3: "Отчеты о прогрессе"
        },
        more: {
          title: "Подробнее о нас",
          founded: "Основанная в 2022 году, мы создаем платформу для нового поколения.",
          includes: "Также включает:",
          missionValues: "Миссия и ценности",
          whoItsFor: "Для кого это",
          designPhil: "Философия дизайна",
          location: "Местоположение",
          missionValuesTitle: "Миссия и ценности",
          ourMissionLabel: "Наша миссия",
          missionShortDesc: "Мы здесь, чтобы сделать обучение активным и доступным.",
          designPhilosophyDesc: "Верим, что время у экрана может быть полезным и активным.",
          designPhil1: "Взаимодействие важнее всего",
          designPhil2: "Геймифицированный прогресс",
          designPhil3: "Социальное обучение",
          whoItsForTitle: "Для кого это",
          whoItsForDesc: "Студенты и родители."
        }
      }
    },
    contact: {
      title: "Свяжитесь с нами",
      chatTitle: "Напишите нам:",
      chatDescription: "Наша команда всегда готова помочь.",
      visitTitle: "Посетите нас:",
      visitDescription: "Приходите поздороваться в наш офис.",
      callTitle: "Позвоните нам:",
      callDescription: "Пн-Пт с 8:00 до 17:00.",
      headline: "Есть идеи? У нас есть навыки. Давайте объединимся.",
      subheadline: "Расскажите нам о себе и своих планах.",
      fullName: "Полное имя",
      emailAddress: "Email",
      yourMessage: "Сообщение",
      dogAlt: "Собака",
      namePlaceholder: "Ваше имя",
      emailPlaceholder: "you@company.com",
      messagePlaceholder: "Расскажите немного о вашем запросе...",
      helpTitle: "Чем мы можем помочь?",
      websiteDesign: "Я СТУДЕНТ",
      uxDesign: "Я РОДИТЕЛЬ",
      userResearch: "Я ПРЕДСТАВЛЯЮ КОМПАНИЮ",
      contentCreation: "ЧТО-ТО НЕ РАБОТАЕТ",
      strategyConsulting: "ОПЛАТА И СЧЕТА",
      other: "ОБЩИЙ ВОПРОС",
      submitButton: "Давайте начнем!",
      successTitle: "Сообщение Успешно Отправлено!",
      successMessage: "Спасибо, что связались с нами! Мы ответим как можно скорее.",
      sendAnother: "Отправить Еще Сообщение"
    },
    studyingProcess: {
      howItWorks: "Как это работает",
      learningRoadmap: "ВАШ ПУТЬ В ОБУЧЕНИИ",
      interactiveJourney: "Забудьте о скучных лекциях. Это интерактивный путь под вашим контролем.",
      steps: {
        step1: {
          title: "Пробуждение интереса",
          description: "Все начинается с вызова. Мы даем задачу, которая заставит вас спросить 'Как?', прежде чем мы скажем 'Что'.",
          action: "Зажечь искру"
        },
        step2: {
          title: "Активное погружение",
          description: "Прыгайте в гущу событий. Симуляторы и интерактивные холсты заменяют скучные тексты.",
          action: "Погрузиться"
        },
        step3: {
          title: "Командная работа",
          description: "Учеба социальна. Дебаты и командные спринты помогают понять тему глубже.",
          action: "Присоединиться"
        },
        step4: {
          title: "Мгновенная обратная связь",
          description: "Никаких ожиданий оценок. Среда реагирует на вас мгновенно.",
          action: "Увидеть результат"
        },
        step5: {
          title: "Мастерство и рост",
          description: "Вы не просто зубрите, вы овладеваете. Навыки подтверждаются созданными проектами.",
          action: "Стать мастером"
        }
      },
      completed: "Завершено",
      journeyUnlocked: "Путь открыт!",
      experienceReal: "Вы поняли процесс. Теперь попробуйте его в деле.",
      startFirstClass: "Начать первое занятие",
      modal: {
        back: "Назад",
        readyToStart: "Готовы начать?",
        choosePath: "Выберите, как вы хотите начать свое путешествие.",
        startFreeTrial: "Бесплатный период",
        sevenDays: "7 дней",
        or: "ИЛИ",
        buyNow: "Купить сейчас",
        trial: {
          title: "Начните пробный период",
          firstName: "Имя",
          lastName: "Фамилия",
          email: "Email",
          phone: "Телефон",
          optional: "(Опционально)",
          activate: "Активировать 7 дней",
          noCreditCard: "Только для новых пользователей"
        },
        buy: {
          title: "Выберите план",
          basic: {
            title: "BASIC",
            desc: "Исследуй и начни. Для начинающих, которые хотят попробовать интерактивное обучение.",
            features: [
              "Доступ к играм и занятиям",
              "Самостоятельные задания",
              "Пути обучения по возрасту",
              "Доступ к сообществу"
            ],
            notIncluded: "Не включено: живые классы с инструктором",
            button: "Начать"
          },
          pro: {
            title: "PRO",
            desc: "Живое обучение. Реальные навыки. Для тех, кому нужно больше практики и обратной связи.",
            features: [
              "Все из плана Basic",
              "Живые интерактивные классы",
              "Реальное участие в командных проектах",
              "Сценарное обучение по возрасту",
              "Постоянная обратная связь",
              "Приоритет к новым функциям"
            ],
            button: "Стать Pro"
          }
        }
      }
    },
    infoModal: {
      gotIt: "Понятно!",
      about: {
        title: "О newmindr",
        subtitle: "Создаем новое поколение творцов",
        intro: "Мы здесь, чтобы сократить разрыв между традиционным образованием и современными технологиями.",
        missionTitle: "Миссия",
        missionDesc: "Вдохновлять учеников на развитие практических навыков будущего через обучение, опыт и творчество.",
        methodTitle: "Метод",
        methodDesc: "Проектное обучение в среде без давления под руководством экспертов.",
        footer: "Более 1,000 студентов по всему миру уже строят свое будущее с нами."
      },
      programs: {
        title: "Программы",
        subtitle: "Создано для каждой возрастной группы",
        youngExplorers: "Юные исследователи (8-12)",
        youngExplorersDesc: "Геймификация с упором на логику и технологическую грамотность.",
        teenInnovators: "Инноваторы (13-16)",
        teenInnovatorsDesc: "Практические воркшопы по дизайну и программированию.",
        futureLeaders: "Будущие лидеры (17-19)",
        futureLeadersDesc: "Продвинутое изучение ИИ, лидерства и создания бизнеса."
      },
      pricing: {
        title: "Тарифы",
        subtitle: "Прозрачно и гибко для всех",
        monthly: "Месяц",
        yearly: "Год",
        save: "Скидка 20%",
        basic: {
          title: "Базовый",
          desc: "Полный доступ к библиотеке и самостоятельным курсам.",
          feature1: "Бесконечные игры",
          feature2: "Мировое сообщество"
        },
        pro: {
          title: "PRO",
          desc: "Ежедневные живые воркшопы с экспертами индустрии.",
          feature1: "Личный ментор",
          feature2: "Свое портфолио",
          badge: "Выгодно"
        }
      },
      contact: {
        title: "Контакты",
        subtitle: "Мы поможем вам вырасти",
        directContact: "Прямая связь",
        ourStudio: "Наша студия",
        visitSocial: "Мы в соцсетях",
        socialDesc: "Следите за нами для ежедневных советов!",
        address: "В ВАШИХ СЕРДЦАХ"
      }
    },
    coursesModal: {
      title: "Все наши курсы",
      subtitle: "Откройте идеальный путь для любого возраста и интересов.",
      groups: {
        "8-12": {
          age: "8–12 лет",
          theme: "Исследователи и творцы",
          list: [
            "Истории через код", "Визуальный сторителлинг", "Студия креативного письма",
            "Лаборатория дизайна", "Цифровой строитель", "Студия создания игр",
            "Как все устроено", "Квест логики", "Математические приключения", "Юные ученые",
            "Исследователь земли", "Лаборатория решений", "Космические герои",
            "Общайся и делись", "Техно-знания", "Думай как профи", "и другие!"
          ]
        },
        "13-16": {
          age: "13–16 лет",
          theme: "Инноваторы и строители",
          list: [
            "Мир ИИ", "Проекты перемен", "Твое первое приложение",
            "Ораторское искусство", "Спринт портфолио", "Критическое мышление",
            "Основы инженерии", "Идея для стартапа", "Лидерство в команде",
            "Брендинг для подростков", "Умные решения и деньги",
            "Создание музыки и звука", "Питч основателя", "Важные научные опыты",
            "Сценарии для игр и кино", "Визуальный дизайн", "и другие!"
          ]
        },
        "17-19": {
          age: "17–19 лет",
          theme: "Лидеры будущего",
          list: [
            "ИИ и Промпт-инжиниринг", "Автоматизация и No-code", "Биотехнологии",
            "Бренд-дизайн", "Кибербезопасность", "Основы Data Science",
            "Цифровая иллюстрация", "Инженерные вызовы",
            "Лидерство и переговоры", "Контент-стратегия", "Физика технологий",
            "Создание кино", "Социальное воздействие", "Стартап: от идеи к MVP",
            "UX и дизайн продукта", "Создание веб-приложений", "и другие!"
          ]
        }
      }
    },
    legal: {
      privacy: {
        title: "Политика конфиденциальности",
        lastUpdated: "30 декабря 2025 г.",
        intro: "В newmindr. мы стремимся защищать вашу личную жизнь и обеспечивать безопасность ваших персональных данных. Данная Политика конфиденциальности описывает, как мы собираем, используем, обрабатываем и раскрываем вашу информацию, включая персональные данные, в связи с вашим доступом к нашей платформе и ее использованием.",
        sections: [
          {
            title: "1. Сбор информации",
            content: "Мы собираем несколько типов информации о пользователях нашего Веб-сайта, включая данные, по которым вас можно идентифицировать: имя, почтовый адрес, адрес электронной почты, номер телефона или любой другой идентификатор, позволяющий связаться с вами онлайн или офлайн.",
            list: [
              "Информация, предоставляемая вами напрямую (регистрация, профиль, общение).",
              "Информация, собираемая автоматически (данные об использовании, cookies, IP-адреса).",
              "Информация из сторонних источников (социальные сети, партнеры)."
            ]
          },
          {
            title: "2. Использование вашей информации",
            content: "Мы используем информацию, которую мы собираем о вас или которую вы предоставляете нам, включая персональные данные:",
            list: [
              "Для предоставления и улучшения наших образовательных услуг.",
              "Для обработки транзакций и управления вашим аккаунтом.",
              "Для ответа на ваши запросы и оказания поддержки.",
              "Для персонализации вашего процесса обучения.",
              "Для сообщения о важных обновлениях и рекламном контенте.",
              "Для обеспечения безопасности и целостности нашей платформы."
            ]
          },
          {
            title: "3. Защита и безопасность данных",
            content: "Мы применяем различные меры безопасности для обеспечения сохранности вашей персональной информации. Ваши личные данные хранятся в защищенных сетях и доступны только ограниченному числу лиц, имеющих специальные права доступа к таким системам и обязанных соблюдать конфиденциальность информации."
          },
          {
            title: "4. Раскрытие вашей информации",
            content: "Мы не продаем, не обмениваем и не передаем иным образом сторонним лицам вашу личную информацию, если не предоставим пользователям предварительное уведомление. Это не относится к партнерам по хостингу веб-сайта и другим сторонам, которые помогают нам в управлении сайтом, ведении нашего бизнеса или обслуживании наших пользователей, при условии, что эти стороны соглашаются сохранять конфиденциальность этой информации."
          },
          {
            title: "5. Ваши права и выбор",
            content: "У вас есть право на доступ, обновление или удаление информации, которую мы имеем о вас. По возможности вы можете получить доступ, обновить или запросить удаление ваших персональных данных непосредственно в настройках вашего аккаунта. Если вы не можете выполнить эти действия самостоятельно, свяжитесь с нами, чтобы мы могли помочь вам."
          },
          {
            title: "6. Хранение данных",
            content: "Мы храним ваши персональные данные только до тех пор, пока это необходимо для целей, изложенных в настоящей Политике конфиденциальности. Мы будем хранить и использовать ваши персональные данные в объеме, необходимом для соблюдения наших юридических обязательств (например, для соблюдения действующих законов), разрешения споров и обеспечения соблюдения наших юридических соглашений и политик."
          },
          {
            title: "7. Международная передача данных",
            content: "Ваша информация, включая персональные данные, может передаваться на компьютеры, расположенные за пределами вашего штата, провинции, страны или другой государственной юрисдикции, где законы о защите данных могут отличаться от законов вашей юрисдикции. Ваше согласие с настоящей Политикой конфиденциальности и последующая отправка такой информации означают ваше согласие на такую передачу."
          },
          {
            title: "8. Политика использования файлов cookie",
            content: "Наш Веб-сайт использует «Cookies» для определения разделов сайта, которые вы посещали. Cookie - это небольшой фрагмент данных, сохраняемый веб-браузером на вашем компьютере или мобильном устройстве. Мы используем Cookies для персонализации контента, который вы видите на нашем Веб-сайте. Большинство веб-браузеров позволяют отключить использование Cookies. Однако в этом случае вы не сможете правильно или вообще использовать функционал нашего Веб-сайта. Мы никогда не помещаем личную информацию в Cookies."
          },
          {
            title: "9. Изменения в Политике конфиденциальности",
            content: "Мы можем время от времени обновлять нашу Политику конфиденциальности. Мы уведомим вас о любых изменениях, опубликовав новую Политику на этой странице. Рекомендуется периодически просматривать настоящую Политику конфиденциальности на предмет изменений. Изменения вступают в силу с момента их публикации на этой странице."
          },
          {
            title: "10. Контакты",
            content: "Если у вас есть вопросы по поводу настоящей Политики конфиденциальности, свяжитесь с нами по адресу legal@newmindr.edu."
          }
        ],
        footer: "© 2025 newmindr. Все права защищены. Соответствие GDPR и международным стандартам безопасности данных."
      },
      terms: {
        title: "Условия использования",
        lastUpdated: "30 декабря 2025 г.",
        intro: "ПОЖАЛУЙСТА, ВНИМАТЕЛЬНО ПРОЧИТАЙТЕ ДАННЫЕ УСЛОВИЯ ИСПОЛЬЗОВАНИЯ. ПОЛУЧАЯ ДОСТУП К ПЛАТФОРМЕ NEWMINDR. ИЛИ ИСПОЛЬЗУЯ ЕЕ, ВЫ СОГЛАШАЕТЕСЬ СОБЛЮДАТЬ ДАННЫЕ УСЛОВИЯ И ВСЕ УСЛОВИЯ, ВКЛЮЧЕННЫЕ ПО ССЫЛКЕ.",
        sections: [
          {
            title: "1. Принятие условий",
            content: "Используя newmindr. («Платформа»), вы соглашаетесь с данными Условиями использования. Если вы не согласны со всеми условиями, не используйте Платформу. Мы оставляем за собой право изменять или дополнять данные Условия в любое время по нашему собственному усмотрению."
          },
          {
            title: "2. Право на использование и Аккаунт",
            content: "Для использования определенных функций Платформы вы должны зарегистрировать аккаунт. Создавая аккаунт, вы соглашаетесь:",
            list: [
              "Предоставлять точную, актуальную и полную информацию.",
              "Обеспечивать безопасность своего пароля и принимать все риски несанкционированного доступа к вашему аккаунту.",
              "Незамедлительно уведомлять нас, если вы обнаружите или заподозрите какие-либо нарушения безопасности, связанные с Платформой."
            ]
          },
          {
            title: "3. Права интеллектуальной собственности",
            content: "Если иное не указано нами, Платформа, весь контент и другие материалы, содержащиеся в ней, включая, помимо прочего, логотип newmindr., все проекты, текст, графику, изображения, информацию, данные, программное обеспечение, звуковые файлы и другие файлы, а также их выбор и расположение (совместно именуемые «Контент»), являются собственностью newmindr. или наших лицензиаров."
          },
          {
            title: "4. Поведение пользователя",
            content: "Вы соглашаетесь с тем, что не будете нарушать никакие законы, контракты, права интеллектуальной собственности или другие права третьих лиц и не совершите правонарушение, и что вы несете единоличную ответственность за свое поведение во время доступа к нашей Платформе или ее использования. Вы соглашаетесь соблюдать настоящие Условия и не будете:",
            list: [
              "Использовать Платформу в любых незаконных или несанкционированных целях.",
              "Участвовать в любых преследованиях, угрозах, запугивании или преследовании.",
              "Пытаться обойти любые используемые нами методы фильтрации контента.",
              "Разрабатывать или использовать любые сторонние приложения, взаимодействующие с Платформой, без нашего предварительного письменного согласия."
            ]
          },
          {
            title: "5. Платежи и подписки",
            content: "Некоторые функции Платформы могут предоставляться за плату. Если вы решите использовать платные функции Платформы, вы соглашаетесь с ценовыми условиями и условиями оплаты, которые мы можем время от времени обновлять. newmindr. может добавлять новые услуги за дополнительную плату или изменять плату за существующие услуги в любое время по своему собственному усмотрению."
          },
          {
            title: "6. Ограничение ответственности",
            content: "В МАКСИМАЛЬНОЙ СТЕПЕНИ, РАЗРЕШЕННОЙ ДЕЙСТВУЮЩИМ ЗАКОНОДАТЕЛЬСТВОМ, NEWMINDR. НЕ НЕСЕТ ОТВЕТСТВЕННОСТИ ЗА ЛЮБЫЕ КОСВЕННЫЕ, СЛУЧАЙНЫЕ, ОСОБЫЕ, ПОСЛЕДУЮЩИЕ ИЛИ ШТРАФНЫЕ УБЫТКИ, А ТАКЖЕ ЗА ЛЮБУЮ УПУЩЕННУЮ ПРИБЫЛЬ ИЛИ ДОХОДЫ, ПОНЕСЕННЫЕ ПРЯМО ИЛИ КОСВЕННО, ИЛИ ЛЮБУЮ ПОТЕРЮ ДАННЫХ, ВОЗМОЖНОСТИ ИСПОЛЬЗОВАНИЯ, ГУДВИЛЛА ИЛИ ДРУГИЕ НЕМАТЕРИАЛЬНЫЕ УБЫТКИ."
          },
          {
            title: "7. Возмещение ущерба",
            content: "Вы соглашаетесь защищать, возмещать ущерб и ограждать newmindr., наших независимых подрядчиков, поставщиков услуг и консультантов, а также наших соответствующих директоров, сотрудников и агентов от любых претензий, убытков, затрат, обязательств и расходов, возникающих в результате или связанных с вашим использованием Платформы."
          },
          {
            title: "8. Прекращение действия",
            content: "Несмотря на любые положения настоящих Условий, newmindr. оставляет за собой право без уведомления и по своему собственному усмотрению прекратить действие вашей лицензии на использование Платформы, а также заблокировать или предотвратить ваш будущий доступ к Платформе и ее использование."
          },
          {
            title: "9. Делимость положений",
            content: "Если какое-либо положение настоящих Условий будет признано незаконным, недействительным или по какой-либо причине неисполнимым, то это положение будет считаться отделенным от настоящих Условий и не повлияет на стабильность и исполнимость остальных положений."
          },
          {
            title: "10. Применимое право и юрисдикция",
            content: "Настоящие Условия регулируются и толкуются в соответствии с законодательством юрисдикции, в которой находится штаб-квартира newmindr., без учета каких-либо принципов коллизионного права."
          }
        ],
        footer: "ИСПОЛЬЗУЯ ДАННУЮ ПЛАТФОРМУ, ВЫ ПОДТВЕРЖДАЕТЕ, ЧТО ПРОЧИТАЛИ ДАННЫЕ УСЛОВИЯ И СОГЛАСНЫ ИХ СОБЛЮДАТЬ. НЕСОБЛЮДЕНИЕ ДАННЫХ УСЛОВИЙ МОЖЕТ ПРИВЕСТИ К НЕМЕДЛЕННОМУ БЛОКИРОВАНИЮ ВАШЕГО АККАУНТА."
      }
    },
    devPopup: {
      badge: "Скоро",
      title: "Мы создаем нечто удивительное!",
      subtitle: "Будущее интерактивного обучения уже близко.",
      description: "Мы в активной разработке и скоро откроемся! Зарезервируйте место сейчас и станьте первыми.",
      emailLabel: "Ваш Email",
      emailPlaceholder: "vy@example.com",
      ctaButton: "Занять место",
      skipButton: "Я зайду позже",
      successTitle: "Вы в списке!",
      successMessage: "Мы сообщим вам о запуске. Готовьтесь! 🚀"
    },
    validation: {
      required: "Пожалуйста, заполните это поле",
      invalidEmail: "Введите корректный email"
    },
    emails: {
      newsletter: {
        subject: "Добро пожаловать в рассылку newmindr.! 💌",
        title: "Вы с нами!",
        greeting: "Спасибо за подписку на рассылку <b>newmindr.</b>.",
        content: "Вы первыми узнаете о новых курсах, обновлениях и советах по переговорам и лидерству.",
        footer: "newmindr. Обучение по-новому"
      },
      trial: {
        subject: "Ваш 7-дневный пробный период активен! 🚀",
        title: "Готовы учиться?",
        greeting: "Привет, {name},",
        subGreeting: "Ваш пробный период в <b>newmindr.</b> официально начался!",
        content: "Теперь у вас есть полный доступ к интерактивной дорожной карте и премиум-контенту.",
        cta: "НАЧАТЬ УЧИТЬСЯ",
        disclaimer: "Карта не требуется. Наслаждайтесь!"
      },
      contact: {
        subject: "Новое сообщение: {name} 📩",
        title: "Новое сообщение из формы связи",
        name: "Имя",
        email: "Email",
        help: "Нужна помощь с",
        message: "Сообщение",
        footer: "Отправлено через newmindr.com",
        unsubscribe: "Не хотите получать рассылку? ОТПИСАТЬСЯ"
      }
    },
    blog: {
      title: "NEWMINDR",
      subtitle: "Обновления в реальном времени, победы студентов и глубокие разборы. Автоматическая синхронизация со всего нашего цифрового мира.",
      scanning: "СКАНИРОВАНИЕ СЕТЕЙ...",
      pulse: "СОЦИАЛЬНЫЙ ПУЛЬС / 100% RAW",
      activeFeed: "АКТИВНЫЙ_ФИД",
      distributed: "РАСПРЕДЕЛЕНО",
      loadMore: "Синхронизация новых обновлений...",
      readArticle: "Читать статью",
      readMore: "Читать дальше",
      posts: [
        {
          id: 1,
          platform: "Инсайты",
          title: "Почему Интерактивное Обучение Растет",
          content: "70% лучше запоминание. 300% больше вовлеченность. Данные ясны: учебники устарели. Вот будущее.",
          image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop",
          date: "Янв 2, 2026",
          likes: "12k",
          comments: "340",
          url: "/blog/interactive-rise"
        },
        {
          id: 2,
          platform: "Образование",
          title: "Почему студенты терпят неудачу (и как мы это меняем)",
          content: "30% терпят неудачу из-за отсутствия вовлеченности. 45% борются с традиционными методами. Откройте шокирующую статистику и как интерактивное обучение революционизирует образование.",
          image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop",
          date: "Янв 4, 2026",
          likes: "15k",
          comments: "520",
          url: "/blog/why-students-fail"
        }
      ]
    }
  }
};

export const getTranslation = (lang: Language) => translations[lang];
