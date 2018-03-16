$(document).ready(function() {
    $(document).ready(function () {
	mode = "liste";
	verifConnecte();
	montrerListeAvis();
	ajouterAvis();
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

function montrerAvis (id) {
    $.ajax({
	url:'/php/un_avis.php',
	data: { "id" : id },
	method: "POST"
    }).done(function (data) {
	$("#contenu").empty();
	$("#contenu").append("<div class=\"review\"> <b>" + data.titre
			     + "</b> par <span class=\"nom\">" + data.auteur
			     + "</span><br/><p>" + data.texte 
			     + "</p><button onclick=\"montrerListeAvis();\">Retour</button></div>");
	$(".review").css({
	    "background-color" : (data.bien ?
				  "rgba(0,200,0,0.1)" :
				  "rgba(200,0,0,0.1)")
	});
    });
}

function montrerListeAvis () {
    $.ajax({
	url:'/php/avis.php'
    }).done(function (data) {
	$("#contenu").empty();
	var bien = "<img src=\"img/bien.png\" alt=\"Bien\">";
	var pasbien = "<img src=\"img/pasbien.png\" alt=\"Pas bien\">";
	for (i in data)
	{
	    let texte = "<div class=\"reviewdansliste\"> <p><span class=\"nom\">" + data[i].auteur
				 + "</span> : " + data[i].titre 
				 + " - <a href=\"#\" onclick=\"montrerAvis("
		+ data[i].id +");\">Montrer</a></p>"
		+ (data[i].bien ? bien : pasbien) + "</div>";
	    
	    $("#contenu").prepend(texte);
	}
	
	$("#contenu div").each(function(i) {
	    if (i % 2 == 0) {
		$(this).css({ "background-color" : "AliceBlue" });
	    } 
	});
    });
}


function verifConnecte() {
    $.ajax({
	url:'/php/est_connecte.php'
    })
        .done(function (data) {
            if(data.est_connecte){
	        $('#deconnexion').show();
		$('#ajouter').show();
            }
            else{
	        $('#connexion').show();
            }
        }).fail(erreurCritique);
}


function ajouterAvis() {
    $.ajax({
	url:'/php/ajout_avis.php'
    })
    $('#ajouter').submit(function () {
        $.ajax({
            url:"php/ajout_avis.php",
            method: "POST",
            data: $(this).serialize()
        }).done(function () {
	    $("#ajouter textarea, #ajouter input")
		.not(':button')
		.not('input[type="radio"]')
		.val('');
	    montrerListeAvis();
        })
            .fail(erreurCritique);
        return false;
    });
}
