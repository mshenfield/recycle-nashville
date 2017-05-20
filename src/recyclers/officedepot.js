const base = {
    dropoff: true,
    fees: false,
    hours: 'Mon.-Fri 8 a.m. to 9 p.m., Sat. 9 a.m. to 9 p.m., Sun. 10 a.m. to 6 p.m.',
    items: [
    {name: 'rechargeable batteries', category: 'electronics'},
    // TODO: This service is paid
    {name: 'documents', category: 'paper', secure: true},
    ],
    name: 'Office Depot',
    pickup: false
}

const locations = [
    {
        location: '2312 West End Ave, Nashville, TN 37203',
        phone: '615-340-9544'
    },
    {
        location: '4504 Harding Pike, Nashville, TN 37205',
        phone: '615-297-4180'
    }
]

export default locations.map((locationInfo) => {
    return {
        ...base,
        ...locationInfo
    }
})
