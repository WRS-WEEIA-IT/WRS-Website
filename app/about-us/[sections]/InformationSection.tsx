import ManagementCard from '@/components/management-card/ManagementCard';
import { getManagement } from '@/lib/utils';

const InformationSection = async () => {
    const management = await getManagement();
    return (
        <div className='site-container'>
            <div className='site-container py-12 flex flex-col gap-10'>
                <p>Cześć! Zatem chciałbyś dowiedzieć się kim jesteśmy? To świetnie! Już ci opisujemy:</p>
                <div className='flex flex-col gap-4'>
                    <p className='text-2xl'>Kim jesteśmy? 👀</p>
                    <p>
                        <b>Jesteśmy Twoimi reprezentantami na wydziale.</b> Tworzymy miejsce do działania i wzajemnej inspiracji. Wspieramy Cię w rozwoju - na uczelni, w życiu
                        społecznym i w drodze do kariery zawodowej.
                    </p>
                    <p>Jeśli napotkasz problemy akademickie lub trudności na uczelni, możesz na nas liczyć - jesteśmy tu, aby Ci pomóc w każdej sytuacji.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-2xl'>Co robimy? ⚡️</p>
                    <p>
                        <b>Potrzebujesz pomocy z uzyskaniem stypendium? Nie wiesz, jak wypełnić różnorakie wnioski? Zgłoś się do nas!</b>
                    </p>
                    <p>Nasza działalność obejmuje szereg inicjatyw mających na celu poprawę warunków studiowania oraz budowanie silnej społeczności studenckiej.</p>
                    <p>Organizujemy także wydarzenia kulturalne, naukowe, sportowe i integracyjne, aby umożliwić studentom rozwijanie zainteresowań poza salami wykładowymi.</p>
                    <p>Studenci dla studentów - bo wiemy, czego Ci potrzeba!</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-2xl'>Dla kogo jesteśmy? 🫵</p>
                    <p>
                        <b>Jesteśmy tu dla Ciebie!</b> Nasza rada składa się z przedstawicieli różnych roczników i kierunków studiów. Zawsze możesz się do nas zwrócić z pomysłami,
                        pytaniami czy problemami.
                    </p>
                    <p>Jesteśmy po to, aby reprezentować Twoje interesy i dbać o dobre samopoczucie na wydziale.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-2xl'>Poznaj nasz zarząd! 🤝</p>
                    <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
                        {management.map((card) => (
                            <ManagementCard key={card.name} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformationSection;
