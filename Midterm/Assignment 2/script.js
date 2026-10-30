// Task 3: live search, price sort and Premium label (plain JavaScript, works on the existing cards)
(function () {
  var N = 40;                      // last two digits of FA24-BCS-040
  var PREMIUM_LIMIT = N * 100;     // products above Rs.4,000 get a Premium label

  var grid = document.querySelector('.product-grid');
  var searchInput = document.getElementById('search-input');
  var sortBtn = document.getElementById('sort-price');
  var sortDir = document.getElementById('sort-dir');
  var noResults = document.getElementById('no-results');
  var radios = document.querySelectorAll('.filter-radio');

  // Always read the cards that are already in the page (their order changes after sorting)
  function getCards() {
    return Array.prototype.slice.call(grid.querySelectorAll('.product-item'));
  }

  function getName(card) {
    return card.querySelector('.card-title').textContent.trim().toLowerCase();
  }

  // "Rs.8,700.00" -> 8700
  function getPrice(card) {
    var text = card.querySelector('.card-text').textContent;
    var match = text.match(/\d[\d,]*(?:\.\d+)?/);
    return match ? parseFloat(match[0].replace(/,/g, '')) : NaN;
  }

  // A card is visible only if it passes BOTH filters:
  //  - the Task 1 category filter (CSS hides non-matching cards with display: none)
  //  - the search filter (this script adds .search-hidden to non-matching cards)
  // So we just count the cards that are not display:none after both have been applied.
  function updateEmptyState() {
    var anyVisible = getCards().some(function (card) {
      return getComputedStyle(card).display !== 'none';
    });
    grid.hidden = !anyVisible;
    noResults.hidden = anyVisible;
  }

  function applySearch() {
    var query = searchInput.value.trim().toLowerCase();
    getCards().forEach(function (card) {
      card.classList.toggle('search-hidden', !getName(card).includes(query));
    });
    updateEmptyState();
  }

  // Sort by price: first click low -> high, next click high -> low, and so on
  var ascending = true;
  function sortByPrice() {
    var sorted = getCards().sort(function (a, b) {
      return ascending ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a);
    });
    sorted.forEach(function (card) {
      grid.appendChild(card);      // appendChild moves the existing element, nothing is rebuilt
    });
    sortDir.textContent = ascending ? '(low to high)' : '(high to low)';
    ascending = !ascending;
  }

  // Premium label, added once when the page loads
  function addPremiumLabels() {
    getCards().forEach(function (card) {
      if (getPrice(card) > PREMIUM_LIMIT) {
        var label = document.createElement('span');
        label.className = 'premium-badge';
        label.textContent = 'Premium';
        card.querySelector('.card').appendChild(label);
      }
    });
  }

  searchInput.addEventListener('input', applySearch);
  sortBtn.addEventListener('click', sortByPrice);
  radios.forEach(function (radio) {
    radio.addEventListener('change', updateEmptyState);   // keep "No products found" in sync with Task 1
  });

  addPremiumLabels();
  applySearch();
})();