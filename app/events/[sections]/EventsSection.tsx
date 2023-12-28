import EventCard from '@/components/event-card/EventCard';
import EventCardProps from '@/lib/interfaces/EventCardProps';

const EventsSection = () => {
    const events: EventCardProps[] = [
        {
            title: 'Wtyczka',
            description: [
                'Wtyczka to wyjazd szkoleniowo-integracyjny organizowany dla zarówno nowych studentów wydziału EEIA, jak i tych, którzy już zdążyli się z nim zaprzyjaźnić.',
                'Organizowana jest ona ostatniego weekendu października, a jej celem jest integracja studentów, oraz zapoznanie ich z rozmaitymi aspektami studiowania na wydziale EEIA.',
            ],
            imageUrl: '/wtyczka1.jpg',
            path: '/',
        },
    ];

    return (
        <div className='site-container'>
            {events.map((event) => (
                <EventCard {...event} key={event.title} />
            ))}
        </div>
    );
};

export default EventsSection;
