const base = {
    dropoff: true,
    fees: false,
    hours: 'Mon.-Sat. 6 a.m. to 10 p.m., Sun. 8 a.m. to 8 p.m.',
    items: [{name: 'rechargeable batteries', category: 'electronics'}],
    name: 'Home Depot',
    pickup: false
}

const locations = [
    {
        location: '2535 Powell Ave, Nashville, TN 37204',
        phone: '615-269-7800'
    },
    {
        location: '1015 Joyce Ln, Nashville, TN 37216',
        phone: '615-228-3317'
    },
    {
        location: '7665 Hwy 70 S, Nashville, TN 37221',
        phone: '615-662-7600'
    }
]

export default locations.map((locationInfo) => {
    return {
        ...base,
        ...locationInfo
    }
})
