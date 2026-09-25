import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDown, ArrowUpRight, Award, BookOpen, BrainCircuit,
  Check, ChevronRight, Code2, Copy, Download, Languages, Mail, MapPin,
  Menu, Network, Phone, ShieldCheck, Terminal, Users, X
} from 'lucide-react'
import './styles.css'

const navItems = [
  ['about', 'Giới thiệu'],
  ['skills', 'Kỹ năng'],
  ['projects', 'Dự án'],
  ['journey', 'Hành trình'],
]

const skillGroups = [
  {
    icon: Terminal,
    index: '01',
    title: 'Lập trình & hệ thống',
    description: 'Nền tảng để xây dựng công cụ, đọc hiểu chương trình và làm việc sâu với hệ điều hành.',
    skills: ['C / C++', 'Python', 'Linux', 'Windows', 'Linux CLI', 'File permissions'],
  },
  {
    icon: BrainCircuit,
    index: '02',
    title: 'Reverse engineering',
    description: 'Phân tích cấu trúc và luồng thực thi của chương trình từ góc nhìn tĩnh lẫn động.',
    skills: ['IDA Free', 'Disassembly', 'Decompiler', 'x64dbg', 'x32dbg', 'Static analysis'],
  },
  {
    icon: ShieldCheck,
    index: '03',
    title: 'Malware analysis',
    description: 'Tìm hiểu hành vi, dấu hiệu nhận diện và các chỉ báo đáng chú ý của tệp khả nghi.',
    skills: ['VirusTotal', 'ANY.RUN', 'Hash & metadata', 'Behavior analysis', 'Digital forensics'],
  },
]

const projects = [
  {
    number: '01',
    label: 'Cá nhân',
    title: 'Lab mô phỏng & phân tích Info Stealer',
    summary: 'Xây dựng một mẫu Info Stealer an toàn để nghiên cứu quy trình và hành vi của mã độc trong môi trường lab.',
    details: [
      'Phân tích tĩnh bằng IDA Free',
      'Theo dõi hành vi động với x32dbg',
      'Xác định các dấu hiệu đáng chú ý từ quá trình phân tích',
    ],
    stack: ['C/C++', 'IDA', 'x32dbg'],
    accent: 'green',
  },
  {
    number: '02',
    label: 'Team Research Project',
    title: "Shamir’s Secret Sharing trong bảo vệ mã độc",
    summary: 'Nghiên cứu cơ chế phân mảnh và khôi phục khóa bằng Threshold Secret Sharing cho hệ thống của nhóm.',
    details: [
      'Hiện thực chia sẻ và khôi phục khóa',
      'Nội suy Lagrange trên trường hữu hạn GF',
      'Tích hợp thuật toán vào hệ thống bảo vệ',
    ],
    stack: ['C/C++', 'Finite Field', 'Lagrange Interpolation'],
    accent: 'amber',
  },
]

const timeline = [
  {
    time: '2025',
    title: 'PTIT CTF 2025',
    meta: 'Giải Khuyến khích',
    text: 'Phối hợp cùng đội giải các thử thách Jeopardy, tập trung vào Reverse Engineering và Crypto.',
  },
  {
    time: '2025',
    title: 'ICPC PTIT 2025',
    meta: 'Vòng Chung kết',
    text: 'Tham gia cuộc thi lập trình sinh viên quốc tế và tiến vào vòng chung kết.',
  },
  {
    time: '2024',
    title: 'ICPC PTIT 2024',
    meta: 'Top 25 / 77',
    text: 'Đạt top 41/267 tại vòng loại và top 25/77 tại vòng chung kết.',
  },
  {
    time: '2023 — nay',
    title: 'CLB IT PTIT',
    meta: 'Thành viên',
    text: 'Học tập, tham gia dự án với khóa trên và hỗ trợ kiến thức lập trình, kỹ năng mềm cho khóa mới.',
  },
]

const certifications = [
  'Top 97/1249 ScriptCTF 2026',
  'Samsung Penetration Testing',
  'Samsung Algorithm Certificate',
  'Applied AI & ML for Network and Information Security — SPbSUT & PTIT',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-35% 0px -55%' },
    )
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const copyEmail = async () => {
    await navigator.clipboard.writeText('gemmychen0611hd@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#top" aria-label="Về đầu trang">
          <span className="brand-mark">VN</span>
          <span className="brand-text">Vân Ngọc<span>.sec</span></span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Điều hướng chính">
          {navItems.map(([id, label]) => (
            <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="mailto:gemmychen0611hd@gmail.com">Liên hệ <ArrowUpRight size={15} /></a>
        </nav>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Mở menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-grid-bg" />
          <div className="hero-copy reveal">
            <div className="status"><span /> Sẵn sàng cho cơ hội thực tập</div>
            <p className="eyebrow">Xin chào, mình là</p>
            <h1>Trần Thị<br /><em>Vân Ngọc.</em></h1>
            <p className="hero-role">Malware Analysis Intern <span>/</span> Reverse Engineering</p>
            <p className="hero-intro">
              Sinh viên An toàn thông tin yêu thích việc lần theo dấu vết trong mã máy — từ tháo gỡ cấu trúc chương trình đến lý giải hành vi của mã độc.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Khám phá dự án <ChevronRight size={18} /></a>
              <a className="button secondary" href="/Tran-Thi-Van-Ngoc-CV.pdf" download>Tải CV <Download size={17} /></a>
            </div>
          </div>

          <div className="hero-visual reveal delay-1">
            <div className="portrait-wrap">
              <div className="portrait-frame">
                <img src="/assets/avatar.png" alt="Trần Thị Vân Ngọc" />
              </div>
              <span className="corner corner-a" />
              <span className="corner corner-b" />
              <div className="scan-line" />
            </div>
            <div className="code-card">
              <div className="code-top"><span /><span /><span /><small>profile.json</small></div>
              <pre><code><b>const</b> analyst = {'{'}<br />  focus: <i>"malware"</i>,<br />  mindset: <i>"curious"</i>,<br />  status: <strong>true</strong><br />{'}'}</code></pre>
            </div>
            <div className="float-tag tag-one"><Network size={16} /> RESEARCH_MODE</div>
            <div className="float-tag tag-two"><ShieldCheck size={16} /> SYSTEM_SECURE</div>
          </div>

          <a className="scroll-hint" href="#about"><span>Cuộn để khám phá</span><ArrowDown size={17} /></a>
        </section>

        <section className="about section" id="about">
          <SectionHeading number="01" eyebrow="Giới thiệu" title="Tò mò về cách mọi thứ vận hành bên trong." />
          <div className="about-layout">
            <div className="about-lead reveal">
              <p className="large-copy">Mục tiêu của mình là trở thành một <mark>Malware Researcher</mark> có khả năng kết nối tư duy hệ thống, kỹ năng lập trình và phân tích sâu.</p>
              <p>Hiện mình là sinh viên năm 4 chương trình Tài năng ngành An toàn thông tin tại Học viện Công nghệ Bưu chính Viễn thông. Mình mong muốn phát triển năng lực trong một môi trường thực tế, giàu thử thách và có chiều sâu kỹ thuật.</p>
              <div className="quick-links">
                <a href="mailto:gemmychen0611hd@gmail.com"><Mail size={18} /> Email mình</a>
                <a href="https://github.com/gemmychen1406" target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub <ArrowUpRight size={14} /></a>
              </div>
            </div>

            <div className="stats-grid reveal delay-1">
              <div className="stat-card stat-wide">
                <BookOpen size={22} />
                <div><strong>3.61<span>/4.00</span></strong><p>CPA hiện tại</p></div>
              </div>
              <div className="stat-card">
                <Award size={22} />
                <div><strong>Tất cả</strong><p>Kỳ học đạt học bổng</p></div>
              </div>
              <div className="stat-card">
                <Languages size={22} />
                <div><strong>276<span>/300</span></strong><p>Điểm HSK 4</p></div>
              </div>
              <div className="stat-card stat-wide location-card">
                <MapPin size={22} />
                <div><strong>Hà Đông, Hà Nội</strong><p>Sẵn sàng học hỏi & hợp tác</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <SectionHeading number="02" eyebrow="Năng lực" title="Công cụ mình dùng để tìm ra câu trả lời." />
          <div className="skill-list">
            {skillGroups.map(({ icon: Icon, index, title, description, skills }) => (
              <article className="skill-row reveal" key={title}>
                <div className="skill-index">{index}</div>
                <div className="skill-icon"><Icon /></div>
                <div className="skill-description"><h3>{title}</h3><p>{description}</p></div>
                <div className="chips">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="soft-skills reveal">
            <span><Users size={18} /> Teamwork</span>
            <span><BrainCircuit size={18} /> Problem-solving</span>
            <span><BookOpen size={18} /> Self-learning</span>
            <p>Ba nguyên tắc mình mang vào mọi dự án.</p>
          </div>
        </section>

        <section className="projects section" id="projects">
          <SectionHeading number="03" eyebrow="Dự án nổi bật" title="Học bằng cách xây dựng, hiểu bằng cách phân tích." />
          <div className="projects-list">
            {projects.map((project) => (
              <article className={`project-card ${project.accent} reveal`} key={project.number}>
                <div className="project-top"><span>{project.number}</span><small>{project.label}</small></div>
                <div className="project-body">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                  </div>
                  <ul>{project.details.map((detail) => <li key={detail}><Check size={15} /> {detail}</li>)}</ul>
                </div>
                <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="journey section" id="journey">
          <SectionHeading number="04" eyebrow="Hành trình" title="Những cột mốc tạo nên mình hôm nay." />
          <div className="journey-layout">
            <div className="timeline">
              {timeline.map((item, index) => (
                <article className="timeline-item reveal" key={`${item.time}-${item.title}`}>
                  <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
                  <time>{item.time}</time>
                  <div><h3>{item.title}</h3><strong>{item.meta}</strong><p>{item.text}</p></div>
                </article>
              ))}
            </div>
            <aside className="cert-panel reveal delay-1">
              <div className="cert-title"><Award /><div><small>Chứng nhận</small><h3>Luôn tiếp tục học</h3></div></div>
              <div className="cert-list">
                {certifications.map((item, index) => (
                  <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" />
          <p className="eyebrow">Có một cơ hội phù hợp?</p>
          <h2>Hãy cùng tạo ra<br /><em>điều đáng giá.</em></h2>
          <p>Mình đang tìm kiếm cơ hội thực tập về Malware Analysis, Reverse Engineering và Cybersecurity.</p>
          <a className="email-link" href="mailto:gemmychen0611hd@gmail.com">gemmychen0611hd@gmail.com <ArrowUpRight /></a>
          <div className="contact-actions">
            <button onClick={copyEmail}>{copied ? <Check size={17} /> : <Copy size={17} />}{copied ? 'Đã sao chép' : 'Sao chép email'}</button>
            <a href="tel:0934345831"><Phone size={17} /> 0934 345 831</a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">VN</span><span className="brand-text">Vân Ngọc<span>.sec</span></span></a>
        <p>Thiết kế & xây dựng với sự tò mò <span>—</span> © 2026</p>
        <div><a href="https://github.com/gemmychen1406" target="_blank" rel="noreferrer">GitHub</a><a href="#top">Về đầu trang ↑</a></div>
      </footer>
    </div>
  )
}

function SectionHeading({ number, eyebrow, title }) {
  return (
    <div className="section-heading reveal">
      <p><span>{number}</span> {eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
