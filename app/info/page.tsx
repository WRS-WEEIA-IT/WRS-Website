import InfoCard from '@/components/info-card/InfoCard';
import { Book, CalendarCheck, DoorOpen, GraduationCap, Lightbulb, ShipWheel } from 'lucide-react';

const Info = () => {
    return (
        <div className='site-container py-12'>
            <div className=' grid grid-cols-3 gap-4 grid-flow-dense'>
                <InfoCard
                    title='Savoir vivre'
                    description='Savoir vivre studenta, czyli jak zwracać się do władz uczelni'
                    color='blue'
                    Icon={Book}
                />
                <InfoCard title='Koła naukowe' description='Koła naukowe działające na naszym wydziale' color='green' Icon={ShipWheel} />
                <InfoCard
                    title='Kierunki'
                    description='Kierunki studiów na naszym wydziale wraz z opisami specjalizacji'
                    color='red'
                    Icon={DoorOpen}
                />
                <InfoCard
                    title='Studia magisterskie'
                    description='Kierunki studiów na studiach drugiego stopnia na naszym wydziale'
                    color='yellow'
                    Icon={GraduationCap}
                />
                <InfoCard
                    title='Wydarzenia'
                    description='Najważniejsze wydarzenia na naszym wydziale'
                    color='purple'
                    Icon={CalendarCheck}
                />
                <InfoCard
                    title='O nas, o WRS'
                    description='Trochę o nas - o WRS, oraz o tym jak do nas dołączyć'
                    color='pink'
                    Icon={Lightbulb}
                />
            </div>
        </div>
    );
};

export default Info;
