$(document).ready(function() {
    $(document).ready(function () {
	$.ajax({
	    url:'/php/est_connecte.php'
        })
            .done(function (data) {
                if(data.est_connecte){
                    $('#deconnexion').show();
                }
                else{
                    $('#connexion').show();
                }

            }).fail(erreurCritique);

	montrerListeArticles();
	
        $('#connexion').submit(function () {
            $.ajax({
                url:$(this).attr('action'),
                method: $(this).attr('method'),
                data:$(this).serialize()
            })
                .done(function (data) {
                    console.log('data=' , data);
                    if (data.est_connecte === true){
                        window.location.reload(true);
                    }
                    else{

                    }

                })
                .fail(erreurCritique);
            return false;
        });
        $('#deconnexion').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            }).done(function () {
                window.location.reload(true);
            }).fail(erreurCritique);
            return false;
        });

    });
});

function erreurCritique () {
    "use strict";
    let erreurCritique = function () {
        $('body').html(
            'une erreur critique s\'est produite'
        )
    }
}

function montrerArticle (id) {
    $.ajax({
	url:'/php/un_avis.php',
	data: { "id" : id },
	method: "POST"
    }).done(function (data) {
	$("#contenu").empty();
	$("#contenu").append("<div class=\"review\"> <b>" + data.titre + " par " +
			     data.auteur + "</b><br/><p>" + data.texte + "</p></div>");
	$("#contenu").append("<button onclick=\"montrerListeArticles();\">Retour</button>");
	
    });
}

function montrerListeArticles () {
    $.ajax({
	url:'/php/avis.php'
    }).done(function (data) {
	$("#contenu").empty();
	for (i in data)
	{
	    console.log(data);
	    $("#contenu").append("<div class=\"reviewdansliste\"> <p>" + data[i].auteur + " : " +
				 data[i].titre + "</p>" +
				 "<a href=\"#\" onclick=\"montrerArticle("+
				 data[i].id +");\">Montri</a></div>");
	}
    });
}
