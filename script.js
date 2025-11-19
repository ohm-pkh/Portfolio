class Project {
  constructor(name, description, state) {
    const stateEnum = ["Planing","Hold", "Design", "Dev", "Test", "Demo", "Ended"];

    if (!stateEnum.includes(state)) {
      throw new Error(
        `Invalid state: ${state}. Allowed values: ${stateEnum.join(", ")}`
      );
    }

    this.name = name;
    this.description = description;
    this.state = state;
  }
}

class ProjectArr {
  constructor(project) {
    this.projects = [];
    this.append(project);
  }

  append(project) {
    if (!(project instanceof Project)) {
      throw new Error("Only Project instances can be added.");
    }
    this.projects.push(project);
  }

  createContainer(id){
    const container = document.getElementById(id);
    let HTMLCode =""
    this.projects.reverse().forEach(p => {
      HTMLCode += `
        <div class="projectCard">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <span class="state ${p.state}">${p.state}</span>
        </div>
      `;
    });

    container.innerHTML = HTMLCode;
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    } else {
      entry.target.classList.remove("animate");
    }
  });
});

document.querySelectorAll("#Home div, #Profile .infoContainer,#Profile .profilePhoto").forEach(el => observer.observe(el));


const container = document.querySelector('.infoContainer');
const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = dot.getAttribute('data-index');
    container.scrollLeft = container.clientWidth * index;

    // Update active class
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});


const MovieTicketBookingSystem = new Project("Movie ticket booking system",
                                                `Developed a web-based movie ticket 
                                                booking system using HTML, CSS, and
                                                JavaScript for the frontend, and Node.js
                                                with Express.js for the backend, with PostgreSQL 
                                                for the database. Performed full-stack development,
                                                including UX/UI and database design.`,
                                                `Ended`
                                              );
const FraudDetectionProject = new Project("Fraud detection project",
                                          `Performed dataset discovery, preprocessing,
                                          and EDA for a team project developing fraud
                                          detection visualizations and a classification
                                          model using SAR State from FinCEN.gov and
                                          opensource dataset Kaggle data.`,
                                          `Ended`
                                        );
const WanNeeGinaraiDee = new Project("Wan nee gin arai dee system",
                                      `Developed a web-based restaurant finding
                                      system using React for the frontend, 
                                      Node.js with Express.js for the backend, 
                                      and PostgreSQL for the database. Performed 
                                      full-stack development, including database 
                                      and resource management, UX/UI design, 
                                      test planning and documentation.`,
                                      `Test`
                                    );
const projectContainer = new ProjectArr(MovieTicketBookingSystem);
projectContainer.append(FraudDetectionProject);
projectContainer.append(WanNeeGinaraiDee);



projectContainer.createContainer("projectScrollingContainer");