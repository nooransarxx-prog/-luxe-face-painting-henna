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
    butterfly: [],
    flower: [],
    hellokitty: [],

    /* ---- Superheroes ---- */
    spiderman: [],
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
