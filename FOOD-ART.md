# Food art revision — 2026-10-04

Created with the built-in image_gen tool. Original illustrated food, not extracted game assets.

Files:
- assets/meals-atlas.png — eight plated dishes.
- assets/ingredients-atlas.png — whole vegetables and their cut/peeled states.
- assets/cooking-atlas.png — raw and cooked egg, pancake, fish, plus curry and tomato sauce.
- assets/details-atlas.png — rice, parsley, cream, pumpkin soup, sushi, sponge cake, flour, eggs.

Each atlas uses four columns and two rows. food-art.js loads all atlases and draws normalized source cells directly into the live game; thumbnails are rebuilt from the same artwork.

## Prompt set
Shared direction: ONE production food sprite atlas, exactly 4 columns by 2 rows of equally sized cells, wide 2:1 image. Transparent background, no text or grid. Isolated subjects, consistent overhead / three-quarter view, generous empty margins within each cell. Original Japanese handheld cooking simulation game aesthetic: appetizing semi-realistic hand-painted raster sprites, fine contours, cel-shaded depth, natural saturated color, detailed food texture and glossy highlights. Not flat vector icons, emoji, photography or clay toys. No characters or surrounding scenery.

Meals, ordered left-to-right / top-to-bottom: golden Japanese omurice with ketchup, visible rice and parsley; fluffy browned pancakes with butter, honey and strawberries; beef curry with potato/carrot/beef chunks and white rice; spaghetti with chunky tomato sauce and basil; seared fish fillets with lemon and parsley; pumpkin soup with cream swirl; salmon/cucumber nori sushi; strawberry shortcake with sponge and cream layers. All on white plates or bowl.

Ingredients: horizontal whole carrot pointing left with stalks right; horizontal whole potato with thin earthy skin and eyes; glossy whole tomato with green calyx; pumpkin wedge with dark green rind; carrot cross-section slice; peeled potato matching whole silhouette; cut tomato half with seeds; strawberry with visible seeds. No boards, knives or dishes.

Cooking: overhead uncooked beaten egg puddle; matching cooked golden omelette sheet; uncooked pancake batter; matching toasted pancake; horizontal raw fish fillet with visible grain; matching golden seared fish fillet; chunky curry; chunky tomato sauce. Food only, no pan or plate.

Details: moist cooked white rice mound with interlocking grains; textured curly parsley sprig; whipped cream rosette; thick golden pumpkin soup pool; one detailed salmon-cucumber nori roll; square sponge cake with cream top; powdery flour mound; two glossy yolks in egg white. Food only, no dishes.

## In-game changes
Cutting shows whole ingredient and separate detailed slices, with a knife and wood-grain board. Peeling reveals a peeled potato. Mixing uses recipe-appropriate rice, egg, flour or sauce. Pouring changes ingredient and liquid color by recipe. Cooking blends raw/cooked sprite states with heat progress and adds bubbles, steam and overcooking color. Curry/pasta/soup use pot and stirring prompts. Shape and garnish pieces use the new rice, cake, strawberry and parsley sprites.
