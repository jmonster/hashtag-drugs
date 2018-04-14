/**
 * A helper for displaying currency values.
 *
 * - Render a simple currency value (renders "$1,000.00"):
 *
 *   ```handlebars
 *   {{format-currency 1000}}
 *   ```
 *
 * - Render a value passed in in cents (renders "$1.00"):
 *
 *   ```handlebars
 *   {{format-currency 100 unit='cents'}}
 *   ```
 *
 * - Display "Free" if the price is (renders "Free"):
 *
 *   ```handlebars
 *   {{format-currency 0 showFree=true}}
 *   ```
 *
 * - Append a suffix onto the price (will not display for Free items if
 *   `showFree` is true.
 *
 *   ```handlebars
 *   {{format-currency 5 suffix='/month'}}
 *   ```
 *
 * - Display some other value if a condition in the current context is true
 *   (renders "Attached" if `isAttached` in the current context is truthy,
 *   otherwise, "$100.00"):
 *
 *   ```handlebars
 *   {{format-currency 100 override='isAttached' overrideValue='Attached'}}
 *   ```
 * @class Ember.Handlebars.helpers.format-currency
 */

import { helper } from '@ember/component/helper';

export function currency(value, options) {
  // depending on how this helper is invoked value with either be an array or a number
  value = value instanceof Array ? value[0] : value;
  value = value ? value : 0;

  const unit = options.unit || 'dollars';
  const showFree = options.showFree || false;
  const suffix = options.suffix || '';

  if (options.override) {
    return options.overrideValue;
  }

  if (unit === 'cents') { value /= 100; }

  if (showFree && value === 0) {
    return 'Free';
  } else {
    return `$${insertCommas(value.toFixed(2))}${suffix}`;
  }

  function insertCommas(commalessValue) {
    commalessValue = String(commalessValue);
    const parts = commalessValue.split('.');
    let preDecimal = parts[0];
    const postDecimal = parts.length > 1 ? `.${parts[1]}` : '';
    const regex = /(\d+)(\d{3})/;

    while (regex.test(preDecimal)) {
      preDecimal = preDecimal.replace(regex, '$1' + ',' + '$2');
    }

    return preDecimal + postDecimal;
  }
}

export default helper(currency);
