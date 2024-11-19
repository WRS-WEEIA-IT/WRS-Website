import InfoCardProps from '../interfaces/InfoCardProps';
import Route from '../interfaces/Route';
import { Book, CalendarCheck, DoorOpen, GraduationCap, Lightbulb, ShipWheel } from 'lucide-react';
import SearchBarGroup from '../interfaces/SearchBarCategory';
import { Link as LucideLink } from 'lucide-react';
import { Calendar, LibraryBig } from 'lucide-react';

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

export const infoCardRoutes: InfoCardProps[] = [
    {
        title: 'Savoir vivre',
        description: 'Savoir vivre, czyli kultura studenta na uczelni',
        color: 'blue',
        Icon: Book,
        path: '/info/savoir-vivre',
    },
    {
        title: 'Koła naukowe',
        description: 'Koła naukowe działające na wydziale EEIA',
        color: 'green',
        Icon: ShipWheel,
        path: 'https://kola.samorzad.p.lodz.pl/kola-naukowe?faculty=weeia',
        isNewTab: true,
    },
    {
        title: 'Studia I stopnia',
        description: 'Kierunki studiów pierwszego stopnia na naszym wydziale',
        color: 'red',
        Icon: DoorOpen,
        path: '/info/courses',
    },
    {
        title: 'Studia II stopnia',
        description: 'Kierunki studiów drugiego stopnia na naszym wydziale',
        color: 'yellow',
        Icon: GraduationCap,
        path: '/info/masters',
    },
    {
        title: 'Wydarzenia',
        description: 'Dzień Wydziału? Akcja Integracja? Dowiedz się więcej!',
        color: 'purple',
        Icon: CalendarCheck,
        path: '/events',
    },
    {
        title: 'O nas, o WRS',
        description: 'Trochę o nas, poznaj Wydziałową Radę Samorządu!',
        color: 'pink',
        Icon: Lightbulb,
        path: '/about-us',
    },
];

export const searchBarGroups: SearchBarGroup[] = [
    {
        groupName: 'Linki',
        Icon: LucideLink,
        items: [
            {
                itemName: 'Strona główna',
                itemPath: '/',
            },
            {
                itemName: 'Dla studentów',
                itemPath: '/info',
            },
            {
                itemName: 'O nas',
                itemPath: '/about-us',
            },
            {
                itemName: 'Wydarzenia',
                itemPath: '/events',
            },
            {
                itemName: 'Aktualności',
                itemPath: '/news',
            },
        ],
    },
    {
        groupName: 'Wydarzenia',
        Icon: Calendar,
        items: [
            {
                itemName: 'Wtyczka',
                itemPath: '/events#Wtyczka',
            },
            {
                itemName: 'Dzień Wydziału',
                itemPath: '/events#Dzień Wydziału',
            },
            {
                itemName: 'Akcja Integracja',
                itemPath: '/events#Akcja Integracja',
            },
            {
                itemName: 'Akcja rekrutacja',
                itemPath: '/events#Akcja rekrutacja',
            },
        ],
    },
    {
        groupName: 'Informacje dla studentów',
        Icon: LibraryBig,
        items: infoCardRoutes.map((route) => ({
            itemName: route.title,
            itemPath: route.path,
        })),
    },
];
