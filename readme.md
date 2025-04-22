# Truish

A lightweight utility to determine the truth value of strings

## Installation

```bash
npm install truish
```

## Usage

```javascript
import truish from "truish";
truish("true"); // true
truish("false"); // false
truish("1"); // true
truish("0"); // false
truish("yes"); // true
truish("no"); // false
truish("on"); // true
truish("off"); // false
```
