<?php
    require 'database/db_connect.php';

    // Get user IP address
    $userIP = $_SERVER['REMOTE_ADDR'];

    // Check if the IP is banned
    $sql = "SELECT * FROM ip_blocker WHERE ip_address = ? AND banned = 1";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $userIP);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Redirect to banned.php if the user is banned
        header("Location: banned.php");
        exit;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-B7YYMF6K7F"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-B7YYMF6K7F');
    </script>
    <link rel="stylesheet" href="https://use.typekit.net/ucw2nfi.css">
    <title>7ACRES - Quiz Portal</title>
    <!-- Linking the CSS file -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <main>
        <!-- Intro Animation -->
        <section class="pageFrame introAnimation">
            <video id="introVideo" autoplay muted playsinline>
                <source src="images/intro.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <!-- Optional: Tap to play overlay (hidden by default, shown if needed) -->
            <div id="videoOverlay" style="display: none;">Tap to Play</div>
        </section>

        <!-- Age Gate -->
        <section class="pageFrame ageGate">
            <div class="overlay"></div>
    
            <div class="frameContent">
                <!-- Logo -->
                <img src="images/logo.svg" class="main_logo"/>

                <!-- Are you old enough? -->
                <div class="age_check">
                    <h1>ARE YOU 19 OR OLDER?</h1>
                    <div class="age_check_buttons">
                        <button id="yesButton">YES</button>
                        <button id="noButton">NO</button>
                    </div>
                </div>

                <!-- Province Selection -->
                <div class="provinceChoice sectionSpacer">
                    <div class="provinceContainer">
                        <h1>PROVINCE</h1>
                        <select id="provinceSelect">
                            <!-- <option value="AB">AB</option> -->
                            <option value="BC">BC</option>
                            <option value="MB">MB</option>
                            <option value="NB">NB</option>
                            <option value="NL">NL</option>
                            <option value="NS">NS</option>
                            <option value="ON">ON</option>
                            <option value="PE">PE</option>
                            <!-- <option value="QC">QC</option> -->
                            <option value="SK">SK</option>
                            <option value="NT">NT</option>
                            <option value="NU">NU</option>
                            <option value="YT">YT</option>
                        </select>
                    </div>
                </div>

                <!-- Store Detail Information -->
                <div class="store_details sectionSpacer">
                    <h1>STORE DETAILS</h1>
                    <div class="store_details_form">
                        <input type="text" id="store_name" name="store_name" placeholder="Store Name" class="input_field_default ageGateForms"/>
                        <div id="storeNameSuggestions" class="suggestions-container"></div> <!-- Store name suggestions container -->

                        <input type="text" id="store_address" name="store_address" placeholder="Store Address" class="input_field_default ageGateForms"/>
                        <div id="addressSuggestions" class="suggestions-container"></div> <!-- Suggestions container -->

                        <input type="text" id="store_pincode" name="store_pincode" placeholder="PIN Code" class="input_field_default ageGateForms"/>
                        <img src="images/tooltip.svg" class="tooltipSelector"/>
                        <button id="submitAgeGate" class="button_selected age_gate_submit_btn">SUBMIT</button>
                    </div>
                </div>

                <p class="footerPrint">By entering this site you agree to our <span class="termsConditions">terms and conditions</span> and <span class="privacyPolicy privacyPolicyPageURL">privacy policy</span>.<br/> <span class=" contestRulesLink">CONTEST RULES</span></p>
            </div>

            <!-- Pin Location Tooltip -->
            <div class="tooltipGuide">
                <span class="close_tool_tip">&times;</span>
                <h1>PIN CODE IS LOCATED ON THE CARD INSIDE THE CASE</h1>
            </div>
        </section>

        <!-- Education Portal -->
        <section class="pageFrame educationPortal" style="height:100vh;">
            <div class="frameContent">
                <!-- Logo -->
                <img src="images/logo.svg" class="main_logo"/>

                <!-- Answer Following Questions -->
                <div class="quizAnswerGuide">
                    <h1>Answer the following 3 quiz questions correctly for a chance to win</h1>
                    <img src="images/educationPortal/starbuckscard.png" />
                    <button class="button_selected default_btn education_portal_submitBtn quick-start-btn">TAKE THE QUIZ</button>
                </div>
                <p class="footerPrint">By entering this site you agree to our <span class="termsConditions">terms and conditions</span> and <span class="privacyPolicy privacyPolicyPageURL">privacy policy</span>.<br/> <span class=" contestRulesLink">CONTEST RULES</span></p>

            </div>
        </section>

        <!-- Sell Sheet Details -->
        <section class="pageFrame sellSheet">
            <div class="frameContent">
                <!-- Logo -->
                <img src="images/logo.svg" class="main_logo"/>

                <!-- What is Cafe Vanilla Delight? -->
                <div class="cafe_delight_description">
                    <h1 class="productCollectionTitle">Check this out! You are going to be quizzed on it!</h1>
                    <div class="divider"></div>
                    <div class="divider"></div>
                    <p>7ACRES Café Live Resin product collection is masterfully crafted by cannabis enthusiasts, bringing together coffee and live resin flavours to create a one-of-a-kind experience.</p>
                </div>

                <!-- 7ACRES Cafe Vanilla Delight Live Resin -->
                <div class="cafe_delight_description">
                    <div class="divider"></div>
                        <!-- <h1 style="width:250px;">7ACRES Café Vanilla Delight Live Resin</h1> -->
                    <div class="divider"></div>
                    <img src="images/educationPortal/vanillaresin.png" width="300" style="margin-top:1.9em;" class="vanillaimageresin"/>
                </div>

                <!-- Sativa Chart -->
                <div class="sativa_chart_desc">
                    <h1 style="width:250px;" class="delightresintitle">7ACRES Café Vanilla Delight Live Resin</h1>
                    <h1 class="sativaHeader">SATIVA</h1>
                    <img src="images/educationPortal/sativaChart.png" width="300" style="margin-top:1.9em;"/>
                </div>

                <button class="button_selected default_btn sellsheet_btn_confirm">START QUIZ</button>
                
                <p class="footerPrint">By entering this site you agree to our <span class="termsConditions">terms and conditions</span> and <span class="privacyPolicy privacyPolicyPageURL">privacy policy</span>.<br/> <span class=" contestRulesLink">CONTEST RULES</span></p>
            </div>
        </section>

        <!-- Question Portal -->
        <section class="pageFrame questionPortal">
            <div class="overlay"></div>
            <div class="frameContent">
                <!-- Logo -->
                <img src="images/logo.svg" class="main_logo"/>

                <!-- Quiz Questions -->
                <h1 class="quiz_question">Loading question...</h1>

                <!-- Quiz Choices -->
                <div class="quizChoices">
                    <div class="multiple_choice">
                        <!-- Choices will be populated here by JavaScript -->
                    </div>
                </div>

                <button class="button_selected default_btn quiz_submit_btn">NEXT</button>
                <p class="current_quiz_question">Loading...</p>
                
                <p class="footerPrint">By entering this site you agree to our <span class="termsConditions">terms and conditions</span> and <span class="privacyPolicy privacyPolicyPageURL">privacy policy</span>.<br/> <span class=" contestRulesLink">CONTEST RULES</span></p>
            </div>

            <!-- Congratulations -->
            <div class="yellow_popup congratulations_popup">
                <h2>CONGRATULATIONS!</h2>
                <img src="images/giftcard.png" width="200"/>
                <p>You answered <span id="correctAnswers">0</span> of <span id="totalQuestions">0</span> questions correctly. Spin the wheel for a chance to win a $10 Starbucks Gift Card!</p>
                <button class="claim_prize_btn quiz_black_btn">SPIN WHEEL</button>
            </div>

            <!-- Try Again -->
            <div class="yellow_popup try_again_popup">
                <h2>LET'S DO IT AGAIN!</h2>
                <p>You need to have 3 correct answers to win! Check the education sheet again and start over.</p>
                <button class="prize_retry_btn quiz_black_btn">OKAY</button>
            </div>
        </section>

        <!-- Spinning Wheel -->
        <section class="pageFrame spintowin">
            <div class="frameContent">
                <!-- Logo -->
                <img src="images/logo.svg" class="main_logo"/>

                <!-- Customer Information -->
                <div class="customer_details sectionSpacer">
                    <h1 style="margin-top:-2em;padding-bottom:1em;">SPIN FOR A CHANCE TO WIN</h1>

                    <div id="wheel-container">
                        <img id="wheel" src="images/wheel/Wheel.png" alt="Wheel">
                        <img id="arrow" src="images/wheel/Arrow.png" alt="Arrow">
                        <img id="centercap" src="images/wheel/Center.png" alt="Center Cap">
                    
                    </div>
                </div>

                <p class="footerPrint">By entering this site you agree to our <span class="termsConditions">terms and conditions</span> and <span class="privacyPolicy privacyPolicyPageURL">privacy policy</span>.<br/> <span class=" contestRulesLink">CONTEST RULES</span></p>
            </div>
        </section>

        <!-- Gift Card Submission Field -->
        <section class="pageFrame dataCapture">
            <div class="frameContent">
                <!-- Logo -->
                <img src="images/logo.svg" class="main_logo"/>

                <!-- Customer Information -->
                <div class="customer_details sectionSpacer">
                    <h1>TELL US WHERE TO SEND YOUR</h1>
                    <img src="images/giftcardvalue.png" width="270" style="margin-bottom: 1em;"/>

                    <div class="store_details_form">
                        <input type="text" name="customer_first_name" placeholder="First Name" class="input_field_default"/>
                        <input type="text" name="customer_last_name" placeholder="Last Name" class="input_field_default"/>
                        <input type="text" name="customer_email" placeholder="Email Address" class="input_field_default"/>
                        <button class="button_selected default_btn giftcard_submit_btn">SUBMIT</button>
                    </div>
                </div>

                <p class="footerPrint">By entering this site you agree to our <span class="termsConditions">terms and conditions</span> and <span class="privacyPolicy privacyPolicyPageURL">privacy policy</span>.<br/> <span class=" contestRulesLink">CONTEST RULES</span></p>
            </div>
        </section>

        <!-- Thank You Post Submission -->
        <section class="pageFrame thankYou">
            <div class="frameContent">
                <!-- Logo -->
                <img src="images/logo.svg" class="main_logo"/>

                <!-- Thank You -->
                <div class="customer_details sectionSpacer">
                    <h1>SENT <br/>CHECK YOUR EMAIL!</h1>

                    <button class="button_selected default_btn how_to_earn_more_btn">HOW TO WIN MORE <br />QUIZ REWARDS?</button>
                </div>

                <p class="footerPrint">By entering this site you agree to our <span class="termsConditions">terms and conditions</span> and <span class="privacyPolicy privacyPolicyPageURL">privacy policy</span>.<br/> <span class=" contestRulesLink">CONTEST RULES</span></p>
            </div>
        </section>

        <!-- How to earn more pins -->
        <section class="pageFrame morePinsGuide">
            <div class="frameContent">
                <!-- Logo -->
                <img src="images/logo.svg" class="main_logo"/>

                <!-- How to win more pins guide -->
                <div class="pinsGuide">
                    <h2>For more chances to win, ask your 7ACRES rep to receive PIN codes or find PIN codes inside limited cases of 7ACRES Café Vanilla Delight.</h2>
                    <img src="images/chances.png" width="330" />
                    <img src="images/giftcardvalue.png" width="330" />
                    <h2>Available until quantities last. One prize per person.</h2>
                </div>
                <p class="footerPrint">By entering this site you agree to our <span class="termsConditions">terms and conditions</span> and <span class="privacyPolicy privacyPolicyPageURL">privacy policy</span>.<br/> <span class=" contestRulesLink">CONTEST RULES</span></p>
            </div>
        </section>

        <!-- Rules -->
        <section class="pageFrame policyPages rulesPage">
            <div class="frameContent">
            <!-- Logo -->
            <img src="images/logo.svg" class="main_logo"/>

            <!-- Rules -->
            <h1>7ACRES Café Live Resin Vanilla Delight Contest Short Form Rules</h1>

            <!-- Policies -->
            <div class="termsEntry">
                <p>Full contest rules available at <a href="https://scanlearnwin.ca/#terms">www.scanlearnwin.ca/terms</a>. Contest runs from May 1, 2024, to May 1, 2025. Scan the QR code, click URL link or visit <a href="www.scanlearnwin.ca">www.scanlearnwin.ca</a> to enter unique PIN codes to participate in the quiz. All three (3) questions in quiz must be answered accurately for a chance to win a prize. The odds of winning a prize are 90% or greater. Limit one (1) prize per person. Limit one (1) prize per unique pin. Available prizes are $10 Starbucks Gift Cards. Prizes available until quantities last. Cumulative prize value of $5,000 (500 gift cards available with a $10 nominal value). NO PURCHASE NECESSARY TO PARTICIPATE IN THE CONTEST. A purchase will not increase your odds of winning. This contest is open to participants in Canada, excluding Alberta and Quebec. To participate, you must be the age of majority as per the provincial cannabis legislation in the province or territory in Canada in which you reside. Skill testing question required.</p>
            </div>

            <button class="button_selected default_btn terms_agree_btn" style="margin-bottom: 3em;">GOT IT</button>

            </div>
        </section>

        <!-- Terms of Service -->
        <section class="pageFrame policyPages termsPolicy">
            <div class="frameContent">
                <!-- Logo -->
                <img src="images/logo.svg" class="main_logo"/>

                <!-- Terms of Service -->
                <h1>TERMS OF SERVICE</h1>

                <!-- Policies -->
                <div class="termsEntry">
                    <h2>Introduction</h2>
                    <p>Last updated: April 25, 2024. These terms of service (“Terms”) govern your rights and obligations regarding your access to and use of the website scanlearnwin.ca (including any content, documentation, and functionality offered thereon) (collectively, the "Website") owned by Canopy Growth Corporation and its subsidiaries ("Canopy", "we", "us", and "our"). The affiliated license holder is Tweed Inc. These Terms constitute a fully binding agreement between Canopy and you, the user of the Website (herein referred to as “you” and “your”), and contain important information regarding your legal rights, remedies, and obligations, so please read these Terms carefully. BY ACCESSING OR USING THIS WEBSITE, YOU ACCEPT AND AGREE TO BE BOUND BY AND COMPLY WITH THESE TERMS AND OUR PRIVACY POLICY. IF YOU DO NOT AGREE TO THESE TERMS OR THE PRIVACY POLICY, YOU MAY NOT ACCESS OR USE THIS WEBSITE.</p>
                </div>

                <div class="termsEntry">
                    <h2>Updates and Modifications</h2>
                    <p>Canopy reserves the right, in its sole discretion, to revise and update these Terms from time to time without notice. The date on which these Terms were last updated will appear at the top of this page, and any and all such modifications are effective immediately upon posting. Your continued use of the Site after any such modifications constitutes your acceptance of and your agreement to be bound by the new Terms. It is your responsibility to review these Terms periodically so that you are aware of any revision to which you are bound. The Website (or any portion thereof) may be revised or deleted at any time in our sole discretion without notice. We will not be liable if for any reason all or any part of the Website is restricted to users or unavailable at any time or for any period.</p>
                </div>

                <!-- Jurisdiction -->
                <div class="termsEntry">
                    <h2>Jurisdiction</h2>
                    <p>This Website is only intended for use by residents of Canada. Your access and use of this Website shall be deemed to be provided in Ontario and subject to Ontario law and the laws of Canada applicable therein. If you access this Website from outside of Canada, you do so at your own risk and are responsible for compliance with local, national and international laws, including, without limitation, import and export laws. In particular, you understand that this Website may not be available in all jurisdictions and that you are responsible for ensuring that it is lawful for you to use this Website in your jurisdiction. If you are residing in a jurisdiction where it is forbidden by law to participate in the activities offered by or related to this Website, you may not: (i) enter into these Terms; or (ii) access or use this Website. By accessing or using this Website you are explicitly stating that you have verified in your own jurisdiction that your access and use of this Website is permitted.</p>
                </div>

                <!-- Use of Website -->
                <div class="termsEntry">
                    <h2>Use of this Website</h2>
                    <p>You may only access and use this Website for lawful purposes and not for any illegal or unauthorized purpose, including without limitation, in violation of any criminal law, intellectual property law, privacy law or any other applicable law or regulation. You represent and warrant that you are at least the age of majority in your jurisdiction of residence, are legally capable of entering into a binding contract and are a person that is authorized to produce, sell or distribute cannabis. In addition, and without limitation to the foregoing, the following standards and restrictions apply to your access and use of the Website:</p>
                    <ul>
                        <li>(a) You will not copy, reproduce, modify, alter, translate, adapt, reverse engineer, disassemble, decompile, decode, hack, attempt to derive or gain access to the source code of, or create derivative works or improvements of, the Website, or any features or functionality thereof.</li>
                        <li>(b) You will not rent, lease, lend, sell, sublicense, assign, distribute, publish, transfer, publicly display, perform, transmit, stream, broadcast, or make available, the Website, or any features or functionality thereof, to any third party for any reason.</li>
                        <li>(c) You will not remove, delete, alter, obscure, any copyright, trademark, patent, brand element, or other intellectual property or proprietary rights notices provided on the Website.</li>
                        <li>(d) You will not use the Website for purposes of competitive analysis, the development of competing products or services to those offered by Canopy, copying and/or exploiting ideas, features, or functions of the Website, or any other purpose that is to our disadvantage.</li>
                        <li>(e) You will not cause or launch any programs or scripts for the purpose of scraping, indexing, surveying, or otherwise data mining any portion of the Website, or unduly burdening or hindering the operation and/or functionality of any aspect of the Website.</li>
                        <li>(f) You will not introduce or distribute any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
                        <li>(g) You will not attempt to circumvent and/or violate the security of the Website, or otherwise gain unauthorized access to or impair any aspect of the Website, or its related systems or networks.</li>
                        <li>(h) You will not impersonate, attempt to impersonate, or otherwise misrepresent your affiliation with Canopy, a Canopy employee, another user, or any other person or entity (including, without limitation, by using email addresses, associated with any of the foregoing).</li>
                        <li>(i) You will not transmit, or procure the sending of, any advertisements, promotions, “spam”, “junk mail”, “chain letters”, or any other similar solicitation through the Website.</li>
                        <li>(j) You will not provide or contribute any false, inaccurate, or misleading information.</li>
                        <li>(k) You will not engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of the Website, or which, as determined by us, may harm Canopy or users of the Website or expose them to liability.</li>
                        <li>(l) You will not promote or engage in any illegal activity, or advocate, promote, or assist any unlawful act.</li>
                        <li>(m) You will not, in any manner, violate any applicable federal, provincial, state, local, or international law or regulation including, without limitation, any laws regarding the export of data or software, patent, trademark, trade secret, copyright, or other intellectual property, legal rights (including the rights of publicity and privacy of others) or use or access the Website in a manner that could give rise to any civil or criminal liability under applicable laws or regulations or that otherwise may be in conflict with these Terms and our Privacy Policy.</li>
                    </ul>
                </div>

                <!-- Intellectual Property -->
                <div class="termsEntry">
                    <h2>Intellectual Property</h2>
                    <p>You understand and agree that the Website and its entire contents, features, and functionality, including but not limited to all information, software, code, text, displays, graphics, photographs, video, audio, design, presentation, section, and arrangement are owned by Canopy, its licensors, or other providers of such material and are protected in all forms by intellectual property laws, including without limitation copyright law, trademark law, patent law and other laws of Canada and other applicable jurisdictions. Canopy Growth Corporation, 7ACRES, and all related names, logos, product and service names, designs, images, and slogans are trademarks of Canopy or its licensors. You shall not use such marks without the prior written permission of Canopy. By using the Website, you agree to respect all copyright, trademark, and other legal notices, information, and restrictions contained in any of the content that we provide throughout the Website. We do not grant you a right or license to reproduce or create derivative works of the Website or any portion thereof, for any reason.</p>
                </div>

                <!-- Privacy -->
                <div class="termsEntry">
                    <h2>Privacy</h2>
                    <p>We are committed to respecting the privacy of the personal information of the individuals with whom we interact. For information on Canopy’s practices relating to the collection, use, and disclosure of the personal information of those individuals who access or use this Website, please review our Privacy Policy www.scanlearnwin.ca/privacypolicy.</p>
                </div>

                <!-- Disclaimer of Warranties and Limitations of Liability -->
                <div class="termsEntry">
                    <h2>Disclaimer of Warranties and Limitations of Liability</h2>
                    <p>PLEASE READ THIS SECTION CAREFULLY. THIS SECTION LIMITS THE LIABILITY OF CANOPY AND ITS AFFILIATES. EACH OF THE SUBSECTIONS BELOW APPLIES UP TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW.</p>
                    <ul>
                        <li>(a) "AS-IS" BASIS. THE WEBSITE IS PROVIDED ON AN "AS IS," "AS AVAILABLE," “WITH ALL FAULTS AND DEFECTS” BASIS. YOUR USE OF THE WEBSITE IS AT YOUR OWN DISCRETION AND RISK.</li>
                        <li>(b) NO WARRANTIES. CANOPY DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, EXPRESS, IMPLIED OR STATUTORY, NOT EXPRESSLY SET OUT IN THESE TERMS, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. IN ADDITION, CANOPY DOES NOT MAKE ANY REPRESENTATION, WARRANTY OR GUARANTEE WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, SUITABILITY, ACCURACY, CURRENCY OR AVAILABILITY OF THE WEBSITE. WITHOUT LIMITING THE FOREGOING, CANOPY DOES NOT REPRESENT OR WARRANT THAT THE WEBSITE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, OR THAT THE WEBSITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</li>
                        <li>(c) LIMITATION OF LIABILITY. IN NO EVENT WILL CANOPY, ITS AFFILIATES OR THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, SECURITY HOLDERS, PARTNERS OR AGENTS (COLLECTIVELY, THE “CANOPY PARTIES”) BE LIABLE FOR ANY: (A) INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, CONSEQUENTIAL OR OTHER SIMILAR DAMAGES WHATSOEVER (EVEN IF ANY OF THE CANOPY PARTIES IS MADE AWARE OF THE POSSIBILITY OF ANY SUCH DAMAGES); OR (B) ANY DAMAGES FOR LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, LOSS OF OPPORTUNITY IN CONNECTION WITH OR RELATED TO ANY CLAIM, LOSS, DAMAGE, ACTION, SUIT OR OTHER PROCEEDING ARISING FROM, RELATED TO, OR IN CONNECTION WITH YOUR ACCESS, USE, OR RELIANCE ON THE WEBSITE, YOUR INABILITY TO ACCESS OR USE THE WEBSITE, OR ANY CLAIM OR CONTROVERY THAT MAY ARISE FROM ANY DISPUTES BETWEEN YOU AND OTHER USERS, WHETHER THE CLAIM IS BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL OR EQUITABLE THEORY.</li>
                        <li>(d) MAXIMUM LIABILITY. WITHOUT LIMITING ANY OTHER PROVISION IN THESE TERMS, IN NO EVENT WILL THE CANOPY PARTIES’ TOTAL MAXIMUM AGGREGATE LIABILITY TO YOU FOR LOSSES OR DAMAGES YOU SUFFER IN CONNECTION WITH THE WEBSITE OR THESE TERMS IS LIMITED TO TWENTY DOLLARS ($20.00) (CAD).</li>
                        <li>(e) SOLE AND EXCLUSIVE REMEDY. YOUR ONLY RIGHT AND REMEDY IN CASE OF DISSATISFACTION WITH THE WEBSITE OR ANY OTHER GRIEVANCE SHALL BE YOUR AND DISCONTINUATION OF ACCESS TO, OR USE OF THE WEBSITE.</li>
                    </ul>
                </div>

                <!-- Indemnification -->
                <div class="termsEntry">
                    <h2>Indemnification</h2>
                    <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, YOU AGREE TO DEFEND, INDEMNIFY, AND HOLD HARMLESS THE CANOPY PARTIES FROM AND AGAINST ANY CLAIMS, DEMANDS, LIABILITIES, DAMAGES, JUDGMENTS, AWARDS, LOSSES, COSTS, EXPENSES, OR FEES (INCLUDING LEGAL FEES) ARISING OUT OF OR IN CONNECTION WITH: (I) YOUR USE OR MISUSE OF, OR INABILITY TO USE THE WEBSITE; (II) YOUR BREACH OR VIOLATION OF THESE TERMS OR THE PRIVACY POLICY; (III) YOUR VIOLATION OF THE RIGHTS OF ANOTHER PERSON OR ENTITY; OR (IV) YOUR VIOLATION OF ANY APPLICABLE LAW. YOU AGREE THAT YOU WILL COOPERATE AS REASONABLY REQUESTED BY THE CANOPY PARTIES IN THE DEFENCE OF SUCH CLAIMS. THE CANOPY PARTIES RESERVE THE RIGHT TO ASSUME THE EXCLUSIVE CONTROL OF ANY MATTER OTHERWISE SUBJECT TO INDEMNIFICATION BY YOU.</p>
                </div>

                <!-- Termination and Suspension -->
                <div class="termsEntry">
                    <h2>Termination and Suspension</h2>
                    <p>Canopy may, at its sole discretion, for any reason or no reason, at any time and from time to time, with or without notice, terminate or suspend your access to and ability to use this Website. Upon termination or suspension, you shall immediately cease and desist from all use of this Website.</p>
                </div>

                <!-- Governing Law and Disputes -->
                <div class="termsEntry">
                    <h2>Governing Law and Disputes</h2>
                    <p>These Terms and the Privacy Policy (and all other rules, policies, or guidelines incorporated by reference) are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without giving effect to any common law or statutory principles of choice or conflicts of law. You expressly agree that any claims arising out of, related to, or in connection with these Terms, the Website, or your access, use, or reliance on any of the foregoing (a “Dispute”) shall be filed in a court in the City of Toronto, Ontario and you irrevocably attorn to the exclusive jurisdiction of that court. Notwithstanding the foregoing, either party may apply to any court of competent jurisdiction to obtain injunctive or other emergency or similar relief. Except where prohibited by applicable law, you agree to waive any right you may have to commence or participate in any class action against the Canopy Parties relating to any Dispute and you also agree to opt out of any such class proceedings against Canopy.</p>
                </div>

                <!-- General -->
                <div class="termsEntry">
                    <h2>General</h2>
                    <p>
                        <ul>
                            <li>(a) Entire Agreement. These Terms and the Privacy Policy (and all other rules, policies, or guidelines incorporated by reference) contain the entire agreement between you and Canopy with respect to their subject matter, and replace and supersede any prior or contemporaneous understandings, agreements, representations, warranties, and undertakings, whether written or oral, with respect to such subject matter.</li>
                            <li>(b) Waiver. No waiver by us of any of the provisions in these Terms is effective unless it is communicated to you in writing. Our failure to exercise, or our delay in exercising any right or provision in these Terms does not constitute a waiver of such right or provision. A waiver by us of any default does not constitute a waiver of any subsequent default.</li>
                            <li>(c) Number & Gender. Wherever appropriate, words importing the singular number include the plural and vice versa, words importing any gender include all genders, and words importing persons include all entities.</li>
                            <li>(d) Headings. Section headings are for convenience only and do not affect the interpretation of these Terms.</li>
                            <li>(e) Severability. If any provision of these Terms is held unenforceable, then such provision will be modified to reflect the parties’ intention, and all remaining provisions of these Terms shall remain in full force and effect.</li>
                            <li>(f) Assignment. These Terms are not assignable, transferable or sub-licensable by you except with Canopy’s prior written consent. We may assign, transfer or convey these Terms, or any of our rights hereunder to a third party without notice to you.</li>
                            <li>(g) Language. The parties require that these Terms and any related documents be drawn up in the English language.</li>
                            <li>(h) Survival. All provisions that by their nature survive expiration or termination of these Terms shall so survive.</li>
                            <li>(i) Contact Information. If you need to contact us regarding this Website or these Terms, please contact us by e-mail at marketing@canopygrowth.com</li>
                        </ul>
                    </p>
                </div>
                <button class="button_selected default_btn terms_agree_btn" style="margin-bottom: 3em;">GOT IT</button>

            </div>
        </section>

        <!-- Privacy Policy -->
        <section class="pageFrame policyPages privacyPolicy privacyPolicyTab">
            <div class="frameContent">
                <!-- Logo -->
                <img src="images/logo.svg" class="main_logo"/>

                <!-- Privacy Policy -->
                <h1>OUR PRIVACY POLICY</h1>
                <p>Last updated: April 25, 2024</p>
                <p>Canopy Growth Corporation and its subsidiaries (“Canopy”, “we”, “us”, and “our”) are committed to respecting and preserving the privacy of those who access and use this Website. This privacy policy (this “Privacy Policy”) governs the collection, use, and disclosure of personal information that you, the user of the Website (referred to herein as “you” and “your”), provide to us as you use the Website. By accessing or using the Website, you agree that you have read, understood, and agreed to be bound by this Privacy Policy. IF YOU DO NOT ACCEPT THE TERMS OF THIS PRIVACY POLICY, YOU MAY NOT ACCESS OR USE THE WEBSITE.</p>

                <!-- As part of our regular review -->
                <p>As part of our regular review of all our policies and procedures, we may change this Privacy Policy
                from time to time without notice to you. The date on which this Privacy Policy was last updated will
                appear at the top of this page. You should periodically review this Privacy Policy so that you are
                aware of any changes which might affect you. Please also carefully read our Terms found at www.scanlearnwin.ca/privacypolicy prior to using the Website. Any capitalized terms not otherwise defined in this Privacy Policy have
                the same meanings attributed to them in the Terms.</p>

                <!-- PRIVACY POLICY EFFECTIVE FOR CANADA -->
                <h2>PRIVACY POLICY EFFECTIVE FOR CANADA</h2>
                <p>It is Canopy's policy to comply with the privacy legislation within each jurisdiction in which we operate. Sometimes such legislation and/or an individual's right to privacy are different from one jurisdiction to another. The Website is only intended for use by residents of Canada. Therefore, this Privacy Policy covers only those activities that are subject to the provisions of Canada's federal and provincial privacy laws, as applicable.</p>
                <p>This Privacy Policy has a limited scope and application. Consequently, the rights and obligations contained in this Privacy Policy may not be available to all individuals or in all jurisdictions.</p>

                <!-- WHAT INFORMATION DO WE COLLECT? -->
                <h2>WHAT INFORMATION DO WE COLLECT?</h2>
                <p>We collect and use several types of Information from and about you including:</p>
                <ul>
                    <li>
                        <strong>Personal Information:</strong>
                        <p>For the purposes of this Privacy Policy, “Personal Information” means any information about an identifiable individual, as may be defined or limited under applicable privacy legislation. The Personal Information we collect includes information that we can reasonably use to identify you, including contact and identification information, such as your name, email address, date of birth.</p>
                    </li>
                    <li>
                        <strong>Non-Identifiable Information:</strong>
                        <p>For the purposes of this Privacy Policy, “Non-Identifiable Information” means anonymous or de-identified data that is not associated with a particular individual. It also includes information about a business or business contact information. For clarity, Personal Information excludes Non-Identifiable Information. The Non-identifiable Information we collect includes:</p>
                        <ul>
                            <li>Non-personal information, such as statistical or aggregated data.</li>
                            <li>Technical information, including your device type, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, or information about your internet connection, the equipment you use to access our Website, and usage details.</li>
                            <li>Non-personal details about your Site interactions, including the full URLs, clickstream to, through and from our Website (including date and time), page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page.</li>
                            <li>Business contact information, such as the name of the store where you work, the store’s address, the store’s telephone number, and the store’s e-mail address.</li>
                        </ul>
                    </li>
                </ul>

                <!-- HOW DO WE COLLECT INFORMATION? -->
                <h2>HOW DO WE COLLECT INFORMATION?</h2>
                <p>We only collect Information that we believe is reasonably necessary for a legitimate purpose, as further described below. We use different methods to collect your Information, including through:</p>
                <ul>
                    <li>Direct interactions with you when you provide it to us, such as when you fill in forms, or when you correspond with us through the Website, by email, or otherwise.</li>
                    <li>Automated technologies or interactions as you navigate our Website. Information collected automatically may include usage details, IP addresses, and information collected through cookies or other tracking technologies.</li>
                    <li>Third parties, such as our business partners, or publicly available sources.</li>
                </ul>
                <p>The choice to provide us with Personal Information is yours. In certain cases, your decision to withhold Information may limit your ability to fully access and use Website.</p>

                <!-- Information You Provide to Us -->
                <h2>Information You Provide to Us</h2>
                <p>The information we collect directly from you on or through our Website may include:</p>
                <ul>
                    <li>Information that you provide by filling in forms on our Website, or when you report a problem with our Website.</li>
                    <li>Records and copies of your correspondence (including email addresses) if you contact us.</li>
                </ul>

                <!-- Information We Collect Through Cookies and Other Automatic Data Collection Technologies -->
                <h2>Information We Collect Through Cookies and Other Automatic Data Collection Technologies</h2>
                <p>As you navigate through and interact with our Website, we may use cookies or other automatic data collection technologies to collect certain Information about your equipment, browsing actions, and patterns, including:</p>
                <ul>
                    <li>Details of your visits to our Website, including traffic data, location data, logs, and other communication data and the content that you access and use on the Website.</li>
                    <li>Information about your device and internet connection, including your IP address, operating system, and browser type.</li>
                </ul>
                <p>The Information we collect automatically is statistical data and does not include Personal Information, and we may maintain it or associate it with Personal Information we collect in other ways, that you provide to us, or receive from third parties. It helps us to improve our Website and to deliver a better and more personalized service, including by enabling us to estimate our audience size and usage patterns.</p>

                <!-- USE OF YOUR INFORMATION -->
                <h2>USE OF YOUR INFORMATION</h2>
                <p>We will only use your Information for purposes identified in this Privacy Policy, or if required by law. The Information that we collect and store is primarily used for the following purposes:</p>
                <ul>
                    <li>to provide you with access to the Website;</li>
                    <li>to provide you with information relating to our Website;</li>
                    <li>to follow up on your comments and suggestions;</li>
                    <li>to fulfil the purposes for which you provided the Information or that were described when it was collected, or any other purpose for which you provide it;</li>
                    <li>to carry out our obligations and enforce our rights arising from any contracts with you, including to comply with legal requirements;</li>
                    <li>to notify you about changes to our Website or any products or services we offer or provide though it;</li>
                    <li>to allow you to participate in interactive features on our Website; and</li>
                    <li>for any other purpose with your consent.</li>
                </ul>

                <!-- DISCLOSURE OF YOUR INFORMATION -->
                <h2>DISCLOSURE OF YOUR INFORMATION</h2>
                <p>We may disclose Personal Information that we collect, or you provide, as described in this Privacy Policy:</p>
                <ul>
                    <li>to our subsidiaries and affiliates;</li>
                    <li>to contractors, service providers, and other third parties we use to support our business and who are bound by contractual obligations to keep Personal Information confidential and use it only for the purposes for which we disclose it to them;</li>
                    <li>to a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Canopy’s assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Information held by Canopy about our Website users is among the assets transferred;</li>
                    <li>to fulfill the purpose for which you provide it;</li>
                    <li>for any other purpose disclosed by us when you provide the Information; or</li>
                    <li>with your consent.</li>
                </ul>

                <!-- HOW IS YOUR PERSONAL INFORMATION PROTECTED? -->
                <h2>HOW IS YOUR PERSONAL INFORMATION PROTECTED?</h2>
                <p>The security of your Personal Information is important to us. Canopy maintains physical, technical, and procedural safeguards that are appropriate to the sensitivity of the Personal Information we collect in order to safeguard such Personal Information against unauthorized access, collection, use, disclosure, copying, modification, disposal, or destruction. Nonetheless, no method of transmitting or storing information is completely secure. Therefore, we cannot guarantee the security of your Personal Information sent to us via our Website, by email, or otherwise. Likewise, we cannot guarantee the security of your Personal Information stored on our system. The transmission and storage of such Personal Information is entirely at your own risk.</p>

                <!-- RETENTION -->
                <h2>RETENTION</h2>
                <p>Except as otherwise permitted or required by applicable law or regulation, we will only retain your Personal Information for as long as necessary to fulfil the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>

                <!-- ACCESSING AND UPDATING YOUR PERSONAL INFORMATION -->
                <h2>ACCESSING AND UPDATING YOUR PERSONAL INFORMATION</h2>
                <p>It is important that the Personal Information we hold about you is both accurate and current. If any of your Personal Information changes, is inaccurate, or is incomplete, please inform us by contacting us at the address provided below so that we can make any necessary changes. By law, you may have the right to access, verify, and amend the Personal Information that we hold about you.</p>
                <p>We may request specific information from you to help us confirm your identity and your right to access, and to provide you with the Personal Information that we hold about you or make your requested changes. Applicable law may allow or require us to refuse to provide you with access to some or all of the Personal Information that we hold about you, or we may have destroyed, erased, or made your Personal Information anonymous in accordance with our record retention obligations and practices. If we cannot provide you with access to your Personal Information, we will inform you of the reasons why, subject to any legal or regulatory restrictions.</p>

                <!-- YOUR CONSENT IS IMPORTANT TO US -->
                <h2>YOUR CONSENT IS IMPORTANT TO US</h2>
                <p>We may obtain your consent to our collection, use, and disclosure of your Personal Information either expressly or impliedly, depending on the circumstances and the sensitivity of the Personal Information involved. Express consent can be given orally, electronically, or in writing. Implied consent is consent that can reasonably be inferred from your action or inaction.</p>
                <p>Typically, we will seek your consent at the time that we collect your Personal Information. In certain circumstances, your consent may be obtained after collection but prior to our use or disclosure of your Personal Information. If we plan to use or disclose your Personal Information for a purpose not previously identified (either in this Privacy Policy or separately), we will endeavor to advise you of that purpose before such use or disclosure.</p>
                <p>You may change or withdraw your consent at any time, subject to legal or contractual obligations, by contacting our Privacy Officer using the contact information set out below. Please note, however, that changing or withdrawing your consent may affect our ability to provide you with access to the Website or certain features of the Website. We will explain the impact to you at the time to help you with your decision.</p>
                <p>By providing us with Personal Information, you consent to the collection, use, and disclosure of your Personal Information as explained in this Privacy Policy.</p>

                <!-- INTERPRETATION OF THIS PRIVACY POLICY -->
                <h2>INTERPRETATION OF THIS PRIVACY POLICY</h2>
                <p>This Privacy Policy includes examples but is not intended to be restricted in its application to such examples; therefore, where the word "including" is used, it shall mean "including without limitation".</p>
                <p>This Privacy Policy does not create or confer upon any individual any rights, or impose upon Canopy any rights or obligations outside of, or in addition to, any rights or obligations imposed by Canada's federal privacy laws and its provincial privacy laws, as applicable. Should there be, in a specific case, any inconsistency between this Privacy Policy and any such laws, this Privacy Policy shall be interpreted, in respect of that case, to give effect to, and comply with, such privacy laws.</p>
                
                <!-- Changes to Our Privacy Policy -->
                <h2>CHANGES TO OUR PRIVACY POLICY</h2>
                <p>We may update our Privacy Policy from time to time. If we make material changes to how we treat our users' Personal Information, we will post the new Privacy Policy on this page with a notice that the Privacy Policy has been updated. The date the Privacy Policy was last revised is identified at the top of the page. You are responsible for periodically visiting our Website and this Privacy Policy to check for any changes.</p>

                <!-- CONTACT INFORMATION -->
                <h2>CONTACT INFORMATION</h2>
                <p>If you have any questions about this Privacy Policy, or if you wish to access or update your Personal Information
                or change any consent regarding our use or disclosure of your Personal Information, please contact our Privacy Officer at the address set out below: </p>
                <p>Canopy Growth Corporation <br /></p>
                <p>1 Hershey Drive, 
                <br>Smith Falls, Ontario 
                <br>Canada K7A 0A8 
                Attention: Privacy Officer<br>
                E-mail: privacy@canopygrowth.com 
                </p>
                <button class="button_selected default_btn terms_agree_btn" style="margin-bottom: 3em;">GOT IT</button>
        
            </div>
        </section>
    </main>

    <!-- Linking the JavaScript file -->
    <script src="js/index.js"></script>
    <script src="js/stores.js"></script>
    <script src="js/store_selection.js"></script>
    <script src="js/transitions.js"></script>
    <script src="js/pageURLS.js"></script>
    <script src="js/wheel.js"></script>

    <!-- Client -->
    <script src="client/age_gate_interaction.js"></script>
    <script src="client/validate_and_submit.js"></script>
    <script src="client/dataIntake_submission_form.js"></script>
    <script src="client/track_user.js"></script>

</body>
</html>
