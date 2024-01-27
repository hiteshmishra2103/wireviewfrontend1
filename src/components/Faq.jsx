import React, { useState } from 'react';
import styles from '../styles/Faq.module.css';

const questions = [
    {
        question: 'Is free shipping available?',
        answer: 'Yes, free ground shipping is available for electronics orders. View our Shipping and Delivery page for details.'
    },
    {
        question: 'What are your return policies?',
        answer: "We offer a 30 day money back guarantee with 100% satisfaction guaranteed. We will be happy to refund or exchange unopened products within 30 days. Damaged items can be serviced via manufacturer's warranty. Clearance items are not returnable unless damaged during the shipping process."
    },
    {
        question: "Do you offer gift wrapping?",
        answer: "Yes, we can wrap your item in our signature box with tissue paper, and include a card with your personal message. The option is available during checkout for an additional $5. Please note this service is not available for wireless speaker purchases."
    },
    {
        question: "What is your return policy?",
        answer: "All products purchased from our website may be returned within 14 days of purchase for a full refund less shipping costs, no questions asked. International return orders may be subject to return shipping fees. To initiate such a return please contact us."
    }
];

const Faq = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggle = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null); // Collapse if already expanded
        } else {
            setExpandedIndex(index); // Expand if not expanded
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.accordion}>
                {questions.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.title} onClick={() => toggle(index)}>
                            <h2>{item.question}</h2>
                            <span>{expandedIndex === index ? '-' : '+'}</span>
                        </div>
                        {expandedIndex === index && (
                            <div className={styles.content}>
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
