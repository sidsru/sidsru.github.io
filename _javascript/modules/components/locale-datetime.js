/**
 * Update month/day to locale datetime
 *
 * Requirement: <https://github.com/iamkun/dayjs>
 */

/* A tool for locale datetime */
class LocaleHelper {
  static get attrTimestamp() {
    return 'data-ts';
  }

  static get attrDateFormat() {
    return 'data-df';
  }

  static get locale() {
    return document.documentElement.getAttribute('lang').substring(0, 2);
  }

  static getTimestamp(elem) {
    return Number(elem.getAttribute(this.attrTimestamp)); // unix timestamp
  }

  static getDateFormat(elem) {
    return elem.getAttribute(this.attrDateFormat);
  }
}

function formatPostAge(published) {
  const diffSeconds = Math.max(0, dayjs().diff(published, 'second'));

  if (diffSeconds < 60) {
    return '포스팅 방금전';
  }

  if (diffSeconds < 3600) {
    return `포스팅 ${Math.floor(diffSeconds / 60)}분전`;
  }

  if (diffSeconds < 86400) {
    return `포스팅 ${Math.floor(diffSeconds / 3600)}시간전`;
  }

  if (diffSeconds < 2592000) {
    return `포스팅 ${Math.floor(diffSeconds / 86400)}일전`;
  }

  if (diffSeconds < 31536000) {
    return `포스팅 ${Math.floor(diffSeconds / 2592000)}개월전`;
  }

  return `포스팅 ${Math.floor(diffSeconds / 31536000)}년전`;
}

export function initLocaleDatetime() {
  dayjs.locale(LocaleHelper.locale);
  dayjs.extend(window.dayjs_plugin_localizedFormat);

  document
    .querySelectorAll(`[${LocaleHelper.attrTimestamp}]`)
    .forEach((elem) => {
      const date = dayjs.unix(LocaleHelper.getTimestamp(elem));

      if (elem.hasAttribute('data-post-age')) {
        elem.querySelector('em').textContent = formatPostAge(date);
        elem.removeAttribute(LocaleHelper.attrTimestamp);
        return;
      }

      const text = date.format(LocaleHelper.getDateFormat(elem));
      elem.textContent = text;
      elem.removeAttribute(LocaleHelper.attrTimestamp);
      elem.removeAttribute(LocaleHelper.attrDateFormat);

      // setup tooltips
      if (
        elem.hasAttribute('data-bs-toggle') &&
        elem.getAttribute('data-bs-toggle') === 'tooltip'
      ) {
        // see: https://day.js.org/docs/en/display/format#list-of-localized-formats
        const tooltipText = date.format('llll');
        elem.setAttribute('data-bs-title', tooltipText);
      }
    });
}
