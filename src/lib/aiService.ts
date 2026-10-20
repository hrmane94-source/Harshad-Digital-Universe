/**
 * Client-Side AI Service for "Ask Harshad AI"
 *
 * Securely communicates with /api/profile-chat (Serverless Function).
 * Contains transparent fallback to local verified knowledge if the serverless
 * endpoint is offline or unavailable.
 */

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  suggestedRoute?: string;
  routeLabel?: string;
  isLiveModel?: boolean;
  timestamp: number;
}

export interface ChatResponse {
  reply: string;
  suggestedRoute?: string;
  routeLabel?: string;
  isLiveModel?: boolean;
  provider?: string;
  setupNote?: string;
}

export async function sendChatMessage(
  message: string,
  history: ChatMessage[] = []
): Promise<ChatResponse> {
  const trimmed = message.trim();
  if (!trimmed) {
    throw new Error('Message cannot be empty.');
  }

  // Convert client history to server format
  const serverHistory = history.map(h => ({
    role: h.role,
    content: h.content
  }));

  try {
    const res = await fetch('/api/profile-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: trimmed,
        history: serverHistory
      })
    });

    if (res.ok) {
      const data = await res.json();
      return {
        reply: data.reply,
        suggestedRoute: data.suggestedRoute,
        routeLabel: data.routeLabel,
        isLiveModel: Boolean(data.isLiveModel),
        provider: data.provider,
        setupNote: data.setupNote
      };
    }
  } catch (netErr) {
    console.warn('Network call to /api/profile-chat failed, using client-side knowledge engine fallback.', netErr);
  }

  // Resilient Client-Side Grounded Knowledge Fallback
  return generateClientSideGroundedReply(trimmed, serverHistory);
}

/**
 * Client-side semantic reply generator grounded in verified profileKnowledge
 */
export function generateClientSideGroundedReply(
  userQuery: string,
  history: Array<{ role: string; content: string }> = []
): ChatResponse {
  const q = userQuery.toLowerCase().trim();
  const recentContext = history.slice(-2).map(m => m.content.toLowerCase()).join(' ') + ' ' + q;

  // 1. Prompt Injection & Confidentiality Guardrail
  if (
    q.includes('system prompt') ||
    q.includes('ignore previous') ||
    q.includes('password') ||
    q.includes('secret') ||
    q.includes('api key') ||
    q.includes('service role') ||
    q.includes('supabase') ||
    q.includes('environment variable') ||
    q.includes('env')
  ) {
    return {
      reply: "I am strictly authorized to answer questions regarding Harshad Mane's public portfolio, engineering projects, and academic background. Internal configuration and administrative secrets are protected.",
      isLiveModel: false,
      provider: 'grounded-security-guard'
    };
  }

  // 2. Comparison: FALCON-404 vs Arogya AI (checked before individual projects)
  if (
    (q.includes('compare') || q.includes('difference') || q.includes('versus') || q.includes('vs')) &&
    (q.includes('falcon') || q.includes('arogya') || recentContext.includes('falcon') || recentContext.includes('arogya'))
  ) {
    return {
      reply: `### Comparing FALCON-404 and Arogya AI\n\n* **FALCON-404 (Flagship Security):** Built for SIH 2026. Focuses on client-side document forensics, image tampering detection, and privacy. Harshad was Team Lead & Sole Developer.\n* **Arogya AI (Healthcare Systems):** Focuses on predictive hospital bed management and emergency admissions flow using simulated datasets. Harshad was Primary Technical Contributor.\n\nBoth demonstrate Harshad's focus on building practical tools that target high-friction operational bottlenecks.\n\n[View FALCON-404](/projects/falcon-404) • [View Arogya AI](/projects/arogya-ai)`,
      suggestedRoute: "/projects",
      routeLabel: "Compare: Projects Portfolio",
      isLiveModel: false
    };
  }

  // 3. FALCON-404 Inquiries
  if (q.includes('falcon') || q.includes('404') || (recentContext.includes('falcon') && (q.includes('tech') || q.includes('role') || q.includes('problem') || q.includes('security') || q.includes('built')))) {
    if (q.includes('tech') || q.includes('stack')) {
      return {
        reply: `**FALCON-404** was constructed using **React 19, TypeScript, Tesseract.js OCR, Tailwind CSS v4**, and custom HTML5 Canvas image forensics.\n\nAll optical character recognition and metadata parsing run strictly inside the user's browser, preventing sensitive citizen identity documents from being exposed to remote servers.\n\n[Explore FALCON-404 Case Study](/projects/falcon-404)`,
        suggestedRoute: "/projects/falcon-404",
        routeLabel: "Explore: FALCON-404 Project",
        isLiveModel: false
      };
    }
    if (q.includes('role') || q.includes('contribution') || q.includes('what did he do')) {
      return {
        reply: `For **FALCON-404**, Harshad was the **Team Lead and Sole Application Developer** representing Team Falcon for the **Smart India Hackathon (SIH 2026)** (Problem Statement ID: 26188).\n\nHe authored the application architecture, programmed the multi-zone OCR parsing engine, built the visual tamper heatmaps, and directed the SIH technical submission.\n\n[Explore FALCON-404 Case Study](/projects/falcon-404)`,
        suggestedRoute: "/projects/falcon-404",
        routeLabel: "Explore: FALCON-404 Project",
        isLiveModel: false
      };
    }
    return {
      reply: `**FALCON-404** is Harshad's flagship cybersecurity prototype designed for the **Smart India Hackathon (SIH 2026)** (Problem Statement ID: 26188).\n\n* **Problem Addressed:** High-volume document screening suffers from manual delays and difficulty detecting digital image manipulation.\n* **Technical Solution:** A client-side forensic screening tool and verification utility that scans identity cards (like Aadhaar, PAN) using Tesseract.js OCR and image anomaly heatmaps.\n* **Scope Honesty:** FALCON-404 provides probabilistic *screening signals*, not definitive legal proof of fraud. It does NOT connect to live government databases without authorized government credentials.\n\n[Explore the full FALCON-404 Case Study](/projects/falcon-404)`,
      suggestedRoute: "/projects/falcon-404",
      routeLabel: "Explore: FALCON-404 Project",
      isLiveModel: false
    };
  }

  // 4. Arogya AI
  if (q.includes('arogya') || (recentContext.includes('arogya') && (q.includes('tech') || q.includes('problem') || q.includes('hospital') || q.includes('contribut')))) {
    return {
      reply: `**Arogya AI** is a predictive healthcare bed-demand forecasting and emergency admissions dashboard prototype.\n\n* **Problem:** Emergency wards face bed shortages during seasonal surges due to lack of real-time visibility.\n* **Solution:** Interactive department-by-department bed tracking, emergency triage prioritization, and simulated surge forecasting.\n* **Harshad's Role:** Primary Technical Contributor — developed the interactive ward visualizer and simulated time-series state models.\n* **Honesty Notice:** Evaluated on *synthetic demonstration datasets*. It is not clinically validated, not deployed in live hospitals, and does not process real payments.\n\n[Explore Arogya AI Case Study](/projects/arogya-ai)`,
      suggestedRoute: "/projects/arogya-ai",
      routeLabel: "Explore: Arogya AI Project",
      isLiveModel: false
    };
  }

  // 5. Identity / Who is Harshad
  const isGeneralAbout =
    q.includes('who is') ||
    q.includes('about harshad') ||
    q.includes('who are you') ||
    q.includes('introduce') ||
    q.includes('background') ||
    ((q.includes('tell me about') || q.includes('about')) && (q.includes('him') || q.includes('harshad') || q.includes('yourself') || q.trim() === 'tell me about'));

  if (isGeneralAbout) {
    return {
      reply: `**Harshad Rajaram Mane** is a first-year B.Tech Computer Science and Engineering student at **ADCET Ashta, Sangli** (Class of 2026–2030), an enthusiastic builder, and an aspiring **Cybersecurity & DevSecOps** engineer.\n\nHe pairs rigorous daily study in C programming and computational logic with rapid AI-accelerated software engineering. His motto is *"Pressure is a privilege"*, and his headline is *"Curious enough to explore. Driven enough to build."*\n\nHe led Team Falcon at the **Smart India Hackathon (SIH 2026)** and earned **Runner-Up (2nd Place)** nationally in the PixelCraft competition.\n\n[Read Harshad's Story on the About Page](/about)`,
      suggestedRoute: "/about",
      routeLabel: "Explore: About Harshad",
      isLiveModel: false,
      provider: 'grounded-knowledge-engine'
    };
  }

  // 6. Campus Copilot
  if (q.includes('campus') || q.includes('copilot') || q.includes('college bot')) {
    return {
      reply: `**Campus Copilot** is an interactive college-information chatbot prototype built by Harshad to help students quickly locate syllabus guides, timetable schedules, and campus administrative procedures through natural queries.\n\n[Explore Campus Copilot](/projects/campus-copilot)`,
      suggestedRoute: "/projects/campus-copilot",
      routeLabel: "Explore: Campus Copilot",
      isLiveModel: false
    };
  }

  // 7. Projects Overview / All Projects
  if (q.includes('project') || q.includes('portfolio') || q.includes('work') || q.includes('what has he built') || q.includes('summarize his three')) {
    return {
      reply: `Harshad has built **7 verified projects** spanning cybersecurity, healthcare technology, and web engineering:\n\n1. **FALCON-404 (Flagship):** Client-side document forensics screening tool (SIH 2026).\n2. **Arogya AI:** Predictive hospital bed allocation and emergency admissions prototype.\n3. **Campus Copilot:** Interactive student academic information assistant.\n4. **Neuroverse 2K26 Website:** Award-winning symposium site (PixelCraft 2nd Place).\n5. **GADA ELECTRONICS:** Pop-culture themed e-commerce showcase.\n6. **ArtBook AI:** Independent artist showcase and commission inquiry platform.\n7. **Eco-Friendly Planting System:** District-level micro-irrigation apparatus.\n\n[Explore All 7 Projects in Detail](/projects)`,
      suggestedRoute: "/projects",
      routeLabel: "Explore: Projects Showcase",
      isLiveModel: false
    };
  }

  // 8. Cybersecurity / DevSecOps Career Vision
  if (q.includes('cyber') || q.includes('security') || q.includes('devsecops') || q.includes('career') || q.includes('roadmap') || q.includes('goal')) {
    return {
      reply: `**Cybersecurity and DevSecOps** represent Harshad's primary engineering direction.\n\nHis technical foundation includes client-side document forensics (**FALCON-404**), studying Linux systems architecture and TCP/IP network protocols, and practicing automated pipeline security concepts. His goal is to graduate in 2030 with industry-grade security auditing and DevSecOps capabilities.\n\n[View 4-Year Career Roadmap & DevSecOps Vision](/roadmap)`,
      suggestedRoute: "/roadmap",
      routeLabel: "Explore: Career Roadmap",
      isLiveModel: false
    };
  }

  // 9. Technical Skills / Tech Stack
  if (q.includes('skill') || q.includes('technolog') || q.includes('stack') || q.includes('programming') || q.includes('language') || q.includes('learning')) {
    return {
      reply: `Harshad maintains clear transparency between what he is studying independently vs frameworks used with AI acceleration:\n\n* **Computational Foundations:** C Programming, Memory Mechanics, Data Structures, Computational Logic.\n* **Currently Learning:** Linux Systems & Shell Scripting, Python for Data Analytics, Network Protocols (TCP/IP, DNS).\n* **Modern Web Frameworks:** React 19, TypeScript, Tailwind CSS v4, Vite, Supabase.\n* **AI-Assisted Accelerators:** Google Gemini API, Cursor IDE, Claude / Copilot.\n\n[Explore Full Technical Ecosystem](/skills)`,
      suggestedRoute: "/skills",
      routeLabel: "Explore: Technical Skills",
      isLiveModel: false
    };
  }

  // 10. Achievements & Competitions (PixelCraft, Head Boy)
  if (q.includes('achievement') || q.includes('award') || q.includes('honor') || q.includes('pixelcraft') || q.includes('competition') || q.includes('head boy')) {
    return {
      reply: `Harshad's documented recognitions include:\n\n1. **Runner-Up (2nd Place National) — PixelCraft:** Web design and development competition at the Neuroverse 2K26 National Technical Symposium (ADCET Ashta).\n2. **SSC Board Subject Topper:** Highest marks in Mathematics, Hindi, and Marathi at Padua High School (2024).\n3. **Elected School Head Boy:** Served two consecutive academic years (Classes 9 & 10) leading student governance and Annual Day coordination.\n4. **BARC Delegations:** Selected twice for National Science Day educational visits at Bhabha Atomic Research Centre, Trombay.\n\n[View Verified Achievements & Certificates](/achievements)`,
      suggestedRoute: "/achievements",
      routeLabel: "Explore: Verified Honors",
      isLiveModel: false
    };
  }

  // 11. Creative World (Photography, shiv.premi_1630, Motorcycle)
  if (q.includes('creative') || q.includes('photo') || q.includes('camera') || q.includes('shiv.premi') || q.includes('motorcycle') || q.includes('bike') || q.includes('travel')) {
    return {
      reply: `Beyond coding, Harshad is an active visual creator under the creative persona **shiv.premi_1630**.\n\n* **Visual Journal:** Landscape, street, and heritage photography collected across Maharashtra.\n* **Motorcycle Vision:** An aspirational long-term vision to undertake an endurance motorcycle circuit circumnavigating India, conditioning physical and mechanical readiness throughout his college years.\n\n[Explore Creative Visual Journal](/creative)`,
      suggestedRoute: "/creative",
      routeLabel: "Explore: Creative Journal",
      isLiveModel: false
    };
  }

  // 12. Contact / Reach out
  if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('collaborat') || q.includes('reach') || q.includes('linkedin') || q.includes('github')) {
    return {
      reply: `You can reach Harshad directly through any of his verified links:\n\n* **Direct Email:** [hrmane94@gmail.com](mailto:hrmane94@gmail.com)\n* **GitHub:** [github.com/hrmane94-source](https://github.com/hrmane94-source)\n* **LinkedIn:** [linkedin.com/in/shivpremi1630](https://www.linkedin.com/in/shivpremi1630/?isSelfProfile=true)\n* **Behance:** [behance.net/harshadmane11](https://www.behance.net/harshadmane11)\n* **Instagram:** [@shiv.premi_1630](https://www.instagram.com/shiv.premi_1630?cplk=Y3lhemlkZXM2MWhr)\n\n[Open Direct Contact Page](/contact)`,
      suggestedRoute: "/contact",
      routeLabel: "Explore: Contact Harshad",
      isLiveModel: false
    };
  }

  // 13. Education
  if (q.includes('education') || q.includes('college') || q.includes('adcet') || q.includes('school') || q.includes('degree')) {
    return {
      reply: `Harshad is a **First-Year B.Tech Computer Science and Engineering student (2026–2030)** at **Annasaheb Dange College of Engineering and Technology (ADCET)** in Ashta, Sangli.\n\nHe previously completed Higher Secondary (HSC Science) at Swami Vivekanand Junior College (2026) and Class 10 (SSC) at Padua High School, Mankhurd (2024), where he was Subject Topper in Mathematics, Hindi, and Marathi.\n\n[View Full Education History](/education)`,
      suggestedRoute: "/education",
      routeLabel: "Explore: Education",
      isLiveModel: false
    };
  }

  // Default Greeting / Suggested topics
  return {
    reply: `Hi! I am **Ask Harshad AI**, your conversational guide to Harshad Mane's portfolio.\n\nYou can ask me natural questions such as:\n* *"Who is Harshad Mane?"*\n* *"Tell me about the FALCON-404 project."*\n* *"What technologies does he use?"*\n* *"What are his achievements?"*\n* *"Compare FALCON-404 and Arogya AI."*\n* *"How can I contact him?"*`,
    suggestedRoute: "/projects",
    routeLabel: "Explore: All Projects",
    isLiveModel: false
  };
}
