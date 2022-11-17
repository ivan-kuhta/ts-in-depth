showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular,
}

function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript,
        },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.JavaScript,
        },
    ] as const;

    return books;
}

function logFirstAvailable(books: readonly Book[]): void {
    console.log(
        `Count books: ${books.length}`,
        `First available book: ${books.find((book) => book.available).title}`,
    );
}

logFirstAvailable(getAllBooks());

function getBookTitlesByCategory(category: Category): string[] {
    return getAllBooks()
        .filter((book) => book.category === category)
        .map(({ title }) => title);
}

function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

logBookTitles(getBookTitlesByCategory(Category.JavaScript));

function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const { title, author }: Book = getAllBooks()[index];
    return [title, author];
}

function calcTotalPages(): BigInt {
    const libraries = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ] as const;

    const countPages = libraries.reduce(
        (prev: bigint, { books, avgPagesPerBook }) => prev + BigInt(books * avgPagesPerBook),
        0n,
    );

    return countPages;
}

calcTotalPages();
