import type { PersonalInfo, SocialLink, Publication, Award } from '../types';

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
    venue: "ACM Symposium on Theory of Computing (STOC)",
    year: "2024",
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
    venue: "Journal of the ACM (JACM)",
    year: "2025", 
    url: "https://doi.org/10.1145/3722551",
    content: `## Abstract

Approximation algorithms for the prize-collecting Steiner forest (PCSF) problem have been a subject of research for more than three decades, starting with the seminal works of Agrawal et al. and Goemans and Williamson on Steiner forest and prize-collecting problems. In this article, we propose and analyze a natural deterministic algorithm for PCSF that achieves a 2-approximate solution in polynomial time. This represents a significant improvement compared to the previously best known algorithm with a 2.54-approximation factor developed by Hajiaghayi and Jain in 2006. Furthermore, Könemann et al. have established an integrality gap of at least 9/4 for the natural LP relaxation for PCSF. However, we surpass this gap through the utilization of an iterative algorithm and a novel analysis technique. Since 2 is the best known approximation guarantee for the Steiner forest problem, which is a special case of PCSF, our result matches this factor and closes the gap between the Steiner forest problem and its generalized version, PCSF.

[Full paper available in Journal of the ACM]`
  },
  {
    id: 3,
    order: 1,
    slug: "steiner-forest-2-approximation-soda",
    title: "2-Approximation for Prize-Collecting Steiner Forest",
    venue: "ACM-SIAM Symposium on Discrete Algorithms (SODA)",
    year: "2024",
    url: "https://epubs.siam.org/doi/abs/10.1137/1.9781611977912.25",
    content: `## Abstract

Approximation algorithms for the prize-collecting Steiner forest problem (PCSF) have been a subject of research for over three decades, starting with the seminal works of Agrawal, Klein, and Ravi [1, 2] and Goemans and Williamson [14, 15] on Steiner forest and prize-collecting problems. In this paper, we propose and analyze a natural deterministic algorithm for PCSF that achieves a 2-approximate solution in polynomial time. This represents a significant improvement compared to the previously best known algorithm with a 2.54-approximation factor developed by Hajiaghayi and Jain [19] in 2006. Furthermore, Könemann, Olver, Pashkovich, Ravi, Swamy, and Vygen [24] have established an integrality gap of at least 9/4 for the natural LP relaxation for PCSF. However, we surpass this gap through the utilization of a combinatorial algorithm and a novel analysis technique. Since 2 is the best known approximation guarantee for Steiner forest problem [2] (see also [15]), which is a special case of PCSF, our result matches this factor and closes the gap between the Steiner forest problem and its generalized version, PCSF.

[This conference version provides the essential ideas and results, with the full technical details available in the journal version.]`
  },
  {
    id: 4,
    order: 3,
    slug: "bi-criteria-metric-distortion",
    title: "Bi-Criteria Metric Distortion",
    venue: "arXiv preprint",
    year: "2024",
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
    title: "Breaking a Long-Standing Barrier: 2-$\epsilon$ Approximation for Steiner Forest",
    venue: "arXiv preprint",
    year: "2025",
    url: "https://arxiv.org/abs/2504.11398",
    videoUrl: "https://player.vimeo.com/video/1111232482",
    content: `## Abstract

The Steiner Forest problem, also known as the Generalized Steiner Tree problem, is a fundamental optimization problem on edge-weighted graphs where, given a set of vertex pairs, the goal is to select a minimum-cost subgraph such that each pair is connected. This problem generalizes the Steiner Tree problem, first introduced in 1811, for which the best known approximation factor is 1.39 [Byrka, Grandoni, Rothvoß, and Sanità, 2010] (Best Paper award, STOC 2010).
The celebrated work of [Agrawal, Klein, and Ravi, 1989] (30-Year Test-of-Time award, STOC 2023), along with refinements by [Goemans and Williamson, 1992] (SICOMP'95), established a 2-approximation for Steiner Forest over 35 years ago. Jain's (FOCS'98) pioneering iterative rounding techniques later extended these results to higher connectivity settings. Despite the long-standing importance of this problem, breaking the approximation factor of 2 has remained a major challenge, raising suspicions that achieving a better factor -- similar to Vertex Cover -- might indeed be hard. Notably, fundamental works, including those by Gupta and Kumar (STOC'15) and Groß et al. (ITCS'18), introduced 96- and 69-approximation algorithms, possibly with the hope of paving the way for a breakthrough in achieving a constant-factor approximation below 2 for the Steiner Forest problem.
In this paper, we break the approximation barrier of 2 by designing a novel deterministic algorithm that achieves a 2−10−11 approximation for this fundamental problem. As a key component of our approach, we also introduce a novel dual-based local search algorithm for the Steiner Tree problem with an approximation guarantee of 1.943, which is of independent interest.

[Full paper available on arXiv]`
  }
]

export const awards: Award[] = [
  "2nd Place, ICPC North America South Division (2023)",
  "3rd Place, Iranian National Scientific Olympiad (2021)",
  "2nd Place, ICPC Asia-West Regional Contest (2020)",
  "2nd Place, ICPC Asia-West Regional Contest (2017)",
  "Silver Medal, International Olympiad in Informatics (IOI) (2017)",
  "Gold Medal, Iran National Olympiad in Informatics (INOI) (2016)",
  "Silver Medal, Iran National Olympiad in Informatics (INOI) (2015)"
]