import InfoCardRoute from '../interfaces/InfoCardRoute';
import Route from '../interfaces/Route';
import { Book, CalendarCheck, DoorOpen, GraduationCap, Lightbulb, ShipWheel } from 'lucide-react';

export const navbarRoutes: Route[] = [
    {
        title: 'Dla studentów',
        path: '/info',
    },
    {
        title: 'O nas',
        path: '/about-us',
    },
    {
        title: 'Nasze wydarzenia',
        path: '/events',
    },
];

export const infoCardRoutes: InfoCardRoute[] = [
    {
        title: 'Savoir vivre',
        description: 'Savoir vivre studenta, czyli jak zwracać się do władz uczelni',
        color: 'blue',
        Icon: Book,
        path: '/info/savoir-vivre',
    },
    {
        title: 'Koła naukowe',
        description: 'Koła naukowe działające na naszym wydziale',
        color: 'green',
        Icon: ShipWheel,
        path: '/info/science-clubs',
    },
    {
        title: 'Kierunki',
        description: 'Kierunki studiów na naszym wydziale wraz z opisami specjalizacji',
        color: 'red',
        Icon: DoorOpen,
        path: '/info/courses',
    },
    {
        title: 'Studia magisterskie',
        description: 'Kierunki studiów na studiach drugiego stopnia na naszym wydziale',
        color: 'yellow',
        Icon: GraduationCap,
        path: '/info/masters',
    },
    {
        title: 'Wydarzenia',
        description: 'Najważniejsze wydarzenia na naszym wydziale',
        color: 'purple',
        Icon: CalendarCheck,
        path: '/events',
    },
    {
        title: 'O nas, o WRS',
        description: 'Trochę o nas - o WRS, oraz o tym jak do nas dołączyć',
        color: 'pink',
        Icon: Lightbulb,
        path: '/about-us',
    },
];
