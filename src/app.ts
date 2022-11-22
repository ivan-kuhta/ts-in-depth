showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Task 'Types'
interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
};

interface DamageLogger {
    (reason: string): void
}

interface Person {
    name: string,
    email: string
}

interface Author extends Person {
    numBooksPublished: number
}

interface Librarian extends Person {
    department: string,
    assistCustomer(custName: string, bookTitle: string): void
}

type BookProperties = keyof Book;

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

function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(
        `Count books: ${books.length}`,
        `First available book: ${books.find((book) => book.available).title}`,
    );
}

logFirstAvailable(getAllBooks());

function getBookTitlesByCategory(category: Category = Category.CSS): string[] {
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

// Task 'Functions'
function createCustomerID(name: string, id: number): string {
    return name + id;
}

const myID: string = createCustomerID('Ann', 10);

console.log(myID);

let idGenerator: typeof createCustomerID = (name, id) => name + id;

idGenerator = createCustomerID;

console.log(idGenerator('Ann', 10));


function createCustomer(name: string, age?: number, city?: string) {
    console.log(`${name}${age ? ' ' + age : ''}${city ? ' ' + city : ''}`);
}

createCustomer('Tom');
createCustomer('Tom', 24);
createCustomer('Tom', 24, 'Lviv');

console.log(getBookTitlesByCategory());
logFirstAvailable();

function getBookByID(id: Book['id']): Book {
    return getAllBooks().find(book => book.id === id);
}

console.log(getBookByID(1));

function сheckoutBooks(customer: string, ...bookIDs: number[]) {
    console.log(customer);
    let titles = [];
    bookIDs.forEach(id => {
        const book = getBookByID(id);
        return book?.available === true ? titles.push(book.title) : null;
    })
    return titles;
}

const myBooks = сheckoutBooks('Ann', 1, 2, 4);
console.log(myBooks)

/* eslint-disable no-redeclare */

function getTitles(author: string): readonly Book[];
function getTitles(available: boolean): readonly Book[];
function getTitles(id: number, available: boolean): readonly Book[];
function getTitles(...[a, b]: [string | boolean] | [number, boolean]): readonly Book[] {
    const books = getAllBooks();
    if (a) {
        return books.filter((book) => book.available === b && book.id === a);
    }
    if (typeof a === 'string') {
        return books.filter((book) => book.author === a);
    } else if (typeof a === 'boolean') {
        return books.filter((book) => book.available === a);
    }
}

let checkedOutBooks = getTitles(false);

console.log(checkedOutBooks);

/* eslint-enable no-redeclare */

function assertStringValue(value: any): boolean {
    if (typeof value !== "string") throw "value should have been a string";
    return true;
}

function bookTitleTransform(title: any) {
    if (assertStringValue(title)) return [...title].reverse().join('');
}

console.log(bookTitleTransform("Title my book"));
// console.log(bookTitleTransform(123414));

function printBook(book: Book) {
    console.log(`${book.title} by ${book.author}`)
}

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
};

printBook(myBook);
myBook.markDamaged('missing back cover');

const logDamage: DamageLogger = (value) => console.log(value);

logDamage('10 damage');

const favoriteAuthor: Author = {
    name: "Stiven",
    email: 'stiven@gmail.com',
    numBooksPublished: 1000
}

const favoriteLibrarian: Librarian = {
    name: "West Library",
    email: 'west_l@gmail.com',
    department: 'Science',
    assistCustomer: () => {

    }
}

const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

console.log(
    offer?.magazine,
    offer?.magazine?.getTitle?.(),
    offer?.book?.getTitle?.(),
    offer?.book?.authors?.[0]
)

function getProperty(book: Book, property: BookProperties): any {
    const value = book[property];
    if (typeof value !== 'function') return value;
    return value.name;
}

console.log(getProperty(myBook, 'title'));
console.log(getProperty(myBook, 'markDamaged'));
// getProperty(getAllBooks()[0], 'isbn');