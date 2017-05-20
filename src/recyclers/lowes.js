const base = {
    dropoff: true,
    fees: false,
    hours: 'Mon.-Sat. 6 a.m. to 10 p.m., Sun. 8 a.m. to 8 p.m.',
    items: [{name: 'rechargeable batteries', category: 'electronics'}],
    name: 'Lowe\'s Home Improvement',
    pickup: false
}

const locations = [{
    location: '7034 Charlotte Pike, Nashville, TN 37209',
    phone: '615-356-9223'
},{
    location: '3460 Dickerson Pike, Nashville, TN 37207',
    phone: '615-860-5465'
},{
    location: '5520 Nolensville Pike, Nashville, TN 37211',
    phone: '615-831-6000'
}]

export default locations.map(locationInfo => {
    return {
        ...base,
        ...locationInfo
    }
})
