let data;

(function () {
  const about = {
    typing: [
      'Rhythm Aggarwal',
      'a Student',
      'a Developer',
      'an Enthusiast',
      'a lovely Human Being :)',
    ],
    resume: [
    'https://docs.google.com/document/d/1jUbthqD-yM6aYskbC_NXNylbRJKBqDKvmDr5ZtnKwXg/edit?usp=sharing',
    ],
    about: [
      `a 20-year-old sophomore pursuing my B.Tech. from IIIT Hyderabad in Computer Science and Engineering.`,
      `I have keen interest in development and Logical Problem Solving and expect to work in the related fields in the future`
    ],
  };

  const skills = [
    { name: 'Javascript', level: 85 },
    { name: 'CSS/SASS', level: 85 },
    { name: 'React JS', level: 80 },
    { name: 'React Native', level: 75 },
    // { name: 'ML / AI', level: 60 },
    // { name: 'Django', level: 80 },
    { name: 'Express.js', level: 60 },
    { name: 'C/C++', level: 85 },
    { name: 'MySQL', level: 60 },
    { name: 'Shell Scripting', level: 60 },
    { name: 'DS & Algorithms', level: 80 },
    { name: 'OOPs', level: 70 },
    { name: 'DBMS', level: 70 },
    { name: 'Operating Systems', level: 70 },
  ];

  const projects = [
    {
        name: 'C Shell',
        image: './project_img/cshell.png',
        about:
          'Bash-like command interpreter, written in C, with support for process management, piping/redirection and built-in as well as system commands',
        code: 'https://github.com/RhythmAgg/jshell',
      },
    
    {
        name: 'Rural Health - Megathon\'22',
        image: './project_img/megathon.png',
        about:
                'A social project build for Raj Reddy foundation for improving the healthcare system in rural areas Our team "HackUrMom" was awarded the first prize in the Megathon\'22, IIIT Hyderabad organised hackathon that garnered over 700 teams from various colleges in hyderabad and nearby and faced 4 challenging problems in the domain of AI , ML and UI/UX design',
        code: 'https://github.com/RhythmAgg/SaveUrMom',
    },
    {
      name: 'Water FLow Monitoring System',
      image: './project_img/water_flow.png',
      about:
            'Web Dashboard developed for the water flow Monitor project developed by team 35 for ESW course 2022. Used flask, HTMl, Bootstrap5, JS',
      code: 'https://github.com/RhythmAgg/water-flow-Monitor---team_35',
    },
    {
        name: 'DBMS Project',
        image: './project_img/xv6.png',
        about:
            'DataBase built using SQL along with Command Line interface to support User Queries',
        code: 'https://github.com/RhythmAgg/DnA_project',
    },
    
    {
      name: 'Advanced xv6',
      image:'./project_img/xv6.png',
      about:
        'Improved xv6 with new scheduling techniques, system calls and user programs. Analysis of different scheduling algorithms is done using Python',
      code: 'https://github.com/tichnas/Advanced-xv6',
    },
  ];

  data = { about, skills, projects };
})();