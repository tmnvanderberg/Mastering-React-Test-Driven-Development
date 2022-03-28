const today = new Date();

const at = (hours) => today.setHours(hours, 0);

export const SampleAppointments = [
     {
        customer: {
            firstName: 'Ashley',
            lastName: 'Hope',
            phoneNumber: '1234567',
        },
        stylist: 'Hannie Boeljans',
        service: 'Shave the customer',
        startsAt: at(12),
        notes: "hoi"
    },
     {
        customer: {
            firstName: 'Dog',
            lastName: 'Bome',
            phoneNumber: '4567df823',
        },
        stylist: 'Boeljans Doeg',
        service: 'Behead the customer',
        startsAt: at(10),
        notes: "hond"
    },
     {
        customer: {
            firstName: 'Bob',
            lastName: 'Hope',
            phoneNumber: 'xx1234567',
        },
        stylist: 'Hannie Boeljans',
        service: 'kop kaal',
        startsAt: at(8),
        notes: "woef"
    },
];
