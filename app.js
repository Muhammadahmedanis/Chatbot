var list = document.getElementById("list");
var anim = document.querySelector("#animation");
var input = document.getElementById("inp");
function sendmsg() {
    var val = event.target.value;
    if(event.keyCode === 13)
        {
            list.innerHTML += `<div style="display: flex;"><i class="fa-solid fa-robot"></i>
            <li id="send">${val}</li></div>`;
            anim.style.display = "block";
            if(['what is web development?', 'web development?', 'what is web development', 'web development']
            .indexOf(val.toLowerCase()) !== -1)
                {
                    setTimeout(function () {
                        list.innerHTML += `<li id="receive">Web development encompasses the creation and maintenance of websites, involving tasks such as coding, designing, and content management.<li>`                    
                        anim.style.display = "none";
                    }, 2000)
                }
                else if(['who is your founder', 'your founder name']
                .indexOf(val.toLowerCase()) !== -1)
                    {
                        setTimeout(function () {
                            list.innerHTML += `<li id="receive"><b>Muhammad Ahmed</b> is the founder.</li>`
                            anim.style.display = "none";
                        }, 2000)
                    }
                else if(['what is web designing?', 'web designing?', 'what is web designing', 'web designing']
                .indexOf(val.toLowerCase()) !== -1)
                    {
                        setTimeout(function () {
                            list.innerHTML += `<li id="receive">
                            Web designing is the process of creating visually appealing and functional websites. It involves planning the layout, selecting colors and fonts, incorporating graphics and images, and ensuring usability across different devices. Web designers use various tools and techniques to create an engaging user experience and convey the brand's message effectively.</li>`
                            anim.style.display = "none";
                        }, 2000)
                    }
            else if(['how do I start learning web development?','how do I start learning web development','how to start web development','how to start web development'].indexOf(val.toLowerCase()) !== -1)
                    {
                        setTimeout(function () {
                            list.innerHTML +=  '<li id="receive">Beginners can start with online tutorials, courses, and resources covering HTML, CSS, JavaScript, and related topics.</li>'
                            anim.style.display = "none";
                        }, 2000)
                    }
                else if(['what is the difference between front-end and back-end development?','what is the difference between front-end and back-end development','difference between front-end and back-end development?','difference between front-end and back-end development'].indexOf(val.toLowerCase()) !== -1)
                    {
                        setTimeout(function () {
                            list.innerHTML += '<li id="receive">Front-end development involves designing and coding the user-facing parts of a website, while back-end development focuses on server-side logic and database management.</li>';
                            anim.style.display = "none";
                        }, 2000)
                    }
                else if(['what is the role of frameworks in web development?', 'what is the role of frameworks in web development', 'what is frameworks in web development?', 'what is frameworks in web development'].indexOf(val.toLowerCase()) !== -1)
                    {
                        setTimeout(function () {
                            list.innerHTML += '<li id="receive">Frameworks like React, Angular, and Vue.js provide pre-written code and tools to streamline development tasks and maintain code consistency.</li>';
                            anim.style.display = "none";
                        }, 2000)
                    }
                else if(['what is responsive web design?', 'what is responsive?', 'what is responsive'].indexOf(val.toLowerCase()) !== -1)
                    {
                        setTimeout(function () {
                            list.innerHTML += '<li id="receive">Responsive web design ensures that websites adapt and display properly on various devices and screen sizes, enhancing user experience.</li>';
                            anim.style.display = "none";
                        }, 2000)
                    }
                else if(['what are the essential skills for web development?', 'what are the essential skills for web development', 'skills for web development?'].indexOf(val.toLowerCase()) !== -1)
                    {
                        setTimeout(function () {
                            list.innerHTML += `<li id="receive">Essential skills for web development include proficiency in programming languages like HTML, CSS, and JavaScript. Additionally, knowledge of frameworks (e.g., React, Angular, Vue.js), version control systems (e.g., Git), and understanding of web development tools and technologies are crucial.</li>`
                        }, 2000)
                        anim.style.display = "none";
                    }
                else if(['what resources are available to learn development?','what resources are available to learn development','resources available to learn development'].indexOf(val.toLowerCase()) !== -1)
                    {
                        setTimeout(function () {
                            list.innerHTML += `<li id="receive">There are many online courses, tutorials, and bootcamps available. You can also find a wealth of information on websites like MDN Web Docs [developer.mozilla.org].</li>`
                        }, 2000)
                        anim.style.display = "none";
                    }
                else if(['what is a good salary for a web developer?', 'what is the salary of a web developer', 'salary of a web developer'].indexOf(val.toLowerCase()) !== -1)
                    {
                        setTimeout(function () {
                            list.innerHTML += `<li id="receive">Developer salaries can vary depending on experience, location, and skillset. You can find salary information on websites like Indeed.</li>`
                        }, 2000)
                        anim.style.display = "none";
                    }
                else if(['which programming language should I learn first?', 'how to start coding'].indexOf(val.toLowerCase()) !== -1)
                    {
                        setTimeout(function () {
                            list.innerHTML += `<li id="receive">This depends on your interests. Python is a popular choice for beginners because it's easy to learn and read. However, HTML, CSS, and JavaScript are essential for web development.</li>`
                        }, 2000)
                        anim.style.display = "none";
                    }
                else if(['what are the different types of development jobs?', 'what are the different types of development jobs', 'types of development jobs'].indexOf(val.toLowerCase()) !== -1)
                    {
                        setTimeout(function () {
                            list.innerHTML += `<li id="receive">There are many different specializations within development, such as web development, mobile development, software development, and data science.</li>`
                        }, 2000)
                        anim.style.display = "none";
                    }
                else if(['how do I become a web developer?', 'how do I become a web developer', 'how to become a web developer'].indexOf(val.toLowerCase()) !== -1)
                    {
                        setTimeout(function () {
                            list.innerHTML += `<li id="receive">There's no one-size-fits-all path, but many beginners start with learning HTML, CSS, and JavaScript. These are the foundational languages for building websites.</li>`
                        }, 2000)
                        anim.style.display = "none";
                    }
                    else{
                        setTimeout(function () {
                            list.innerHTML += `<li id="receive">Sorry i am unable to understand your question.</li>`
                        }, 2000)
                        anim.style.display = "none"; 
                    }
                input.value = "";
        }       
}