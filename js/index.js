// Your code goes here
// -------------~1~---------------------------------------------
const navHover = document.querySelector('.nav');

navHover.addEventListener('mouseout', (event => {
    event.target.style.color = 'purple';
}))
navHover.addEventListener('mouseover', (event) =>{
    event.target.style.color = 'blue'
})

//---------------~2~-------------------------------------------
const signUp = document.querySelectorAll('.btn');

signUp.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'black';
        event.stopPropagation();
    });
});

//----------------~3~------------------------------------------
const imgOpacity = document.querySelector('.intro img');
imgOpacity.addEventListener('mouseover', (event) => {
    event.target.style.opacity = 0.5;
});
imgOpacity.addEventListener('mouseout', (event) => {
    event.target.style.opacity = 1;
});

//-----------------~4~--------------------------------------------
const imgMotion = document.querySelector('.img-content img');
imgMotion.addEventListener('mouseenter', (event) => {
    event.target.style.transform = 'translateX(-20px)';
});
imgMotion.addEventListener('mouseleave', (event) => {
    event.target.style.transform = 'translateX(20px)';
});

//-------------------~5~----------------------------------------
const textRotate = document.querySelectorAll ('.text-content');
textRotate.forEach((element) => {
    element. addEventListener('mouseenter', (event) => {event.target.style.transform = 'rotate(180deg)';
    })
    element.addEventListener('mouseleave', (event) => {
        event.target.style.transform = 'rotate(0deg)';
    })
});

//------------------~6~----------------------------------------
const headerStyle = document.querySelectorAll ('body h2');
headerStyle.forEach((element) => {
    element.addEventListener('mouseenter', (event) => {
        event.target.style.color = 'gold';
        event.stopPropagation();
    });
    element.addEventListener('mouseleave', (event) => {
        event.target.style.color = 'black';
        event.stopPropagation();
    });
});

//-------------------~7~--------------------------------------------
const bodyColor = document.querySelector('body');
bodyColor.addEventListener ('keypress', (event) => {
    event.target.style.backgroundColor = 'indigo'
});

//---------------------~8~-------------------------------------
const imgScale = document.querySelectorall('img')[2];
imgScale.addEventListener('mouseenter', (event) => {event.target.style.transform= 'scale(.3)';
});
imgScale.addEventListener('mouseleave', (event) => {
    event.target.style.transform = 'scale (1)';
});

//---------------------~9~--------------------------------------
const imgSkewer = document.querySelectorall('img')[3];
imgSkewer.addEventListener('mouseenter', (event) => {
    event.target.style.transform = 'skew(15deg)';
    event.target.style.transition = 'all 7s';
});
imgSkewer.addEventListener('mouseleave', (event) => {
    event.target.style.transform = 'skew(0deg)';
    event.target.style.transition = 'all 7s';
});

//-------------------------------------------------------------
const preventDefault = document.querySelectorAll('.nav-link');
prevent.forEach((element) => {
    element.addEventListener('click', (event) =>{
        console.log("Be back soon");
        event.preventDefault();
    })
});
