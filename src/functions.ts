/* eslint-disable no-redeclare */

import RefBook from "./classes/encyclopedia";
import { Category } from "./enums";
import { Book, TOptions } from "./interfaces";
import { BookOrUndefined, BookProperties } from "./types";

export function getAllBooks(): readonly Book[] {
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

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
  console.log(
    `Count books: ${books.length}`,
    `First available book: ${books.find((book) => book.available).title}`,
  );
}

export function getBookTitlesByCategory(category: Category = Category.CSS): string[] {
  return getAllBooks()
    .filter((book) => book.category === category)
    .map(({ title }) => title);
}

export function logBookTitles(titles: string[]): void {
  titles.forEach(title => console.log(title));
}


export function getBookAuthorByIndex(index: number): [title: string, author: string] {
  const { title, author }: Book = getAllBooks()[index];
  return [title, author];
}

export function calcTotalPages(): BigInt {
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

export function createCustomerID(name: string, id: number): string {
  return name + id;
}
export function createCustomer(name: string, age?: number, city?: string) {
  console.log(`${name}${age ? ' ' + age : ''}${city ? ' ' + city : ''}`);
}
export function getBookByID(id: Book['id']): BookOrUndefined {
  return getAllBooks().find(book => book.id === id);
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]) {
  console.log(customer);
  let titles = [];
  bookIDs.forEach(id => {
    const book = getBookByID(id);
    return book?.available === true ? titles.push(book.title) : null;
  })
  return titles;
}
export function getTitles(author: string): readonly Book[];
export function getTitles(available: boolean): readonly Book[];
export function getTitles(id: number, available: boolean): readonly Book[];
export function getTitles(...[a, b]: [string | boolean] | [number, boolean]): readonly Book[] {
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
export function assertStringValue(data: any): asserts data is string {
  if (typeof data !== "string") throw new Error("value should have been a string");
}

export function bookTitleTransform(title: any) {
  assertStringValue(title);
  return [...title].reverse().join('');
}

export function printBook(book: Book) {
  console.log(`${book.title} by ${book.author}`)
}
export function getProperty(book: Book, property: BookProperties): any {
  const value = book[property];
  if (typeof value !== 'function') return value;
  return value.name;
}

export function setDefaultConfig(options: TOptions) {
  options.duration ??= 100;
  options.speed ??= 60;
  return options;
}

export function assertRefBookInstance(condition: any): asserts condition {
  if (!condition) throw new Error('It is not an instance of RefBook');
}

export function printRefBook(data: any): void {
  assertRefBookInstance(data instanceof RefBook);

  data.printItem();
}