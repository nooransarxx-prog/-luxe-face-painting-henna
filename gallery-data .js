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
    batman: [
      { src: "images/batman-1.jpg", alt: "Batman face paint mask with orange and red cowl detail on forehead" },
      { src: "images/batman-2.jpg", alt: "Batman face paint with spotted orange cowl and grey bat emblem on forehead" },
      { src: "images/batman-3.jpg", alt: "Black and yellow Batman mask face paint on child at face painting booth" },
      { src: "images/batman-4.jpg", alt: "Batman bat symbol face paint in black and gold on cheek" }
    ],
    superman: [
      { src: "images/superman-1.jpg", alt: "Superman face paint mask in red and blue with gold shield emblem" },
      { src: "images/superman-2.jpg", alt: "Superman shield face paint design in blue and red on forehead" },
      { src: "images/superman-3.jpg", alt: "Superman logo face and body paint in red, yellow and blue" },
      { src: "images/superman-4.jpg", alt: "Superman shield face paint design in red and yellow on cheek" }
    ],
    avengers: [
      { src: "images/avengers-1.jpg", alt: "Captain America face paint mask in blue with white star emblem" },
      { src: "images/avengers-2.jpg", alt: "Red superhero mask face paint with lightning bolt emblem on forehead" },
      { src: "images/avengers-3.jpg", alt: "Hulk face paint in green with black spiky brow design" },
      { src: "images/avengers-4.jpg", alt: "Iron Man face paint mask in red and gold on forehead and cheek" }
    ],
    superheroesMixed: [
      { src: "images/superheroesMixed-1.jpg", alt: "Captain America shield face paint with white wings design across brow" },
      { src: "images/superheroesMixed-2.jpg", alt: "Green gadget emblem face paint design on cheek" },
      { src: "images/superheroesMixed-3.jpg", alt: "Black tribal superhero mask face paint design across brow and cheeks" },
      { src: "images/superheroesMixed-4.jpg", alt: "Skull and crossbones with straw hat face paint design on cheek" }
    ],

    /* ---- Halloween ---- */
    witch: [
      { src: "images/witch-1.jpg", alt: "Purple glitter spiderweb face paint across forehead and eyes" },
      { src: "images/witch-2.jpg", alt: "Pink and orange witch hat face paint with black stars on forehead" },
      { src: "images/witch-3.jpg", alt: "Black spiderweb and spider face paint with purple glitter eye detail" },
      { src: "images/witch-4.jpg", alt: "Green and purple swirl witch face paint around eyes and cheeks" }
    ],
    skull: [
      { src: "images/skull-1.jpg", alt: "Pixel-art style black and white skull face paint on cheek" },
      { src: "images/skull-2.jpg", alt: "Flaming skull face paint design on forehead" },
      { src: "images/skull-3.jpg", alt: "Black and white skeleton face paint covering full face" },
      { src: "images/skull-4.jpg", alt: "Cracked white skull face paint covering full face" }
    ],
    pumpkin: [
      { src: "images/pumpkin-1.jpg", alt: "Green vine and orange pumpkin face paint along forehead and cheek" },
      { src: "images/pumpkin-2.jpg", alt: "Jack-o-lantern pumpkin face paint with glitter vines on forehead" },
      { src: "images/pumpkin-3.jpg", alt: "Row of three glittery pumpkins face paint across forehead with white eyeliner" },
      { src: "images/pumpkin-4.jpg", alt: "Scarecrow stitched patch face paint with orange patchwork nose" }
    ],
    zombie: [
      { src: "images/zombie-1.jpg", alt: "Red and black claw scratch face paint across forehead and eye" },
      { src: "images/zombie-2.jpg", alt: "Green stitched Frankenstein face paint covering half the face" },
      { src: "images/zombie-3.jpg", alt: "Green and yellow zombie skull face paint with pink exposed brain design" },
      { src: "images/zombie-4.jpg", alt: "Red circular bite mark face paint on cheek" }
    ],
    halloweenMixed: [
      { src: "images/halloweenMixed-1.jpg", alt: "Creepy clown face paint with red teardrop brows and red smile" },
      { src: "images/halloweenMixed-2.jpg", alt: "Green scaled monster mask face paint with white fangs" },
      { src: "images/halloweenMixed-3.jpg", alt: "Vampire face paint with sharp black brows and dark smoky eyes" },
      { src: "images/halloweenMixed-4.jpg", alt: "Joker-style face paint with green brows, purple diamonds and HA HA text" }
    ],

    /* ---- Christmas ---- */
    santa: [
      { src: "images/santa-1.jpg", alt: "Santa hat face paint with snowflakes on cheek and temple" },
      { src: "images/santa-2.jpg", alt: "Santa hat face paint with gold glitter stars on forehead" },
      { src: "images/santa-3.jpg", alt: "Red and white Santa hat face paint with snowflake detail across forehead" },
      { src: "images/santa-4.jpg", alt: "Santa hat face paint with white sparkle dots on forehead and temple" }
    ],
    reindeer: [
      { src: "images/reindeer-1.jpg", alt: "Reindeer antler face paint with red nose and freckle dots" },
      { src: "images/reindeer-2.jpg", alt: "Cartoon reindeer face paint on temple with white snowflake swirls" },
      { src: "images/reindeer-3.jpg", alt: "Reindeer face face paint covering forehead with antlers and red nose" },
      { src: "images/reindeer-4.jpg", alt: "Reindeer red nose face paint with white freckle dots on cheeks" }
    ],
    snowman: [
      { src: "images/snowman-1.jpg", alt: "Three stacked snowmen face paint with top hat and Santa hat detail on cheek" },
      { src: "images/snowman-2.jpg", alt: "Snowman face design face paint covering forehead with carrot nose" },
      { src: "images/snowman-3.jpg", alt: "Snowman with top hat face paint on cheek with white snowflakes" },
      { src: "images/snowman-4.jpg", alt: "Snowman face paint on forehead with green scarf and white snowflakes" }
    ],
    festive: [
      { src: "images/festive-1.jpg", alt: "Candy cane and peppermint swirl face paint on forehead and cheek" },
      { src: "images/festive-2.jpg", alt: "Green clawed hand reaching for red bauble ornament face paint on forehead" },
      { src: "images/festive-3.jpg", alt: "Holly leaf and berry garland face paint across forehead with glitter" },
      { src: "images/festive-4.jpg", alt: "Glittery candy cane and peppermint face paint on temple with stars" }
    ],

    /* ---- Adult Designs ---- */
    adult: [
      { src: "images/adult-designs-1.jpeg", alt: "Collage of adult arm and neck face painting designs including floral vine, butterfly garden and mermaid-inspired art" },
      { src: "images/adult-designs-2.jpeg", alt: "Collage of elegant gold and floral chest face painting designs for adults" },
      { src: "images/adult-designs-3.jpeg", alt: "Collage of popular adult face painting designs for arm and neck including mermaid, butterfly and glitter rose art" },
      { src: "images/adult-designs-4.jpeg", alt: "Collage of elegant and bright adult arm face painting designs including butterfly and floral art" }
    ],

    /* ---- Henna Designs ---- */
    bridal: [
      { src: "images/bridal-1.jpg", alt: "Intricate bridal henna covering hands, arms and feet with mandala centrepieces" },
      { src: "images/bridal-2.jpg", alt: "Bridal henna on both forearms with geometric diamond and lattice patterns" },
      { src: "images/bridal-3.jpg", alt: "Bridal henna with floral mandala design covering palms and fingers" },
      { src: "images/bridal-4.jpg", alt: "Bridal henna on crossed arms with detailed floral mandala on hands" }
    ],
    arabic: [
      { src: "images/arabic-1.jpg", alt: "Arabic floral henna design with bold flowers flowing across back of hand" },
      { src: "images/arabic-2.jpg", alt: "Bold Arabic henna with large floral swirls covering back of hand and fingers" },
      { src: "images/arabic-3.jpg", alt: "Arabic rose vine henna design flowing along both forearms and hands" },
      { src: "images/arabic-4.jpg", alt: "Arabic rose and vine henna design covering both hands and forearms" }
    ],
    mughal: [
      { src: "images/mughal-1.jpg", alt: "Mughal-style henna with arched floral panels covering both forearms and hands" },
      { src: "images/mughal-2.jpg", alt: "Dense Mughal henna pattern with shaded panels covering both hands and fingers" },
      { src: "images/mughal-3.jpg", alt: "Mughal henna with crown motif and arched floral panel on hand" },
      { src: "images/mughal-4.jpg", alt: "Mughal-style scalloped mandala henna design covering back of hand" }
    ],
    minimal: [
      { src: "images/minimal-1.jpg", alt: "White henna mandala design on back of hand with finger detailing" },
      { src: "images/minimal-2.jpg", alt: "Delicate rose and vine henna chain design across back of hand and fingers" },
      { src: "images/minimal-3.jpg", alt: "Scattered minimal floral henna dots on back of hand with fingertip detail" },
      { src: "images/minimal-4.jpg", alt: "White lace-style henna design on fingers with floral fingertip detail" }
    ],
  }
};
