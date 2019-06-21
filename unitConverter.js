function UnitConverter(context, dimension = 'width') {
    const id = 'unit-converter-'+(Math.random() * 10).toString(36).replace('.', ''),
        template = function(unit) {
            const element = document.createElement('template');

            unit = validateUnit(unit);
            unit = unit.match(/\d+\S/) ? unit : `1${unit}`;
            element.innerHTML = `<div id="${id}" style="display:inline-block!important;width:${unit}!important;height:${unit}!important;overflow:hidden!important">&nbsp;</div>`;

            return element.content.firstChild;
        },
        validateUnit = function(unit) {
            const single = unit.replace(/[^%a-z]/gi, '');

            return single.match(/(c|m|re|e)m|p(x|t|c)|v(min|max|h|w)|in|ch|%/) ? unit : '0px';
        },
        toPx = function() {
            const calculated = context.querySelector('#'+id).getBoundingClientRect()[dimension];

            context.querySelector('#'+id).remove();

            return calculated;
        };
    let calculated = [1];

    dimension = (dimension === 'width') ? 'width' : 'height';
    context = context || document.body;

    return {
        convert: function(unit) {
            context.append(template(unit));
            calculated = [...calculated, toPx()];

            return this;
        },
        to: function(unit) {
            context.append(template(unit));
            calculated = [...calculated, toPx()];

            return calculated[calculated.length - 2] / calculated[calculated.length - 1];
        },
        from: function(unit) {
            return this.convert(unit).to('px');
        }
    }
}