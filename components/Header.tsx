import * as React from 'react';
import styles from '../styles/Header.module.css'
import { Component } from "react";
import {ScriptProps} from "next/script";
import Link from "next/link";

interface header {
    children: React.ReactElement[]
}

export default class Header extends Component<header> {

    render(): JSX.Element {

        return (
            <section>
                <section className={styles.header}>
                    <nav className={styles.nav}>
                        <h1 className={styles.navTitle}>
                            <Link href='/'>Blog</Link>
                        </h1>
                        <ul className={styles.navUl}>

                            {this.props.children.length > 1 && this.props.children.map((res, i) => (
                                <li key={i}>{res}</li>
                            ))}

                        </ul>
                    </nav>
                </section>
                <section className={styles.assistHeader}>
                </section>
            </section>
        )
    }
}