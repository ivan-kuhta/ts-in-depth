export abstract class ReferenceItem {
  // title: string;
  // year: number;
  // constructor(newTitle: string, newYear: number) {
  //     this.title = newTitle;
  //     this.year = newYear;
  //     console.log('Creating a new ReferenceItem...');
  // }
  #id: number;
  private _publisher: string;
  static department: string = 'Model';
  get publisher() {
    return this._publisher.toUpperCase();
  }
  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }
  constructor(public title: string, protected year: number, id: number) {
    this.#id = id;
  }
  getId() {
    return this.#id;
  }
  printItem() {
    console.log(`${this.title} was published in ${this.year} in ${ReferenceItem.department} department`);
  }

  abstract printCitation(): void;
}
