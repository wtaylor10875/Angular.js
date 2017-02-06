(function() {
  var app = angular.module("store", ['store-products']);

  app.controller("StoreController", function() {
    this.products = consoles;
  });

  app.controller("ReviewController", function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var consoles = [
    {
      name: "Xbox One S S 500Gb Console with Minecraft",
      price: 249.99,
      description: "Explore the world of Minecraft on Xbox One S, Includes Favourites & Builders packs, and craft new Minecraft worlds together with friends on Xbox Live",
      canPurchase: true,
      alsoPurchasedItems: [
        "Xbox One Extra Controller",
        "Minecraft Survival Guide",
        "Expert Miner T-Shirt"
      ],
      images: [
        "xboxOne1.png",
        "xboxOne2.png",
        "xboxOne3.png"
      ],
      reviews: [
        {
          stars: 5,
          body: "A lovely product!",
          author: "Mr G Lucas"
        },
        {
          stars: 1,
          body: "Nope, not good :(",
          author: "David Milner"
        }
      ]
    },
    {
      name: "Playstation 4 Slim 500Gb with Resident Evil 7",
      price: 299.99,
      description: "Get ready for thrills and chills with this PS4 Slim Console bundle featuring Resident Evil VII Biohazard. The compact and sleek Slim console gives you an incredible entertainment experience featuring the latest High Dynamic Range (HDR) technology. Visuals are now more realistic, strikingly vivid and truer to what the human eye sees in the real world, creating an absorbing gaming experience suitable for all ages.",
      canPurchase: false,
      alsoPurchasedItems: [],
      images: [
        "ps41.jpg",
        "ps42.jpg",
        "ps43.jpg"
      ]
    },
    {
      name: "Black Wii U Premium with Mario Kart 8",
      price: 234.99,
      description: "Play games in new and exciting ways, starting with Mario Kart 8 included with this bundle. Play your games on the TV or on the Wii U Gamepad if others want to use the TV. Share your views with gamers around the world using the Nintendo MiiVerse. Mario, Donkey Kong, Link and other classic Nintendo Characters bring a strong line up of games for gamers of all ages.",
      canPurchase: true,
      alsoPurchasedItems: [
        "Mario Figures - Ultimate Collection",
        "Luigi Hat"
      ],
      images: [ ]
    }
  ];
})();
