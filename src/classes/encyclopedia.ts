import { ReferenceItem } from ".";

export default class Encyclopedia extends ReferenceItem {
  constructor(title: string, year: number, id: number, public edition: number) {
    super(title, year, id);
  }

  override printItem() {
    super.printItem();
    console.log(`Edition: ${this.edition} (${this.year})`);
  }

  printCitation(): void {
    console.log(`${this.title} – ${this.year}`)
  }
}