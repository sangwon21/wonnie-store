# Wonnie-store

## What is this?

Get start with a lightweight way of, redux-like, handling data.

## Installation

`npm i wonnie-store`

## Example

```
import createStore from 'wonnie-store';

const reducer = (state, action) {
    switch(action.type) {
        default:
            return {...state};
    }
}

const store = createStore(reducer);

```

## Elaboration

- It supports the basic version of functions that redux is serving.

- It goes along with an unidirectional data flow such as react.

- The store is a kind of storehouse, keeping data as a state in itself.

- It requires 'reducer' to change data in the store - strongly suggested to define and divide own actions for the sake of code readability.

- subscribe function sets a relationship between the store and subscribers; when action is dispatched, subscribers are executed. It returns an unsubscribe function for breaking the relationship built.

- getState function gets a state from the store.

- dispatch function is used to make a change in data kept in the store.
