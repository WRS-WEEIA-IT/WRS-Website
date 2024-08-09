const MapSection = () => {
    return (
        <>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d617.4793308194362!2d19.452927223234873!3d51.752835367757335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a34d9bb5b5c3b%3A0x6a891a3c58b063b4!2sWydzia%C5%82%20Elektrotechniki%2C%20Elektroniki%2C%20Informatyki%20i%20Automatyki%20Politechniki%20%C5%81%C3%B3dzkiej!5e0!3m2!1spl!2spl!4v1723218385902!5m2!1spl!2spl'
                width='100%'
                height='450'
                style={{ border: '0' }}
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
        </>
    );
};

export default MapSection;
