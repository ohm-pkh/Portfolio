class Project {
  constructor(name,img, description, state) {
    const stateEnum = ["Planing","Hold", "Design", "Dev", "Test", "Demo", "Ended"];

    if (!stateEnum.includes(state)) {
      throw new Error(
        `Invalid state: ${state}. Allowed values: ${stateEnum.join(", ")}`
      );
    }

    this.name = name;
    this.description = description;
    this.img = img || null;
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

  findNextBlank(txt,init){
    if (txt.length <= init) return txt;
    let i = init
    while (txt[i] !== ' ' && i < txt.length){
      i += 1
    }
    return txt.slice(0,i)
  }

  createContainer(id){
    const container = document.getElementById(id);
    let HTMLCode =""
    this.projects.reverse().forEach(p => {
      HTMLCode += `
        <div class="projectCard">
          <h3>${p.name}</h3>
          <div class=projectImage ${p.img?`style = "background-image: url('${p.img}')"`:""}>${p.img?'':'No Image'}</div>
          <p>${p.description.length<=750?p.description:this.findNextBlank(p.description,745) + '...'}</p>
          <div class="stateContainer">
            <span class="state ${p.state}">${p.state}</span>
          </div>
          
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


const MovieTicketBookingSystem = new Project("Movie ticket booking system",null,
                                                `Developed a web-based movie ticket 
                                                booking system that include booking part and
                                                system management part by
                                                using HTML, CSS, and
                                                JavaScript for the frontend, and Node.js
                                                with Express.js for the backend, with PostgreSQL 
                                                for the database. Performed full-stack development,
                                                including UX/UI and database design.`,
                                                `Ended`
                                              );
const FraudDetectionProject = new Project("Fraud detection project",null,
                                          `This project was created to address the problem of 
                                          fraudulent transactions. My team and I developed data 
                                          visualizations to explore fraud patterns and built a 
                                          classification model to detect fraudulent transactions.
                                          In this project, I was responsible for dataset 
                                          discovery, data preprocessing, and exploratory 
                                          data analysis (EDA). We used SAR data from 
                                          FinCEN.gov along with open-source datasets 
                                          from Kaggle to support our analysis and model development.`,
                                          `Ended`
                                        );
const WanNeeGinaraiDee = new Project("Wan nee gin arai dee system",null,
                                      `From the Daily question like "What should we/I eat?"
                                      that almost burn our break time or sometime it can be the cause
                                      that make conflict in relationship. This project are create for
                                      help people answer this question easier to save break time
                                      , stay relationship and help people make decision easier by provide
                                      some of decision making tools and unique feature`,
                                      `Ended`
                                    );

const BuyingNote = new Project("Buying Note",null,
                                      `This project is created from the problem 
                                      that I often forget to buy some items that 
                                      were already listed in the chat. And when 
                                      people assign buying notes in a group, it 
                                      sometimes causes repeated purchases. So this 
                                      project is made to solve that by giving the 
                                      ability to create buying orders, track the 
                                      order status, and share them with others.`,
                                      `Hold`
                                    );
const MymeiProject = new Project("E-commerce management system",null,
                                      `Developed a web-based e-commerce management 
                                      system using HTML, CSS, and JavaScript for the 
                                      frontend, and PHP for the backend, with MySQL 
                                      for the database. Performed full-stack development.`,
                                      `Ended`
                                    );
const projectContainer = new ProjectArr(MymeiProject);
projectContainer.append(MovieTicketBookingSystem);
projectContainer.append(FraudDetectionProject);
projectContainer.append(BuyingNote);
projectContainer.append(WanNeeGinaraiDee);
projectContainer.createContainer("projectScrollingContainer");