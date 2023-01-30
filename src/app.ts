import { RefBook, ReferenceItem, UL, Library, Shelf } from "./classes";
import { Category } from "./enums";
import { bookTitleTransform, calcTotalPages, createCustomer, createCustomerID, getAllBooks, getBookByID, getBookTitlesByCategory, getObjectProperty, getProperty, getTitles, logBookTitles, logFirstAvailable, printBook, printRefBook, purge, setDefaultConfig, сheckoutBooks } from "./functions";
import { Author, Book, Librarian, Logger, Magazine } from "./interfaces";
import { BookRequiredFields, PersonBook, UpdatedBook, СreateCustomerFunctionType } from "./types";

// ========================================================

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
showHello('greeting', 'TypeScript');

// ========================================================


// Task 02.01
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// calcTotalPages();

// Task 03.01
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: typeof createCustomerID = (name, id) => name + id;
// idGenerator = createCustomerID;
// console.log(idGenerator('Ann', 10));

// Task 03.02
// createCustomer('Tom');
// createCustomer('Tom', 24);
// createCustomer('Tom', 24, 'Lviv');

// console.log(getBookTitlesByCategory());
// logFirstAvailable();

// console.log(getBookByID(1));

// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks)

// Task 03.03
// let checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);

// Task 03.04
// console.log(bookTitleTransform("Title my book"));
// console.log(bookTitleTransform(123414));

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
// };

// printBook(myBook);

// myBook.markDamaged('missing back cover');

// Task 04.02
// const logDamage: Logger = (value) => console.log(value);

// logDamage('10 damage');

// Task 04.03
// const favoriteAuthor: Author = {
//     name: "Stiven",
//     email: 'stiven@gmail.com',
//     numBooksPublished: 1000
// }

// let favoriteLibrarian: Librarian = {
//     name: "West Library",
//     email: 'west_l@gmail.com',
//     department: 'Science',
//     assistCustomer: () => {

//     }
// }

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(
//     offer?.magazine,
//     offer?.magazine?.getTitle?.(),
//     offer?.book?.getTitle?.(),
//     offer?.book?.authors?.[0]
// )

// Task 04.05

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// getProperty(getAllBooks()[0], 'isbn');

// Task 05.01
// const ref = new ReferenceItem('This magazine', 2021, 1);
// ref.printItem();
// ref.publisher = 'Publisher';
// console.log(ref.publisher);
// console.log(
//     ref,
//     ref.getId()
// );

// Taks 05.02
// const refBook = new RefBook(`World of Animals`, 2022, 2, 3);
// refBook.printItem();

// Task 05.03
// refBook.printCitation();

// Task 05.04
// favoriteLibrarian = new UL.UniversityLibrarian();

// favoriteLibrarian.name = 'Library';
// favoriteLibrarian.assistCustomer('Customer', 'Book Title');

// Task 05.05
// let personalBook: PersonBook = {
//     name: 'Name',
//     email: 'email@gmail.com',
//     id: 1,
//     title: 'JavaScript',
//     author: 'Conan',
//     available: true,
//     category: Category.JavaScript
// }

// console.log(personalBook);

// const options = {
//     duration: 1000
// }

// setDefaultConfig(options)

// console.log(options);


// Task 06.03
// const refBook: RefBook = new RefBook('Learn TypeScript', 2023, 1, 1);
// printRefBook(refBook);

// const favoriteLibrarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// Task 06.05
// const flag = true;

// if (flag) {
//     import('./classes')
//         .then(({ Reader }) => {
//             const reader = new Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);

//             console.log(reader);
//         })
//         .catch((err) => console.log(err))
//         .finally(() => console.log('Complete!'));
// }

// if (flag) {
//     const { Reader } = await import('./classes');
//     const reader = new Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);

//     console.log(reader);
// }

// Task 06.06
// let library: Library = new Library();

// let library: Library = {
//     id: 1,
//     name: 'Library #1',
//     address: "Address"
// };

// console.log(library);

// Task 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
// console.log(purge(inventory));
// console.log(purge([1, 2, 3, 4, 5]));

// Task 07.02
// const bookShelf: Shelf<Book> = new Shelf();
// inventory.forEach((item) => bookShelf.add(item));
// console.log(bookShelf.getFirst())

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf: Shelf<Magazine> = new Shelf();
// magazines.forEach((item) => magazineShelf.add(item));
// console.log(magazineShelf.getFirst());

// Task 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// const obj = {
//     title: 'Title',
//     price: 2000
// };

// console.log(getObjectProperty(obj, 'title'));

// Task 07.04
const bookRequired: BookRequiredFields = {
    id: 1,
    title: 'Title',
    author: 'Author',
    available: true,
    category: Category.Software,
    pages: 1000,
    markDamaged: () => console.log('damage')
}

const updatedBook: UpdatedBook = {
    title: 'Title Updated'
};

let params: Parameters<СreateCustomerFunctionType> = ['Anna', 12, 'Lviv'];

createCustomer(...params);
