export const MEASUREMENTS = {
  dry: ['oz', 'tsp', 'tbsp', 'cup', 'g', 'lb'] as const,
  liquid: ['fl oz', 'tsp', 'tbsp', 'ml', 'cu', 'pt', 'qt', 'l', 'gal'] as const,
  cookTime: ['sch', 'scl', 'ip', 'oven'] as const,
};

export const QUANTITIES = [...Array(101).keys()].splice(1);

export const CONVERSION_MAP: ConversionMap = {
  dry: {
    oz: {
      tbsp: 2,
      tsp: 6,
      cup: 0.125,
      g: 28,
      lb: 0.0625,
    },
    tsp: {
      tbsp: 0.33,
      oz: 0.17,
      cup: 0.0208,
      g: 4.2,
      lb: 0.0019,
    },
    tbsp: {
      tsp: 3,
      oz: 0.5,
      cup: 0.0625,
      g: 14.3,
      lb: 0.03125,
    },
    cup: {
      oz: 8,
      tbsp: 16,
      tsp: 48,
      g: 228,
      lb: 0.5,
    },
    g: {
      oz: 0.035,
      tbsp: 0.07,
      cup: 0.0044,
      tsp: 0.18,
      lb: 0.0022,
    },
    lb: {
      oz: 16,
      tbsp: 32,
      cup: 2,
      g: 454,
      tsp: 96,
    },
  },
};
