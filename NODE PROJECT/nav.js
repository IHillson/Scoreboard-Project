// nav.js
// Marks the current page's nav link with aria-current="page".
// Reads the active page from <body data-page="...">, set per-page in the HTML,
// rather than parsing pathnames — keeps this working under any routing setup.

function highlightCurrentPage() {
  const currentPage = document.body.dataset.page;
  if (!currentPage) return;

  const link = document.querySelector(`.primary-nav a[data-nav="${currentPage}"]`);
  if (link) link.setAttribute("aria-current", "page");
}

highlightCurrentPage();
