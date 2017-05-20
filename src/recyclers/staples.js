const base = {
    dropoff: true,
    fees: false,
    hours: 'Mon.-Fri 8 a.m. to 9 p.m., Sat. 9 a.m. to 9 p.m., Sun. 11 a.m. to 6 p.m.',
    items: [
    {name: 'rechargeable batteries', category: 'electronics'},
    // TODO: This service is paid
    {name: 'documents', category: 'paper', secure: true},
    ],
    name: 'Staples',
    pickup: false
}

const locations = [
    {
        location: '100 Powell Pl, Nashville, TN 37204',
        phone: '615-298-1178'
    },
    {
        location: '7615 US Hwy 70 South, Nashville, TN 37221',
        phone: '615-673-7019'
    }
]

export default locations.map((locationInfo) => {
    return {
        ...base,
        ...locationInfo
    }
})
