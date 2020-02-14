## Events

### Event Listener
Benefits of using a named function as a callback

- Adheres to the DRY principle: prevents multiple updates of  anonymous functions 
- If you need to remove eventListeners, use a named function

To remove an eventListener

```js
   element.removeEventListener(eventType, callbackFn);
```

### Targets, Bubbling, Propagation & Capture

`event.eventPhase` - the current phase (capturing = 1, target = 2, bubbling = 3)

__capture:__

__targets:__ 

`event.target` is the deepest element that originated the event
`event.currentTarget` (= `this`) - the current element that handles the event (the one that has the handler on it)

`this` - always refers to the parent element
`event.target` could equal `this`. This happens when the click is made directly on the parent element 

__bubbling:__ When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

__propagation:__ used to stop bubbling event from the target element straight up.

Event types include: `mousemove`, `mouseenter`, `mouseleave`, `click`, `keyup`, `keydown`, `focus`, `blur`...


  ### Prevent Defaults & Form Events

 `e.preventDefault()` gives you the ability to prevent a browser's default behavior for an event. You   can `e.preventDefault` on all sort of different HTML element.

 Normally, when you click on a HTML `checkbox input`, it'll toggle the check. However, using `e.preventDefault` will stop the browser from doing that. Similarly, `e.preventDefault()` on links will stop the default behavior of HTML `links` from navigating to another site when clicked.

 Targeting the `keyup` event on the HTML `text input` won’t prevent you from entering text since that happens during the `keydown` event. That's why `keypress` is used because it covers both `keydown/keyup`. Common event types that are usually applied on HTML `text input` are: `keypress`, `focus`, `blur`.


 In real life, `preventDefault` is most often used to stop `forms` from automatically submitting when the submit button is clicked, giving you a chance to instead submit the form data asynchronously using
 JavaScript and something like the Fetch API to make an Ajax request.



 ## Accessibility Gotchas and Keyboard Codes

Tips:
Buttons are to be used for actions that happen inside of an application.
Links are to be  used to navigate a page.
Elements that are not keyboard accessible should not have clicks registered on them.
