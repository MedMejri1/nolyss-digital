
import Link from "next/link"

export default function Offer1() {
    return (
        <>

            <section className="offer-sectionv02 pt-space pb-space">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-3 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3">
                                NOS SERVICES
                            </div>
                            <h2 className="stitle mt-xxl-8 mt-xl-6 mt-5">
                                Ce que  <span className="fw-400">Nolyss Digital</span>
                                <span className="d-block fw-bold">
                                    peut faire pour vous
                                </span>
                            </h2>
                        </div>
                        <Link href="/" className="radius-btn d-inline-flex text-capitalize radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            Voir tous les services
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    <div className="row g-xxl-7 g-xl-6 g-4">
                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={500}>
                            <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                                    <div className="icon">
                                        <img src="/assets/img/element/offer1.png" alt="img" />
                                    </div>
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        01
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Développement Web & Mobile
                                    </h5>
                                    <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Nous concevons des sites web performants, responsives et des applications mobiles intuitives, optimisées pour offrir la meilleure expérience utilisateur sur tous les appareils.
                                    </p>
                                    <Link href="/contact" className="white-clr d-flex gap-4">
                                        En savoir plus
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                         <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={500}>
                            <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                                    <div className="icon">
                                        <img src="/assets/img/element/offer1.png" alt="img" />
                                    </div>
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        01
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Design Graphique
                                    </h5>
                                    <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
Création de visuels percutants et identitaires : logos, chartes graphiques, cartes de visite, brochures et plus encore. Donnez vie à votre image de marque avec créativité et cohérence.

                                    </p>
                                    <Link href="/contact" className="white-clr d-flex gap-4">
                                        En savoir plus
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                         <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={500}>
                            <div className="offer-item d-md-flex d-grid gap-xxl-6 gap-xl-5 gap-lg-4 gap-3 p-xxl-6 p-xl-5 p-4">
                                <div className="icon-area d-md-grid d-flex justify-content-between mb-md-0 mb-4">
                                    <div className="icon">
                                        <img src="/assets/img/element/offer1.png" alt="img" />
                                    </div>
                                    <h5 className="seri white-clr d-flex align-items-end">
                                        01
                                    </h5>
                                </div>
                                <div className="content">
                                    <h5 className="white-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Audiovisuel & Motion Design
                                    </h5>
                                    <p className="pra-clr mb-xxl-6 mb-xl-5 mb-4">
                                        Réalisation de vidéos professionnelles, montages dynamiques, animations et motion design pour valoriser votre communication sur tous vos supports digitaux.


                                    </p>
                                    <Link href="/contact" className="white-clr d-flex gap-4">
                                        En savoir plus
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up white-clr" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
        </>
    )
}
