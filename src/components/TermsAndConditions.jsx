import React from 'react';
import '../styles/TermsAndConditions.css';
import Navbar from './Navbar';

const TermsAndConditions = () => {
    return (
        <div className="terms-container">
            <h1>Terms and Conditions</h1>
            <ol>
                <li>
                    <strong>Introduction</strong>
                    <ul>
                        <li>These General Terms and Conditions (the “Agreement”) govern the entire relationship between you the Client and the Company.</li>
                        <li>Before the Distance contract is concluded, the Client will be provided with the text of this Agreement electronically or in other durable formats. If this is not reasonably possible, the Company will indicate, before the distance contract is concluded, in what way this Agreement is available for Client’s review at the Company’s premises and that they will be sent free of charge to the Client, as soon as possible, at the Client’s request.</li>
                        <li><strong>THE CLIENT IS OBLIGED TO CAREFULLY READ THIS AGREEMENT BEFORE ACCEPTING IT AND USING THE SERVICES OF THE COMPANY. THE CLIENT AGREES THAT HIS/HER USE OF THE SERVICES ACKNOWLEDGES THAT THE CLIENT HAS READ THIS AGREEMENT, UNDERSTOOD IT, AND AGREE TO BE BOUND BY IT.</strong></li>
                        <li>This Agreement contains a mandatory arbitration provision that as further set forth in Section 17 below, requires the use of arbitration on an individual basis to resolve disputes, rather than jury trials or any other court proceedings, or class actions of any kind.</li>
                    </ul>
                </li>
                <li>
                    <strong>Definitions</strong>
                    <ul>
                        <li>Some terms are defined in the introductory part of this Agreement. Unless this Agreement provides otherwise, wherever used in this Agreement, including the introductory part, the following terms when capitalized shall have the following meanings:</li>
                        <li><strong>Agreement</strong> shall mean Agreement for providing Services and/or Goods concluded online by the Company and the Client.</li>
                        <li><strong>Client</strong> shall mean user of the Company’s Services and/or the buyer of Goods as explained in this Agreement.</li>
                        <li><strong>Company</strong> shall mean Keto Diets, UAB, code 305493532, with the registered office at Didžioji g. 18, Vilnius, office address at Antakalnio str. 17, LT-10312 Vilnius, Lithuania, e-mail: info@ketodiets.com.</li>
                    </ul>
                </li>
            </ol>
        </div>
    );
};

export default TermsAndConditions;
