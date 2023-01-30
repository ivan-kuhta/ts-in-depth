import { ShelfItem } from "../interfaces";

export default class Shelf<T extends ShelfItem> {
  private items: T[] = [];
  add(item: T) {
    this.items.push(item);
  }
  getFirst() {
    return this.items[0];
  }
  find(title: string): T {
    return this.items.find((item) => item.title === title);
  }
  printTitles() {
    this.items.forEach((item) => console.log(item.title))
  }
}