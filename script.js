const year = document.getElementById("year");
const langButtons = document.querySelectorAll(".lang-btn");
const translatable = document.querySelectorAll("[data-i18n]");

const translations = {
  ru: {
    "nav.about": "Резюме",
    "nav.experience": "Опыт",
    "nav.projects": "Проекты",
    "nav.stack": "Стек",
    "nav.education": "Сертификаты",
    "nav.contact": "Контакты",
    "hero.eyebrow": "VK · Russia · Moscow",
    "hero.title": "Artem K / Кущ Артем / Kushch Artem",
    "hero.subtitle": "Кущ Артем / Kushch Artem",
    "hero.lead":
      "Senior+ Golang developer и backend-разработчик на Python, с опытом Computer Vision. На этой странице собраны опыт, сертификаты, GitHub-активность и проекты в формате короткого резюме.",
    "hero.github": "GitHub",
    "hero.gitlab": "GitLab",
    "hero.projects": "Смотреть проекты",
    "hero.panel.focus.label": "Resume",
    "hero.panel.focus.title": "Senior+ Go, Python и Computer Vision",
    "hero.panel.focus.text":
      "Senior+ Golang developer first, Python second, Computer Vision experience after that. Backend-сервисы, прикладной ML и инженерные задачи с измеримым результатом.",
    "hero.panel.achievements.label": "Current role",
    "hero.panel.achievements.value1": "Senior+ Golang developer",
    "hero.panel.achievements.value2": "Python / Computer Vision",
    "hero.panel.location.label": "Current workplace",
    "stats.repos.label": "Repos",
    "stats.companies.label": "Companies",
    "stats.certificates.label": "Certificates",
    "stats.profile.label": "Profile",
    "about.eyebrow": "Обо мне",
    "about.title": "Короткий профиль для резюме",
    "about.point1": "Senior+ Golang developer и backend-разработчик на Python.",
    "about.point2": "Computer Vision Research Engineer опыт после backend-профиля.",
    "about.point3": "Опыт в VK, Pasul Ltd, X5 Digital, ISGNeuro и citis.",
    "about.point4": "GitHub-репозитории, хакатоны и сертификаты подтверждают практику, а не только интерес.",
    "about.text2":
      "Для сайта я перенёс акцент с «портфолио» на «резюме»: тут должны быстро читаться опыт, сертификаты, GitHub-активность и проекты с конкретной инженерной ценностью.",
    "experience.eyebrow": "Опыт",
    "experience.title": "Ключевые роли, страны и годы",
    "experience.vk.title": "VK",
    "experience.vk.1": "Russia, Aug 2024 - Present",
    "experience.vk.2": "Lead / Senior+ Golang",
    "experience.vk.3": "High-load backend, observability, CI/CD, code review",
    "experience.pasul.title": "Pasul Ltd",
    "experience.pasul.1": "Russia, Sep 2023 - Feb 2024",
    "experience.pasul.2": "Back-end developer",
    "experience.pasul.3": "Golang, Java, gRPC / REST, VPN gateway",
    "experience.x5.title": "X5 Digital",
    "experience.x5.1": "Russia, Sep 2023 - Feb 2024",
    "experience.x5.2": "Middle backend developer",
    "experience.x5.3": "Golang, PHP, Kafka, PostgreSQL, Redis",
    "experience.edu.title": "ISGNeuro / citis",
    "experience.edu.1": "Russia, Jul 2021 - Aug 2022",
    "experience.edu.2": "Software Engineer / Computer Vision Engineer",
    "experience.edu.3": "Python, Django, Flask, Qt, TensorFlow, CUDA",
    "experience.github.title": "GitHub",
    "experience.github.1": "Open-source activity and 59 repositories",
    "experience.github.2": "Pull Shark and Arctic Code Vault Contributor",
    "experience.github.3": "Практика на repo-level: парсеры, ML, C, bots",
    "stack.eyebrow": "Стек",
    "stack.title": "Стек, сгруппированный по слоям",
    "stack.group.languages": "Языки программирования",
    "stack.group.backend": "Backend и инфраструктура",
    "stack.group.data": "Базы данных и очереди",
    "stack.group.observability": "Мониторинг и аналитика",
    "stack.group.cv": "ML / Computer Vision",
    "projects.eyebrow": "Проекты",
    "projects.title": "Выбранные репозитории и инженерные кейсы",
    "projects.p1":
      "Хакатон Cup IT, 3 место. Подходит как доказательство быстрого data science цикла: постановка, эксперимент, оценка и прикладной результат.",
    "projects.p2":
      "Сравнение ML-моделей на pulsar dataset. Хорошо показывает экспериментальный подход, сравнение метрик и аккуратную работу с данными.",
    "projects.p3":
      "Финальный этап хакатона Fintech Security Superhero. Это удобный пример командной работы, быстрой интеграции и доведения идеи до результата.",
    "projects.p4":
      "School 42 проект на C: графы, поиск путей и аккуратная реализация. Это сильный маркер алгоритмического фундамента и инженерной дисциплины.",
    "projects.p5":
      "Неофициальный HLTV Python API. Подходит для демонстрации парсинга, API-обёртки и аккуратной работы с внешним сервисом.",
    "projects.p6":
      "Эксперименты с embedding layers и contrastive loss на MNIST. Хорошая иллюстрация интереса к deep learning и экспериментам с архитектурами.",
    "projects.open": "Открыть",
    "edu.eyebrow": "Сертификаты",
    "edu.title": "Сертификаты и курсы",
    "edu.cert.title": "Certificates",
    "edu.hack.title": "Hackathons",
    "edu.hack.1": "Cup-IT DS 2020, 3rd place — практический результат с командной работой и дедлайнами.",
    "edu.hack.2": "Fintech Security Superhero, final stage — подтверждение способности доводить идеи до финала.",
    "edu.course.title": "Courses",
    "edu.course.1": "Golang — усиливает backend-профиль и системное мышление.",
    "edu.course.2": "Docker for beginners — полезно для доставки и воспроизводимых окружений.",
    "edu.course.3": "Accelerating CUDA C++ / CUDA Python / GCP ML — важный слой для CV и ML задач.",
    "contact.eyebrow": "Контакты",
    "contact.title": "Связаться со мной",
    "contact.text":
      "Ниже основные каналы связи. Страница остаётся лёгкой, но теперь читается как краткое резюме с упором на опыт, сертификаты и GitHub.",
    "contact.github": "Профиль GitHub",
  },
  en: {
    "nav.about": "Resume",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.stack": "Stack",
    "nav.education": "Certificates",
    "nav.contact": "Contact",
    "hero.eyebrow": "VK · Russia · Moscow",
    "hero.title": "Artem K / Kushch Artem / Кущ Артем",
    "hero.subtitle": "Kushch Artem / Кущ Артем",
    "hero.lead":
      "Senior+ Golang developer and backend developer in Python, with Computer Vision experience. This page highlights experience, certificates, GitHub activity and projects as a short resume.",
    "hero.github": "GitHub",
    "hero.gitlab": "GitLab",
    "hero.projects": "View projects",
    "hero.panel.focus.label": "Resume",
    "hero.panel.focus.title": "Senior+ Go, Python and Computer Vision",
    "hero.panel.focus.text":
      "Senior+ Golang developer first, Python second, Computer Vision experience after that. Backend services, applied ML and engineering tasks with measurable results.",
    "hero.panel.achievements.label": "Current role",
    "hero.panel.achievements.value1": "Senior+ Golang developer",
    "hero.panel.achievements.value2": "Python / Computer Vision",
    "hero.panel.location.label": "Current workplace",
    "stats.repos.label": "Repos",
    "stats.companies.label": "Companies",
    "stats.certificates.label": "Certificates",
    "stats.profile.label": "Profile",
    "about.eyebrow": "About",
    "about.title": "Short profile for the resume",
    "about.point1": "Senior+ Golang developer and backend developer in Python.",
    "about.point2": "Computer Vision Research Engineer experience after the backend profile.",
    "about.point3": "Experience at VK, Pasul Ltd, X5 Digital, ISGNeuro and citis.",
    "about.point4": "GitHub repositories, hackathons and certificates show practice, not just interest.",
    "about.text2":
      "For the site I shifted the emphasis from a pure portfolio to a resume: experience, certificates, GitHub activity and projects with clear engineering value should be visible first.",
    "experience.eyebrow": "Experience",
    "experience.title": "Key roles, countries and years",
    "experience.vk.title": "VK",
    "experience.vk.1": "Russia, Aug 2024 - Present",
    "experience.vk.2": "Lead / Senior+ Golang",
    "experience.vk.3": "High-load backend, observability, CI/CD, code review",
    "experience.pasul.title": "Pasul Ltd",
    "experience.pasul.1": "Russia, Sep 2023 - Feb 2024",
    "experience.pasul.2": "Back-end developer",
    "experience.pasul.3": "Golang, Java, gRPC / REST, VPN gateway",
    "experience.x5.title": "X5 Digital",
    "experience.x5.1": "Russia, Sep 2023 - Feb 2024",
    "experience.x5.2": "Middle backend developer",
    "experience.x5.3": "Golang, PHP, Kafka, PostgreSQL, Redis",
    "experience.edu.title": "ISGNeuro / citis",
    "experience.edu.1": "Russia, Jul 2021 - Aug 2022",
    "experience.edu.2": "Software Engineer / Computer Vision Engineer",
    "experience.edu.3": "Python, Django, Flask, Qt, TensorFlow, CUDA",
    "experience.github.title": "GitHub",
    "experience.github.1": "Open-source activity and 59 repositories",
    "experience.github.2": "Pull Shark and Arctic Code Vault Contributor",
    "experience.github.3": "Repo-level practice: parsers, ML, C, bots",
    "stack.eyebrow": "Stack",
    "stack.title": "Stack grouped by layers",
    "stack.group.languages": "Programming languages",
    "stack.group.backend": "Backend and infrastructure",
    "stack.group.data": "Databases and queues",
    "stack.group.observability": "Monitoring and analytics",
    "stack.group.cv": "ML / Computer Vision",
    "projects.eyebrow": "Projects",
    "projects.title": "Selected repositories and engineering cases",
    "projects.p1":
      "Cup IT hackathon, 3rd place. A proof of a fast data science cycle: problem framing, experiment, evaluation and applied result.",
    "projects.p2":
      "Comparison of ML models on the pulsar dataset. Shows an experimental mindset, metric comparison and careful work with data.",
    "projects.p3":
      "Final stage of the Fintech Security Superhero hackathon. A useful example of teamwork, fast integration and shipping an idea to the end.",
    "projects.p4":
      "School 42 project in C: graphs, path finding and careful implementation. A strong marker of algorithmic fundamentals and engineering discipline.",
    "projects.p5":
      "Unofficial HLTV Python API. Good for demonstrating parsing, API wrapping and careful work with an external service.",
    "projects.p6":
      "Experiments with embedding layers and contrastive loss on MNIST. A good illustration of interest in deep learning and model architecture experiments.",
    "projects.open": "Open",
    "edu.eyebrow": "Certificates",
    "edu.title": "Certificates and courses",
    "edu.cert.title": "Certificates",
    "edu.hack.title": "Hackathons",
    "edu.hack.1": "Cup-IT DS 2020, 3rd place — practical result with teamwork and deadlines.",
    "edu.hack.2": "Fintech Security Superhero, final stage — proof of ability to bring ideas to the finish line.",
    "edu.course.title": "Courses",
    "edu.course.1": "Golang — strengthens the backend profile and systems thinking.",
    "edu.course.2": "Docker for beginners — useful for delivery and reproducible environments.",
    "edu.course.3": "Accelerating CUDA C++ / CUDA Python / GCP ML — a relevant layer for CV and ML tasks.",
    "contact.eyebrow": "Contact",
    "contact.title": "Get in touch",
    "contact.text":
      "Below are the main ways to reach me. The page stays lightweight, but now reads as a short resume with a focus on experience, certificates and GitHub.",
    "contact.github": "GitHub profile",
  },
};

function setLanguage(lang) {
  const dictionary = translations[lang];

  document.documentElement.lang = lang;
  year.textContent = new Date().getFullYear().toString();

  translatable.forEach((element) => {
    const key = element.dataset.i18n;
    const value = dictionary[key];
    if (value) {
      element.innerHTML = value;
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
}

function renderCertificates(certificates) {
  const container = document.getElementById("certificates-list");
  const counters = [
    document.getElementById("certificate-count"),
    document.getElementById("education-count"),
  ];
  const lang = currentLanguage;
  const items = Array.isArray(certificates) ? certificates : certificates.items || [];

  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      (certificate) => `
        <article class="certificate-card">
          <h3>${certificate.title[lang] || certificate.title.ru}</h3>
          <div class="certificate-meta">
            <span>${certificate.issuer[lang] || certificate.issuer.ru}</span>
            <span>${certificate.year}</span>
          </div>
          <a href="${certificate.href}" target="_blank" rel="noreferrer">
            ${lang === "en" ? "Open PDF" : "Открыть PDF"}
          </a>
        </article>
      `
    )
    .join("");

  counters.forEach((counter) => {
    if (counter) {
      counter.textContent = String(items.length);
    }
  });
}

async function loadCertificates() {
  try {
    const response = await fetch("data/certificates.json");
    if (!response.ok) {
      throw new Error(`Failed to load certificates: ${response.status}`);
    }

    const payload = await response.json();
    const certificates = Array.isArray(payload.certificates) ? payload.certificates : payload;
    renderCertificates(certificates);
  } catch (error) {
    renderCertificates([]);
  }
}

setLanguage(currentLanguage);

loadCertificates();

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    window.localStorage.setItem("portfolio-lang", lang);
    setLanguage(lang);
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    {
      threshold: 0.18,
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
} else {
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("is-visible");
  });
}
