// Gesto de abertura do cartão do ID: dígitos em sequência, pedido de acesso, borda laranja.
// Só roda quando a página foi marcada com .anim (movimento permitido); sem JS ou com
// prefers-reduced-motion o cartão já nasce no estado final.
(function () {
  if (document.documentElement.className.indexOf('anim') === -1) return;
  var card = document.getElementById('idcard');
  var req = document.getElementById('req');
  var stxt = document.getElementById('stxt');
  var digits = document.querySelectorAll('#idnum .g span');
  if (!card || !req || !stxt) return;

  stxt.textContent = 'Conectando…';
  digits.forEach(function (d, i) {
    setTimeout(function () { d.classList.add('on'); }, 150 + i * 120);
  });
  setTimeout(function () { stxt.textContent = 'Disponível'; }, 150 + digits.length * 120 + 100);
  setTimeout(function () { req.classList.add('on'); }, 1700);
  setTimeout(function () { card.classList.add('accessed'); stxt.textContent = 'Sendo acessado'; }, 3300);
})();
