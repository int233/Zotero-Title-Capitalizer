# Zotero-Title-Capitalizer
A script to renders title text in title case of selected Zotero items, capitalizing the first letter of each major word while leaving small words in lowercase

## Features

- Converts selected item titles to Title Case format.
- Handles common small words (e.g., "and", "for", "the", etc.) that are not capitalized unless they are the first word in the title.
- Preserves the case of words that contain uppercase letters or HTML tags.
- Special handling for words such as "in vivo" and "in vitro" to preserve proper formatting.
- Can be used directly in the Zotero environment for batch title case conversion.

## How to Use

1. Zotero > Tools > Developer > Run Javascript
2. Paste the Script
3. Select Items in Zotero
4. Run the Script

## Acknowledgements
The Title Case conversion logic is based on the excellent work by [@rvagg](https://github.com/rvagg), who developed the [titlecase](https://github.com/rvagg/titlecase).

## License
It is available under the MIT license.
