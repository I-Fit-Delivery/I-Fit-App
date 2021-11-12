/*calendar*/
$(function() {
    $("#calendar").datepicker({
      inline: true,
      showOtherMonths: true,
      selectOtherMonths: false,
      monthNames: ["Janei","Fevere","Março","Abril","Maio","Junho","Julho","Agosto","Setem","Outub","Novem","Dezem"],
      monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
          dayNames:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],
          dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],
      dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],
    });
  }); 