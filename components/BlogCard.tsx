import * as React from 'react';
import { Component } from "react";
import styles from '../styles/Blog.module.css'

type props = {
    question: string,
    description: string,
    date: string
}

export default class BlogCard extends Component<props> {

    render(): JSX.Element {
        const { question, description, date } = this.props

        return (
            <div className={styles.container}>
                <p>{date}</p>
                <h1>{question}</h1>
                <p>{description}</p>
            </div>
        )
    }
}