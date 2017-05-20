// TODO: Tires
// TODO: Bulk pickup
const sharedItems = [
  // Paper
  {name: 'office paper', category: 'paper'},
  {name: 'magazines', category: 'paper'},
  {name: 'junk mail', category: 'paper'},
  {name: 'newspaper', category: 'paper'},
  {name: 'computer paper', category: 'paper'},
  {name: 'notebook paper', category: 'paper'},
  {name: 'phone books', category: 'paper'},
  {name: 'paperback books', category: 'paper'},
  {name: 'construction paper', category: 'paper'},
  {name: 'brown paper bags', category: 'paper'},
  {name: 'milk or juice cartons', category: 'paper'},
  {name: 'broken down cardboard boxes', category: 'paper'},
  {name: 'clean food boxes', category: 'paper'},

  // Plastic
  {name: 'drink bottles', category: 'plastic'},
  {name: 'detergent bottles', category: 'plastic'},
  {name: 'cleaner bottles', category: 'plastic'},
  {name: 'bottle caps', category: 'plastic'},
  {name: 'clean dairy tubs', category: 'plastic'},
  {name: 'container lids', category: 'plastic'},
  {name: 'plastic trays', category: 'plastic'},
  {name: 'plastic bags', category: 'plastic',  dont: true},
  {name: 'trash bags', category: 'plastic', dont: true},

  // Metal
  {name: 'empty food and drink cans', category: 'metal'},
  {name: 'empty aerosol cans', category: 'metal'},
  {name: 'foils', category: 'metal'},
  {name: 'metal trays', category: 'metal'},
  {name: 'glass bottles', category: 'glass'},
  {name: 'glass jars', category: 'glass'},

  // Hazardous
  {name: 'adhesives', category: 'hazardous'},
  {name: 'antifreeze', category: 'hazardous'},
  {name: 'bleach', category: 'hazardous'},
  {name: 'brake fluid', category: 'hazardous'},
  {name: 'car wax', category: 'hazardous'},
  {name: 'car cleaners', category: 'hazardous'},
  {name: 'caulk', category: 'hazardous'},
  {name: 'cfl bulbs', category: 'hazardous'},
  {name: 'cfl tubes', category: 'hazardous'},
  {name: 'cooking grease', category: 'hazardous'},
  {name: 'cooking oil', category: 'hazardous'},
  {name: 'detergent', category: 'hazardous'},
  {name: 'drain opener', category: 'hazardous'},
  {name: 'flea collars', category: 'hazardous'},
  {name: 'fluorescent tubes', category: 'hazardous'},
  {name: 'compact fluorescent light bulbs', category: 'hazardous'},
  {name: 'gasoline', category: 'hazardous'},
  {name: 'household batteries', category: 'hazardous'},
  {name: 'household cleaners', category: 'hazardous'},
  {name: 'insect repellent', category: 'hazardous'},
  {name: 'insecticide', category: 'hazardous'},
  {name: 'lead-acid batteries', category: 'hazardous'},
  {name: 'lighter fluid', category: 'hazardous'},
  {name: 'mothballs', category: 'hazardous'},
  {name: 'motor oil', category: 'hazardous'},
  {name: 'oil based paint', category: 'hazardous'},
  {name: 'oven cleaner', category: 'hazardous'},
  {name: 'pesticides', category: 'hazardous'},
  {name: 'pet spray and dip', category: 'hazardous'},
  {name: 'pool chemicals', category: 'hazardous'},
  {name: 'rat and mouse poison', category: 'hazardous'},
  {name: 'shoe polish', category: 'hazardous'},
  {name: 'spot remover', category: 'hazardous'},
  {name: 'stain', category: 'hazardous'},
  {name: 'toilet bowl cleaner', category: 'hazardous'},
  {name: 'transmission fluid', category: 'hazardous'},
  {name: 'tub and tile cleaner', category: 'hazardous'},
  {name: 'varnish', category: 'hazardous'},
  {name: 'weed killer', category: 'hazardous'},
  {name: 'windshield wiper fluid', category: 'hazardous'},
  {name: 'ammunition', category: 'hazardous', dont:  true},
  {name: 'explosives', category: 'hazardous', dont:  true},
  {name: 'latex and/or acrylic paint', category: 'hazardous', dont:  true},
  {name: 'water based stains and paint thinners', category: 'hazardous', dont:  true},
  {name: 'medical waste', category: 'hazardous', dont:  true},

  // yard
  {name: 'grass', category: 'yard'},
  {name: 'leaves', category: 'yard'},
  {name: 'brush', category: 'yard'},
  {name: 'tree limbs', category: 'yard'},
  {name: 'biodegradable paper bags', category: 'yard'},
  {name: 'stumps with root balls', category: 'yard', dont:  true},

  // Compost
  {name: 'fruit scraps', category: 'compost'},
  {name: 'vegetable scraps', category: 'compost'},
  {name: 'coffee grounds', category: 'compost'},
  {name: 'coffee filter', category: 'compost'},
  {name: 'tea bags', category: 'compost'},
  {name: 'loose tea', category: 'compost'},
  {name: 'grass clippings', category: 'compost'},
  {name: 'shrubbery clippings', category: 'compost'},
  {name: 'old or dead plants', category: 'compost'},
  {name: 'plant clippings', category: 'compost'},
  {name: 'weeds', category: 'compost'},
  {name: 'leaves, wet or dry', category: 'compost'},
  {name: 'small sticks', category: 'compost'},
  {name: 'newspaper and other paper', category: 'compost'},
  {name: 'straw and hay', category: 'compost'},
  {name: 'wood chips', category: 'compost'},
  {name: 'meat scraps', category: 'compost', dont: true},
  {name: 'fish scraps', category: 'compost', dont: true},
  {name: 'bones', category: 'compost', dont: true},
  {name: 'fat (solid or liquid)', category: 'compost', dont: true},
  {name: 'diseased plants', category: 'compost', dont: true},
  {name: 'herbicides or pesticides', category: 'compost', dont: true},
  {name: 'bermuda grass - it will grow in the compost!', category: 'compost', dont: true},
  {name: 'weeds that are persistent problems in your garden', category: 'compost', dont: true},
  {name: 'weeds with seeds', category: 'compost', dont: true},
  {name: 'pet feces or pet bedding', category: 'compost', dont: true},

  // Pharmaceuticals
  {name: 'prescriptions', category: 'pharmaceuticals'},
  {name: 'over the counter medications', category: 'pharmaceuticals'},
  {name: 'pet medications', category: 'pharmaceuticals'},
  {name: 'medicated ointment, lotions or drops', category: 'pharmaceuticals'},
  {name: 'liquid medications', category: 'pharmaceuticals'},
  {name: 'inhalers', category: 'pharmaceuticals'},
  {name: 'pills in any packaging', category: 'pharmaceuticals'},

  // Electronics
  {name: 'cellular phones', category: 'electronics'},
  {name: 'cellular batteries', category: 'electronics'},
  {name: 'computers (1/month)', category: 'electronics'},
  {name: 'cables', category: 'electronics'},
  {name: 'keyboards', category: 'electronics'},
  {name: 'mice', category: 'electronics'},
  {name: 'computer hubs', category: 'electronics'},
  {name: 'external drives', category: 'electronics'},
  {name: 'computer peripherals', category: 'electronics'},
  {name: 'copiers', category: 'electronics'},
  {name: 'dvd/vcr players', category: 'electronics'},
  {name: 'e-book readers', category: 'electronics'},
  {name: 'fax machines', category: 'electronics'},
  {name: 'hand-held electronics', category: 'electronics'},
  {name: 'monitors', category: 'electronics'},
  {name: 'mp3 players', category: 'electronics'},
  {name: 'printers', category: 'electronics'},
  {name: 'tablets', category: 'electronics'},
  {name: 'televisions', category: 'electronics'},
  {name: 'microwaves', category: 'electronics'},
  {name: 'vhs', category: 'electronics'},
  {name: 'cds', category: 'electronics'},
  {name: 'dvds', category: 'electronics'},
  {name: 'pagers', category: 'electronics'},
  {name: 'radios', category: 'electronics'},
  {name: 'rechargeable batteries', category: 'electronics'},
  {name: 'scanners', category: 'electronics'},
  {name: 'stereos', category: 'electronics'},
  {name: 'smart phones', category: 'electronics'},

  // Mattress (per http://www.springbackrecycling.com/locations/nashville/)
  {name: 'mattress', category: 'mattress'}
]

/*
  Return an array of common items, with only items matching one of the categories include
  items: an array of recyclable items
  categories: an array of categories to include
*/
const getSharedItems = (categories) => {
    return sharedItems.filter(
    (item) => categories.includes(item.category) && !item.dont
  )
}

export default getSharedItems
