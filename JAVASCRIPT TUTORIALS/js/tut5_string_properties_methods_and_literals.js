// String Properties, Methods & Template Literals

// 1. String properties and Methods

// const name="amey";
// const v="gm"
// console.log(v+" "+name);

// let html;
// html="<h1> This is Simple Heading </h1>"+
//      "<p> This is simple Para </p>";
// html=html.concat(' this',' str');   
// console.log(html);
// console.log(html.length);
// console.log(html[4]); //op is T
//========methods==============================
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html.indexOf('This')); op is 4
// console.log(html.indexOf('of')); //op is 4, because of not found(same for console.log(html.lastIndexOf('of')))
// console.log(html.lastIndexOf('simple')); op is 42
// console.log(html.charAt(5));op is h
// console.log(html.endsWith('>')); true, if not ends with > then answer is false
// console.log(html.includes('This')); true, if word is on string then true otherwise false
// console.log(html.substring(1,14));// op is h1>This is S, start with one but not include 14
// console.log(html.slice(1, -15)) //h1> This is Simple Heading </h1><p> This is s
// console.log(html.split('>')); //["<h1", "This is Simple Heading </h1", " <p", "This is simple Para </p", " "]
// console.log(html.replace('This','It')); // This word is replace by IT, only one word is replaced...

// // 2. Template Literals
const name="amey";
let fruit1='orange';            
let fruit2='mango';                    
let myHtml=` Hello ${name}
             <h1> This is Simple Heading </h1>
             <p> You like ${fruit1} and ${fruit2} </p> 
             `;
document.body.innerHTML=myHtml;



//============================================ Task===============
// let myHtml=`
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Zomato | myZomato.com</title>
//     <link rel="stylesheet" href="css/style.css">
//     <link rel="stylesheet" media="screen and (max-width:1320px)" href="css/phone.css">
//     <link rel="preconnect" href="https://fonts.gstatic.com">
//     <link href="https://fonts.googleapis.com/css2?family=Baloo+2&family=Bree+Serif&display=swap" rel="stylesheet">
// </head>
// <body>
//     <nav id="navbar">
//         <div id="logo">
//             <img src="images/logo.png" alt="myZomato.com">
//         </div>
//         <ul>
//             <!-- li.item{<a></a>}*5 it is called as emmet shortcut for following list with <a> tag below-->
//             <li class="item"><a href="#home">Home</a></li>
//             <li class="item"><a href="#services-container">Services</a></li>
//             <li class="item"><a href="#client-section">Our Clients</a></li>
//             <li class="item"><a href="#contact">Contact Us</a></li>
//         </ul>
//     </nav>

//     <!-- ------------------------------------------ Home Section --------------------------------------------------------->
//     <section id="home">
//         <h1 class="h-primary">Welcome to My Zomato</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias eveniet qui ut aspernatur laborum!</p>
//         <p>Accusantium quis commodi, ipsa cupiditate reprehenderit quasiporro delectus.</p>
//         <button class="btn">Order Now</button>
//     </section>

//     <!-- ------------------------------------------ Service Section --------------------------------------------------------->
//     <section id="services-container">
//         <h1 class="h-primary center">Our Services</h1>
//         <div id="services">
//             <div class="box">
//                 <img src="images/1.jpeg" alt="">
//                 <h2 class="h-secondary center">Food catering</h2>
//                 <p class="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam minima saepe 
//                     autem doloribus ipsum laudantium sunt dolorum sapiente? Unde, expedita facilis a voluptatem</p>
//             </div>
//             <div class="box">
//                 <img src="images/2.jpg" alt="">
//                 <h2 class="h-secondary center">bulk Ordering</h2>
//                 <p class="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam minima saepe 
//                     autem doloribus ipsum laudantium sunt dolorum sapiente? Unde, expedita facilis a voluptatem</p>
//             </div>
//             <div class="box">
//                 <img src="images/3.png" alt="">
//                 <h2 class="h-secondary center">Food Ordering</h2>
//                 <p class="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam minima saepe 
//                     autem doloribus ipsum laudantium sunt dolorum sapiente? Unde, expedita facilis a voluptatem</p>
//             </div>
//         </div>
//     </section>

//     <!-- ------------------------------------------ Client Section --------------------------------------------------------->
//     <section id="client-section">
//         <h1 class="h-primary center">Our Clients</h1>
//         <div id="clients">
//             <div class="client-item">
//                 <img src="images/logo1.png" alt="client-item">
//             </div>
//             <div class="client-item">
//                 <img src="images/logo2.png" alt="client-item">
//             </div>
//             <div class="client-item">
//                 <img src="images/logo3.png" alt="client-item">
//             </div>
//             <div class="client-item">
//                 <img src="images/logo4.png" alt="client-item">
//             </div>
//             <div class="client-item">
//                 <img src="images/logo5.png" alt="client-item">
//             </div>
//             <!-- <div class="client-item">
//                 <img src="images/logo6.png" alt="client-item">
//             </div>
//             <div class="client-item">
//                 <img src="images/logo7.jfif" alt="client-item">
//             </div> -->
//         </div>
//     </section>

//     <!-- ------------------------------------------ Contact Section --------------------------------------------------------->
//     <section id="contact">
//         <h1 class="h-primary center">Contact Us</h1>
//         <div id="contact-box">
//             <form action="">
//                 <div class="form-group">
//                     <label for="name">Name:</label>
//                     <input type="text" name="name" id="name" placeholder="Enter your name">
//                 </div>
//                 <div class="form-group">
//                     <label for="email">Email:</label>
//                     <input type="email" name="name" id="email" placeholder="Enter your email">
//                 </div>
//                 <div class="form-group">
//                     <label for="phone">Phone No:</label>
//                     <input type="phone" name="name" id="phone" placeholder="Enter your phone number">
//                 </div>
//                 <div class="form-group">
//                     <label for="message">Message:</label>
//                     <textarea name="message" id="message" cols="30" rows="5"></textarea>
//                 </div>
//             </form>
//         </div>
//     </section>

//     <!-- ------------------------------------------ Website Footer --------------------------------------------------------->
//     <footer>
//         <div class="center">
//             Copyright &copy; www.myZomato.com All right reserved!
//         </div>
//     </footer>
// </body>
// </html>
// `;
// document.body.innerHTML=myHtml;