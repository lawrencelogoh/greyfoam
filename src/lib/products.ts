import { usePillowStore } from '@/stores/usePillowStore'

export type Option = {
  value: string
  label: string
}

export type OptionGroup = {
  name: string
  type: 'select' | 'swatch' | 'radio' | 'upload'
  options: Option[]
  
}

export type Product = {
  id: string
  name: string
  price: string
  image: string
  blurb: string
  optionGroups: OptionGroup[]
  onOptionSelect?: (groupName: string, optionValue: string) => void
  getSelectedValue?: (groupName: string) => string | undefined
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Nimbus Foam Pillow',
    price: '$79',
    image: '/images/nimbus-pillow.png',
    blurb: 'Ergonomic support with breathable cooling layers.',
    optionGroups: [
      {
        name: 'Material',
        type: 'radio',
        options: [
          { value: 'cotton', label: 'Cotton' },
          { value: 'silk', label: 'Silk' },
          { value: 'leather', label: 'Leather' },
	  { value: 'velvet', label: 'Velvet' },
        ],
      },
      {
	name: 'Cover Color',
	type: 'swatch',
	options: [
	  { value: '#FFFFFF', label: 'White' },
	  { value: '#2F2F2F', label: 'Charcoal' },
	  { value: '#C8B7A6', label: 'Taupe' },
	  { value: '#8B5E3C', label: 'Cocoa' },
	  { value: '#B4C6A6', label: 'Sage' },
	  { value: '#A7C7E7', label: 'Sky' },
	  { value: '#D8A39D', label: 'Blush' },
	  { value: '#8C9DAF', label: 'Steel Blue' },
	],
      },
      {
	name: 'Custom Pattern',
	type: 'upload',
	options: [],
	
      }
    ],
    
    
    onOptionSelect: (group, value) => {
      const { setColor, setMaterial } = usePillowStore.getState()
      if (group === 'Cover Color') setColor(value)
      if (group === 'Material') setMaterial(value)
    },
    getSelectedValue: (groupName) => {
      const { color, material } = usePillowStore.getState()
      if (groupName === 'Cover Color') return color
      if (groupName === 'Material') return material
      return undefined
    },
  },
  {
    id: 'p2',
    name: 'Stratus Mattress Topper',
    price: '$149',
    image: '/images/under-development.png',
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
    image: '/images/under-development.png',
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
    image: '/images/under-development.png',
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
    image: '/images/under-development.png',
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
    image: '/images/under-development.png',
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
