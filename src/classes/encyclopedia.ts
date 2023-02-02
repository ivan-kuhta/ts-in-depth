import { ReferenceItem } from ".";
import { positiveInteger } from "../decorators";

export default class Encyclopedia extends ReferenceItem {
  private _copies: number;
  get copies(): number {
    return this._copies;
  }
  @positiveInteger
  set copies(value: number) {
    this._copies = value;
  }
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