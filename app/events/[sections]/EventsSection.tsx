import EventCard from '@/components/event-card/EventCard';
import EventCardProps from '@/lib/interfaces/EventCardProps';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { appDb } from '@/lib/config/firebase';

const getEvents = async (): Promise<EventCardProps[]> => {
    const eventsCollection = collection(appDb, 'events');
    const eventsSnapshot = await getDocs(eventsCollection);
    const eventsList = eventsSnapshot.docs.map((doc) => doc.data());
    return eventsList as EventCardProps[];
};

const EventsSection = async () => {
    const events: EventCardProps[] = await getEvents();
    console.log(events);

    // const events: EventCardProps[] = [
    //     {
    //         title: 'Wtyczka',
    //         icon: '🔌',
    //         description: [
    //             'Wtyczka to wyjazd szkoleniowo-integracyjny organizowany dla zarówno nowych studentów wydziału EEIA, jak i tych, którzy już zdążyli się z nim zaprzyjaźnić.',
    //             'Organizowana jest ona ostatniego weekendu października, a jej celem jest integracja studentów, oraz zapoznanie ich z rozmaitymi aspektami studiowania na wydziale EEIA.',
    //         ],
    //         imageUrl: '/wtyczka1.jpg',
    //         path: '/',
    //         buttonColor: 'pink',
    //     },
    //     {
    //         title: 'Dzień Wydziału',
    //         icon: '⚡️',
    //         description: [
    //             'Dzień Wydziału to wydarzenie organizowane przez Samorząd Studentów Wydziału Elektrotechniki, Elektroniki, Informatyki i Automatyki Politechniki Łódzkiej.',
    //             'Jest to okazja do zapoznania się z działalnością wydziału, jego organizacją, a także możliwościami jakie daje studentom.',
    //         ],
    //         imageUrl: '/dzienwydzialu.png',
    //         path: '/',
    //         buttonColor: 'yellow',
    //     },
    //     {
    //         title: 'Dzień Debila',
    //         icon: '🐻',
    //         description: [
    //             'Dzień Debila  to specjalny dzień, który jest przeznaczony specjlnym osobom, które są debilami.',
    //             'W tym dniu debile mają możliwość spotkania się z innymi debilami i wspólnego spędzenia czasu.',
    //         ],
    //         imageUrl: '/niedzwiedz.jpeg',
    //         path: '/',
    //         buttonColor: 'green',
    //     },
    //     {
    //         title: 'Akcja Integracja',
    //         icon: '🎉',
    //         description: [
    //             'Akcja Integracja to wydarzenie organizowane przez Samorząd Studentów Wydziału Elektrotechniki, Elektroniki, Informatyki i Automatyki Politechniki Łódzkiej.',
    //             'Jest to okazja do zapoznania się z działalnością wydziału, jego organizacją, a także możliwościami jakie daje studentom.',
    //         ],
    //         imageUrl: '/integracja.jpg',
    //         path: '/',
    //         buttonColor: 'blue',
    //     },
    //     {
    //         title: 'Akcja rekrutacja',
    //         icon: '📝',
    //         description: [
    //             'Akcja rekrutacja to wydarzenie organizowane przez Samorząd Studentów Wydziału Elektrotechniki, Elektroniki, Informatyki i Automatyki Politechniki Łódzkiej.',
    //             'Wydarzenie to ma na celu nabór nowych studentów na wydział EEIA.',
    //         ],
    //         imageUrl: '/rekrutacja.jpg',
    //         path: '/',
    //         buttonColor: 'purple',
    //     },
    //     {
    //         title: 'Konopnica',
    //         icon: '🏕',
    //         description: [
    //             'Konopnica to wyjazd szkoleniowo-integracyjny przeznaczony dla najaktywniejszych członków WRSu.',
    //             'Podczas wyjazdu odbywają się szkolenia z zakresu zarządzania organizacją, a także integracja członków.',
    //         ],
    //         imageUrl: '/konopnica1.jpeg',
    //         path: '/',
    //         buttonColor: 'pink',
    //     },
    // ];

    return (
        <div>
            <div className='site-container flex flex-col mb-12'>
                {events?.map((event) => (
                    <EventCard {...event} key={event.title} />
                ))}
            </div>
        </div>
    );
};

export default EventsSection;
