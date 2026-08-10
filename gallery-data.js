/* =====================================================================
   GALLERY PHOTOS — edit this file only, never the HTML.

   HOW TO ADD A REAL PHOTO:
   1. Drop the image file into the /images folder.
   2. Add a line to the matching category below, e.g.:
        { src: "images/butterfly-1.jpg", alt: "Butterfly face paint on cheek" }
   3. Save. The website picks it up automatically — no other changes needed.

   Any category with fewer than TARGET_PER_CATEGORY photos will
   automatically show "Photo coming soon" tiles to fill the rest.
   ===================================================================== */

window.GALLERY_DATA = {
  targetPerCategory: 4,

  categories: {
    /* ---- Kids Themes ---- */
    unicorn: [
      { src: "images/unicorn-1.jpg", alt: "Unicorn face paint design with jewelled horn and rainbow mane" },
      { src: "images/unicorn-2.jpg", alt: "Colourful unicorn face paint with rainbow horn and gem detail" },
      { src: "images/unicorn-3.jpg", alt: "Unicorn face paint with striped horn and pink flower gem" },
      { src: "images/unicorn-4.jpg", alt: "Purple and gold unicorn face paint design on cheek and temple" }
    ],
    butterfly: [
      { src: "images/butterfly-1.jpg", alt: "Pink and purple butterfly face paint on child with heart details" },
      { src: "images/butterfly-2.jpg", alt: "Rainbow butterfly face paint with jewel gem detail between the eyes" },
      { src: "images/butterfly-3.jpg", alt: "Close-up rainbow butterfly face paint with pearl and crystal gems" },
      { src: "images/butterfly-4.jpg", alt: "Gold butterfly face paint with floral crown design on forehead" }
    ],
    flower: [
      { src: "images/flower-1.jpg", alt: "Blue gem and feather flower crown face paint design on forehead" },
      { src: "images/flower-2.jpg", alt: "Gold and blue floral vine face paint with jewel detail on forehead" },
      { src: "images/flower-3.jpg", alt: "Colourful floral face paint design along temple and cheek" },
      { src: "images/flower-4.jpg", alt: "Delicate purple and white flower face paint along temple" }
    ],
    hellokitty: [
      { src: "images/hellokitty-1.jpg", alt: "Hello Kitty face paint with red bow and whiskers covering full face" },
      { src: "images/hellokitty-2.jpg", alt: "Hello Kitty face paint with pink bow, hearts and stars on temple" },
      { src: "images/hellokitty-3.jpg", alt: "Sparkly Hello Kitty face paint with glitter hearts on temple" },
      { src: "images/hellokitty-4.jpg", alt: "Hello Kitty face paint with red bow and whiskers on child" }
    ],

    /* ---- Superheroes ---- */
    spiderman: [
      { src: "images/spiderman-1.jpg", alt: "Red and black Spiderman mask face paint with spider on nose" },
      { src: "images/spiderman-2.jpg", alt: "Red and black Spiderman web face paint on side profile" },
      { src: "images/spiderman-3.jpg", alt: "Black spider and web face paint design on cheek and temple" },
      { src: "images/spiderman-4.jpg", alt: "Red Spiderman web face paint on forehead and temple" }
    ],
    batman: [],
    superman: [],
    avengers: [],
    superheroesMixed: [],

    /* ---- Halloween ---- */
    witch: [],
    skull: [],
    pumpkin: [],
    zombie: [],
    halloweenMixed: [],

    /* ---- Christmas ---- */
    santa: [],
    reindeer: [],
    snowman: [],
    festive: [],

    /* ---- Henna Designs ---- */
    bridal: [],
    arabic: [],
    mughal: [],
    minimal: []
  }
};
