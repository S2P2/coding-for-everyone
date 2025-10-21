# About This Project

This guide was created with the goal of making the fundamental concepts of programming accessible to absolute beginners, regardless of their background. We focus on the "why" before the "how," using simple analogies and interactive examples.

The aim is not to make you a professional developer overnight, but to give you the confidence to read, understand, and start using code in your own work and life.

---

### Inspiration and Motivation

This project draws inspiration from several excellent resources. I admire the tutorial style of [Kaggle](https://www.kaggle.com/), but wanted to create something more language-agnostic and faster to get started with. The ability to run code directly in the browser, as seen in the official [Rust Lang Book](https://doc.rust-lang.org/book/), was a key feature I wanted to emulate.

The primary motivation, however, is to create a high-quality, interactive guide for the Thai-speaking community. While some Thai tutorials exist, many rely on external tools like Google Colab. This guide aims to be a self-contained and seamless learning experience.

### How This Guide Was Built

This project was also a personal experiment in using modern tools to create educational content.

**Authoring with AI:** The guide is an exploration of using AI to help generate technical tutorials. The content is first drafted in English with the help of AI assistants, then refined and prepared for translation into Thai. This process leverages the AI's strength in English as a solid foundation for high-quality content.

**The mdBook Platform:** I chose to use [mdBook](https://rust-lang.github.io/mdBook/) to build the guide, partly out of a desire to learn the tool myself and explore its capabilities for creating clean, book-like experiences for readers. Two crucial plugins make the interactive features possible:

- **[mdbook-repl](https://github.com/mr-addict/mdbook-repl):** This allows code snippets to be run directly in the browser, client-side.
- **[mdbook-langtabs](https://github.com/nx10/mdbook-langtabs):** This provides the language-switching tabs, which I've slightly modified to remember the user's selected language across pages.

### Project Status & Language Support

This tutorial is a living document and is still under development.

Currently, the interactive code examples fully support **Python** and **JavaScript**.

You will also find code snippets for **Go**, **C#**, and **Rust**. For now, these are _display-only_ and cannot be run in the browser. This is due to a current limitation in the `mdbook-repl` plugin that powers the interactive execution. I hope to add support for them in the future as the tooling evolves.

You might wonder why Rust, a language often considered challenging for new programmers, is included. The simple reason is that this guide is built using mdBook, a tool written in Rust! Including it is a small nod to the technology that makes this project possible.

### License

"[Coding for Everyone](https://s2p2.github.io/coding-for-everyone/)" © 2025 by [Sathianphong Phongsathian](https://github.com/S2P2) is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

[![CC BY-NC-SA 4.0](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

You are free to share and adapt this material for non-commercial purposes, as long as you provide attribution and share your contributions under the same license.

### Feedback

If you have any feedback or suggestions for improvement, they are greatly appreciated!
