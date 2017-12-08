# Alpha Remover

A color converter tool that takes any rgba color and removes the alpha transparency, while preserving the shade. Useful for designers that are looking to work with lighter hues of a color without using transparencies.

note: color conversion formula is:

_target * overlay + (1 - opacity) * background_

where background is assumed to be white.

## Live Demo

[Convert a color](https://elidlocke.github.io/alpha_remover/) yourself at this url: https://elidlocke.github.io/alpha_remover/

## Built With

Good old javascript, html & css

## Acknowledgments

* Shoutout to the author of [this article](https://www.viget.com/articles/equating-color-and-transparency) for providing the formula for color conversion.