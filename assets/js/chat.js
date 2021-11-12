var me = {};
me.avatar = "https://res.cloudinary.com/face-studio/image/upload/v1631422542/I%20Fit/ted_t0gvpf.png";

var you = {};
you.avatar = "https://res.cloudinary.com/face-studio/image/upload/v1620497253/I%20Fit/Favicon_pttyjh.png";

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 24;
    hours = hours ? hours : 12; // a hora '0' deve ser '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}            

//-- Não adianta tempo. É um efeito javaScript.
function insertChat(who, text, time){
    if (time === undefined){
        time = 0;
    }
    var control = "";
    var date = formatAMPM(new Date());
    
    if (who == "me"){
        control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
                            '<div class="text text-l">' +
                                '<span>'+ text +'</span>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';                    
    }else{
        control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
                                '<span>'+text+'</span>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
                  '</li>';
    }
    setTimeout(
        function(){                        
            $("ul").append(control).scrollTop($("ul").prop('scrollHeight'));
        }, time);
    
}

function resetChat(){
    $("ul").empty();
}

$(".mytext").on("keydown", function(e){
    if (e.which == 13){
        var text = $(this).val();
        if (text !== ""){
            insertChat("me", text);              
            $(this).val('');
        }
    }
});

$('body > div > div > div:nth-child(2) > span').click(function(){
    $(".mytext").trigger({type: 'keydown', which: 13, keyCode: 13});
})

//-- Limpar Chat
resetChat();

//-- Print Messages
insertChat("me", "<strong>Ted:</strong> Opa, eu sou o Ted, sou o assistente virtual do I Fit e serei seu guia hoje!!!", 600);  
insertChat("me", "<strong>Ted:</strong> ...", 1500);
insertChat("me", "<strong>Ted:</strong> ...", 3500);
insertChat("me", "<strong>Ted:</strong> ...", 7000);
insertChat("me", "<strong>Ted:</strong> ...", 9500);
insertChat("you", "<strong>I Fit:</strong> Pressione 'Continuar' para acessar nossa plataforma!", 12000);

//-- NOTA: Não adianta usar o insertChat.. 