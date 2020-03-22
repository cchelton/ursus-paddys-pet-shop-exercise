console.log("Paddy's Pet Shop");

const inventory = [
  {
    name: "Niffler",
    type: "domestic",
    price: 550,
    notes:
      "Has a tendency to get into trouble pilfering valuables from anywhere and anyone it lays its eyes on."
  },
  {
    name: "Murtlap",
    type: "wild",
    price: 250,
    notes:
      "Fleshy rodent like creature. Beware it's bite because it may cause hallucinations."
  },
  {
    name: "Billywig",
    type: "wild",
    price: 148,
    notes:
      "When stung the person will suffer from a giddiness and eventually spontaneous floating."
  },
  {
    name: "Graphorns",
    type: "mounted",
    price: 1456,
    notes: "Has a tough hide said to be more durable than that of a dragon."
  },
  {
    name: "Thunderbird",
    type: "combat",
    price: 5230,
    notes:
      "Said to be able to sense danger from far off and can wipe the memories of extremely large groups of people."
  }
];

const cart = [];

const receipts = [];

$(document).ready(init);

function init() {
  console.log("jq");
  renderPets();
  renderCart();
  $(".js-addPet-form").on("submit", addCreature);
  $(".js-availablePets").on("click", ".js-purchase-btn", addToCart);
}

function addCreature(event) {
  event.preventDefault();
  inventory.push({
    //  Create new creature obj and push to inventory
    name: $(".js-addPet-name").val(),
    type: $(".js-addPet-type").val(),
    price: parseInt($(".js-addPet-price").val()),
    notes: $(".js-addPet-notes").val()
  });

  //  Reset form values
  $(".js-addPet-name").val("");
  $(".js-addPet-type").val("");
  $(".js-addPet-price").val("");
  $(".js-addPet-notes").val("");

  //  Re-Render inv list
  renderPets();
}

function addToCart() {
  //  splices item from inventory and appends to cart
  cart.push(inventory.splice($(this).data("index"), 1)[0]); //  index 0 from the slice to get the object out
  renderPets();
  renderCart();
}

function renderPets() {
  //  appends each inventory item to the DOM
  $(".js-availablePets").empty();
  for (let i = 0; i < inventory.length; i++) {
    $(".js-availablePets").append(`
    <div class="col-4 mb-3 px-2">
    <div class="card">
      <h5 class="card-header">$${inventory[i].price}.00</h5>
      <div class="card-body">
        <h5 class="card-title">${inventory[i].name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          ${inventory[i].type}
        </h6>
        <p class="card-text">${inventory[i].notes}</p>
        <button data-index="${i}" class="js-purchase-btn btn btn-primary btn-block">
          Purchase
        </button>
      </div>
    </div>
  </div>
`);
  }
}

function renderCart() {
  //  appends each cart item to DOM
  $(".js-cart").empty();
  for (let i = 0; i < cart.length; i++) {
    $(".js-cart").append(`
    <li class="list-group-item">${cart[i].name} - $${cart[i].price}.00</li>
    `);
  }
}
