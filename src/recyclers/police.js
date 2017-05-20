import getSharedItems from './sharedItems.js'

const base = {
    dropoff: true,
    fees: false,
  // TODO: Only precincts can dipose of these. Not really shared
    items: getSharedItems(['pharmaceuticals']),
    pickup: false
}

// TODO: Phone number and list of locations is likely to go stale
// TODO: Call a precinct for hours
// TODO: This excludes police headquarters - not sure if you can drop off pharmaceuticals there
const locations = [
  {location: '5500 Charlotte Pike, Nashville, TN 37209', name: 'West Precinct', phone: '615-862-7747'},
  {location: '2231 26th Ave North, Nashville, TN 37208', name: 'North Precinct', phone: '615-862-4410'},
  {location: '1443 12th Avenue South, Nashville, TN 37203', name: 'Midtown Hills Precinct', phone: '615-880-1411'},
  {location: '501 Broadway Nashville, TN 37203', name: 'Central Precinct', phone: '615-880-1411'},
  {location: '5101 Harding Place, Nashville, TN 37211', name: 'South Precinct', phone: '615-862-7744'},
  {location: '936 E. Trinity Lane, Nashville, TN 37207', name: 'East Precinct', phone: '615-862-7600'},
  {location: '3701 James Kay Lane, Hermitage, TN 37076', name: 'Hermitage Precinct', phone: '615-880-1776'},
  {location: '400 Myatt Drive, Madison, TN 37115', name: 'Madison Precinct', phone: '615-880-3111'},
]


export default locations.map(locationInfo => {
    return {
        ...base,
        ...locationInfo
    }
})
