$(document).ready(function(){


    $('.bxslider').bxSlider({
        mode: 'fade',
        caption: true,
        speed: 1000,
        slideWidth: 1600        
    });

    //Posts
    var posts = [ //Arrya de JSON
        {
            title: 'Prueba de titulo 1',
            date: `Publicado el dia ${moment().day()} de ${moment().format("MMMM")} del año ${moment().format("YYYY")}`,
            content: 'Procesador Intel Core i3 de 4 núcleos y 3.6 GHz de octava generación 8 GB de memoria DDR4 de 2666 MHz Intel UHD Graphics 630 Almacenamiento SSD basado en PCIe de 128 GB1'
        },
        {
            title: 'Prueba de titulo 2',
            date: `Publicado el dia ${moment().day()} de ${moment().format("MMMM")} del año ${moment().format("YYYY")}`,
            content: 'Procesador Intel Core i3 de 4 núcleos y 3.6 GHz de octava generación 8 GB de memoria DDR4 de 2666 MHz Intel UHD Graphics 630 Almacenamiento SSD basado en PCIe de 128 GB1'
         
        },
        {   title: 'Prueba de titulo 3',
            date: `Publicado el dia ${moment().day()} de ${moment().format("MMMM")} del año ${moment().format("YYYY")}`,
            content: 'Procesador Intel Core i3 de 4 núcleos y 3.6 GHz de octava generación 8 GB de memoria DDR4 de 2666 MHz Intel UHD Graphics 630 Almacenamiento SSD basado en PCIe de 128 GB1'
        },
        {title: 'Prueba de titulo 4',
            date: `Publicado el dia ${moment().day()} de ${moment().format("MMMM")} del año ${moment().format("YYYY")}`,
            content: 'Procesador Intel Core i3 de 4 núcleos y 3.6 GHz de octava generación 8 GB de memoria DDR4 de 2666 MHz Intel UHD Graphics 630 Almacenamiento SSD basado en PCIe de 128 GB1'
        },
        {title: 'Prueba de titulo 5',
            date: `Publicado el dia ${moment().day()} de ${moment().format("MMMM")} del año ${moment().format("YYYY")}`,
            content: 'Procesador Intel Core i3 de 4 núcleos y 3.6 GHz de octava generación 8 GB de memoria DDR4 de 2666 MHz Intel UHD Graphics 630 Almacenamiento SSD basado en PCIe de 128 GB1'
        }
    ];

    posts.forEach((item, index) => {
        var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer mas</a>
            </article>
            `;
        $("#posts").append(post);
            
    });    


    //selector de tema

    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });


});