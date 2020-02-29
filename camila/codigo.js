

if (annyang) {
    var commands = {
        'quien te creo': function(){
            alert("sergio");
        },
        'adios':adios,
        'mucho gusto':cual,'que bien':cual,
        'hola':hola,'que tal':hola,'hola camila':hola,
        //muchos nombres
        'mi nombre es augusto':mucho ,
        'mi nombre es maria':mucho ,
        'mi nombre es vilanyi':mucho ,
        'mi nombre es rosela':mucho ,
        'mi nombre es camina':mucho ,
        'mi nombre es alejandro':mucho ,
        'mi nombre es pedro':mucho ,
        'mi nombre es eduil':mucho ,
        'mi nombre es luis':mucho ,
        'mi nombre es manuel':mucho ,
        'mi nombre es miguel':mucho ,
        'mi nombre es jose':mucho ,
        'mi nombre es roberto':mucho ,
        'mi nombre es josefina':mucho ,
        'me llamo  augusto':mucho ,
        'me llamo maria':mucho ,
        'me llamo vilanyi':mucho ,
        'me llamo rosela':mucho ,
        'me llamo camina':mucho ,
        'me llamo alejandro':mucho ,
        'me llamo pedro':mucho ,
        'me llamo eduil':mucho ,
        'me llamo luis':mucho ,
        'me llamo manuel':mucho ,
        'me llamo miguel':mucho ,
        'me llamo ose':mucho ,
        'me llamo roberto':mucho ,
        'me llamo josefina':mucho ,
        //hasta aqui
        'como estas':muy_bien,
        'como te llamas':nombre,'cual es tu nombre':nombre
    };
    annyang.addCommands(commands);  
    annyang.setLanguage("es");
    annyang.start();
}
//videos
    adios = document.getElementById("adios");
    cual = document.getElementById("cual");
    estas = document.getElementById("estas");
    hola = document.getElementById("hola");
    mucho = document.getElementById("mucho");
    muy_bien = document.getElementById("muy_bien");
    nombre = document.getElementById("nombre");

//primer video
function adios(){
    //true
    adios.play();
    adios.setAttribute('class', 'visible');
    //false
    cual.removeAttribute('class');
    estas.removeAttribute('class');
    hola.removeAttribute('class');
    mucho.removeAttribute('class');
    muy_bien.removeAttribute('class');
    nombre.removeAttribute('class');
}
//segundo video
function cual(){
    //true
    cual.play();
    cual.setAttribute('class', 'visible');
    //false
    adios.removeAttribute('class');
    estas.removeAttribute('class');
    hola.removeAttribute('class');
    mucho.removeAttribute('class');
    muy_bien.removeAttribute('class');
    nombre.removeAttribute('class');
}
//tercer video
//pendiente
function estas(){
    //true
    estas.play();
    estas.setAttribute('class', 'visible');
    //false
    adios.removeAttribute('class');
    cual.removeAttribute('class');
    hola.removeAttribute('class');
    mucho.removeAttribute('class');
    muy_bien.removeAttribute('class');
    nombre.removeAttribute('class');
}
//cuarto video
function hola(){
    //true
    hola.play();
    hola.setAttribute('class', 'visible');
    //como estas?
    //false
    adios.removeAttribute('class');
    cual.removeAttribute('class');
    estas.removeAttribute('class');
    mucho.removeAttribute('class');
    muy_bien.removeAttribute('class');
    nombre.removeAttribute('class');
}
//sexto video
function mucho(){
    //true
    mucho.play();
    mucho.setAttribute('class', 'visible');
    //false
    adios.removeAttribute('class');
    cual.removeAttribute('class');
    estas.removeAttribute('class');
    hola.removeAttribute('class');
    muy_bien.removeAttribute('class');
    nombre.removeAttribute('class');
}
//sectimo video
function muy_bien(){
    //true
    muy_bien.play();
    muy_bien.setAttribute('class', 'visible');
    //false
    adios.removeAttribute('class');
    cual.removeAttribute('class');
    estas.removeAttribute('class');
    hola.removeAttribute('class');
    mucho.removeAttribute('class');
    nombre.removeAttribute('class');
}
//octavo
function nombre(){
    //true
    nombre.play();
    nombre.setAttribute('class', 'visible');
    //false
    adios.removeAttribute('class');
    cual.removeAttribute('class');
    estas.removeAttribute('class');
    hola.removeAttribute('class');
    mucho.removeAttribute('class');
    muy_bien.removeAttribute('class');
}