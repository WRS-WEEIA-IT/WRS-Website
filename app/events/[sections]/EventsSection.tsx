import EventCard from '@/components/event-card/EventCard';
import Event from '@/lib/interfaces/firebase/Event';
import { getEvents } from '@/lib/utils';

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
