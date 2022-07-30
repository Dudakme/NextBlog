import { ScriptProps } from 'next/script';
import { Component } from 'react';
import Link from 'next/link'

import Header from './Header'
import Footer from './Footer'
import * as React from "react";




export default class Layout extends Component<ScriptProps> {
    render(): JSX.Element {
        return (
            <div>
                <Header>
                    <p>
                        <Link href="/compose">compose</Link>
                    </p>
                    <p>about me</p>
                </Header>
                <section>
                    {this.props.children}
                </section>
                <Footer />
            </div>
        )
    }
}