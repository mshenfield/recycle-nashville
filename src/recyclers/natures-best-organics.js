import getSharedItems from './sharedItems.js'

const base = {
    dropoff: true,
    fees: false,
    hours: 'Mon.-Fri. 7 a.m. to 4 p.m., Sat. 8 a.m. to 3 p.m.',
    items: getSharedItems(['yard']),
    phone: '615-730-7238',
    pickup: false,
    name: 'Nature\'s Best Organics of Tennessee'
}

const locations = [
  {location: '1511 Elm Hill Pike, Nashville, TN 37210'},
  {location: '6401 Centennial Blvd., Nashville, TN 37209'}
]

return locations.map(locationInfo => {
    return {
        ...base,
        ...locationInfo
    }
})
