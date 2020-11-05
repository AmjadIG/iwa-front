import React from 'react';
import '../Template.scss';

class Footer extends React.Component{
    render() {
        return (
            <div className="Footer">
                <div className="footer-block">
                    <div>Contacts</div>
                </div>
                <div className="footer-block">
                    <div>Liens Utiles</div>
                    <div><a className="link-footer" href="https://www.gouvernement.fr/info-coronavirus">Informations sur le coronavirus</a></div>
                    <div><a className="link-footer" href="https://www.interieur.gouv.fr/Actualites/L-actu-du-Ministere/Attestations-de-deplacement">Attestation de déplacement</a></div>
                </div>
            </div>
        )
    }
}

export default Footer;