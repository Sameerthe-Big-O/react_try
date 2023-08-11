import React, { Component } from 'react';
import './hello.css';
import { useState } from 'react';

export default class Hello extends Component {


    render() {
        let user = {
            name: 'Hedy Lamarr',
            imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
            imageSize: 90,
        };

        let content;
        let value = true;
        if (value) {
            content = <h1>sameer</h1>;
        } else {
            content = <h1>No sameer</h1>;
        }
        const products = [
            { title: 'Cabbage', isFruit: false, id: 1 },
            { title: 'Garlic', isFruit: false, id: 2 },
            { title: 'Apple', isFruit: true, id: 3 },
        ];
        const listItems = products.map(product =>
            <li key={product.id}>
                {product.title}
            </li>
        );
        function handleClick() {
            alert('You clicked me!');
        }


        return (
            <>
                <h1>Hello, {this.props.name}!</h1>
                <h1 className="avatar">
                    hello the dumy text
                </h1>
                {content}
                <h1>{user.name}</h1>
                <ul>
                    {listItems}
                </ul>
                <button onClick={handleClick}>
                    Click me
                </button>
                <img
                    className="avatar"
                    src={user.imageUrl}
                    alt={'Photo of ' + user.name}
                    style={{
                        width: user.imageSize,
                        height: user.imageSize
                    }}
                />
            </>
        )
    }

}