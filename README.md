# Lister Selector

A Process module that uses Lister/ListerPro, but with a selector string input instead of the normal InputfieldSelector filters.

## Features

* For power users, typing a selector string is often faster and more intuitive than fiddling with InputfieldSelector. It also lets you copy/paste selector strings that you might be using somewhere else in your code.

* Allows the Lister rows to be sorted by multiple fields (not possible in Lister/ListerPro)

* Allows the use of OR-groups (not possible in Lister/ListerPro)

* If ListerPro is installed you can run ListerPro actions on the listed pages - the available actions are defined in the module config.

* Bookmarks can be configured in the module config and accessed via the flyout menu for the module page. For your convenience you can copy/paste a bookmark string from the note at the bottom of the Lister Selector results.

## Usage

* Type your selector string on the Selector tab. The selector is applied when the "Selector string" field is blurred, so hit Tab when you have finished typing your selector.

* Unlike Lister/ListerPro, you can't sort results by clicking the column headings. Control the sort within the selector string instead.

* Superusers can jump to the module config (e.g. to create a bookmark) by clicking the cog icon at the top right of the module interface.

* The module is mostly intended for use by superusers, because in most cases site editors won't understand the ProcessWire selector string syntax. If you want another role to be able to access Lister Selector then give the role the "lister-selector" permission. Only superusers can define bookmarks because in ProcessWire module config screens are only accessible to superusers.

## Screenshots

### Process page

![lister-selector](https://user-images.githubusercontent.com/1538852/115847323-f1842e80-a476-11eb-87d2-d4999fea5b41.png)

### Module config (when ListerPro is installed)

![lister-selector-config](https://user-images.githubusercontent.com/1538852/115847353-f9dc6980-a476-11eb-973d-ad285a35e9cc.png)

## Advanced

If for any reason you want to create dynamic bookmark links to Lister Selector for a given selector you can do that like this:

```php
/** @var $pls ProcessListerSelector */
$pls = $modules->get('ProcessListerSelector');
// Define selector
$selector = "template=foo, title%=bar";
// Define columns (optional)
$columns = 'title,modified';
$pls_link = $pls->getProcessPage()->url . '?bm=' . $pls->urlSafeBase64Encode($selector . ':' . $columns);
echo "<a href='$pls_link'>My link</a>";
```
