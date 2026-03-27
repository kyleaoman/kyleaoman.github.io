// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "interests &amp; projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "in the scientific literature",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-group",
          title: "group",
          description: "members past &amp; present",
          section: "Navigation",
          handler: () => {
            window.location.href = "/group/";
          },
        },{id: "nav-code",
          title: "code",
          description: "repositories intended for wider use",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "brief cv, detailed cv in pdf",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-calendar",
          title: "calendar",
          description: "meetings &amp; availability",
          section: "Navigation",
          handler: () => {
            window.location.href = "/calendar/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-project-10",
          title: 'project 10',
          description: "A project with an introduction section",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-colibre",
          title: 'Colibre',
          description: "simulations of galaxy formation and evolution",
          section: "Projects",handler: () => {
              window.location.href = "/projects/colibre/";
            },},{id: "projects-dark-matter",
          title: 'Dark matter',
          description: "distribution, structure and content in galaxies",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dm/";
            },},{id: "projects-data-i-o",
          title: 'Data I/O',
          description: "streamlining interaction with simulation data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/io/";
            },},{id: "projects-mhongoose",
          title: 'MHONGOOSE',
          description: "deep, targeted 21-cm radio survey at MeerKAT",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mhongoose/";
            },},{id: "projects-mightee-hi",
          title: 'MIGHTEE-HI',
          description: "deep, blind-pointed radio survey at MeerKAT",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mightee-hi/";
            },},{id: "projects-satellites",
          title: 'Satellites',
          description: "galaxy evolution of satellites in groups and clusters",
          section: "Projects",handler: () => {
              window.location.href = "/projects/satellites/";
            },},{id: "projects-skao",
          title: 'SKAO',
          description: "next-generation radio observatory, completion ~2030",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ska/";
            },},{id: "projects-swift",
          title: 'SWIFT',
          description: "astrophysics simulation code and ecosystem of tools",
          section: "Projects",handler: () => {
              window.location.href = "/projects/swift/";
            },},{id: "projects-virgo",
          title: 'Virgo',
          description: "consortium for cosmological supercomputer simulations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/virgo/";
            },},{id: "projects-visualisation",
          title: 'Visualisation',
          description: "rendering simulated galaxies for science &amp; enjoyment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vis/";
            },},{id: "projects-wallaby",
          title: 'Wallaby',
          description: "wide-field 21-cm radio survey at ASKAP",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wallaby/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
