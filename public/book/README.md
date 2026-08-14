# Rexine Centre - Physical Sample Books Storage

Each sample book catalogue is organized inside `/public/books/{slug}/`:

Structure:
```
public/
  books/
    {slug}/
      cover.webp          <- Book cover image
      catalogue.pdf        <- Full downloadable/viewable PDF catalogue
      products/           <- Product swatch images
        {productCode}.webp
```

To add a new book:
1. Create a folder in `public/book/{slug}` containing `cover.webp`, `catalogue.pdf`, and `products/` folder with swatch images.
2. Add a single book object to `src/data/mockBooks.ts`.
3. The routes `/books`, `/books/{slug}`, and `/books/{slug}/{productCode}` will automatically render the book and product details!
