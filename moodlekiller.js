

//just head-->title text
$("#version").html("MoodleKiller 5.0");

//just warning text
$( '#wText' ).html("Warning Message" );

//name of subjects in the main_reg
$( '.subj:eq(0)' ).html("Professional English | Ainur Bakenova" );
$( '.subj:eq(1)' ).html("WEB Technologies 2 (Back End) | Yelaman Apushev" );
$( '.subj:eq(2)' ).html("Algorithms and Data Structures | Kyzyrkanov Abzal" );
$( '.subj:eq(3)' ).html("Calculus 1 | Kassabek Dina" );
$( '.subj:eq(4)' ).html("Coding Lab | Meruyert Nurgazy" );
$( '.subj:eq(5)' ).html("Physical Culture 3 | Askapov Sarzhan" );

//name of subjects in the grades page
$( '.gas:eq(0)' ).html("Foreign Language 2 (English) | Assel Salkenova");
$( '.gas:eq(13)' ).html("Foreign Language 2 (English) | Assel Salkenova");

$( '.gas:eq(1)' ).html("WEB Technologies 1 (Front End) | Yegemberdiyeva Gulzhan");
$( '.gas:eq(14)' ).html("WEB Technologies 1 (Front End) | Yegemberdiyeva Gulzhan");

$( '.gas:eq(2)' ).html("Object-Oriented Programming (Java) | Aimukhambetov Olzhas");
$( '.gas:eq(15)' ).html("Object-Oriented Programming (Java) | Aimukhambetov Olzhas");

$( '.gas:eq(3)' ).html("Discrete Mathematics | Zhalgas Aidana");
$( '.gas:eq(16)' ).html("Discrete Mathematics | Zhalgas Aidana");

$( '.gas:eq(4)' ).html("Modern History of Kazakhstan | Mamytova Saule");
$( '.gas:eq(17)' ).html("Modern History of Kazakhstan | Mamytova Saule");

$( '.gas:eq(5)' ).html("Physical Culture | Sarzhan Askapov");
$( '.gas:eq(18)' ).html("Physical Culture | Sarzhan Askapov");

$( '.gas:eq(6)' ).html("Foreign language | Aray Rakhimzhanova");
$( '.gas:eq(19)' ).html("Foreign language | Aray Rakhimzhanova");

$( '.gas:eq(7)' ).html("Information and Communication Technologies | Gulnur Smagulova");
$( '.gas:eq(20)' ).html("Information and Communication Technologies | Gulnur Smagulova");

$( '.gas:eq(8)' ).html("Introduction to Programming (C++) | Askar Khaimuldin");
$( '.gas:eq(21)' ).html("Introduction to Programming (C++) | Askar Khaimuldin");

$( '.gas:eq(9)' ).html("Linear Algebra | Balgaisha Mukanova");
$( '.gas:eq(22)' ).html("Linear Algebra | Balgaisha Mukanova");

$( '.gas:eq(10)' ).html("Cultural studies | Anar Uyzbayeva");
$( '.gas:eq(23)' ).html("Cultural studies | Anar Uyzbayeva");

$( '.gas:eq(11)' ).html("Physical Culture | Sarzhan Askapov");
$( '.gas:eq(24)' ).html("Physical Culture | Sarzhan Askapov");

$( '.gas:eq(12)' ).html("Educational Practice | Gulnur Smagulova");
$( '.gas:eq(25)' ).html("Educational Practice | Gulnur Smagulova");

//warning message for gas in the grades
$(document).ready(function(){
    $('.gas').click(function(){
        pushUpMessage();
    });
});


//hover effect for Cources text in the navbar
$( '.courses_text' ).css({"background-color": "#f8f9fa", "color": "black", "border": "1px solid #f8f9fa"});

$(document).ready(function(){
    $('.courses_text').hover(function(){
        $(this).css({"border-raduis": "100px", "border" : "1px solid #0d6efd", "background-color": "#0d6efd", "color":"white",
            "transition": " border-color 0.2s linear", "transition": " background-color 0.2s linear",
            });
    },
        function(){
        $(this).css({"background-color": "#f8f9fa", "color": "black", "border": "1px solid #f8f9fa", "border-raduis": "5px"});
    });
});


//click method for selecting fieldset
$(document).ready(function(){
    $("fieldset").mouseover(function(){
        $(this).css("border-color", "black");
    });
    $("fieldset").mouseout(function(){
        $(this).css("border-color", "#dee2e6");
    });
});

$(document).ready(function(){
    $("fff").mouseover(function(){
        $(this).css("border-color", "black");
    });
    $("fff").mouseout(function(){
        $(this).css("background-color", "#dee2e6");
    });
});

//for snackbar/toast
function pushUpMessage() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    document.getElementById('sound').play();

}



(function() {
    let onpageLoad = localStorage.getItem("theme") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
    document.getElementById("theme").textContent =
        localStorage.getItem("theme") || "light";
})();

function themeToggle() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark-mode") {
        localStorage.setItem("theme", "");
        $('#favicon').attr('href', 'https://i.ibb.co/rs5z9tz/light-icon.png');

    } else {
        localStorage.setItem("theme", "dark-mode");
        $('#favicon').attr('href', 'https://i.ibb.co/D8r86Dk/light-icon.png');
    }

    document.getElementById("theme").textContent = localStorage.getItem("theme");
}
