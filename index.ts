export class Div {
  private element: HTMLElement;

  constructor(id: string | HTMLElement) {
    if (typeof id == "string") {
      let elm = document.getElementById(id);
      if (elm !== null) {
        this.element = elm;
      } else {
        throw new TypeError(`Can not find element with ID ${id}`);
      }
    } else {
      this.element = id;
    }
  }

  center() {
    // Get the parent node
    let parent = this.element.parentNode ?? document.getRootNode();

    // Create a div to center the div
    let div = document.createElement("div");
    parent.removeChild(this.element);
    div.setAttribute(
      "style",
      "display: flex; align-items: center; justify-content: center; width: 100%; height: 100%"
    );

    // Setup parenting correctly
    parent.appendChild(div);
    div.appendChild(this.element);
  }
}
