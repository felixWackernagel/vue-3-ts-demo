import { createI18n } from "vue-i18n";
import messages from "./messages";

// more example https://phrase.com/blog/posts/ultimate-guide-to-vue-localization-with-vue-i18n/

const i18n = createI18n({
  locale: "de",
  messages,
});
export default i18n;
