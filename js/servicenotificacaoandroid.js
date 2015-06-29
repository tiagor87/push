(function (angular) {
  "use strict";

  angular.module('pushApp')
    .service('notificacaoAndroid', function () {
      return function (event, notificacao) {
        switch (notificacao.event) {
          case 'registered':
            if (!!notificacao.regid.length) {
              return notificacao.regid;
            }
            break;
          case 'message':
            alert(notificacao.message);
            alert(notificacao.msgcnt);
            break;
          case 'error':
            alert('notificacao.msg');
            break;
          default:
            alert('Evento desconhecido.');
        }
      };
    });

}(window.angular));


