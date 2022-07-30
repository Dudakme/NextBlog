import * as React from 'react';
import styles from '../styles/Footer.module.css'
import { Component } from "react";
import {ScriptProps} from "next/script";

export default class Header extends Component<ScriptProps> {

    render(): JSX.Element {

        return (
            <section className={styles.Footer}>
                later todo...
            </section>
        )
    }
}