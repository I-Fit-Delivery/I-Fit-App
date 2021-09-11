var me = {};
me.avatar = "https://res.cloudinary.com/face-studio/image/upload/v1631330408/I%20Fit/eva48x48_stresg.jpg";

var you = {};
you.avatar = "https://res.cloudinary.com/face-studio/image/upload/v1631329313/I%20Fit/newuser48x48_fro3ni.jpg";

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
                                '<p>'+ text +'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';                    
    }else{
        control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
                                '<p>'+text+'</p>' +
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
insertChat("me", "<strong>Eva:</strong> Oi, meu nome é Eva e eu a assistente virtual da I Fit. ", 600);  
insertChat("me", "<strong>Eva:</strong> ...", 1500);
insertChat("me", "<strong>Eva:</strong> ...", 3500);
insertChat("me", "<strong>Eva:</strong> ...",7000);
insertChat("me", "<strong>Eva:</strong> ...", 9500);
insertChat("you", "<strong>I Fit:</strong> Pressione 'Pular expêriencia' para prosseguir.", 12000);

//-- NOTA: Não adianta usar o insertChat..