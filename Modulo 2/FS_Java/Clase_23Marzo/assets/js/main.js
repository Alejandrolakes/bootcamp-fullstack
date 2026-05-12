$ (document).ready(function() {
    $('#titulo-clickeable').on("click",function(){
        $('h1').css({"color": "red", "background-color":"blue"})
    })

    $('#titulo-clickeable').on("dblclick", function(){
        $('h2').css({"color": "green", "background-color":"purple"})
    })

    $('.parrafo').on("click", function(){
        $(this).fadeOut("slow")
        // $(this).fadeToggle()
    }) // fadeOut para que desaparezcan las etiquetas. 
})
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// const titulo = document.getElementById("titulo-clickeable")
// // titulo.addEventListener("click")