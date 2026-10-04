import React, { ReactNode } from 'react';
import Translate from '@docusaurus/Translate';

export default function DataCollection(): ReactNode {
  return (
    <section>
        <h2>
            <Translate 
              id="privacyPolicy.collection.title" 
              description="Heading for the second main section of the privacy policy regarding data collection"
            >
              2. Data Collection on Our Website
            </Translate>
        </h2>

        <h3>
            <Translate 
              id="privacyPolicy.collection.github.title" 
              description="Subheading for the section about website hosting via GitHub Pages"
            >
              Hosting via GitHub Pages
            </Translate>
        </h3>
        <p>
            <Translate 
              id="privacyPolicy.collection.github.text1" 
              description="Paragraph explaining who the hosting provider is and giving GitHub's address"
            >
              We host our website with GitHub Pages. The provider is GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA (hereinafter "GitHub").
            </Translate>
        </p>
        <p>
            <Translate 
              id="privacyPolicy.collection.github.text2" 
              description="Paragraph explaining that GitHub collects server log files and specifying the GDPR legal basis"
            >
              When you visit our website, GitHub collects log files (server log data), including your IP address, to ensure the delivery and security of the service. The processing is carried out on the basis of Art. 6 Para. 1 lit. f GDPR (legitimate interest in the error-free and secure provision of our website).
            </Translate>
        </p>
        <p>
            <Translate 
              id="privacyPolicy.collection.github.text3" 
              description="Paragraph explaining the international data transfer and linking to GitHub's privacy statement"
            >
              Since GitHub is a US-based company, it cannot be ruled out that data will be transferred to the USA. GitHub relies on the standard contractual clauses of the EU Commission as well as the EU-U.S. Data Privacy Framework, provided the provider is certified there. Further information can be found in GitHub's privacy policy: 
            </Translate>{' '}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                https://github.com
            </a>.
        </p>

        <h3>
            <Translate 
              id="privacyPolicy.collection.email.title" 
              description="Subheading for the section regarding contacting the site operator via direct email"
            >
              Contact by E-mail
            </Translate>
        </h3>
        <p>
            <Translate 
              id="privacyPolicy.collection.email.text1" 
              description="Paragraph stating how personal data from incoming emails is handled and stored"
            >
              If you contact us by email, your details, including the contact data you provide there (such as your email address and name), will be stored by us for the purpose of processing the inquiry and in the event of follow-up questions. We do not pass on this data without your consent.
            </Translate>
        </p>
        <p>
            <Translate 
              id="privacyPolicy.collection.email.text2" 
              description="Paragraph clarifying the GDPR legal basis for processing email contacts"
            >
              The processing of this data is based on Art. 6 Para. 1 lit. b GDPR if your request is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the inquiries addressed to us (Art. 6 Para. 1 lit. f GDPR) or on your consent (Art. 6 Para. 1 lit. a GDPR) if this was requested.
            </Translate>
        </p>
        <p>
            <Translate 
              id="privacyPolicy.collection.email.text3" 
              description="Paragraph explaining the retention periods for email data and user deletion options"
            >
              The data you send to us via email will remain with us until you request us to delete it, revoke your consent to storage, or the purpose for data storage no longer applies (e.g., after your request has been fully processed). Mandatory statutory provisions – in particular statutory retention periods – remain unaffected.
            </Translate>
        </p>
    </section>
  );
}
