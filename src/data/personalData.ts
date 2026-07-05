import type { PersonalInfo, SocialLink, Publication, Award, MiniProject, NewsItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Iman Gholami",
  title: "PhD Candidate, Computer Science",
  bio: "I am a PhD candidate at the University of Maryland, advised by Prof. MohammadTaghi Hajiaghayi. I received my BSc in Computer Engineering from Sharif University of Technology.",
  researchFocus: "My research is in theoretical computer science, including approximation algorithms, network design, graph theory, and combinatorial optimization. More recently, I have been working on using LLMs and reasoning models to attack problems in the same space.",
  email: "imangholami77@gmail.com",
  profileImage: "/profile.jpg"
}

export const socialLinks: SocialLink[] = [
  { name: "Email", url: "mailto:imangholami77@gmail.com", type: "email" },
  { name: "Scholar", url: "https://scholar.google.com/citations?user=0xWEC98AAAAJ", type: "scholar" },
  { name: "DBLP", url: "https://dblp.org/pid/356/6589.html", type: "dblp" },
  { name: "GitHub", url: "https://github.com/igholami", type: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/imangholami", type: "linkedin" },
  { name: "CV", url: "/cv.pdf", type: "cv" }
]

export const publications: Publication[] = [
  {
    id: 7,
    order: 0,
    slug: "beyond-the-library",
    title: "Beyond the Library: An Agentic Framework for Autoformalizing Research Mathematics",
    venues: ["arXiv preprint (arXiv) - 2026"],
    url: "https://arxiv.org/abs/2606.31134",
    content: `## Abstract\n\nLarge language models are strong at mathematical reasoning but can introduce subtle errors. We develop an agentic system that automatically translates natural-language mathematics into verifiable Lean 4 code. A core challenge in research mathematics is that concepts often go beyond existing libraries; our framework handles this by dynamically extending type definitions and validating them through a novel Auxiliary Lemma technique. We evaluate on PutnamBench and on theorems from STOC and other top-tier venues, successfully formalizing statements and proofs across combinatorics, complexity theory, mechanism design, and learning theory. Two papers are formalized with minimal axioms beyond Lean's kernel.`
  },
  {
    id: 8,
    order: 0.25,
    slug: "quiet-planting-ksat",
    title: "Quiet Planting for k-SAT, Multiple Solutions of Arbitrary Geometry",
    venues: ["Conference on Learning Theory (COLT) - 2026"],
    url: "https://proceedings.mlr.press/v336/ahmadi26a.html",
    links: [{ label: "COLT", url: "https://proceedings.mlr.press/v336/ahmadi26a.html" }],
    content: `## Abstract\n\n[Full paper available on arXiv.]`
  },
  {
    id: 4,
    order: 0.5,
    slug: "bi-criteria-metric-distortion",
    title: "Bi-Criteria Metric Distortion",
    venues: ["International Conference on Learning Representations (ICLR) - 2026"],
    url: "https://openreview.net/forum?id=QBgHVmvN5S",
    links: [{ label: "ICLR", url: "https://openreview.net/forum?id=QBgHVmvN5S" }],
    content: `## Abstract\n\n[Full paper on arXiv.]`
  },
  {
    id: 5,
    order: 2,
    slug: "breaking-barrier",
    title: "Breaking a Long-Standing Barrier: 2-$\\varepsilon$ Approximation for Steiner Forest",
    venues: ["IEEE Symposium on Foundations of Computer Science (FOCS) - 2025 (Best Paper Award)"],
    url: "https://ieeexplore.ieee.org/document/11369093",
    links: [
      { label: "FOCS", url: "https://ieeexplore.ieee.org/document/11369093" },
      { label: "arXiv", url: "https://arxiv.org/abs/2504.11398" }
    ],
    videoUrl: "https://player.vimeo.com/video/1111232482",
    content: `## Abstract\n\n[Full paper on arXiv.]`
  },
  {
    id: 2,
    order: 3,
    slug: "steiner-forest-2-approximation-jacm",
    title: "2-Approximation for Prize-Collecting Steiner Forest",
    venues: [
      "Journal of the ACM (JACM) - 2025",
      "ACM-SIAM Symposium on Discrete Algorithms (SODA) - 2024"
    ],
    url: "https://doi.org/10.1145/3722551",
    links: [
      { label: "JACM", url: "https://doi.org/10.1145/3722551" },
      { label: "SODA", url: "https://epubs.siam.org/doi/10.1137/1.9781611977912.25" }
    ],
    content: `## Abstract\n\n[Available at JACM.]`
  },
  {
    id: 6,
    order: 4,
    slug: "prize-collecting-forest-submodular-penalties",
    title: "Prize-Collecting Forest with Submodular Penalties: Improved Approximation",
    venues: ["Integer Programming and Combinatorial Optimization (IPCO) - 2025"],
    url: "https://link.springer.com/chapter/10.1007/978-3-031-93112-3_2",
    links: [
      { label: "IPCO", url: "https://link.springer.com/chapter/10.1007/978-3-031-93112-3_2" },
      { label: "arXiv", url: "https://arxiv.org/abs/2504.15445" }
    ],
    content: `## Abstract\n\n[Full paper on arXiv.]`
  },
  {
    id: 1,
    order: 5,
    slug: "prize-collecting-steiner-tree-179",
    title: "Prize-Collecting Steiner Tree: A 1.79 Approximation",
    venues: ["ACM Symposium on Theory of Computing (STOC) - 2024"],
    url: "https://doi.org/10.1145/3618260.3649789",
    content: `## Abstract\n\n[Full paper in STOC 2024 proceedings.]`
  }
]

export const awards: Award[] = [
  "Best Paper Award, FOCS (2025)",
  "2nd Place, ICPC North America South Division (2023)",
  "2nd Place, ICPC Asia-West Regional Contest (2020)",
  "Silver Medal, International Olympiad in Informatics (IOI) (2017)",
  "2nd Place, ICPC Asia-West Regional Contest (2017)",
  "Gold Medal, Iran National Olympiad in Informatics (INOI) (2016)"
]

export const miniProjects: MiniProject[] = [
  {
    id: 1,
    name: "Metachamber",
    description: "AI-powered platform for discovering and generating metadata descriptions.",
    githubUrl: "https://github.com/metachamber/metachamber-back",
    technologies: ["Python", "Django", "Vue.js"]
  },
  {
    id: 2,
    name: "Grass",
    description: "Automated grading platform integrating Canvas LMS, ChatGPT, and Telegram.",
    githubUrl: "https://github.com/igholami/grass",
    technologies: ["Python", "Django"]
  }
]

export const news: NewsItem[] = [
  {
    id: 10,
    title: "Paper \"Beyond the Library: An Agentic Framework for Autoformalizing Research Mathematics\" posted on arXiv",
    date: "Jun 30, 2026"
  },
  {
    id: 9,
    title: "Presented paper \"Quiet Planting for k-SAT\" at COLT",
    date: "Jul 3, 2026"
  },
  {
    id: 11,
    title: "Started internship at Axiom (New York City)",
    date: "Jun 8, 2026"
  },
  {
    id: 8,
    title: "Paper \"Quiet Planting for k-SAT, Multiple Solutions of Arbitrary Geometry\" accepted at COLT",
    date: "May 10, 2026"
  },
  {
    id: 0,
    title: "Paper \"Bi-Criteria Metric Distortion\" accepted at ICLR",
    date: "Jan 26, 2026"
  },
  {
    id: 12,
    title: "Advanced to PhD candidacy",
    date: "Mar 2, 2026"
  },
  {
    id: 1,
    title: "Received Best Paper Award at FOCS",
    date: "Sep 14, 2025"
  },
  {
    id: 2,
    title: "Paper \"Breaking a Long-Standing Barrier: 2-ε Approximation for Steiner Forest\" accepted at FOCS",
    date: "Jul 8, 2025"
  },
  {
    id: 3,
    title: "Started internship at Axal (San Francisco)",
    date: "May 27, 2025"
  },
  {
    id: 13,
    title: "Presented paper \"Breaking a Long-Standing Barrier: 2-ε Approximation for Steiner Forest\" at CATS seminar",
    date: "May 16, 2025"
  },
  {
    id: 4,
    title: "Paper \"2-Approximation for Prize-Collecting Steiner Forest\" accepted at JACM",
    date: "Mar 1, 2025"
  },
  {
    id: 5,
    title: "Paper \"Prize-Collecting Forest with Submodular Penalties\" accepted at IPCO",
    date: "Jan 22, 2025"
  },
  {
    id: 7,
    title: "Paper \"2-Approximation for Prize-Collecting Steiner Forest\" accepted at SODA",
    date: "Oct 10, 2024"
  },
  {
    id: 6,
    title: "Paper \"Prize-Collecting Steiner Tree: A 1.79 Approximation\" accepted at STOC",
    date: "Feb 8, 2024"
  },
  {
    id: 14,
    title: "Presented paper \"2-Approximation for Prize-Collecting Steiner Forest\" at CATS seminar",
    date: "Sep 22, 2023"
  }
]
