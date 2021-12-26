/** Stores a reference to a HTML element, and allows for centering on it */
export class Div {
  private element: HTMLElement;

  /** Construct a new Div
   * @param id: If `is` is a string, the library will attempt to find the element using `document.getElementById`.
   * If `id` is an HTMLElement, then it will set the element to `id`
   *
   * @throws If `document.getElementById` returns null
   */
  constructor(id: string | HTMLElement) {
    // Check to see if string, and get the element if it is
    if (typeof id == "string") {
      let elm = document.getElementById(id);
      if (elm !== null) {
        this.element = elm;
      } else {
        throw new TypeError(`Can not find element with ID ${id}`);
      }
      // If it aint a string, assume HTMLElement and set this.element to it
    } else {
      this.element = id;
    }
  }

  /** Centers your div
   * @param className An optional class to give to the parent element responsable for centering your div
   */
  center(className?: string) {
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

    // Add optional class name
    if (typeof className === "string") {
      div.setAttribute("class", className);
    }
  }
}
