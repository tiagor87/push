(function (angular) {
  "use strict";

  angular.module('pushApp')
    .controller('Controller', [
      '$scope',
      '$cordovaPush',
      'notificacaoIOS',
      'notificacaoAndroid',
      function ($scope, $cordovaPush, notificacaoIOS, notificacaoAndroid) {
        var self = this;

        var CONFIG = {
          badge: true,
          sound: true,
          alert: true
        };

        this.deviceToken = 'teste';

        self.registrar = function () {
          alert('Registrando');
          try {
            $cordovaPush.register(CONFIG)
              .then(function (deviceToken) {
                self.deviceToken = deviceToken;
                alert('Token recuperado');
              })
              .catch(function (mensagem) {
                alert(mensagem);
              });
          } catch (e) {
            alert(e);
          }
        };

        self.desregistrar = function () {
          $cordovaPush.unregister(CONFIG)
            .then(function (deviceToken) {
              self.deviceToken = deviceToken;
              alert('Token recuperado');
            })
            .catch(function (mensagem) {
              alert(mensagem);
            });
        };

        ;(function () {
          $scope.$on('$cordovaPush:notificationReceived', function (evento, notificacao) {
            notificacaoAndroid(evento, notificacao);
            notificacaoIOS(evento, notificacao);
          });
        }());
      }
    ]);

}(window.angular));

