let fullName = "Moropane Kutullo Innocent";

let bio = `Welcome to my about page! My name is Moropane Kutullo Innocent, and
I hail from the vabrant country of south africa. My journey into the real of technology began in
2021 when I embarked on a Computer Systems engineering course at Tshwane University of Technology.
However, it wasn't until 2022 that I discovered my true passion for web development. My initiation
into this exciting field come through creating my first online store project using WordPress. `;
let bio2 = `Eager to expand my skill set, I delved into the world of HTML, CSS, and
JavaScript through online resources like Youtube. In january 2023, I tooka significant step forwared
by enrolling in a Fullstack course on Coursera, where I learned basics of developing a website from
start to the end. In january 2024 I enrolled in a Fullstack bootcamp on Udemy, Where I honed my
abilities in both front-end and back-end coding, bring projects to life from start to finish. Join
me on this journey as I continue to grow and innovate in the ever-evolving landscape of technology`;

let contactInfo = {
    email:"Kimoropana823@gmail.com",
    phone:"0768699754",
    address:["Address",
             "PO Box 440, Pretoria, 0001",
             "Soshanguve Block L",
             "Aubry Matlala St",
             `(+27) 76-869-9754`]
}

let projects = ["main potfolio","My other potfolio" , "online calculater","online Shoe-store"]
let certificates = [ {
    link:`https://coursera.org/share/541c3d0c0a0fea30a6af708cb3b39c39`,
    title:"Google IT Support",
    date:"October 24, 2023",
    summary:`This course is the first of a series that aims to prepare you for a role as
    an entry-level IT Support Specialist. In this course, you’ll be introduced to the world
    of Information Technology, or IT. You’ll learn about the different facets of Information
    Technology, like computer hardware, the Internet, computer software, troubleshooting,
    and customer service. This course covers a wide variety of topics in IT that are
    designed to give you an overview of what’s to come in this certificate program.

    By the end of this course, you’ll be able to:
    ● understand how the binary system works
    ● assemble a computer from scratch
    ● choose and install an operating system on a computer
    ● understand what the Internet is, how it works, and the impact it has in the modern
    world
    ● learn how applications are created and how they work under the hood of a computer
    ● utilize common problem-solving methodologies and soft skills in an Information
    Technology setting`,
    verify:`Moropane Kutullo Innocent's account is verified. Coursera certifies their successful
    completion of Google Google IT Support Specialization.`

},
{   link:`https://coursera.org/share/aa6e6aab0c1a88085ff0a3ae143f9722`,
    title:"Cybersecurity for Everyone",
    date:"May 26, 2023",
    summary:`Cybersecurity for Everyone lays the groundwork to understand and explore the
    key issues facing policy makers attempting to manage the problem of cybersecurity, from
    its technical foundations to the domestic and international policy considerations
    surrounding governance, privacy, and risk management, to applications for achieving the
    goals of an enterprise, an institution, or a nation. This course is designed for
    students with some or no background in information technology, whether a novice or
    active in the cybersecurity field (engineers and computer scientists will learn the
    broader context and business aspects of cybersecurity), and will provide the principles
    to understand the current debates shaping a rapidly evolving security landscape.`,
    verify:`Moropane Kutullo Innocent's account is verified. Coursera
    certifies their successful completion of a Cybersecurity for Everyone`,
},
{   link:`https://coursera.org/share/1665cdb1a99e1bbb20135d221afe098d`,
    title:"Introduction to Back-End Developmente",
    date:"December 12, 2023",
    summary:`Distinguish between front-end, back-end, and full-stack developers.,

    Create and style a webpage with HTML and CSS.,

    The benefits of working with UI frameworks.`,
    verify:`Moropane Kutullo Innocent's account is verified. Coursera
    certifies their successful completion of Introduction to Back-End Developmente`,
}]






let form = document.querySelector('#form');

let iname = document.querySelector('#name')
let lname = document.querySelectorAll('label.name')

let isurname = document.querySelector('#surname')
let lsurname = document.querySelector('label.surname')

let iemail = document.querySelector('#email')
let lemail = document.querySelector('.email')

let itext = document.querySelector('#messege')
let ltext = document.querySelector('.messege')

let iterms = document.querySelector('#terms')
let lterms = document.querySelector('.terms')

let error = document.querySelector('.error')
error.style.fontSize = '2rem'
error.style.marginTop = '2rem'

form.addEventListener('submit' , (e)=>{

    function redirect() {
        window.location.replace("index.html");
        return false;
      }
    
    error.textContent = "Successfuly sent"
    error.style.color = `rgb(89, 255, 47)`;
    error.style.fontSize = '2.2rem'
    error.style.transition = '.6s'
    error.style.color = "`rgb(43, 87, 231)`"

    alert('Email sent!'); 
   
    
})
iterms.addEventListener("input", (e)=>{
    
    
    error.style.color = `rgb(43, 87, 231)`;
    error.style.transition = '.6s'
    if(error.checked === true)
    {
        error.textContent = "Submit the form!"
    }
    else if(error.checked === false){
        error.textContent = "Check terms and conditons!"
    }
    })
    iterms.addEventListener("change", (e)=>{
        
        if(iterms.checked === true)
        {
            error.textContent = "Submit the form!"
        }
        else if(iterms.checked === false){
            error.textContent = "Check terms and conditons!"
        }
    
        })





    
itext.addEventListener("input", (e)=>{
    
    ltext.style.color = `rgb(43, 87, 231)`;
    
    ltext.style.fontSize = '1.5rem'
    ltext.style.transition = '.3s'
    
    })
    
    
    itext.addEventListener("change", (e)=>{
        
        ltext.style.color = `rgb(43, 87, 231)`;
        ltext.style.fontSize = '1.1rem'
        ltext.style.transition = '.3s'
        
    
        })

isurname.addEventListener("input", (e)=>{
    
    
    lsurname.style.color = `rgb(43, 87, 231)`;
    
    lsurname.style.fontSize = '1.5rem'
    lsurname.style.transition = '.3s'
    
    })
    
    
    isurname.addEventListener("change", (e)=>{
        
        lsurname.style.color = `rgb(43, 87, 231)`;
        lsurname.style.fontSize = '1.1rem'
        lsurname.style.transition = '.3s'
        
    
        })

iemail.addEventListener("input", (e)=>{
    
    lemail.style.color = `rgb(43, 87, 231)`;
    
    lemail.style.fontSize = '1.5rem'
    lemail.style.transition = '.3s'
    
    })
    
    
    iemail.addEventListener("change", (e)=>{
        
        lemail.style.color = `rgb(43, 87, 231)`;
        lemail.style.fontSize = '1.1rem'
        lemail.style.transition = '.3s'
        
    
        })



iname.addEventListener("input", (e)=>{
    
lname[0].style.color = `rgb(43, 87, 231)`;

lname[0].style.fontSize = '1.5rem'
lname[0].style.transition = '.3s'

})


iname.addEventListener("change", (e)=>{
    
    lname[0].style.color = `rgb(43, 87, 231)`;
    lname[0].style.fontSize = '1.1rem'
    lname[0].style.transition = '.3s'
    console.log(iname.value)

    })






//about me section

document.querySelector('#fullName').innerText = fullName;
document.querySelector('.bio').textContent = bio;
document.querySelector('.bio2').textContent = bio2;


// certificates section
for(let k = 1 ; k <4  ; k++)
{
  
    document.querySelector(`.title${k}`).textContent = certificates[k -1].title;
    document.querySelector(`.c-para${k}`).textContent = certificates[k -1].summary;
    document.querySelector(`.verify${k}`).textContent = certificates[k -1].verify;
    document.querySelector(`.date${k}`).textContent = certificates[k -1].date;
    document.querySelector(`.link${k}`).href = certificates[k -1].link;
     
}



// Address section

for(let a = 0 ; a < 4 ; a++)
  {

  
     let num = document.querySelector('address');
     num.children[a].textContent = contactInfo.address[a+1];
   
    
 }

 
 console.log('im working')
 



