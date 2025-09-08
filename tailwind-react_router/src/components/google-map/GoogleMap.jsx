import styles from './googlemap.module.css';

const GoogleMap = () => {
    return ( 
        <>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53741.38209865222!2d7.553208271611026!3d47.55457882318783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479049c72769304f%3A0x361ceb70f36d8a90!2sBasel!5e1!3m2!1sen!2sch!4v1756883591946!5m2!1sen!2sch"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            className={styles.map_size}
            ></iframe>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/SqcY0GlETPk?si=SHqCdiPXMvMCd4Sy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </>
     );
}
 
export default GoogleMap;