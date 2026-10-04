import React, { ReactNode } from 'react';
import Translate from '@docusaurus/Translate';

export default function GeneralInformation(): ReactNode {
  return (
    <section>
        <h2>
            <Translate 
              id="privacyPolicy.general.title" 
              description="Heading for the first main section of the privacy policy containing general legal notices"
            >
              1. General Information and Mandatory Information
            </Translate>
        </h2>
        
        <h3>
            <Translate 
              id="privacyPolicy.general.dataProtection.title" 
              description="Subheading introducing the basic data protection stance"
            >
              Data Protection
            </Translate>
        </h3>
        <p>
            <Translate 
              id="privacyPolicy.general.dataProtection.text1" 
              description="Paragraph about treating user data confidentially according to statutory rules"
            >
              The operators of this website take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this Privacy Policy.
            </Translate>
        </p>
        <p>
            <Translate 
              id="privacyPolicy.general.dataProtection.text2" 
              description="Paragraph explaining that using the site triggers collection of different personal data"
            >
              When you use this website, various personal data are collected. Personal data is data with which you can be personally identified. This Privacy Policy explains what data we collect and what we use it for. It also explains how and for what purpose this happens.
            </Translate>
        </p>
        <p>
            <Translate 
              id="privacyPolicy.general.dataProtection.text3" 
              description="Paragraph warning about general security vulnerabilities during web data transfers"
            >
              We point out that data transmission over the Internet (e.g., when communicating by e-mail) can have security gaps. Complete protection of data against access by third parties is not possible.
            </Translate>
        </p>

        <h3>
            <Translate 
              id="privacyPolicy.general.controller.title" 
              description="Subheading for identifying the data controller"
            >
              Information About the Responsible Party (Controller)
            </Translate>
        </h3>
        <p>
            <Translate 
              id="privacyPolicy.general.controller.text" 
              description="Short introductory line before listing the controller contact details"
            >
              The responsible party for data processing on this website is:
            </Translate>
        </p>
        <p style={{ lineHeight: '1.5', marginBottom: '1rem' }}>
            <strong>Collins Dicka</strong><br />
            Ernst-Güntner-Straße 6<br />
            25704 Meldorf<br /><br />
            Email: collins.dicka@gmail.com
        </p>
        <p>
            <Translate 
              id="privacyPolicy.general.controller.definition" 
              description="Legal definition under GDPR specifying what a data controller is"
            >
              The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g., names, email addresses, etc.).
            </Translate>
        </p>

        <h3>
            <Translate 
              id="privacyPolicy.general.withdrawal.title" 
              description="Subheading for user rights concerning the revocation of consent"
            >
              Revocation of Your Consent to Data Processing
            </Translate>
        </h3>
        <p>
            <Translate 
              id="privacyPolicy.general.withdrawal.text" 
              description="Paragraph detailing how an informal email can revoke given processing consent"
            >
              Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. An informal notification by email to us is sufficient for this purpose. The legality of the data processing carried out up to the revocation remains unaffected by the revocation.
            </Translate>
        </p>

        <h3>
            <Translate 
              id="privacyPolicy.general.complaint.title" 
              description="Subheading regarding the right to lodge structural complaints with supervisory authorities"
            >
              Right to Lodge a Complaint with the Competent Supervisory Authority
            </Translate>
        </h3>
        <p>
            <Translate 
              id="privacyPolicy.general.complaint.text" 
              description="Paragraph clarifying right to complain to GDPR watchdogs in case of violations"
            >
              In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, their place of work, or the place of the alleged violation. The right to lodge a complaint is without prejudice to other administrative or judicial remedies.
            </Translate>
        </p>

        <h3>
            <Translate 
              id="privacyPolicy.general.access.title" 
              description="Subheading regarding user rights to access, erase, and correct personal information"
            >
              Access, Erasure, and Rectification
            </Translate>
        </h3>
        <p>
            <Translate 
              id="privacyPolicy.general.access.text" 
              description="Paragraph explaining legal rights to free informational access, fixes, and deletions"
            >
              Within the framework of the applicable statutory provisions, you have the right at any time to free information about your stored personal data, its origin and recipient, and the purpose of the data processing and, if applicable, a right to rectification or erasure of this data. For this purpose, as well as for further questions on the subject of personal data, you can contact us at any time at the address given in the legal notice.
            </Translate>
        </p>

        <h3>
            <Translate 
              id="privacyPolicy.general.restriction.title" 
              description="Subheading for user rights concerning the restriction of processing"
            >
              Right to Restriction of Processing
            </Translate>
        </h3>
        <p>
            <Translate 
              id="privacyPolicy.general.restriction.text" 
              description="Paragraph defining conditions and contact routes for requesting processing restriction"
            >
              You have the right to request the restriction of the processing of your personal data. For this purpose, you can contact us at any time at the address given in the legal notice.
            </Translate>
        </p>
    </section>
  );
}
