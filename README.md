# Image Scale Service
Provides an API to scale an image using graphics magick and the nodejs gm module

## Getting Started
> sudo apt-get update
> sudo apt-get install graphicsmagick --fix-missing
> npm install
> npm test

## Running the app
> npm start 

## The API
* POST /image/scale - Scales an image given the height, and width

## Example
You can select the image and enter the height and width
> http://localhost:3000/test.html
The height and width fields will accept decimals (percentages) so to scale the image by 50% enter .5 for both height and width

