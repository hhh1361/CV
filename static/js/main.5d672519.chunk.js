(window.webpackJsonpcv=window.webpackJsonpcv||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=(a(13),a(1)),l=a(2),s=a(4),m=a(3),d=a(5),u=(a(14),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,Object.keys(this.props.profile).map((function(e){return"name"!==e?r.a.createElement("button",{key:e,className:"header__container__button"},e):null})))}}]),t}(n.Component)),p=(a(15),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.profile;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__container"},r.a.createElement("div",{className:"header__container__buttons"},r.a.createElement(u,{profile:this.props.profile})),r.a.createElement("div",{className:"header__container__info"},r.a.createElement("div",{className:"info__name"},r.a.createElement("h2",null,"Hello, i`m Nick")),r.a.createElement("div",{className:"info__description"},r.a.createElement("p",null,"Junior front-end developer"),r.a.createElement("p",null,"Response design, HTML, CSS, JS")),r.a.createElement("div",{className:"info__communication"},r.a.createElement("a",{href:e.contacts.vkontakte,target:"_blank",rel:"noopener noreferrer"},"write me")))))}}]),t}(n.Component)),h=(a(16),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={background:1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.profile;function t(e){var t="";t=e.target.id?e.target.id:e.target.parentNode.id,document.getElementById("background".concat(t)).style.opacity=1}function a(e){var t="";t=e.target.id?e.target.id:e.target.parentNode.id,document.getElementById("background".concat(t)).style.opacity=0}return r.a.createElement("div",{className:"main"},r.a.createElement("section",{className:"section__about-me"},r.a.createElement("div",{className:"section__about-me__photo"}),r.a.createElement("div",{className:"section__about-me__information"},r.a.createElement("h2",null,"About me"),r.a.createElement("h4",null,e["about me"]))),r.a.createElement("section",{className:"section__skills"},r.a.createElement("h2",null,"skills"),r.a.createElement("div",{className:"section__skills__container",id:"container"},r.a.createElement("div",{className:"section__skills_background",id:"backgroundCSS3"}),r.a.createElement("div",{className:"section__skills_background",id:"backgroundHTML5"}),r.a.createElement("div",{className:"section__skills_background",id:"backgroundJS"}),r.a.createElement("div",{className:"section__skills_background",id:"backgroundReact"}),r.a.createElement("div",{className:"section__skills_background",id:"backgroundTeamwork"}),r.a.createElement("div",{className:"section__skills_background",id:"backgroundBEM"}),r.a.createElement("div",{className:"section__skills_background",id:"backgroundESLint"}),r.a.createElement("div",{className:"section__skills_background",id:"backgroundGit"}),e.skills.map((function(e){return r.a.createElement("div",{className:"section__skills skill",id:e.sphere,key:e.sphere,onMouseEnter:t,onMouseLeave:a},r.a.createElement("h4",null,e.sphere),r.a.createElement("p",null,e.description))})))),r.a.createElement("section",{className:"section__education"},r.a.createElement("h2",null,"education"),r.a.createElement("div",{className:"section__education__container"},r.a.createElement("div",{className:"section__education__bsu-logo"},r.a.createElement("div",{className:"bsu-logo logo"})),r.a.createElement("div",{className:"section__education__rs-logo"},r.a.createElement("div",{className:"rs-logo logo"})))),r.a.createElement("section",{className:"section__english-level"},r.a.createElement("h2",null,"english level"),r.a.createElement("h4",null,e["english level"])),r.a.createElement("section",{className:"section__my-projects"},r.a.createElement("h3",null,"code examples"),r.a.createElement("h4",null,"smth")))}}]),t}(n.Component)),_=(a(17),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.profile;return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,"created by ",e.name,". ",r.a.createElement("br",null),"all rights reserved"))}}]),t}(n.Component)),v={name:"Nikita Turlyko","about me":"At the current job I began to deal with a basics of programming such as VBA and tried to study it. And i was very excited, I feel pleasure when the process i created works well. It inspires me to further development. Now I can describe myself as a junior front-end developer. I have diverse set of skills such as design, HTML, CSS, JavaScript, module development. I want to succeed in a new area, so I spend all my spare time to gain new knowledge",skills:[{sphere:"HTML5",description:"Studied html. I know how and when to apply the necessary tags and attributes on the page."},{sphere:"CSS3",description:"Studied CSS. I can apply design methods in practice."},{sphere:"JS",description:"Learned js programming language to create interactive website."},{sphere:"Git",description:"I know how to work with the version control system Git."},{sphere:"React",description:"I study the work of the react library."},{sphere:"ESLint",description:"My goal is to make code more consistent and avoid bugs"},{sphere:"Teamwork",description:"I can work well both independently and in a team."}],education:["Belarusian State University, School of Business and Management of Technology","The Rolling Scopes School 2019"],"english level":"Upper-Intermediate. My english classes began whan i was six and continued for eleven years at school. Now i use english in my work. I communicate with SAP-consultants from ATOS as a SAP-key user of my department","my projects":[{project:"Piskel Clone",link:"..."},{project:"Culture Portal",link:"..."}],contacts:{phone:"+375291887374",email:"nikita.turlyko@gmail.com",vkontakte:"https://vk.com/nikita.turlyko",instagram:"http://instagram.com/nikitaturlyko",github:"https://github.com/hhh1361",codewars:"https://www.codewars.com/users/hhh1361/"}};a(18);var k=function(){return window.addEventListener("scroll",(function(e){var t=window.pageYOffset;document.querySelectorAll("div.layer").forEach((function(e){var a=e.getAttribute("depth"),n="translate3d(0, "+-t*a+"px, 0)";e.style.transform=n}))})),r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"hero"},r.a.createElement("div",{className:"layer layer-01",depth:"0.3"}),r.a.createElement("div",{className:"layer layer-02",depth:"0.5"}),r.a.createElement("div",{className:"layer layer-03",depth:"0.7"}),r.a.createElement("div",{className:"layer layer-04",depth:"0.8"}),r.a.createElement("div",{className:"layer layer-05",depth:"1"})),r.a.createElement(p,{profile:v}),r.a.createElement(h,{profile:v}),r.a.createElement(_,{profile:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.5d672519.chunk.js.map