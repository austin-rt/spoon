type DryMeasurement = 'oz' | 'tsp' | 'tbsp' | 'cup' | 'g' | 'lb';
type LiquidMeasurement =
  | 'fl oz'
  | 'tsp'
  | 'tbsp'
  | 'ml'
  | 'cu'
  | 'pt'
  | 'qt'
  | 'l'
  | 'gal';
type CookTime = 'sch' | 'scl' | 'ip' | 'oven';

type DryConversionMap = {
  [Key in DryMeasurement]: {
    [InnerKey in Exclude<DryMeasurement, Key>]: number;
  };
};

interface ConversionMap {
  dry: DryConversionMap;
}
