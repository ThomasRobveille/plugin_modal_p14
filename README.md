<br />
<div align="center">
  <h3 align="center">Plugin Modal Project 14</h3>

  <p align="center">
    Plugin React for HR_net
    <br />
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

```bash
npm install --save plugin_modal_p14
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Import the element inside the component you want, import useEffect from react 

The openModal function will open the modal for you

Exemple:
```jsx
import Modal from 'plugin_modal_p14'
import { useEffect } from 'react'

function Yourfunction() {
  useEffect(() => {
    let containerModal = document.getElementById('containerModal');
    containerModal.style.display = 'none';
  }, []);

  const openModal = () => {
    let containerModal = document.getElementById('containerModal');
    containerModal.style.display = 'block';
  }

  return (
      <Modal {"text will be display"}/>
      <button onClick={() => openModal()}></button>
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Thomas Robveille - Thomasrobveille@gmail.com

Plugin Modal Project 14: [https://github.com/ThomasRobveille/plugin_modal_p14](https://github.com/ThomasRobveille/plugin_modal_p14)

<p align="right">(<a href="#readme-top">back to top</a>)</p>