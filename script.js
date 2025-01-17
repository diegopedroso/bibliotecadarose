function updateBookCount() {
  const totalBooks = booksData.length;
  const bookCountDiv = document.getElementById("bookCount");
  bookCountDiv.textContent = `Total de livros disponíveis: ${totalBooks}`;
}

function searchBooks() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  booksData.forEach(book => {
    if (
      book.Título.toLowerCase().includes(searchTerm) ||
      book.Autor.toLowerCase().includes(searchTerm) ||
      book.Ano.toString().includes(searchTerm)
    ) {
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("book");
      bookDiv.innerHTML = `
        <h2>${book.Título}</h2>
        <p><strong>Autor:</strong> ${book.Autor}</p>
        <p><strong>Ano:</strong> ${book.Ano}</p>
        <p><strong>Posição:</strong> ${book.posicao}</p>
      `;
      resultsDiv.appendChild(bookDiv);
    }
  });
}

// Update the book count on page load
document.addEventListener("DOMContentLoaded", updateBookCount);
