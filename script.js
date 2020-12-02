function pageObj(index, button, content){
    this.index = index;
    this.button = button;
    this.content = content;
}

let about = new pageObj(0,
    document.getElementById("aboutBtn"),
    "<div class=\"aboutGreeting\">"+
        "<h2>Hi, my name is</h2>"+
        "<h1>Alexander Redding</h1>"+
    "</div>"+
    "<div class=\"photo_bioHolder\">"+
        "<img src=\"PortfolioPhoto.png\" alt=\"a photo of me smiling\">"+
        "<p>"+
            "I’m a Northwestern undergrad who<br>"+
            "specializes in front end development,<br>"+
            "always wants to learn more,<br>"+
            "and loves to tinker.<br>"+
        "</p>"+
    "</div>"+
    "<a class=\"resumeLink\" href=\"resume.pdf\" download=\"alexanderredding\">Check out my resume</a>"
    );

let projects = new pageObj(1,
    document.getElementById("projectsBtn"),
    "<h1 class=\"projectHeader\">Here\'s what I\'ve been working on</h1>"+
    "<div class=\"ezbiteProject\">"+
        "<a class=\"projectTitle\" href=\"https://ezbite.io\" target=\"_blank\">ezbite.io</a>"+
        "<p class=\"desc\">Restaurant suggestion web app (HTML5, CSS, JavaScript)"+
            "<button class=\"moreBtn\" id=\"moreEzbite\">+</button></p>"+
        "<div class=\"more\" id=\"ezbiteMore\">"+
            "<div class=\"ezbitePhotoHolder\">"+
                "<img src=\"ezbite1.png\" alt=\"ezbite landing page\">"+
                "<img src=\"ezbite2.png\" alt=\"le peep\'s recommendation page on ezbite\">"+
            "</div>"+
            "<ul>"+
                "<li>Independently created a restaurant suggestion web app to help students"+
                    "discover new places to eat around campus</li>"+
                "<li>Built and deployed on the Google Firebase web platform, and used the"+
                    "Google Maps API</li>"+
                "<li>Over 200 daily users and continuously being improved from student feedback</li>"+
                "<li>Gained experience with product management and design testing</li>"+
                "<li><u><b>Click the project title to see!</b></u></li>"+
            "</ul>"+
        "</div>"+
    "</div>"+
    "<div class=\"perceptronProject\">"+
        "<h2 class=\"projectTitle\">Digit Recognition Perceptron</h2>"+
        "<p class=\"desc\">Machine learning algorithm (Python)<button "+
            "class=\"moreBtn\" id=\"morePerceptron\">+</button></p>"+
        "<div class=\"more\" id=\"perceptronMore\">"+
            "<ul>"+
                "<li>Built a multi-class machine learning algorithm to categorize simulated cell"+
                    "phone accelerometer data as specific lock-screen keypresses</li>"+
                "<li>Achieved over 95% accuracy</li>"+
                "<li>Gained experience with data analysis and large-scale algorithm testing</li>"+
            "</ul>"+
        "</div>"+
    "</div>"
    );

let contact = new pageObj(2,
    document.getElementById("contactBtn"),
    "<div class=\"contactHolder\">"+
        "<h1 class=\"projectHeader\">Say hello</h1>"+
        "<ul>"+
            "<li><a href=\"mailto:alexredd99@gmail.com\" target=\"_blank\">Email</a></li>"+
            "<li>(309) 550-1909</li>"+
            "<li><a href=\"https://www.linkedin.com/in/alexanderredding\" target=\"_blank\">LinkedIn</"+
            "a></li>"+
            "<li><a href=\"https://github.com/alexredd99\" target=\"_blank\">GitHub</a></li>"+
        "</ul>"+
    "</div>"
    );

let page = 0;

(function init(){
    let nav = document.getElementById('navBall');

    function moveNav(from, to){
        nav.style.animation = "";
        setTimeout(()=>{
            switch(`${from}_${to}`){
                case "0_1":
                    nav.style.animationName = "a_p";
                    nav.style.top = "210px";
                    break;
                case "0_2": 
                    nav.style.animationName = "a_c";
                    nav.style.top = "783px";
                    break;
                case "1_0":
                    nav.style.animationName = "p_a";
                    nav.style.top = "142px";
                    break;
                case "1_2":
                    nav.style.animationName = "p_c";
                    nav.style.top = "783px";
                    break;
                case "2_0":
                    nav.style.animationName = "c_a";
                    nav.style.top = "142px";
                    break;
                case "2_1":
                    nav.style.animationName = "c_p";
                    nav.style.top = "210px";
                    break;
            }
        },0);
        
    }

    let pageContent = document.getElementById("pageContent");

    about.button.onclick = () => {
        pageContent.innerHTML = about.content;
        
        if(page!= about.index){
            moveNav(page,about.index);
            page = 0;
        }
    }

    contact.button.onclick = () => {
        pageContent.innerHTML = contact.content;

        if(page!= contact.index){
            moveNav(page,contact.index);
            page = 2;
        }
    }

    projects.button.onclick = () => {
        if(page!= projects.index){
            moveNav(page,projects.index);
            page = 1;
        }

        pageContent.innerHTML = projects.content;
        page = 1;

        let ezbiteMore = document.getElementById("moreEzbite");
        let perceptronMore = document.getElementById("morePerceptron");
        let ezOn = false;
        let percOn = false;
        
        ezbiteMore.onclick = () => {
            let ezbiteDesc = document.getElementById("ezbiteMore");
        
            if(!ezOn){
                ezbiteDesc.style.display = "block";
                ezbiteMore.innerText = "-";
                ezOn = true;
            } else {
                ezbiteDesc.style.display = "none";
                ezbiteMore.innerText = "+";
                ezOn = false;
            }
        };
        
        perceptronMore.onclick = () => {
            let perceptronDesc = document.getElementById("perceptronMore");
        
            if(!percOn){
                perceptronDesc.style.display = "block";
                perceptronMore.innerText = "-";
                percOn = true;
            } else{
                perceptronDesc.style.display = "none";
                perceptronMore.innerText = "+";
                percOn = false; 
            }
        }
    };

    let ezbite = document.getElementById('ezbite');
    let perceptron = document.getElementById("perceptron");

    ezbite.onclick = () => {
        if(page != 1) projects.button.click();
        let ezbiteMore = document.getElementById("moreEzbite");
        ezbiteMore.click();
    };

    perceptron.onclick = () => {
        if(page != 1) projects.button.click();
        let perceptronMore = document.getElementById("morePerceptron");
        perceptronMore.click();
    };

    about.button.click();
})();