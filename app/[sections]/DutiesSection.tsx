import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const DutiesSection = () => {
  return (
    <section id='duties' className='py-12'>
      <div className='px-52'>
        <p className='text-2xl font-semibold leading-none tracking-tight'>Plan dyżurów</p>
        <p className='text-sm text-muted-foreground pb-4'>Jesteśmy na 1 piętrze przy zamkniętym bufecie</p>
        <Table>
          <TableCaption>Plan dyżurów Wydziałowej Rady Samorządu</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[12.5%]'>Godziny</TableHead>
              <TableHead className='w-[12.5%]'>Poniedziałek</TableHead>
              <TableHead className='w-[12.5%]'>Wtorek</TableHead>
              <TableHead className='w-[12.5%]'>Środa</TableHead>
              <TableHead className='w-[12.5%]'>Czwartek</TableHead>
              <TableHead className='w-[12.5%]'>Piątek</TableHead>
              <TableHead className='w-[12.5%]'>Sobota</TableHead>
              <TableHead className='w-[12.5%]'>Niedziela</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='w-[12.5%]'>8:00 - 9:00</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🔴</TableCell>
              <TableCell className='w-[12.5%]'>🔴</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='w-[12.5%]'>9:00 - 10:00</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🔴</TableCell>
              <TableCell className='w-[12.5%]'>🔴</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='w-[12.5%]'>10:00 - 11:00</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🔴</TableCell>
              <TableCell className='w-[12.5%]'>🔴</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='w-[12.5%]'>11:00 - 12:00</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🟢</TableCell>
              <TableCell className='w-[12.5%]'>🔴</TableCell>
              <TableCell className='w-[12.5%]'>🔴</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default DutiesSection;
