const InformationSection = () => {
    return (
        <div className='site-container'>
            <div className='readable-width py-12 flex flex-col gap-10'>
                <p>Cześć! Zatem chciałbyś dowiedzieć się kim jesteśmy? To świetnie! Już ci opisujemy:</p>
                <div className='flex flex-col gap-4'>
                    <p className='text-2xl'>Kim jesteśmy? 👀</p>
                    <p>
                        Jesteśmy zespołem zaangażowanych studentów, których celem jest tworzenie inspirującego i aktywnego środowiska na
                        naszym wydziale.
                    </p>
                    <p>
                        Nasza misja to nie tylko reprezentowanie studentów, ale także wspieranie ich rozwoju akademickiego, społecznego i
                        zawodowego.
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-2xl'>Co robimy? ⚡️</p>
                    <p>
                        Nasza działalność obejmuje szereg inicjatyw mających na celu poprawę warunków studiowania oraz budowanie silnej
                        społeczności studenckiej.
                    </p>
                    <p>
                        Organizujemy wydarzenia kulturalne, naukowe, sportowe i integracyjne, aby umożliwić studentom rozwijanie
                        zainteresowań poza salami wykładowymi.
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-2xl'>Dla kogo jesteśmy? 🫵</p>
                    <p>
                        Jesteśmy tu dla Ciebie! Nasza rada składa się z przedstawicieli różnych roczników i kierunków studiów. Zawsze możesz
                        się do nas zwrócić z pomysłami, pytaniami czy problemami.
                    </p>
                    <p>Jesteśmy po to, aby reprezentować Twoje interesy i dbać o dobre samopoczucie na wydziale.</p>
                </div>
            </div>
        </div>
    );
};

export default InformationSection;
