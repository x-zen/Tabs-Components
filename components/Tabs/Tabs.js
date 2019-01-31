
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.tabItem.select());
  };

  select() {
    // Get all of the elements with the tabs-link class
    let links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links = Array.from(links).forEach(link => {link.classList.remove('tabs-links-selected')});

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');

    // Call the select method on the item associated with this link
    this.element.classList.toggle('tabs-link-selected')
  }
}

class TabItem {
  constructor(itemElement) {
    // Assign this.element to the passed in element
    this.itemElement = itemElement;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    let items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    items = Array.from(items).forEach(items => {items.classList.remove('tabs-item-selected')});

    // Add a class named "tabs-item-selected" to this element
    this.itemElement.classList.add('tabs-item-selected');


  }
}

/* START HERE:

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.tabs-link');
links.forEach( element => new TabLink(element));
