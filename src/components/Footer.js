import React from "react";
import '../assets/css/index.css';
import '../assets/css/footer.css'
import '../assets/js/main.js'

import logo from '../assets/images/footer/wwlogo.svg'
import facebook from '../assets/images/footer/facebook.svg'
import instagram from '../assets/images/footer/instagram.svg'
import twitter from '../assets/images/footer/twitter.svg'
import youtube from '../assets/images/footer/youtube.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__border">
                <article className="footer__credits-container">
                    <section className="footer__credits-up">
                        <ul className="footer-credits-up__links-item-list">
                            <li className="footer-credits-up__link-item">
                            <a href="https://www.wizardingworld.com/about-us" className="footer-credits-up__link">About Us</a>
                            </li>
                            <li className="footer-credits-up__link-item">
                                <a href="https://www.wizardingworld.com/press" className="footer-credits-up__link">Press</a>
                            </li>
                            <li className="footer-credits-up__link-item">
                                <a href="https://help.wizardingworld.com/hc/en-us" className="footer-credits-up__link">FAQs</a>
                            </li>
                            <li className="footer-credits-up__link-item">
                                <a href="https://www.wizardingworld.com/terms" className="footer-credits-up__link">Terms &amp; Conditions</a>
                            </li>
                            <li className="footer-credits-up__link-item">
                                <a href="https://www.wizardingworld.com/privacy#choices" className="footer-credits-up__link">Ad Choices</a>
                            </li>
                            <li className="footer-credits-up__link-item">
                                <a href="https://www.wizardingworld.com/privacy" className="footer-credits-up__link">Privacy &amp; Cookies</a>
                            </li>
                            <li className="footer-credits-up__link-item">
                                <a href="https://www.wizardingworld.com/childrens-privacy-policy" className="footer-credits-up__link">Children's Privacy Policy</a>
                            </li>
                            <li className="footer-credits-up__link-item">
                                <a href="https://www.wizardingworld.com/legals" className="footer-credits-up__link">Legals</a>
                            </li>
                        </ul>
                        <a href="https://www.wizardingworld.com/" className="footer-credits-up__logo-container">
                            <figure className="footer-credits-up__logo-content">
                                <img src={ logo } alt="wizardingWorldLogo" className="footer-credits-up__logo" />
                            </figure>
                        </a>
                    </section>

                    <hr className="footer__line-divider"/>

                    <section className="footer__credits-down">
                        <article className="footer-credits-down__paragraphs-content">
                            <h3 className="footer-credits-down__title"> &copy; Wizarding World Digital 2022 </h3>
                            <p className="footer-credits-down__paragraph">Looking for Pottermore? Wizarding World is the new official home of Harry Potter &
                                Fantastic
                                Beasts. Join the Fan Club and bring your traits with you.</p>
                            <p className="footer-credits-down__paragraph">Brought to you by Wizarding World Digital, a partnership between Warner Bros. and
                                Pottermore.
                                Delivering the latest news and official products from the Wizarding World and our partners.
                            </p>
                            <p className="footer-credits-down__paragraph">TM & &copy; WBEI. WIZARDING WORLD Publishing and Theatrical Stage Rights &copy; J.K. Rowling.
                            </p>
                        </article>

                        <ul className="footer-credits-down__links-list">
                            <li className="footer-credits-down__links">
                            <a href="https://www.youtube.com/channel/UChPRO1CB_Hvd0TvKRU62iSQ" className="footer-credits-down__link-icon">
                                <img src= { youtube } alt="youtubeIcon" className="footer-credits-down__icon"/>
                            </a>
                            </li>
                            <li className="footer-credits-down__links">
                                <a href="https://www.facebook.com/wizardingworld" className="footer-credits-down__link-icon">
                                    <img src= { facebook } alt="facebookIcon" className="footer-credits-down__icon"/>
                                </a>
                            </li>
                            <li className="footer-credits-down__links">
                                <a href="https://www.instagram.com/wizardingworld/" className="footer-credits-down__link-icon">
                                    <img src= { instagram } alt="instagramIcon" className="footer-credits-down__icon"/>
                                </a>
                            </li>
                            <li className="footer-credits-down__links">
                                <a href="https://twitter.com/wizardingworld" className="footer-credits-down__link-icon">
                                    <img src= { twitter } alt="twitterIcon" className="footer-credits-down__icon"/>
                                </a>
                            </li>
                        </ul>
                    </section>
                </article>
            </div>
        </div>
    );
}

export default Footer;