# Templater (i18n)

> [!NOTE]
> **About this i18n Fork / 多言語版について**
>
> This repository is a fork of [SilentVoid13/Templater](https://github.com/SilentVoid13/Templater) that introduces internationalization (i18n) support and Japanese localization resources.
> It is intended for personal and community use. To install this plugin in Obsidian, please use the **[Obsidian42 - BRAT](https://github.com/TfTHacker/obsidian42-brat)** plugin.
> Once the upstream plugin officially supports internationalization and Japanese locales, this repository will be archived.
>
> **Installation via BRAT**:
> 1. Enable the BRAT plugin in Obsidian.
> 2. Run `BRAT: Plugins: Add a beta plugin for testing` from the Command Palette.
> 3. Enter this repository URL: `https://github.com/GennoBou/templater-obsidian-i18n`
>
> **Custom Translations (localize.json)**:
> - You can add custom translations or override text by editing `localize.json` in the plugin folder (`.obsidian/plugins/templater-obsidian-i18n/`).
> - Set your target language code in `"language"` (e.g. `"en"`, `"ja"`, `"de"`), modify `"translations"` / `"resource"`, and reload Obsidian.
> - Deleting `localize.json` and reloading Obsidian will reset it to the default template.
>
> ---
>
> 本リポジトリは、[SilentVoid13/Templater](https://github.com/SilentVoid13/Templater) を多言語化 (i18n) し、日本語リソースを追加したフォーク版です。
> 個人利用・コミュニティ提供を目的としており、Obsidianへのインストールは **[Obsidian42 - BRAT](https://github.com/TfTHacker/obsidian42-brat)** プラグイン経由で行ってください。
> 本家が多言語対応と日本語ロケールを公式実装したとき、本リポジトリの役目は終えアーカイブされます。
>
> **BRATでのインストール手順**:
> 1. Obsidianで BRAT プラグインを有効化
> 2. コマンドパレットから `BRAT: Plugins: Add a beta plugin for testing` を実行
> 3. 本リポジトリのURL (`https://github.com/GennoBou/templater-obsidian-i18n`) を入力
>
> **独自翻訳の追加・カスタマイズ (localize.json)**:
> - プラグインフォルダ内の `localize.json` を編集することで、独自翻訳の追加や上書きが可能です。
> - `"language"` に使用したい言語コード（例: 英語=`"en"`, 日本語=`"ja"`, ドイツ語=`"de"` 等）を入力し、`"translations"` 以下を書き換えてアプリを再起動すると反映されます。
> - `localize.json` を削除してアプリを再起動すると、初期状態に自動復元されます。

---

# Templater Plugin for Obsidian

![templater_logo](./imgs/templater_logo.svg)

[Templater](https://github.com/SilentVoid13/Templater) is a template plugin for [Obsidian.md](https://obsidian.md/). It defines a templating language that lets you insert variables and functions results into your notes. It will also let you execute JavaScript code manipulating those variables and functions.

## Documentation

Check out the complete [documentation](https://silentvoid13.github.io/Templater/) to start using [Templater](https://github.com/SilentVoid13/Templater).

## Warning

[Templater](https://github.com/SilentVoid13/Templater) allows you to execute arbitrary JavaScript code and system commands.

It can be dangerous to execute arbitrary JavaScript code or system commands from untrusted sources. Only run code / commands that you understand, from trusted sources.

## Template Showcase / Questions / Ideas / Help

Go to the [discussion](https://github.com/SilentVoid13/Templater/discussions) tab to ask and find this kind of things.

Don't be shy and share your templates created using [Templater](https://github.com/SilentVoid13/Templater) in the [Template Showcase](https://github.com/SilentVoid13/Templater/discussions/categories/templates-showcase) category. Use [gists](https://gist.github.com/) to share the template file.

## Resources

A list of useful resources about [Templater](https://github.com/SilentVoid13/Templater):

- @GitMurf quick demo `How to setup and run your first Templater JS script`: https://github.com/SilentVoid13/Templater/discussions/187
- @chhoumann Templates showcase: https://github.com/chhoumann/Templater_Templates
- @zachatoo Templates showcase: https://zachyoung.dev/posts/templater-snippets
- @lguenth Templates showcase: https://github.com/lguenth/obsidian-templates
- @tallguyjenks video: https://youtu.be/2234DXKbNgM?t=1944
- @ProductivityGuru videos: https://www.youtube.com/watch?v=cSawi0tYPMM

## Alternatives

- https://github.com/chhoumann/quickadd
- https://github.com/garyng/obsidian-temple
- https://github.com/avirut/obsidian-metatemplates

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on reporting bugs, proposing features, and submitting pull requests.

## License

[Templater](https://github.com/SilentVoid13/Templater) is licensed under the GNU AGPLv3 license. Refer to [LICENSE](https://github.com/SilentVoid13/Templater/blob/master/LICENSE.TXT) for more information.

## Support

If you want to support the current maintainer ([Zachatoo](https://github.com/Zachatoo)), you can [sponsor them on Github](https://github.com/sponsors/Zachatoo) (preferred method) or [buy them a coffee on Ko-fi](https://ko-fi.com/zachatoo).

[![GitHub Sponsors](https://img.shields.io/github/sponsors/zachatoo?label=Sponsor&logo=GitHub%20Sponsors&style=for-the-badge)](https://github.com/sponsors/zachatoo)
[![Ko-fi](https://img.shields.io/badge/ko--fi-donate-3FF6433?label=Ko-fi&logo=Ko-fi&style=for-the-badge&color=%23FF6433)](https://ko-fi.com/zachatoo)

If you want to support the original creator ([SilentVoid13](https://github.com/SilentVoid13)), you can [sponsor them on Github](https://github.com/sponsors/SilentVoid13) (preferred method) or donate something on [**Paypal**](https://www.paypal.com/donate?hosted_button_id=U2SRGAFYXT32Q).

[![GitHub Sponsors](https://img.shields.io/github/sponsors/silentvoid13?label=Sponsor&logo=GitHub%20Sponsors&style=for-the-badge)](https://github.com/sponsors/silentvoid13)
[![Paypal](https://img.shields.io/badge/paypal-silentvoid13-yellow?style=social&logo=paypal)](https://www.paypal.com/donate?hosted_button_id=U2SRGAFYXT32Q)


