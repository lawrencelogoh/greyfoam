export type Option = {
  value: string
  label: string
}

export type OptionGroup = {
  name: string
  type: 'select' | 'swatch' | 'radio'
  options: Option[]
}

export type Product = {
  id: string
  name: string
  price: string
  image: string
  blurb: string
  optionGroups: OptionGroup[]
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Nimbus Foam Pillow',
    price: '$79',
    image: 'https://source.unsplash.com/random/600x600?sig=11&pillows',
    blurb: 'Ergonomic support with breathable cooling layers.',
    optionGroups: [
      {
        name: 'Size',
        type: 'radio',
        options: [
          { value: 'standard', label: 'Standard' },
          { value: 'king', label: 'King' },
        ],
      },
      {
        name: 'Firmness',
        type: 'radio',
        options: [
          { value: 'soft', label: 'Soft' },
          { value: 'medium', label: 'Medium' },
          { value: 'firm', label: 'Firm' },
        ],
      },
      {
        name: 'Cover Color',
        type: 'swatch',
        options: [
          { value: 'white', label: 'White' },
          { value: 'charcoal', label: 'Charcoal' },
          { value: 'sand', label: 'Sand' },
        ],
      },
    ],
  },
  {
    id: 'p2',
    name: 'Stratus Mattress Topper',
    price: '$149',
    image: 'https://source.unsplash.com/random/600x600?sig=12&bedroom',
    blurb: 'Plush comfort that refreshes any mattress.',
    optionGroups: [
      {
        name: 'Bed Size',
        type: 'select',
        options: [
          { value: 'twin', label: 'Twin' },
          { value: 'twin-xl', label: 'Twin XL' },
          { value: 'full', label: 'Full' },
          { value: 'queen', label: 'Queen' },
          { value: 'king', label: 'King' },
          { value: 'cal-king', label: 'Cal King' },
        ],
      },
      {
        name: 'Thickness',
        type: 'radio',
        options: [
          { value: '2in', label: '2"' },
          { value: '3in', label: '3"' },
        ],
      },
      {
        name: 'Feel',
        type: 'radio',
        options: [
          { value: 'plush', label: 'Plush' },
          { value: 'balanced', label: 'Balanced' },
          { value: 'supportive', label: 'Supportive' },
        ],
      },
    ],
  },
  {
    id: 'p3',
    name: 'Cumulus Platform Bed',
    price: '$899',
    image: 'https://source.unsplash.com/random/600x600?sig=103&bed,furniture',
    blurb: 'Minimal platform bed with configurable size, finish, and headboard.',
    optionGroups: [
      {
        name: 'Bed Size',
        type: 'select',
        options: [
          { value: 'twin', label: 'Twin' },
          { value: 'full', label: 'Full' },
          { value: 'queen', label: 'Queen' },
          { value: 'king', label: 'King' },
        ],
      },
      {
        name: 'Frame Material',
        type: 'radio',
        options: [
          { value: 'oak', label: 'Oak' },
          { value: 'walnut', label: 'Walnut' },
          { value: 'maple', label: 'Maple' },
        ],
      },
      {
        name: 'Finish',
        type: 'swatch',
        options: [
          { value: 'natural', label: 'Natural' },
          { value: 'espresso', label: 'Espresso' },
          { value: 'whitewash', label: 'Whitewash' },
        ],
      },
      {
        name: 'Headboard',
        type: 'radio',
        options: [
          { value: 'none', label: 'None' },
          { value: 'slat', label: 'Slat' },
          { value: 'panel', label: 'Panel' },
        ],
      },
    ],
  },
  {
    id: 'p4',
    name: 'Cumulus Sheet Set',
    price: '$129',
    image: 'https://source.unsplash.com/random/600x600?sig=14&sheets',
    blurb: 'Crisp, breathable weave with a silky touch.',
    optionGroups: [
      {
        name: 'Bed Size',
        type: 'select',
        options: [
          { value: 'twin', label: 'Twin' },
          { value: 'twin-xl', label: 'Twin XL' },
          { value: 'full', label: 'Full' },
          { value: 'queen', label: 'Queen' },
          { value: 'king', label: 'King' },
          { value: 'cal-king', label: 'Cal King' },
        ],
      },
      {
        name: 'Weave',
        type: 'radio',
        options: [
          { value: 'percale', label: 'Percale' },
          { value: 'sateen', label: 'Sateen' },
        ],
      },
      {
        name: 'Color',
        type: 'swatch',
        options: [
          { value: 'white', label: 'White' },
          { value: 'sky', label: 'Sky' },
          { value: 'graphite', label: 'Graphite' },
        ],
      },
    ],
  },
  {
    id: 'p5',
    name: 'Zephyr Duvet Insert',
    price: '$199',
    image: 'https://source.unsplash.com/random/600x600?sig=15&duvet',
    blurb: 'All-season loft with temperature balance.',
    optionGroups: [
      {
        name: 'Bed Size',
        type: 'select',
        options: [
          { value: 'twin', label: 'Twin' },
          { value: 'full-queen', label: 'Full/Queen' },
          { value: 'king-cal', label: 'King/Cal King' },
        ],
      },
      {
        name: 'Warmth',
        type: 'radio',
        options: [
          { value: 'light', label: 'Light' },
          { value: 'all-season', label: 'All-Season' },
          { value: 'ultra-warm', label: 'Ultra Warm' },
        ],
      },
      {
        name: 'Fill',
        type: 'select',
        options: [
          { value: 'down-alt', label: 'Down Alternative' },
          { value: 'merino', label: 'Merino Blend' },
        ],
      },
    ],
  },
  {
    id: 'p6',
    name: 'Stratus Storage Cabinet',
    price: '$749',
    image: 'https://source.unsplash.com/random/600x600?sig=106&cabinet,furniture',
    blurb: 'Modular cabinet with adjustable shelves and customizable fronts.',
    optionGroups: [
      {
        name: 'Width',
        type: 'select',
        options: [
          { value: '24', label: '24"' },
          { value: '36', label: '36"' },
          { value: '48', label: '48"' },
        ],
      },
      {
        name: 'Fronts',
        type: 'radio',
        options: [
          { value: 'doors', label: 'Doors' },
          { value: 'drawers', label: 'Drawers' },
          { value: 'mixed', label: 'Mixed' },
        ],
      },
      {
        name: 'Finish',
        type: 'swatch',
        options: [
          { value: 'oak', label: 'Oak' },
          { value: 'walnut', label: 'Walnut' },
          { value: 'graphite', label: 'Graphite' },
        ],
      },
      {
        name: 'Handle Style',
        type: 'radio',
        options: [
          { value: 'edge', label: 'Edge Pull' },
          { value: 'bar', label: 'Bar Pull' },
          { value: 'knob', label: 'Knob' },
        ],
      },
    ],
  },
]
