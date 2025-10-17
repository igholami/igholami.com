import type { PersonalInfo, SocialLink, Publication, Award, MiniProject, NewsItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Iman Gholami",
  title: "PhD Student in Computer Science",
  bio: "Third-year PhD student at the University of Maryland, specializing in theoretical computer science, network design, and combinatorial optimization under the guidance of Prof. MohammadTaghi Hajiaghayi.",
  researchFocus: "My research focuses on theoretical computer science, particularly in network design, graph theory, combinatorial optimization, and social choice theory. I am also exploring computational complexity theory with applications in quantum computing.",
  email: "imangholami77@gmail.com",
  profileImage: "/profile.jpg"
}

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    url: "mailto:imangholami77@gmail.com",
    type: "email"
  },
  {
    name: "GitHub", 
    url: "https://github.com/igholami",
    type: "github"
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/citations?user=0xWEC98AAAAJ",
    type: "scholar"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/imangholami", 
    type: "linkedin"
  },
  {
    name: "DBLP",
    url: "https://dblp.org/pid/356/6589.html",
    type: "dblp"
  },
  {
    name: "CV",
    url: "/cv.pdf",
    type: "cv"
  }
]

export const publications: Publication[] = [
  {
    id: 1,
    order: 2,
    slug: "prize-collecting-steiner-tree-179",
    title: "Prize-Collecting Steiner Tree: A 1.79 Approximation",
    venues: ["ACM Symposium on Theory of Computing (STOC) - 2024"],
    url: "https://doi.org/10.1145/3618260.3649789",
    content: `## Abstract

Prize-Collecting Steiner Tree (PCST) is a generalization of the Steiner Tree problem, a fundamental problem in computer science. In the classic Steiner Tree problem, we aim to connect a set of vertices known as terminals using the minimum-weight tree in a given weighted graph. In this generalized version, each vertex has a penalty, and there is flexibility to decide whether to connect each vertex or pay its associated penalty, making the problem more realistic and practical.

Both the Steiner Tree problem and its Prize-Collecting version had long-standing 2-approximation algorithms, matching the integrality gap of the natural LP formulations for both. This barrier for both problems has been surpassed, with algorithms achieving approximation factors below 2. While research on the Steiner Tree problem has led to a series of reductions in the approximation ratio below 2, culminating in a ln(4)+є approximation by Byrka, Grandoni, Rothvoß, and Sanità [STOC’10], the Prize-Collecting version has not seen improvements in the past 15 years since the work of Archer, Bateni, Hajiaghayi, and Karloff [FOCS’09, SIAM J. Comput.’11], which reduced the approximation factor for this problem from 2 to 1.9672. Interestingly, even the Prize-Collecting TSP approximation, which was first improved below 2 in the same paper, has seen several advancements since then (see, e.g., Blauth and N'agele ‍[STOC’23]).

In this paper, we reduce the approximation factor for the PCST problem substantially to 1.7994 via a novel iterative approach.

[Full paper available in STOC 2024 proceedings]`
  },
  {
    id: 2,
    order: 4,
    slug: "steiner-forest-2-approximation-jacm",
    title: "2-Approximation for Prize-Collecting Steiner Forest",
    venues: [
      "Journal of the ACM (JACM) - 2025",
      "ACM-SIAM Symposium on Discrete Algorithms (SODA) - 2024"
    ],
    badge: "special-issue",
    url: "https://doi.org/10.1145/3722551",
    content: `## Abstract

Approximation algorithms for the prize-collecting Steiner forest (PCSF) problem have been a subject of research for more than three decades, starting with the seminal works of Agrawal et al. and Goemans and Williamson on Steiner forest and prize-collecting problems. In this article, we propose and analyze a natural deterministic algorithm for PCSF that achieves a 2-approximate solution in polynomial time. This represents a significant improvement compared to the previously best known algorithm with a 2.54-approximation factor developed by Hajiaghayi and Jain in 2006. Furthermore, Könemann et al. have established an integrality gap of at least 9/4 for the natural LP relaxation for PCSF. However, we surpass this gap through the utilization of an iterative algorithm and a novel analysis technique. Since 2 is the best known approximation guarantee for the Steiner forest problem, which is a special case of PCSF, our result matches this factor and closes the gap between the Steiner forest problem and its generalized version, PCSF.

[Full paper available in Journal of the ACM]`
  },
  {
    id: 4,
    order: 1,
    slug: "bi-criteria-metric-distortion",
    title: "Bi-Criteria Metric Distortion",
    venues: ["arXiv preprint - 2024"],
    url: "https://arxiv.org/abs/2412.10671",
    content: `## Abstract

Selecting representatives based on voters' preferences is a fundamental problem in social choice theory. While cardinal utility functions offer a detailed representation of preferences, ordinal rankings are often the only available information due to their simplicity and practical constraints. The metric distortion framework addresses this issue by modeling voters and candidates as points in a metric space, with distortion quantifying the efficiency loss from relying solely on ordinal rankings. Existing works define the cost of a voter with respect to a candidate as their distance and set the overall cost as either the sum (utilitarian) or maximum (egalitarian) of these costs across all voters. They show that deterministic algorithms achieve a best-possible distortion of 3 for any metric when considering a single candidate.

This paper explores whether one can obtain a better approximation compared to an optimal candidate by relying on a committee of k candidates (k≥1), where the cost of a voter is defined as its distance to the closest candidate in the committee. We answer this affirmatively in the case of line metrics, demonstrating that with O(1) candidates, it is possible to achieve optimal cost. Our results extend to both utilitarian and egalitarian objectives, providing new upper bounds for the problem. We complement our results with lower bounds for both the line and 2-D Euclidean metrics.

[Full paper and appendices available on arXiv]`
  },
  {
    id: 5,
    order: 5,
    slug: "breaking-barrier",
    title: "Breaking a Long-Standing Barrier: 2-$\\varepsilon$ Approximation for Steiner Forest",
    venues: ["IEEE Symposium on Foundations of Computer Science (FOCS) - 2025"],
    url: "https://arxiv.org/abs/2504.11398",
    videoUrl: "https://player.vimeo.com/video/1111232482",
    badge: "best-paper",
    content: `## Abstract

The Steiner Forest problem, also known as the Generalized Steiner Tree problem, is a fundamental optimization problem on edge-weighted graphs where, given a set of vertex pairs, the goal is to select a minimum-cost subgraph such that each pair is connected. This problem generalizes the Steiner Tree problem, first introduced in 1811, for which the best known approximation factor is 1.39 [Byrka, Grandoni, Rothvoß, and Sanità, 2010] (Best Paper award, STOC 2010).
The celebrated work of [Agrawal, Klein, and Ravi, 1989] (30-Year Test-of-Time award, STOC 2023), along with refinements by [Goemans and Williamson, 1992] (SICOMP'95), established a 2-approximation for Steiner Forest over 35 years ago. Jain's (FOCS'98) pioneering iterative rounding techniques later extended these results to higher connectivity settings. Despite the long-standing importance of this problem, breaking the approximation factor of 2 has remained a major challenge, raising suspicions that achieving a better factor -- similar to Vertex Cover -- might indeed be hard. Notably, fundamental works, including those by Gupta and Kumar (STOC'15) and Groß et al. (ITCS'18), introduced 96- and 69-approximation algorithms, possibly with the hope of paving the way for a breakthrough in achieving a constant-factor approximation below 2 for the Steiner Forest problem.
In this paper, we break the approximation barrier of 2 by designing a novel deterministic algorithm that achieves a 2−10−11 approximation for this fundamental problem. As a key component of our approach, we also introduce a novel dual-based local search algorithm for the Steiner Tree problem with an approximation guarantee of 1.943, which is of independent interest.

[Full paper available on arXiv]`
  },
  {
    id: 6,
    order: 3.2,
    slug: "prize-collecting-forest-submodular-penalties",
    title: "Prize-Collecting Forest with Submodular Penalties: Improved Approximation",
    venues: ["International Conference on Parallel Processing (IPCO) - 2025"],
    url: "https://arxiv.org/abs/2504.15445",
    content: `## Abstract
    Constrained forest problems form a class of graph problems where specific connectivity requirements for certain cuts within the graph must be satisfied by selecting the minimum-cost set of edges. The prize-collecting version of these problems introduces flexibility by allowing penalties to be paid to ignore some connectivity requirements.

Goemans and Williamson [8] introduced a general technique and developed a 2-approximation algorithm for constrained forest problems. Further, Sharma, Swamy, and Williamson [16] extended this work by developing a 2.54-approximation algorithm for the prize-collecting version of these problems. Motivated by the generality of their framework, which includes problems such as Steiner trees, Steiner forests, and their variants, we pursued further exploration.

We present a significant improvement by achieving a 2-approximation algorithm for this general model, matching the approximation factor of the constrained forest problems. Notably, the best-known approximation factor for a specific case, the Steiner forest, has remained at 2 since it was established in 1991 by Agrawal, Klein, and Ravi [1].

[Full paper available on arXiv]`
  }
]

export const awards: Award[] = [
  "<strong>Best Paper Award, FOCS (2025)</strong>",
  "<strong>2nd Place, ICPC North America South Division (2023)</strong>",
  "3rd Place, Iranian National Scientific Olympiad in Computer Science and Engineering (undergraduate nationwide competition) (2021)",
  "2nd Place, ICPC Asia-West Regional Contest (2020)",
  "2nd Place, ICPC Asia-West Regional Contest (2017)",
  "<strong>Silver Medal, International Olympiad in Informatics (IOI) (2017)</strong>",
  "Gold Medal, Iran National Olympiad in Informatics (INOI) (2016)",
  "Silver Medal, Iran National Olympiad in Informatics (INOI) (2015)"
]

export const miniProjects: MiniProject[] = [
  {
    id: 1,
    name: "Metachamber - Metadata Discovery Platform",
    description: "AI-powered platform for discovering and generating metadata descriptions automatically.",
    githubUrl: "https://github.com/metachamber/metachamber-back",
    technologies: ["Python", "Django REST Framework", "Vue.js", "ChatGPT"]
  },
  {
    id: 2,
    name: "Grass - AI Automated Grading Assistant",
    description: "An intelligent automated grading platform that integrates Canvas LMS, ChatGPT, and Telegram.",
    githubUrl: "https://github.com/igholami/grass",
    technologies: ["Python", "Django", "ChatGPT", "Telegram API"]
  },
  {
    id: 3,
    name: "Teeworlds Docker",
    description: "Docker image for teeworlds (and mods) servers.",
    githubUrl: "https://github.com/igholami/teeworlds-docker",
    technologies: ["Dockerfile", "Shell"],
    geekyOnly: true
  },
  {
    id: 4,
    name: "Say the Lyrics - Chrome Extension",
    description: "A Chrome extension to play \"Don't Forget the Lyrics!\" using Spotify's lyrics feature.",
    githubUrl: "https://github.com/igholami/say-the-lyrics",
    technologies: ["JavaScript", "CSS", "Chrome Extension"],
    geekyOnly: true
  },
  {
    id: 5,
    name: "Tele-tweet - Telegram Bot",
    description: "Django Telegram bot for Twitter-like messaging with channel broadcasting.",
    githubUrl: "https://github.com/igholami/tele-tweet",
    technologies: ["Python", "Django", "Telegram Bot API"],
    geekyOnly: true
  },
  {
    id: 6,
    name: "Swan - Reddit-like Knowledge Sharing Platform",
    description: "A community-driven platform for sharing and discussing knowledge with voting and commenting features.",
    githubUrl: "https://github.com/igholami/swan",
    technologies: ["Vue.js", "Quasar", "JavaScript", "HTML", "Python", "Django"],
    geekyOnly: true
  }
]

export const news: NewsItem[] = [
  {
    id: 1,
    title: "Won best paper award at FOCS",
    date: "Sep 14, 2025"
  },
  {
    id: 2,
    title: "Paper \"Breaking a Long-Standing Barrier: 2-ε Approximation for Steiner Forest\" accepted at FOCS",
    date: "Jul 8, 2025"
  },
  {
    id: 3,
    title: "Started internship at <a href='https://axal.ai' target='_blank' rel='noopener noreferrer'>Axal.ai</a>",
    date: "May 27, 2025"
  },
  {
    id: 4,
    title: "Paper \"2-Approximation for Prize-Collecting Steiner Forest\" accepted at JACM",
    date: "Mar 1, 2025"
  },
  {
    id: 5,
    title: "Paper \"Prize-Collecting Forest with Submodular Penalties: Improved Approximation\" accepted at IPCO",
    date: "Jan 22, 2025"
  },
  {
    id: 6,
    title: "Paper \"Prize-Collecting Steiner Tree: A 1.79 Approximation\" accepted at STOC",
    date: "Feb 8, 2024"
  },
  {
    id: 7,
    title: "Paper \"2-Approximation for Prize-Collecting Steiner Forest\" accepted at SODA",
    date: "Oct 10, 2024"
  }
]
 