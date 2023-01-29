import * as Interfaces from '../interfaces';

export class UniversityLibrarian implements Interfaces.Librarian {
  name: string;
  email: string;
  department: string;
  assistCustomer(custName: string, bookTitle: string): void {
    console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
  }
}