// Bacino's Italian Grill — 2026 menu data.
// Transcribed verbatim from the print menu (Grill Menu 2026). Dish photos were
// extracted from the same PDF; see scripts/extract_assets.py.
//
// Category `layout` controls rendering:
//   'cards' — photo cards (food)
//   'list'  — name / description / price rows (simple drinks)
//   'beer'  — name + size/ABV + price rows
//   'wine'  — grouped wine table (glass / bottle)

const app = (slug) => `/img/dishes/appetizers/${slug}.jpg`
const sal = (slug) => `/img/dishes/salads/${slug}.jpg`
const san = (slug) => `/img/dishes/sandwiches/${slug}.jpg`
const piz = (slug) => `/img/dishes/pizze/${slug}.jpg`

export const FOOD = [
  {
    id: 'appetizers',
    navImage: '/img/dishes/appetizers/housemade-meatballs.jpg',
    name: 'Appetizers',
    emoji: '🧆',
    layout: 'cards',
    items: [
      { name: 'Homemade Chips', price: '5.50', desc: 'Thinly sliced, crispy housemade potato chips, lightly seasoned', img: app('homemade-chips') },
      {
        name: 'Housemade Meatballs',
        price: '11.75',
        desc: 'Housemade meatballs, smoked mozzarella, marinara, served with garlic toast points',
        img: app('housemade-meatballs'),
      },
      {
        name: 'Classic Bruschetta',
        price: '8.75',
        desc: 'Roma tomatoes, garlic, fresh basil, extra virgin olive oil, served with garlic toast points',
        img: app('classic-bruschetta'),
      },
      {
        name: 'French Fries',
        price: '5.50',
        desc: 'Choose 2 dipping sauces: chipotle mayo, parmesan mayo, sriracha mayo, spicy ketchup or BBQ sauce',
        img: app('french-fries'),
      },
      {
        name: 'Chicken Wings',
        price: '15.25',
        desc: 'Hot or BBQ with blue cheese or ranch dressing',
        img: app('chicken-wings'),
      },
      {
        name: 'Chicken Tenders with Fries',
        price: '12.55',
        img: app('chicken-tenders'),
      },
      {
        name: 'Mini Cheese Burgers',
        price: '16.25',
        desc: 'Three mini burgers topped with cheddar cheese, mixed greens, tomato, pickle, red onion and sriracha mayo',
        img: san('bacinos-cheese-burger'),
      },
      {
        name: 'Housemade Guacamole & Pico de Gallo',
        price: 'Market',
        desc: 'Served with tortilla chips',
        img: app('guacamole-pico'),
      },
    ],
  },
  {
    id: 'salads',
    navImage: '/img/dishes/salads/caprese-salad.jpg',
    name: 'Salads',
    emoji: '🥗',
    layout: 'cards',
    items: [
      {
        name: 'Caprese Salad',
        price: '11.00',
        desc: 'Fresh mozzarella, tomato, basil and balsamic reduction',
        img: sal('caprese-salad'),
      },
      {
        name: 'Caesar Salad',
        price: '13.50',
        desc: 'Crisp Romaine lettuce with homemade Caesar dressing and house-made croutons. Add grilled chicken 3.50',
        img: sal('caesar-salad'),
      },
      {
        name: 'Chopped Salad',
        price: '14.75',
        desc: 'Romaine, radicchio, tomatoes, pancetta, green onions, tube pasta, gorgonzola and sweet Italian vinaigrette. Add grilled chicken 3.50',
        img: sal('chopped-salad'),
      },
      {
        name: 'House Garden Salad',
        price: '11.00',
        desc: 'Field greens, red onions, tomatoes, cucumbers, carrots and balsamic vinaigrette. Add grilled chicken 3.50',
        img: sal('house-garden-salad'),
      },
      {
        name: 'Housemade Chicken Salad',
        price: '12.50',
        desc: 'Grilled chicken breast served with toast points and tomatoes',
        img: sal('housemade-chicken-salad'),
      },
    ],
  },
  {
    id: 'sandwiches',
    navImage: '/img/dishes/sandwiches/bacinos-cheese-burger.jpg',
    name: 'Paninis & Sandwiches',
    emoji: '🥪',
    layout: 'cards',
    items: [
      {
        name: 'Housemade Chicken Salad Sandwich',
        price: '13.50',
        desc: 'Served with toast, lettuce and tomatoes',
        img: san('chicken-salad-sandwich'),
      },
      {
        name: 'Italian Sub',
        price: '13.50',
        desc: 'Lettuce, tomato, provolone, pepperoni, sopressata, with a sweet Italian dressing',
        img: san('italian-sub'),
      },
      {
        name: 'Grilled Chicken Panini',
        price: '13.50',
        desc: 'Grilled chicken breast topped with fresh mozzarella, sautéed mushrooms, lettuce, tomatoes, caramelized onions and Parmesan mayo',
        img: san('grilled-chicken-panini'),
      },
      {
        name: 'Manzo Panini',
        price: '15.75',
        desc: 'Grilled steak topped with fresh mozzarella, roasted red peppers, sautéed mushrooms, red wine caramelized onions, Parmesan mayo, and lettuce',
        img: san('manzo-panini'),
      },
      {
        name: 'Spicy Chicken Panini',
        price: '14.99',
        desc: 'Spicy grilled chicken with lettuce, tomato and ranch dressing on ciabatta bread',
        img: san('spicy-chicken-panini'),
      },
      {
        name: 'Meatball Sub',
        price: '14.99',
        desc: 'Three housemade meatballs topped with mozzarella and marinara',
        img: san('meatball-sub'),
      },
      {
        name: 'Italian Beef',
        price: '14.50',
        desc: 'Topped with mozzarella cheese and giardiniera',
        img: san('italian-beef'),
      },
      {
        name: "Bacino's Cheese Burger",
        price: '15.99',
        desc: 'Topped with cheddar cheese, mixed greens, tomato, pickles and Parmesan mayo',
        img: san('bacinos-cheese-burger'),
      },
      {
        name: 'Stuffed Portabella Burger',
        price: '13.99',
        desc: 'Portabella mushroom grilled stuffed with mozzarella, topped with arugula, roasted red peppers, and herbed aioli',
        img: san('stuffed-portabella-burger'),
      },
      {
        name: 'Classic Jumbo Chicago Dog',
        price: '11.65',
        desc: 'Jumbo sized hot dog, relish, tomato, pickle spear and onions',
        img: san('chicago-dog'),
      },
      {
        name: 'The Wisconsin Brat',
        price: '13.50',
        desc: 'Grilled onions',
        img: san('wisconsin-brat'),
      },
    ],
  },
  {
    id: 'pizze',
    navImage: '/img/dishes/pizze/margherita-pizza.jpg',
    name: 'Pizza',
    emoji: '🍕',
    layout: 'cards',
    items: [
      {
        name: 'Margherita Napoletana',
        price: '14.75',
        desc: 'San Marzano tomato sauce, fresh mozzarella and fresh basil',
        img: piz('margherita-pizza'),
      },
      {
        name: 'Cheese Pizza',
        price: '13.75',
        desc: 'San Marzano tomato and mozzarella cheese. Add sausage or pepperoni 3.25 · Gluten-free available +3.00',
        img: piz('calabrese-pizza'),
      },
      {
        name: 'Prosciutto & Arugula',
        price: '16.75',
        desc: 'San Marzano tomato sauce, prosciutto di Parma, baby arugula and fresh mozzarella',
        img: piz('prosciutto-arugula-pizza'),
      },
      {
        name: 'Sausage & Mushroom',
        price: '15.75',
        desc: 'San Marzano tomato sauce, italian sausage, fresh mushrooms and mozzarella cheese',
        img: piz('sausage-mushroom-pizza'),
      },
      {
        name: 'Calabrese',
        price: '15.75',
        desc: 'Hot salami, tomatoes, mozzarella, and basil',
        img: piz('calabrese-pizza'),
      },
      {
        name: 'Seasonal Pickle Pizza',
        price: '14.50',
        desc: 'EVO olive oil, mozzarella, pickle slices, red onion, and fresh dill',
        img: piz('seasonal-pickle-pizza'),
      },
    ],
  },
  {
    id: 'sweets',
    navImage: null,
    name: 'Sweets',
    emoji: '🍨',
    layout: 'list',
    items: [
      { name: 'Root Beer Floats', price: '5.25' },
      {
        name: "Angelo's Gelato",
        price: '4.25',
        desc: 'Chocolate, vanilla, strawberry or lemon sorbet · per serving',
      },
      {
        name: 'Soft Serve Ice Cream',
        price: '5.25',
        desc: 'Made by local farmer · vanilla or chocolate',
      },
    ],
  },
]

export const DRINKS = [
  {
    id: 'beverages',
    navImage: null,
    name: 'Beverages',
    emoji: '🥤',
    layout: 'list',
    items: [
      { name: 'Fountain Beverages / Powerade', desc: 'Coke products · free refills', price: '3.00 / 3.50' },
      { name: 'Red Bull or Monster', price: '4.00' },
      { name: 'Smart Water', price: '4.00' },
      { name: 'Bottled Iced Tea', desc: 'Green tea / peach', price: '3.00' },
      { name: 'Vita Coco Water', price: '4.00' },
      { name: 'Juice', desc: 'Orange / apple', price: '2.50' },
      { name: 'Gatorade', desc: 'Fruit punch · lemon-lime · cool blue', price: '3.00' },
      { name: 'Vitamin Water', desc: 'Kiwi strawberry · lemonade · blueberry pomegranate', price: '3.00' },
      { name: 'Bottled Soda', price: '2.75' },
      { name: 'Coffee', desc: 'Hot or cold', price: '3.50' },
      { name: 'Espresso', desc: 'Single / double', price: '2.50 / 4.00' },
      { name: 'Fresh Brewed Iced Tea', desc: 'Small / large', price: '3.00 / 3.50' },
      { name: 'Jarritos Mineral Water', price: '3.00' },
      { name: 'San Pellegrino / LaCroix', desc: 'Sparkling water', price: '3.00' },
    ],
  },
  {
    id: 'draft-beer',
    navImage: null,
    name: 'Draft Beer',
    emoji: '🍺',
    note: '16 oz pours',
    layout: 'list',
    items: [
      { name: "Bacino's Lager Maplewood", price: '7.50' },
      { name: 'New Belgium Voodoo Ranger Juicy Haze IPA', price: '8.50' },
      { name: 'Lagunitas IPA', price: '8.50' },
      { name: "Bell's Oberon", price: '7.50' },
      { name: 'Sierra Nevada Premium Pils', price: '7.50' },
      { name: 'Yuengling Amber Lager', price: '7.50' },
      { name: 'Right Bee Cider', price: '8.50' },
      { name: 'Twisted Tea', price: '8.50' },
    ],
  },
  {
    id: 'cocktails',
    navImage: '/img/cat/cocktails.jpg',
    name: 'Cocktails',
    emoji: '🍹',
    layout: 'list',
    items: [
      { name: "House-made Margarita di Bacino's", price: '13.00' },
      {
        name: "Kure's Craft Vodka Soda",
        desc: 'Strawberry lemonade · Colorado mule · Dirty Shirley · orange cream pop',
        price: '10.00',
      },
      {
        name: 'Stateside Surfside',
        desc: 'Lemonade vodka · strawberry lemonade vodka · peach tea vodka · black cherry vodka soda',
        price: '9.00',
      },
      {
        name: 'Tip Top Proper Cocktails',
        desc: 'Margarita · espresso martini · bees knees · old fashioned',
        price: '10.00',
      },
      { name: 'Super Lyte', desc: 'Lemon-lime / blue chill', price: '9.00' },
      { name: "Dillon's Gin Blackberry Lemon Elderflower", price: '9.00' },
    ],
  },
  {
    id: 'can-beer',
    navImage: '/img/cat/can-beer.jpg',
    name: 'Can Beer',
    emoji: '🥫',
    layout: 'beer',
    items: [
      { name: 'Lagunitas Little Sumpin Sumpin IPA', size: '19 oz', abv: '7.5%', price: '9.50' },
      { name: 'Sierra Nevada Hazy Little Thing IPA', size: '19 oz', abv: '6.7%', price: '9.50' },
      { name: 'Lagunitas Daytime IPA', size: '12 oz', abv: '4%', price: '7.00' },
      { name: 'Three Floyds Zombie Dust American Pale Ale', size: '19 oz', abv: '6.2%', price: '9.50' },
      { name: 'Maplewood Son of Juice IPA', size: '16 oz', abv: '6.3%', price: '7.50' },
      { name: 'Allagash White Belgian Wheat', size: '16 oz', abv: '5.2%', price: '8.50' },
      { name: 'Three Floyds Gumballhead Wheat Pale Ale', size: '16 oz', abv: '5.6%', price: '8.50' },
      { name: 'Half Acre Daisy Cutter Pale Ale', size: '16 oz', abv: '5.2%', price: '8.50' },
      { name: 'Brooklyn Brewery Summer Ale Sunny Pale Ale', size: '12 oz', abv: '5.2%', price: '7.00' },
      { name: 'Montucky Cold Snack Lager', size: '16 oz', abv: '4.1%', price: '7.00' },
      { name: 'Lost Coast Tangerine Wheat Ale', size: '12 oz', abv: '5.2%', price: '7.00' },
      { name: 'Krombacher Pilsner', size: '16 oz', abv: '4.8%', price: '7.50' },
      { name: 'Three Floyds Deluxe Lager', size: '16 oz', abv: '4.5%', price: '7.50' },
      { name: 'Paulaner Grapefruit Radler', size: '16 oz', abv: '2.0%', price: '8.00' },
      { name: 'Sierra Nevada Trail Pass Non-Alcoholic IPA', size: '12 oz', abv: '<.5%', price: '7.00' },
      { name: 'Lagunitas Hoppy Refresher', size: '12 oz', abv: '0%', price: '7.00' },
      { name: 'Krombacher Non-Alcoholic Pilsner', size: '16 oz', abv: '0.0%', price: '7.50' },
      { name: "Bell's Oberon Light Citrus Wheat", size: '12 oz', abv: '4%', price: '7.35' },
      { name: 'Garage Beer Lager', size: '16 oz', abv: '4%', price: '8.00' },
    ],
  },
  {
    id: 'wine',
    navImage: '/img/cat/wine.jpg',
    name: 'Wine',
    emoji: '🍷',
    layout: 'wine',
    groups: [
      {
        label: 'Bianco / Rosé',
        items: [
          { name: 'Sauvignon Blanc', producer: 'Aquamarine', region: 'Marlborough, NZ', year: '2024', glass: '12', bottle: '44' },
          { name: 'Pinot Grigio', producer: 'Vignetti', region: 'Friuli, IT', year: '2023', glass: '10.50', bottle: '42' },
          { name: 'Chardonnay', producer: 'Pavette', region: 'Santa Rosa, CA', year: '2024', glass: '11.50', bottle: '46' },
          { name: 'Rosé', producer: "La P'tite Pierre", region: 'Une histoire de, FR', year: '2024', glass: '11.50', bottle: '46' },
          { name: 'Prosecco', producer: 'Vinicola Zonin', region: 'Veneto, IT', year: 'NV', glass: '12 (187ml)', bottle: '' },
          { name: 'Grillo', producer: 'Marino Abate "Ariddu"', region: 'Sicilia, IT', year: '2023', glass: '', bottle: '35' },
          { name: 'Sauvignon', producer: 'Venica & Venica "Ronco del Cero"', region: 'Friuli, IT', year: '2021', glass: '', bottle: '49' },
          { name: 'Moscato', producer: 'Stemmari', region: 'Sicilia, IT', year: '2023', glass: '', bottle: '33' },
          { name: 'White Wine', producer: 'Skouras Salto Moscofilero', region: 'Argos, Greece', year: '2023', glass: '', bottle: '48' },
          { name: 'Greco', producer: 'Feudi di San Gregorio', region: 'Campania, IT', year: '2021', glass: '', bottle: '48' },
          { name: 'Dry White Wine', producer: 'Taminika Yellow Flower', region: 'Oranje, Serbia', year: '2022', glass: '', bottle: '50' },
        ],
      },
      {
        label: 'Rosso',
        items: [
          { name: 'Pinot Noir', producer: 'Pavett', region: 'Santa Rosa, CA', year: '2024', glass: '11.50', bottle: '46' },
          { name: 'Chianti', producer: 'Badia al Colle', region: 'Tuscany, IT', year: '2023', glass: '11', bottle: '44' },
          { name: 'Cabernet Sauvignon', producer: 'Pavette', region: 'Santa Rosa, CA', year: '2023', glass: '12', bottle: '48' },
          { name: 'Red Blend', producer: 'Allegrini "Palazzo della Torre"', region: 'Veneto, IT', year: '2019', glass: '', bottle: '43' },
          { name: 'Pinot Noir', producer: 'Dueric', region: 'Fruska Gora, Serbia', year: '2021', glass: '', bottle: '46' },
          { name: "Nero d'Avola", producer: 'Stemmari', region: 'Sicilia, IT', year: '2021', glass: '', bottle: '35' },
          { name: 'Pinot Noir', producer: 'Ken Wright Cellars', region: 'Willamette Valley, OR', year: '2022', glass: '', bottle: '58' },
          { name: 'Rosso', producer: 'Casanova di Neri', region: "Sant'Antimo, IT", year: '2023', glass: '', bottle: '47' },
        ],
      },
    ],
  },
]

export const LOCATIONS = [
  {
    name: "Bacino's Italian Grill",
    address: '248 W Diversey Parkway, Chicago, IL 60657',
    phone: '773-880-9633',
    tel: '+17738809633',
  },
  {
    name: "Bacino's of Lincoln Park",
    address: '2204 N Lincoln Ave, Chicago, IL 60606',
    phone: '773-472-7400',
    tel: '+17734727400',
  },
]

export const HOURS = 'Open daily 11:00 am – 9:00 pm'
export const TAGLINE = 'Big fun in the park'
export const ADVISORY =
  'Consuming raw or undercooked meats, poultry, eggs, or seafood may increase your risk of foodborne illness. Family owned since 1976 — fresh, local and organic when possible.'
