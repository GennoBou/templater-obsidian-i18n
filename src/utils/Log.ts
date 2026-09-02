import { Notice } from "obsidian";
import { TemplaterError } from "./Error";
import { t } from "i18n";

export function log_update(msg: string): void {
    const notice = new Notice("", 15000);
    const messageEl = createFragment((frag) => {
        frag.createEl("b", { text: t("Templater update") });
        frag.createSpan({ text: ":" });
        frag.createEl("br");
        frag.createSpan({ text: msg });
    });
    notice.messageEl.appendChild(messageEl);
}

export function log_error(e: Error | TemplaterError): void {
    const notice = new Notice("", 8000);
    const messageEl = createFragment((frag) => {
        frag.createEl("b", { text: t("Templater error") });
        frag.createSpan({ text: ":" });
        frag.createEl("br");
        frag.createSpan({ text: e.message });
        if (e instanceof TemplaterError && e.console_msg) {
            frag.createEl("br");
            frag.createSpan({
                text: t("Check console for more information"),
            });
            console.error(`Templater Error:`, e.message, "\n", e.console_msg);
        }
    });
    notice.messageEl.appendChild(messageEl);
}
