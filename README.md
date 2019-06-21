# unit-converter
Convert css units to other css units

This small library allows you to convert any css unit to any other css unit!

## Features

### Converting units

#### Syntax

`var converted = UnitConverter([context[, dimension]]).convert(unit1).to(unit2)`

##### Parameters

**`context` optional**<br>
A `HTMLElement`<br>
The context in which the conversion takes place. Helpfull if you want to convert percentages. Default is `document.body`.

**`dimension` optional**<br>
`width` or `height`.<br>
If you want to convert height or width, default is `width`. Also helpful if you are convertig percentages.

**`unit1`**<br>
The unit you want to convert from. Can be any valid CSS-Unit and can also have a numeral prefix eg. `1em` or just `em`. If no number is prefixed the default number will be 1.

**`unit2`**<br>
The unit you want to convert to. Can be any valid CSS-Unit and can also have a numeral prefix eg. `1em` or just `em`. If no number is prefixed the default number will be 1.
