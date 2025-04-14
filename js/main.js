const navbar = document.getElementById('navbar');
const ulcontent = document.getElementById('content');
const logoimg = document.getElementById('logoimg');
const prop = document.getElementById('prop');

const projects = [
    {
        projectname: 'Calculator Project',
        projecttitle: 'Calculator',
        name: 'calculator',
        link: 'https://mznmhmd.github.io/calculator/'
    },
    {
        projectname: 'Payment Project', 
        projecttitle: 'Payment Form',
        name: 'Payment form',
        link: 'https://payment-cards-gamma.vercel.app/'
    },
    {
        projectname: 'Furniture Project',
        projecttitle: 'Furniture Website',
        name: 'Furniture website',
        link: 'https://mznmhmd.github.io/furn-website/'
    },
    {
        projectname: 'Todolist Project',
        projecttitle: 'Todo List',
        name: 'todolist',
        link: 'https://todo-list-iota-blush.vercel.app/'
    }
];

// Event Listeners
logoimg?.addEventListener('click', () => {
    window.location.href = 'https://mznmhmd.github.io/';
});

// Loader functionality
window.addEventListener('load', () => {
    const loader = document.querySelector('.dashaka');
    if (loader) {
        setTimeout(() => loader.classList.add('hidden'), 500);
    }
    
    renderProjects();
});

// Project rendering function
function renderProjects() {
    if (!prop) return;
    
    // Create document fragment for better performance
    const fragment = document.createDocumentFragment();
    
    projects.forEach(project => {
        const projectElement = createProjectElement(project);
        fragment.appendChild(projectElement);
    });
    
    prop.appendChild(fragment);
}

// Create project element
function createProjectElement(project) {
    const container = document.createElement('div');
    container.className = 'showing';
    container.setAttribute('data-aos', 'zoom-out');
    
    container.innerHTML = `
        <div class="content" id="allcard">
            <div class="back">
                <div class="back-content">
                    <img src="imgs/lap icon.png" 
                         alt="${project.projecttitle}"
                         width="70" 
                         height="70"
                         style="stroke: #ffffff; fill: #ffffff;">
                    <strong id="projectname">${project.projectname}</strong>
                </div>
            </div>
            <div class="front">
                <div class="img">
                    <div class="circle"></div>
                    <div class="circle" id="right"></div>
                    <div class="circle" id="bottom"></div>
                </div>
                <div class="front-content">
                    <small class="badge">Project</small>
                    <div class="description">
                        <div class="title">
                            <p class="title d-flex justify-content-center align-items-center">
                                <strong>${project.projecttitle}</strong>
                            </p>
                        </div>
                        <a href="${project.link}" class="uiverse mx-auto" id="calcbtn">
                            <span class="wrapper">
                                <span>Check It</span>
                                ${Array.from({length: 12}, (_, i) => 
                                    `<span class="circle circle-${12 - i}"></span>`
                                ).join('')}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return container;
}