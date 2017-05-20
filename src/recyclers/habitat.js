// Moving this to it's own file in anticipation that the official
// metro site is inaccurate: Based on their website
// (https://www.habitatnashville.org/restore-donate)
// They support pickup, and perhaps dropoff at additional locations
// and the number listed doesn't seem to be present

export default [{
    dropoff: true,
    location: '908 Division St, Nashville, TN 37203',
    fees: false,
    hours: 'Mon.-Sat. 9 a.m. to 5:30 p.m.',
    items: [
    {name: 'lumber', category: 'building materials'},
    {name: 'plywood', category: 'building materials'},
    {name: 'trim', category: 'building materials'},
    {name: 'block', category: 'building materials'},
    {name: 'fencing', category: 'building materials'},
    {name: 'insulation', category: 'building materials'}
    ],
    name: 'Habitat for Humanity ReStore: Nashville Building Supplies',
    phone: '615-942-1292',
    pickup: false
}]
