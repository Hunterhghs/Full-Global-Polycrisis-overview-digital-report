/* Full Global Polycrisis Overview — shared site behaviour */
(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Chart.js defaults — H Heuristics palette
  if (window.Chart) {
    Chart.defaults.font.family = "'Source Sans 3', system-ui, sans-serif";
    Chart.defaults.font.size = 12;
    Chart.defaults.color = '#0c1929';
    Chart.defaults.plugins.legend.labels.usePointStyle = true;
    Chart.defaults.plugins.legend.labels.boxWidth = 8;
  }
})();
