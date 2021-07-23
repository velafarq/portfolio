const portfolio_template = $(`<section class="section portfolio">
<h2 class="about__title">Portfolio</h2>
<div class="project">
  
  <div class="project__info">
    <div class="project__img-container">
        <img class="project__img" src="./assets/ceramics-design-landing.png" alt="Dragana Jevtovic Ceramics product page">
    </div>

    <div class="project__description">
        <h2 class="project__title">Dragana Jevtovic Ceramics</h2>
        <div class="project__tools">
     
        <i class="devicon-react-original colored"></i>
          
            <img class="redux" src="./assets/redux-logo.png">
            <img class="firebase" src="./assets/firebase.png">
            
            <div class="project__tools-text">React, Redux, Firebase</div>
        </div>
        <p class="project__description">A website built for Dragana's clients to view her products, contact her, and submit order requests. There is also an authenticated admin portal for Dragana to
          manage her products.
         </p>
         <div class="project__links">
            <div class="project__link"><a  target="_blank" href="https://draganajevtovic.com">View Project</a></div>
            <div class="project__link"><a  target="_blank" href="https://github.com/velafarq/dragana-jevtovic">View Code</a></div>
         </div>
    </div>
  </div>
</div>

<div class="project">
  
  <div class="project__info">
    <div class="project__img-container">
        <img class="project__img" src="./assets/practica-screenshot.jpg" alt="Practica landing page">
    </div>

    <div class="project__description">
        <h2 class="project__title">Practica</h2>
        <div class="project__tools">
     
        <i class="devicon-react-original colored"></i>
          
            <img class="redux" src="./assets/redux-logo.png">
            <i class="devicon-nodejs-plain colored"></i>
            <i class="devicon-express-original colored"></i>
            
            <i class="devicon-mongodb-plain colored"></i>
            <div class="project__tools-text">React, Redux, NodeJS, Express, MongoDB</div>
        </div>
        <p class="project__description">Practica is a practice scheduler dedicated to helping musicians keep track of their current projects, practice
        sessions, and notes. Whether music is your full-time occupation, or your after-work hobby, Practica will
        be there to help guide you along.
         </p>
         <div class="project__links">
            <div class="project__link"><a  target="_blank" href="https://github.com/velafarq/practica-app">View Client-Side Code</a></div>
            <div class="project__link"><a  target="_blank" href="https://github.com/velafarq/practica-api">View Server-Side Code</a></div>
         </div>
    </div>
  </div>
</div>


<div class="project">
  <div class="project__info">
    <div class="project__img-container">
        <img class="project__img" src="./assets/note-book_screenshot.jpg" alt="Note Book landing page">
    </div>
    <div class="project__description">
        <h2 class="project__title">Note Book</h2>
        <div class="project__tools">
  
        <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-nodejs-plain colored"></i>
            <i class="devicon-express-original colored"></i>
            <i class="devicon-mongodb-plain colored"></i>
            <div class="project__tools-text">JavaScript, NodeJS, Express, MongoDB</div>
         </div>
        <p class="project__description">Note Book is a personal journal made for a student musician to chronicle their practice sessions, lessons,
            master classes, performances, and any other notes. The journal's aim is to assist the musician to remember
            useful experiences so that they can refer to later.
        </p>
        <div class="project__links">
            <div class="project__link"><a target="_blank" href="https://github.com/velafarq/note-book-app">View Code</a></div>
        </div>

    </div>
  </div>
</div>

<div class="project">
  <div class="project__info last-project">
    <div class="project__img-container">
        <img class="project__img" src="./assets/montine-lab-landing.jpg" alt="Montine Lab landing page">
    </div>
    <div class="project__description">
        <h2 class="project__title">Montine Lab</h2>
        <div class="project__tools">
     
        <i class="devicon-javascript-plain colored"></i>
            <div class="project__tools-text">HTML5, CSS, JavaScript, jQuery</div>
        </div>
        <p class="project__description">Design and create main site for Stanford University's Montine Lab. Responsive design, Google Analytics.
        </p>
        <div class="project__links">
            <div class="project__link"><a target="_blank" href="https://www.montinelab.com">View Project</a></div>
            <div class="project__link"><a target="_blank" href="https://github.com/velafarq/montine-lab">View Code</a></div>
        </div>
    </div>
  </div>
</div>

</section>
`);

// <div class="project">
//   <div class="project__info last-project">
//     <div class="project__img-container">
//         <img class="project__img" src="./assets/key-ingredient_screenshot.jpg" alt="Key Ingredient landing page">
//     </div>
//     <div class="project__description">
//         <h2 class="project__title">Key Ingredient</h2>
//         <div class="project__tools">
     
//         <i class="devicon-javascript-plain colored"></i>
//             <div class="project__tools-text">HTML5, CSS, JavaScript</div>
//         </div>
//         <p class="project__description">Key Ingredient uses Yummly's search API to generate different recipes based on a specific ingredient that the user searches.
//         </p>
//         <div class="project__links">
//             <div class="project__link"><a target="_blank" href="https://nervous-feynman-1b00ef.netlify.com/">View Project</a></div>
//             <div class="project__link"><a target="_blank" href="https://github.com/velafarq/Key-Ingredient">View Code</a></div>
//         </div>
//     </div>
//   </div>
// </div>