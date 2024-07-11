import EventCard from '@/components/event-card/EventCard';
import Event from '@/lib/interfaces/firebase/Event';
import { collection, getDocs } from 'firebase/firestore/lite';
import { appDb } from '@/lib/config/firebase';

const getEvents = async (): Promise<Event[]> => {
    const eventsCollection = collection(appDb, 'events');
    const eventsSnapshot = await getDocs(eventsCollection);
    const eventsList = eventsSnapshot.docs.map((doc) => doc.data());
    return eventsList as Event[];
};

const EventsSection = async () => {
    const events: Event[] = await getEvents();

    return (
        <div className='site-container flex flex-col mb-12'>
            {events?.map((event) => (
                <EventCard {...event} key={event.title} />
            ))}
        </div>
    );
};

export default EventsSection;
