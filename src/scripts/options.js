/**
 * Returns an array of all available language options for a select component.
 * @param {Function} t The function used for localization.
 * @return {{value:string, label:string}[]} Options array.
 */
export function getLanguageOptions(t) {
  return [
    {value: "en-US", label: t("language.enUS")},
    {value: "de-DE", label: t("language.deDE")}
  ];
}
