const base = {
    dropoff: true,
    fees: false,
    hours: 'Mon.-Fri 8 a.m. to 9 p.m., Sat. 9 a.m. to 9 p.m., Sun. 10 a.m. to 6 p.m.',
    items: [{name: 'rechargeable batteries', category: 'electronics'}],
    name: 'Office Max',
    pickup: false
}

const locations = [
    {
        location: '5706 Nolensville Pike, Nashville, TN 37211',
        phone: '615-833-8300'
    },
    {
        location: '3161 Lebanon Pike, Nashville, TN 37214',
        phone: '615-884-1245'
    }
]

export default locations.map((locationInfo) => {
    return {
        ...base,
        ...locationInfo
    }
})
