"use client";

import { useEffect, useState } from "react";
import { GraduationCap, Library, Cpu } from "lucide-react";

export default function AcademicPersonalSite() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const isProfileOpen = isHovered || isPinned;

  useEffect(() => {
 	  const ids = ["about", "research", "work", "referees", "contact"];

 	  const handleScroll = () => {
 		  const scrollY = window.scrollY;
 		  let current = "about";

 		  for (const id of ids) {
 			  const el = document.getElementById(id);
 			  if (!el) continue;
 			  const top = el.offsetTop - 140;
 			  if (scrollY >= top) current = id;
 		  }

 		  setActiveSection(current);
 	  };

 	  handleScroll();
 	  window.addEventListener("scroll", handleScroll);
 	  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { label: "About", href: "#about" },
    { label: "CV", href: "/cv.pdf" },
    { label: "Research", href: "#research" },
    { label: "Showcase", href: "#work" },
    { label: "Referees", href: "#referees" },
    { label: "Contact", href: "#contact" },
  ];

  const referees = [
    {
      name: "Prof. Byungwan Koh",
      role: "Professor of Information Systems",
      institution: "Korea University Business School",
      email: "Available Upon Request",
      website: "http://byungwan.com/"
    },
    {
      name: "Prof. Gunwoong Lee",
      role: "Associate Professor of Information Systems",
      institution: "Korea University Business School",
      email: "Available Upon Request",
      website: "http://www.gunwoonglee.com/"
    },
    {
      name: "Prof. Angela Aerry Choi",
      role: "Assistant Professor of Information Systems",
      institution: "Korea University Business School",
      email: "Available Upon Request",
      website: "https://biz.korea.ac.kr/professor/professor_view.html?pinfo=fuk138LGpVnecTUnjiZSXw&refer=%2Fprofessor%2Fmis.html"
    },
  ];

  const workItems = [
    {
      title: "Project 1",
      description: "Project incoming",
      link: "https://",
    },
    {
      title: "Project 2",
      description: "Project incoming",
      link: "https://",
    },
  ];

  const publications = [
    {
      title: "Upcoming Papers",
      authors: "Authors",
      journal: "Journal",
      year: "2027",
      link: "https://",
    },
  ];

  const coursework = [
    "AI for Business",
    "Advanced Machine Learning",
    "Big Data Analytics",
    "Business Analytics I, II",
    "Databases",
    "Database Management and Business Intelligence",
    "Statistical Programming",
    "Social Media (Text) Analytics",
    "Management Information Systems",
    "Management Science",
    "Management Mathematics",
    "Business Statistics",
  ];

  return (
	<div className="relative min-h-screen bg-[#070d24] text-[#edf2ff] selection:bg-[#946b2d]/40 selection:text-white">
		<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(27,42,107,0.45),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(148,107,45,0.14),_transparent_25%)]" />

						<header className="sticky top-0 z-30 border-b border-[#946b2d]/20 bg-[#070d24]/95 backdrop-blur">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
					<div className="flex flex-col items-start">
						<p className="font-[Glitten] text-[10px] uppercase tracking-[0.28em] text-[#b8c4f2] sm:text-xs sm:tracking-[0.35em]">
							Simplicity is Intelligence
						</p>
						<img
							src="/logo.png"
							alt="logo"
							className="mt-1 h-7 w-auto opacity-90 sm:h-8"
						/>
					</div>

					<nav className="hidden gap-6 md:flex">
						{sections.map((item) => (
							<a
								key={item.label}
								href={item.href}
								target={item.href === "/cv.pdf" ? "_blank" : "_self"}
								rel="noopener noreferrer"
								className="font-[Montserrat] text-sm text-[#d9e2ff] transition hover:text-[#c4933f]"
							>
								{item.label}
							</a>
						))}
					</nav>

					<button
						type="button"
						onClick={() => setMobileMenuOpen((prev) => !prev)}
						className="flex h-10 w-10 items-center justify-center rounded-full border border-[#946b2d]/30 bg-white/5 text-[#edf2ff] transition duration-300 hover:bg-white/10 md:hidden"
						aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
					>
						{mobileMenuOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.8"
								className="h-5 w-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 6l12 12M18 6L6 18"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.8"
								className="h-5 w-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</button>
				</div>

				<div
					className={`fixed right-0 top-[73px] z-40 h-[calc(100vh-73px)] w-[72%] max-w-[320px] border-l border-white/10 bg-[#060b1f] shadow-2xl transition-transform duration-500 ease-out md:hidden ${
						mobileMenuOpen ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<nav className="flex h-full flex-col overflow-y-auto px-8 py-10">
						{sections.map((item, index) => {
							const sectionKey =
								item.href.startsWith("#") ? item.href.replace("#", "") : null;
							const isActive = sectionKey ? activeSection === sectionKey : false;
							return (
								<a
									key={item.label}
									href={item.href}
									target={item.href === "/cv.pdf" ? "_blank" : "_self"}
									rel="noopener noreferrer"
									onClick={() => setMobileMenuOpen(false)}
									className={`mb-8 w-fit font-[Montserrat] text-[1.35rem] tracking-[0.08em] transition-all duration-300 ${
										isActive
											? "text-white"
											: "text-[#d9d9d9]/75 hover:text-white"
									}`}
									style={{ transitionDelay: mobileMenuOpen ? `${index * 45}ms` : "0ms" }}
								>
									<span className="block">{item.label.toUpperCase()}</span>
									{isActive && item.href.startsWith("#") && (
										<span className="mt-2 block h-[2px] w-[138px] bg-[#b11f3f]" />
									)}
								</a>
							);
						})}
					</nav>
				</div>
			</header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-10 pt-20 md:grid-cols-[1.2fr_0.8fr] md:pt-24">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#c4933f] font-[Glitten]">
              Analytics · Information Systems · Data Science
            </p>
            <h2 className="max-w-3xl font-serif text-5xl leading-tight text-white md:text-6xl">
              MINOO LA
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d7def7] font-[Montserrat]">
              I am an analytics and information systems student developing a
              research profile in data science. My work is focused on predictive
              modeling, as well as text-based data analysis and representation
              learning for natural language data, which includes (transfer) embeddings
              and semantic structures. My interests also extend to the
              interpretability and reliability of machine learning models in
              contexts related to explainable AI and autonomous systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#c4933f] bg-[#c4933f] px-6 py-3 text-sm font-[Montserrat] font-semibold text-[#0b112b] shadow-lg shadow-[#c4933f]/20 transition hover:-translate-y-0.5 hover:bg-[#d6a94a]"
              >
                View CV
              </a>
              <a
                href="#about"
                className="rounded-2xl border border-[#946b2d] bg-[#946b2d] px-5 py-3 text-sm font-[Montserrat] font-semibold text-[#0b112b] shadow-lg shadow-[#946b2d]/20 transition hover:-translate-y-0.5"
              >
                Read More
              </a>
              <a
                href="#referees"
                className="rounded-2xl border border-[#9aa9df]/30 px-5 py-3 text-sm font-[Montserrat] text-[#edf2ff] transition hover:border-[#c4933f] hover:text-[#c4933f]"
              >
                View Referees
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#8ea0e8]/15 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="rounded-[1.5rem] border border-[#946b2d]/25 bg-[#0d1638] p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#c4933f] text-center font-[Glitten]">
                Profile Snapshot
              </p>
              <div className="mt-6 flex justify-center">
                <img
                  src="/profile.jpg"
                  alt="profile"
                  className="h-32 w-32 rounded-xl object-cover border border-[#946b2d]/40"
                />
              </div>
              <div className="mt-6 space-y-5 text-sm leading-7 text-[#dce5ff] font-[Montserrat]">
                <div>
                  <div className="flex items-center gap-2 text-[#91a5ef]">
                    <GraduationCap className="h-[18px] w-[18px] text-[#c4933f]" /> 
                    <p>Education</p>
                  </div>
                  <p>Korea University Business School</p>
                  <p>Undergraduate, BBA (Feb 2027)</p>
                  <p>Concentration: IS · Analytics</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[#91a5ef]">
                    <Library className="h-[18px] w-[18px] text-[#c4933f]" />
                    <p>Fields of Study</p>
                  </div>
                  <p>IS, DS, Business Analytics, Machine Learning, NLP</p>
                </div>

                  <div>
                    <div className="flex items-center gap-2 text-[#91a5ef]">
                    <Cpu className="h-[18px] w-[18px] text-[#c4933f]" />
                    <p>Current Work (Apr 2026)</p>
                  </div>

                  <div className="mt-3 space-y-2 text-sm leading-7 text-[#dce5ff] font-[Montserrat]">
                    <p>
                      Building an SNS text analytics project for business use
                      (web scraping, preprocessing evaluation)
                    </p>

                    <p>
                      Developing ML systems with web deployment:
                    </p>

                    <ul className="pl-4 space-y-1 list-[circle]">
                      <li>
                        Embedding-based game similarity & recommendation
                        with finder/retrieval, reranking, LLM explanations
                      </li>
                      <li>
                        Research paper analysis
                        using PDF parsing, document-level search, classification-guided summarization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-20 relative z-10 mx-auto max-w-6xl px-6 py-8 md:-mt-24"
        >
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c4933f] font-[Glitten]">
                About
              </p>
              <h3 className="mt-3 font-serif text-3xl text-white">
                Academic Profile
              </h3>
            </div>

            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsPinned((prev) => !prev)}
              className="hidden h-32 w-32 cursor-pointer items-center justify-center rounded-[1.75rem] border border-[#8ea0e8]/15 bg-white/5 p-5 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:scale-[1.05] md:flex"
            >
              <img
                src="/ku-logo.png"
                alt="Korea University logo"
                className="h-[4.5rem] w-[4.5rem] object-contain"
              />
            </div>

            <button
              type="button"
              onClick={() => setMobileProfileOpen((prev) => !prev)}
              className="flex w-full items-center gap-4 rounded-[1.5rem] border border-[#8ea0e8]/15 bg-white/5 p-4 text-left shadow-xl shadow-black/20 backdrop-blur transition md:hidden"
            >
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.25rem] border border-[#8ea0e8]/15 bg-[#0d1638] p-3">
                <img
                  src="/ku-logo.png"
                  alt="Korea University logo"
                  className="h-12 w-12 object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-[Glitten] text-sm uppercase tracking-[0.28em] text-[#c4933f]">
                  Tap to expand
                </p>
                <p className="mt-1 font-serif text-xl text-white">
                  Korea University Business School
                </p>
                <p className="mt-1 text-sm font-[Montserrat] text-[#d8e1ff]">
                  Academic profile, coursework, experience, honors, and skills
                </p>
              </div>
            </button>

            <div
              className={`mt-4 overflow-hidden rounded-[1.75rem] border border-[#8ea0e8]/15 bg-[#0d1638]/95 text-sm leading-7 text-[#d8e1ff] font-[Montserrat] shadow-2xl backdrop-blur transition-all duration-300 md:hidden ${
                mobileProfileOpen
                  ? "max-h-[4000px] opacity-100 p-5"
                  : "max-h-0 opacity-0 p-0 border-transparent"
              }`}
            >
              <div className="border-b border-[#8ea0e8]/10 pb-6">
                <h4 className="font-serif text-2xl text-white">
                  Korea University Business School (KUBS)
                </h4>
                <p className="mt-3 text-base font-semibold text-[#c4933f]">
                  Bachelor of Business Administration
                </p>
                <p className="mt-1 font-semibold text-[#d8e1ff]">
                  Expected Graduation: February 2027 (Early Graduation)
                </p>

                <div className="mt-5 space-y-2">
                  <p>
                    <span className="font-semibold text-[#91a5ef]">Concentration:</span>{" "}
                    Information Systems &amp; Analytics
                  </p>
                  <div>
                    <p className="font-semibold text-[#91a5ef]">Completed Tracks:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-[#d8e1ff]">
                      <li>Business Analytics (비즈니스애널리틱스)</li>
                      <li>Artificial Intelligence for Business (AI와경영)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-b border-[#8ea0e8]/10 pb-6">
                <h5 className="font-serif text-xl text-white">Relevant Coursework</h5>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {coursework.map((course) => (
                    <div
                      key={course}
                      className="flex min-h-[88px] items-center justify-center rounded-xl border border-[#8ea0e8]/10 bg-white/5 px-3 py-3 text-center text-xs leading-5 text-[#dce5ff]"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-b border-[#8ea0e8]/10 pb-6">
                <h5 className="font-serif text-xl text-white">Academic Experience</h5>

                <div className="mt-4">
                  <p className="font-semibold text-[#c4933f]">
                    KUBS Official Undergraduate Tutor
                  </p>
                  <p className="font-semibold text-[#d8e1ff]">Mar 2026 - Present</p>
                  <div className="mt-3">
                    <p className="font-semibold text-[#91a5ef]">Tutoring Subjects:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-[#d8e1ff]">
                      <li>Business Statistics</li>
                      <li>Management Information Systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-b border-[#8ea0e8]/10 pb-6">
                <h5 className="font-serif text-xl text-white">Awards & Honors</h5>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[#d8e1ff]">
                  <li>Dean's Award</li>
                  <li>
                    Admission/Excellent/Top Scholarships, <em>Korea University</em> - 2023,
                    2024, 2025
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h5 className="font-serif text-xl text-white">Technical Skills</h5>

                <div className="mt-4 space-y-3">
                  <p>
                    <span className="font-semibold text-[#91a5ef]">Programming:</span>{" "}
                    Python, R, SQL (PostgreSQL), C++
                  </p>
                  <p>
                    <span className="font-semibold text-[#91a5ef]">
                      Machine Learning &amp; AI:
                    </span>{" "}
                    scikit-learn, Hugging Face Transformers, LangChain, LangGraph, PyTorch ·
                    TensorFlow, OpenAI API
                  </p>
                  <p>
                    <span className="font-semibold text-[#91a5ef]">
                      Data Analysis Tools:
                    </span>{" "}
                    pandas, NumPy, matplotlib · seaborn · ggplot2, Excel, Tableau
                  </p>
                  <p>
                    <span className="font-semibold text-[#91a5ef]">Web &amp; Misc:</span>{" "}
                    HTML/CSS, SeleniumBase, Streamlit, Git
                  </p>
                </div>
              </div>
            </div>

              <div
                className={`absolute left-40 top-0 z-30 hidden w-[760px] rounded-[1.75rem] border border-[#8ea0e8]/15 bg-[#0d1638]/95 p-8 text-sm leading-7 text-[#d8e1ff] font-[Montserrat] shadow-2xl backdrop-blur transition-all duration-300 md:block ${
                  isProfileOpen
                    ? "opacity-100 translate-x-0"
                    : "pointer-events-none opacity-0 -translate-x-4"
                }`}
              >
                <div className="border-b border-[#8ea0e8]/10 pb-6">
                  <h4 className="font-serif text-2xl text-white">
                    Korea University Business School (KUBS)
                  </h4>
                  <p className="mt-3 text-base text-[#c4933f] font-semibold">
                    Bachelor of Business Administration
                  </p>
                  <p className="mt-1 text-[#d8e1ff] font-semibold">
                    Expected Graduation: February 2027 (Early Graduation)
                  </p>

                  <div className="mt-5 space-y-2">
                    <p>
                      <span className="font-semibold text-[#91a5ef]">
                        Concentration:
                      </span>{" "}
                      Information Systems &amp; Analytics
                    </p>
                    <div>
                      <p className="font-semibold text-[#91a5ef]">
                        Completed Tracks:
                      </p>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-[#d8e1ff]">
                        <li>Business Analytics (비즈니스애널리틱스)</li>
                        <li>Artificial Intelligence for Business (AI와경영)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-b border-[#8ea0e8]/10 pb-6">
                  <h5 className="font-serif text-xl text-white">
                    Relevant Coursework
                  </h5>

                  <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                    {coursework.map((course) => (
                      <div
                        key={course}
                        className="flex min-h-[104px] items-center justify-center rounded-xl border border-[#8ea0e8]/10 bg-white/5 px-3 py-3 text-center text-xs leading-5 text-[#dce5ff]"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-b border-[#8ea0e8]/10 pb-6">
                  <h5 className="font-serif text-xl text-white">
                    Academic Experience
                  </h5>

                  <div className="mt-4">
                    <p className="font-semibold text-[#c4933f]">
                      KUBS Official Undergraduate Tutor
                    </p>
                    <p className="font-semibold text-[#d8e1ff]">
                      Mar 2026 - Present
                    </p>
                    <div className="mt-3">
                      <p className="font-semibold text-[#91a5ef]">
                        Tutoring Subjects:
                      </p>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-[#d8e1ff]">
                        <li>Business Statistics</li>
                        <li>Management Information Systems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-b border-[#8ea0e8]/10 pb-6">
                  <h5 className="font-serif text-xl text-white">
                    Awards & Honors
                  </h5>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-[#d8e1ff]">
                    <li>Dean's Award</li>
                    <li>
                      Admission/Excellent/Top Scholarships,{" "}
                      <em>Korea University</em> - 2023, 2024, 2025
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h5 className="font-serif text-xl text-white">
                    Technical Skills
                  </h5>

                  <div className="mt-4 space-y-3">
                    <p>
                      <span className="font-semibold text-[#91a5ef]">
                        Programming:
                      </span>{" "}
                      Python, R, SQL (PostgreSQL), C++
                    </p>
                    <p>
                      <span className="font-semibold text-[#91a5ef]">
                        Machine Learning &amp; AI:
                      </span>{" "}
                      scikit-learn, Hugging Face Transformers, LangChain,
                      LangGraph, PyTorch · TensorFlow, OpenAI API
                    </p>
                    <p>
                      <span className="font-semibold text-[#91a5ef]">
                        Data Analysis Tools:
                      </span>{" "}
                      pandas, NumPy, matplotlib · seaborn · ggplot2, Excel,
                      Tableau
                    </p>
                    <p>
                      <span className="font-semibold text-[#91a5ef]">
                        Web &amp; Misc:
                      </span>{" "}
                      HTML/CSS, SeleniumBase, Streamlit, Git
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="scroll-mt-16 mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c4933f] font-[Glitten]">
              Research Interests
            </p>
            <h3 className="mt-3 font-serif text-3xl text-white">
              Current Areas of Interest
            </h3>
          </div>
					<div className="grid gap-6 md:grid-cols-3">

						{/* Predictive ML */}
						<div className="group rounded-[2rem] border border-[#8ea0e8]/15 bg-gradient-to-b from-white/8 to-white/[0.03] p-7 
						transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
							
							<h4 className="font-serif text-xl text-white">Predictive ML</h4>

							<ul className="mt-4 space-y-2 text-sm leading-7 text-[#d5def8] font-[Montserrat]">
								<li><span className="text-white font-medium">Decision-aware Prediction</span></li>
								<li>Distribution Shift</li>
								<li>Representation Learning for Structured Data</li>
								<li>Transfer / Meta Learning</li>
							</ul>
						</div>


						{/* NLP for IR */}
						<div className="group rounded-[2rem] border border-[#8ea0e8]/15 bg-gradient-to-b from-white/8 to-white/[0.03] p-7 
						transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
							
							<h4 className="font-serif text-xl text-white">NLP for IR</h4>

							<ul className="mt-4 space-y-2 text-sm leading-7 text-[#d5def8] font-[Montserrat]">
								<li><span className="text-white font-medium">NL Preprocessing</span></li>
								<li>Semantic Collapse &amp; LLM Hallucination</li>
								<li>Explainability in Neural IR</li>
							</ul>
						</div>


						{/* X-Agentic Systems */}
						<div className="group rounded-[2rem] border border-[#8ea0e8]/15 bg-gradient-to-b from-white/8 to-white/[0.03] p-7 
						transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
							
							<h4 className="font-serif text-xl text-white">X-Agentic Systems</h4>

							<ul className="mt-4 space-y-2 text-sm leading-7 text-[#d5def8] font-[Montserrat]">
								<li><span className="text-white font-medium">ML Monitoring</span></li>
								<li>Planning &amp; Tool Use</li>
								<li>RA Agentic Systems</li>
							</ul>
						</div>

					</div>
        </section>

        <section id="work" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-8">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c4933f] font-[Glitten]">
              Showcase
            </p>
            <h3 className="mt-3 font-serif text-3xl text-white">
              Selected Projects
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {workItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#8ea0e8]/15 bg-white/5 p-8"
              >
                <h4 className="font-serif text-2xl text-white">
                  {item.title}
                </h4>
                <p className="mt-4 leading-8 text-[#d4ddfb] font-[Montserrat]">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="mt-6 inline-block text-sm font-[Montserrat] text-[#c4933f] transition hover:text-[#e2b56d]"
                >
                  View project →
                </a>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <h3 className="mt-3 font-serif text-3xl text-white">
              Selected Publications
            </h3>
            <div className="mt-6 space-y-5">
              {publications.map((pub, idx) => (
                <div
                  key={idx}
                  className="rounded-[1.5rem] border border-[#8ea0e8]/15 bg-white/5 p-6 transition hover:bg-white/[0.07]"
                >
                  <p className="font-serif text-lg text-white">{pub.title}</p>

                  <p className="mt-1 text-sm font-[Montserrat] font-semibold text-[#c4933f]">
                    {pub.authors}
                  </p>

                  <p className="text-sm text-[#b8c4f2] font-[Montserrat]">
                    {pub.journal} · {pub.year}
                  </p>

                  <a
                    href={pub.link}
                    className="mt-2 inline-block text-sm font-[Montserrat] text-[#c4933f] hover:text-[#e2b56d]"
                  >
                    View paper →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="referees" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c4933f] font-[Glitten]">
              Referees
            </p>
            <h3 className="mt-3 font-serif text-3xl text-white">
              Academic References
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {referees.map((referee) => (
              <div
                key={referee.name}
                className="rounded-[2rem] border border-[#946b2d]/20 bg-[#0d1433] p-7 text-[#e3e9ff]"
              >
                <h4 className="font-serif text-2xl text-white">
                  {referee.name}
                </h4>
                <p className="mt-2 text-sm font-[Montserrat] font-semibold text-[#c4933f]">
                  {referee.role}
                </p>
                <div className="mt-5 space-y-3 text-sm leading-7 font-[Montserrat]">
                  <p>
                    <span className="text-[#91a5ef]">Affiliation:</span>{" "}
                    {referee.institution}
                  </p>
                  <p>
                    <span className="text-[#91a5ef]">Contact:</span>{" "}
                    {referee.email}
                  </p>
                  <p>
                    <span className="text-[#91a5ef]">Homepage:</span>{" "}
                      <a
                        href={referee.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#c4933f] hover:underline"
                      >
                        Visit
                      </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2.25rem] border border-[#946b2d]/25 bg-gradient-to-r from-[#0d1433] to-[#101a43] p-10 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c4933f] font-[Glitten]">
              Contact
            </p>
            <h3 className="mt-3 font-serif text-4xl text-white">
              Contact Information
            </h3>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#dbe4ff] font-[Montserrat]">
              laminoo@korea.ac.kr | 82.10.8109.3597
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
              <a
                href="mailto:laminoo@korea.ac.kr"
                className="rounded-2xl border border-[#946b2d] bg-[#946b2d] px-5 py-3 font-[Montserrat] font-semibold text-[#0b112b]
                transition duration-200 ease-out 
                hover:-translate-y-1 hover:shadow-lg hover:shadow-[#946b2d]/30"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/minoo-la/"
                className="rounded-2xl border border-white/15 px-5 py-3 font-[Montserrat] text-white
                transition duration-200 ease-out 
                hover:-translate-y-1 hover:border-[#c4933f] hover:text-[#c4933f] hover:shadow-lg hover:shadow-black/30"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/la-minoo"
                className="rounded-2xl border border-white/15 px-5 py-3 font-[Montserrat] text-white
                transition duration-200 ease-out 
                hover:-translate-y-1 hover:border-[#c4933f] hover:text-[#c4933f] hover:shadow-lg hover:shadow-black/30"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
