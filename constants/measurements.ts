export const MEASUREMENTS = {
  dry: [
    { name: 'ounce', abbr: 'oz' },
    { name: 'tablespoon', abbr: 'tbsp' },
    { name: 'cup', abbr: 'cu' },
    { name: 'gram', abbr: 'g' },
    { name: 'pound', abbr: 'lb' },
  ],
  liquid: [
    { name: 'fluid ounce', abbr: 'fl oz' },
    { name: 'teaspoon', abbr: 'tsp' },
    { name: 'tablespoon', abbr: 'tbsp' },
    { name: 'milliliter', abbr: 'ml' },
    { name: 'cup', abbr: 'cu' },
    { name: 'pint', abbr: 'pt' },
    { name: 'quart', abbr: 'qt' },
    { name: 'liter', abbr: 'l' },
    { name: 'gallon', abbr: 'gal' },
  ],
  cookTime: [
    { name: 'slow cooker high', abbr: 'sch' },
    { name: 'slow cooker low', abbr: 'scl' },
    { name: 'instant pot high pressure', abbr: 'ip' },
    { name: 'oven', abbr: 'oven' },
  ],
};

export const CONVERSIONS = {
  dry: {
    oz: {
      tbsp: 2,
      tsp: 6,
      cup: 0.125,
      g: 28,
      lb: 0.0625,
    },
    tbsp: {
      tsp: 3,
      oz: 0.5,
      cu: 0.0625,
      g: 14.3,
      lb: 0.03125,
    },
    cu: {
      oz: 8,
      tbsp: 16,
      tsp: 48,
      g: 228,
      lb: 0.5,
    },
    g: {
      oz: 0.035,
      tbsp: 0.07,
      cu: 0.0044,
      tsp: 0.18,
      lb: 0.0022,
    },
    lb: {
      oz: 16,
      tbsp: 32,
      cu: 2,
      g: 454,
      tsp: 96,
    },
  },
};
