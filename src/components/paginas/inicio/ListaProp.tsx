import React, { useContext } from 'react';
import { Accordion, AccordionContext, Card, useAccordionButton } from "react-bootstrap";
import styles from './ListaProp.module.css'

function ContextAwareToggle({ children, eventKey, callback }:any) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <button
            type="button"
            className={styles.btnList}
            onClick={decoratedOnClick}
            style={{ backgroundColor: isCurrentEventKey ? '#c5c5c5' : '#f7f7f7' }}
        >
            {children}
        </button>
    );
}

const ListaProp = () => {
    return (
        <div className={styles.containerList}>
            <Accordion defaultActiveKey="0">
                <Card className={styles.cardcard}>
                    <Card.Header className={styles.cardheader}>
                        <ContextAwareToggle  eventKey="1">Vista de lista</ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className={styles.bodyList}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card mb-3">
                                        <div className="row">
                                            <div className="col-4">
                                                <img className={styles.cardImg} src="/images/avatares/2.svg" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className={styles.cardTitle}>
                                                    Casa en venta / Lagos del Sol
                                                </div>
                                                <div className={styles.cardPrecio}>
                                                    $13,500,000.00
                                                </div>
                                                <div className={styles.cardDescription}>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero. Totam praesentium sed est!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card mb-3">
                                        <div className="row">
                                            <div className="col-4">
                                                <img className={styles.cardImg} src="/images/avatares/2.svg" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className={styles.cardTitle}>
                                                    Casa en venta / Lagos del Sol
                                                </div>
                                                <div className={styles.cardPrecio}>
                                                    $13,500,000.00
                                                </div>
                                                <div className={styles.cardDescription}>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero. Totam praesentium sed est!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card mb-3">
                                        <div className="row">
                                            <div className="col-4">
                                                <img className={styles.cardImg} src="/images/avatares/2.svg" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className={styles.cardTitle}>
                                                    Casa en venta / Lagos del Sol 2 pisos y alberca
                                                </div>
                                                <div className={styles.cardPrecio}>
                                                    $13,500,000.00
                                                </div>
                                                <div className={styles.cardDescription}>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero. Totam praesentium sed est!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card mb-3">
                                        <div className="row">
                                            <div className="col-4">
                                                <img className={styles.cardImg} src="/images/avatares/2.svg" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className={styles.cardTitle}>
                                                    Casa en venta / Lagos del Sol
                                                </div>
                                                <div className={styles.cardPrecio}>
                                                    $13,500,000.00
                                                </div>
                                                <div className={styles.cardDescription}>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero. Totam praesentium sed est!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card mb-3">
                                        <div className="row">
                                            <div className="col-4">
                                                <img className={styles.cardImg} src="/images/avatares/2.svg" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className={styles.cardTitle}>
                                                    Casa en venta / Lagos del Sol
                                                </div>
                                                <div className={styles.cardPrecio}>
                                                    $13,500,000.00
                                                </div>
                                                <div className={styles.cardDescription}>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero. Totam praesentium sed est!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card mb-3">
                                        <div className="row">
                                            <div className="col-4">
                                                <img className={styles.cardImg} src="/images/avatares/2.svg" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className={styles.cardTitle}>
                                                    Casa en venta / Lagos del Sol
                                                </div>
                                                <div className={styles.cardPrecio}>
                                                    $13,500,000.00
                                                </div>
                                                <div className={styles.cardDescription}>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero. Totam praesentium sed est!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card mb-3">
                                        <div className="row">
                                            <div className="col-4">
                                                <img className={styles.cardImg} src="/images/avatares/2.svg" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className={styles.cardTitle}>
                                                    Casa en venta / Lagos del Sol
                                                </div>
                                                <div className={styles.cardPrecio}>
                                                    $13,500,000.00
                                                </div>
                                                <div className={styles.cardDescription}>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero. Totam praesentium sed est!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card mb-3">
                                        <div className="row">
                                            <div className="col-4">
                                                <img className={styles.cardImg} src="/images/avatares/2.svg" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className={styles.cardTitle}>
                                                    Casa en venta / Lagos del Sol
                                                </div>
                                                <div className={styles.cardPrecio}>
                                                    $13,500,000.00
                                                </div>
                                                <div className={styles.cardDescription}>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero. Totam praesentium sed est!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card mb-3">
                                        <div className="row">
                                            <div className="col-4">
                                                <img className={styles.cardImg} src="/images/avatares/2.svg" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className={styles.cardTitle}>
                                                    Casa en venta / Lagos del Sol
                                                </div>
                                                <div className={styles.cardPrecio}>
                                                    $13,500,000.00
                                                </div>
                                                <div className={styles.cardDescription}>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero. Totam praesentium sed est!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card mb-3">
                                        <div className="row">
                                            <div className="col-4">
                                                <img className={styles.cardImg} src="/images/avatares/2.svg" alt="..." />
                                            </div>
                                            <div className="col">
                                                <div className={styles.cardTitle}>
                                                    Casa en venta / Lagos del Sol
                                                </div>
                                                <div className={styles.cardPrecio}>
                                                    $13,500,000.00
                                                </div>
                                                <div className={styles.cardDescription}>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero. Totam praesentium sed est!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};

export default ListaProp;
