# Ignored accessibility checker error ids

## ID 8

- **requirement**: A long description is used for each img element that does not have Alt text conveying the same information as the image.
- **error**: img element may require a long description.
- **description**: img element must contain a longdesc attribute.
- **rationale**: Complex images require a long description if the image is not described within the document. If the image does require a long description, then create the description file and link to it using the longdesc attribute.
- **[Example audit containing error ID 8](output/httpsuxbrightonorguk.html)**

## ID 11

- **requirement**: Alt text for all img elements contains all text in the image unless the image text is decorative or appears elsewhere in the document.
- **error**: Image may contain text that is not in Alt text.
- **description**: This error is generated for all img elements that have a width and height greater than 50.
- **rationale**: Not found
- **[Example audit containing error ID 11](output/httpsuxbrightonorguk.html)**

## ID 14

- **requirement**: For all img elements, text does not refer to the image by color alone.
- **error**: Image may be using color alone.
- **description**: This error is generated for all img elements that have a width and height greater than 100.
- **rationale**: You should not describe an image, or part of an image, using color alone. For example, when referring to a photograph, you should not say "my son is wearing a red coat". Instead say "my son is third from the left wearing a red coat".
- **[Example audit containing error ID 14](output/httpsuxbrightonorguk.html)**

## ID 16

- **requirement**: Alt text for all img elements is the empty string ("") if the image is decorative.
- **error**: Alt text is not empty and image may be decorative.
- **description**: Decorative images must have empty string ("") Alt text.
- **rationale**: Not found
- **[Example audit containing error ID 16](output/httpsuxbrightonorguk.html)**

## ID 19

- **requirement**: Link text is meaningful when read out of context.
- **error**: Link text may not be meaningful.
- **description**: All a (anchor) elements that contains any text will generate this error.
- **rationale**: Not found
- **[Example audit containing error ID 19](output/httpsuxbrightonorguk.html)**

## ID 28

- **requirement**: A "skip to content" link appears on all pages with blocks of material prior to the main document.
- **error**: Document may be missing a "skip to content" link.
- **description**: Provide a mechanism to bypass blocks of material that are repeated on multiple Web units.
- **rationale**: Not found
- **[Example audit containing error ID 28](output/httpsuxbrightonorguk.html)**

## ID 53

- **requirement**: title is not placeholder text.
- **error**: title contains placeholder text.
- **description**: title element content can not be any one of (case insensitive) "the title", "title", "this is the title".
- **rationale**: Not found
- **[Example audit containing error ID 53](output/httpsuxbrightonorgukjobstest.html)**

## ID 54

- **requirement**: title describes the document.
- **error**: title might not describe the document.
- **description**: This error is generated for each title element.
- **rationale**: All contents, including individual frames in a frameset, should have a title element that defines, in a simple phrase, the purpose of the content.
- **[Example audit containing error ID 54](output/httpsuxbrightonorguk.html)**

## ID 55

- **requirement**: input should not use color alone.
- **error**: input possibly using color alone.
- **description**: All input elements, except those with a type of "hidden", will generate this error.
- **rationale**: Not found
- **[Example audit containing error ID 55](output/httpsuxbrightonorguk.html)**

## ID 82

- **requirement**: All p elements are not used as headers.
- **error**: p element may be misused (could be a header).
- **description**: All p element content must not be marked with either b, i, u, strong, font, em.
- **rationale**: Not found
- **[Example audit containing error ID 82](output/httpsuxbrightonorguk2013.html)**

## ID 86

- **requirement**: Color alone should not be used in the script.
- **error**: script may use color alone.
- **description**: This error will be generated for all script elements.
- **rationale**: Not found
- **[Example audit containing error ID 86](output/httpsuxbrightonorguk.html)**

## ID 87

- **requirement**: script should not cause screen flicker.
- **error**: script may cause screen flicker.
- **description**: This error will be generated for all script elements.
- **rationale**: Not found
- **[Example audit containing error ID 87](output/httpsuxbrightonorguk.html)**

## ID 89

- **requirement**: User interface for script must be accessible.
- **error**: script user interface may not be accessible.
- **description**: This error will be generated for all script elements.
- **rationale**: Not found
- **[Example audit containing error ID 89](output/httpsuxbrightonorguk.html)**

## ID 110

- **requirement**: Words and phrases not in the document's primary language are marked.
- **error**: Words or phrases that are not in the document's primary language may not be identified.
- **description**: If the body element contains more than 10 characters (English) then this error will be generated.
- **rationale**: If you use a number of different languages on a page, make sure that any changes in language are clearly identified by use of the lang attribute.
- **[Example audit containing error ID 110](output/httpsuxbrightonorguk.html)**

## ID 123

- **requirement**: All input elements, type of "checkbox", have a label that is positioned close to the control.
- **error**: input element label, type of "checkbox" is not positioned close to control.
- **description**: input element with a type attribute value of "checkbox" must have an associated label element positioned close to it.
- **rationale**: Not found
- **[Example audit containing error ID 123](output/httpsuxbrightonorguk.html)**

## ID 178

- **requirement**: Alt text for all img elements that are not used as source anchors conveys the same information as the image.
- **error**: Alt text does not convey the same information as the image.
- **description**: Alt text must be appropriate and meaningful for image.
- **rationale**: Not found
- **[Example audit containing error ID 178](output/httpsuxbrightonorguk.html)**

## ID 185

- **requirement**: id attributes must be unique.
- **error**: id attribute is not unique.
- **description**: Each id attribute value must be unique.
- **rationale**: Not found
- **[Example audit containing error ID 185](output/httpsuxbrightonorguk.html)**

## ID 189

- **requirement**: Each label describes its asssociated input element.
- **error**: label may not describe its associated control.
- **description**: Each label must describe its associated input element.
- **rationale**: Not found
- **[Example audit containing error ID 189](output/httpsuxbrightonorguk.html)**

## ID 197

- **requirement**: All source anchors contain text that identifies the link destination.
- **error**: Anchor text may not identify the link destination.
- **description**: Anchor text must identify the link destination.
- **rationale**: Not found
- **[Example audit containing error ID 197](output/httpsuxbrightonorguk.html)**

## ID 211

- **requirement**: All input elements, type of "text", have a label that is positioned close to the control.
- **error**: input element label, type of "text", is not positioned close to control.
- **description**: input element with a type attribute value of "text" must have an associated label element positioned close to it.
- **rationale**: Not found
- **[Example audit containing error ID 211](output/httpsuxbrightonorguk.html)**

## ID 218

- **requirement**: All input elements, type of "text", have a label that describes the purpose or function of the control.
- **error**: input element, type of "text", label may not describe the purpose or function of the control.
- **description**: Not found
- **rationale**: Not found
- **[Example audit containing error ID 218](output/httpsuxbrightonorguk.html)**

## ID 219

- **requirement**: All input elements, type of "checkbox", have a label that describes the purpose or function of the control.
- **error**: input element, type of "checkbox", label may not describe the purpose or function of the control.
- **description**: Not found
- **rationale**: Not found
- **[Example audit containing error ID 219](output/httpsuxbrightonorguk.html)**

## ID 239

- **requirement**: title attribute for all img elements is absent or the empty string ("") if the image is decorative.
- **error**: img has title attribute and image may be decorative.
- **description**: Decorative images must have no title or empty string title.
- **rationale**: Not found
- **[Example audit containing error ID 239](output/httpsuxbrightonorguk2014.html)**

## ID 241

- **requirement**: Table markup is used for all tabular information.
- **error**: Tabular information may be missing table markup.
- **description**: The objective of this technique is to present tabular information in a way that preserves relationships within the information even when users cannot see the table or the presentation format is changed.
- **rationale**: Not found
- **[Example audit containing error ID 241](output/httpsuxbrightonorguk.html)**

## ID 246

- **requirement**: All form fields that are required are indicated to the user as required.
- **error**: All required form fields may not be indicated as required.
- **description**: Ensure that the label for any interactive component within Web content makes the component's purpose clear.
- **rationale**: Not found
- **[Example audit containing error ID 246](output/httpsuxbrightonorguk.html)**

## ID 248

- **requirement**: All visual lists are marked.
- **error**: Visual lists may not be properly marked.
- **description**: Create lists of related items using list elements appropriate for their purposes.
- **rationale**: Not found
- **[Example audit containing error ID 248](output/httpsuxbrightonorguk.html)**

## ID 250

- **requirement**: All text references do not use shape, size, or relative position alone.
- **error**: Text may refer to items by shape, size, or relative position alone.
- **description**: Items within a Web unit are referenced in the content not only by shape, size or location, but also in ways that do not depend on visual perception.
- **rationale**: Not found
- **[Example audit containing error ID 250](output/httpsuxbrightonorguk.html)**

## ID 251

- **requirement**: The luminosity contrast ratio between text and background color in all images is at least 5:1.
- **error**: Image may contain text with poor contrast.
- **description**: Make sure that users can read text that is presented over a background.
- **rationale**: Not found
- **[Example audit containing error ID 251](output/httpsuxbrightonorguk.html)**

## ID 262

- **requirement**: All groups of links with a related purpose are marked.
- **error**: Groups of links with a related purpose are not marked.
- **description**: When links are grouped into logical sets (for example, in a navigation bar or main menu that appears on every page in a site) they should be marked up as a unit.
- **rationale**: Not found
- **[Example audit containing error ID 262](output/httpsuxbrightonorguk.html)**

## ID 267

- **requirement**: All form submission error messages identify any empty required fields.
- **error**: Form submission error messages may not identify empty required fields.
- **description**: Helps the user to visualize how content has been structured and how to navigate back to previous Web units, and may identify the current location within a series of Web units.
- **rationale**: Not found
- **[Example audit containing error ID 267](output/httpsuxbrightonorguk.html)**

## ID 270

- **requirement**: Unicode right-to-left marks or left-to-right marks are used whenever the HTML bidirectional algorithm produces undesirable results.
- **error**: Unicode right-to-left marks or left-to-right marks may be required.
- **description**: Use Unicode right-to-left marks and left-to-right marks to override the HTML bidirectional algorithm when it produces undesirable results. This may be necessary, for instance, when placing neutral characters such as spaces or punctuation between different directional text runs.
- **rationale**: Not found
- **[Example audit containing error ID 270](output/httpsuxbrightonorguk.html)**

## ID 271

- **requirement**: All changes in text direction are marked using the dir attribute.
- **error**: dir attribute may be required to identify changes in text direction.
- **description**: Identify changes in the text direction of text that includes nested directional runs by providing the dir attribute on inline elements. A nested directional run is a run of text that includes mixed directional text, for example, a paragraph in English containing a quoted Hebrew sentence which in turn includes a quotation in French.
- **rationale**: Not found
- **[Example audit containing error ID 271](output/httpsuxbrightonorguk.html)**

## ID 274

- **requirement**: Change of context occurs only by user activation unless a warning is provided.
- **error**: Change of context may occur without user activation.
- **description**: Provide a method for activating things that is predictable by the user.
- **rationale**: Not found
- **[Example audit containing error ID 274](output/httpsuxbrightonorguk.html)**
