import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Duty {
    timeFrom: string;
    timeTo: string;
    available: boolean[];
}

const DutiesSection = () => {
    const duties: Duty[] = [
        {
            timeFrom: '8:00',
            timeTo: '9:00',
            available: [true, true, true, true, true, false, false],
        },
        {
            timeFrom: '9:00',
            timeTo: '10:00',
            available: [true, true, true, true, true, false, false],
        },
        {
            timeFrom: '10:00',
            timeTo: '11:00',
            available: [true, true, true, true, true, false, false],
        },
        {
            timeFrom: '11:00',
            timeTo: '12:00',
            available: [true, true, true, true, true, false, false],
        },
        {
            timeFrom: '12:00',
            timeTo: '13:00',
            available: [true, true, true, true, true, false, false],
        },
        {
            timeFrom: '13:00',
            timeTo: '14:00',
            available: [true, true, true, true, true, false, false],
        },
        {
            timeFrom: '14:00',
            timeTo: '15:00',
            available: [true, true, true, true, true, false, false],
        },
        {
            timeFrom: '15:00',
            timeTo: '16:00',
            available: [true, true, true, true, true, false, false],
        },
        {
            timeFrom: '16:00',
            timeTo: '17:00',
            available: [true, true, true, true, true, false, false],
        },
        {
            timeFrom: '17:00',
            timeTo: '18:00',
            available: [true, true, true, true, true, false, false],
        },
    ];

    return (
        <section id='duties' className='py-12'>
            <div className='site-container'>
                <p className='text-2xl font-semibold leading-none tracking-tight'>Plan dyżurów</p>
                <p className='text-sm text-muted-foreground pb-4'>Jesteśmy na 1 piętrze przy zamkniętym bufecie</p>
                <Table className='p-0'>
                    <TableCaption>Plan dyżurów Wydziałowej Rady Samorządu</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[12.5%] after:content-['Godz'] md:after:content-['Godziny']" />
                            <TableHead className="w-[12.5%] after:content-['Pon'] md:after:content-['Poniedziałek']" />
                            <TableHead className="w-[12.5%] after:content-['Wt'] md:after:content-['Wtorek']" />
                            <TableHead className="w-[12.5%] after:content-['Śr'] md:after:content-['Środa']" />
                            <TableHead className="w-[12.5%] after:content-['Cz'] md:after:content-['Czwartek']" />
                            <TableHead className="w-[12.5%] after:content-['Pt'] md:after:content-['Piątek']" />
                            <TableHead className="w-[12.5%] after:content-['Sob'] md:after:content-['Sobota']" />
                            <TableHead className="w-[12.5%] after:content-['Ndz'] md:after:content-['Niedziela']" />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {duties.map((duty) => (
                            <TableRow key={duty.timeFrom}>
                                <TableCell className='w-[12.5%]'>
                                    {duty.timeFrom} - {duty.timeTo}
                                </TableCell>
                                {duty.available.map((available, index) => (
                                    <TableCell key={index} className='w-[12.5%]'>
                                        {available ? '🟢' : '🔴'}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    );
};

export default DutiesSection;
