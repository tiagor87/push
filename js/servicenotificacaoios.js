(function (angular) {
  "use strict";

  angular.module('pushApp')
    .service('notificacaoIOS', function () {
      return function (evento, notificacao) {
        if (notificacao.alert) {
          navigator.notification.alert(notificacao.alert);
        }

        if (notificacao.sound) {
          var som = new Media(evento.sound);
          som.play();
        }

        if (notificacao.badge) {
          $cordovaPush.setBadgeNumber(notificacao.badge)
            .then(function (resultado) {
              alert(resultado);
            })
            .catch(function (mensagem) {
              alert(mensagem);
            })
        }
      };
    });

}(window.angular));

