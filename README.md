# Notification Controller

Web component implementation of a notification styled UI. Inspired around Firebase's notification styling.

![Image](https://i.gyazo.com/038a39caf69a7e9cd7c1232470ca285b.gif)

# Implementation

## Using Locally
- `npm install @academy-ui/notification --save`
- Put a script tag similar to this `<script src='node_modules/@academy-ui/notification/dist/notification-controller.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc


## Using a CDN
- Put a script tag similar to this `<script src='https://unpkg.com/@academy-ui/notification@1.0.1/dist/notification-controller.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc


Note: For all implementations you need to include the `notification-controller` in the root `index.html` of your project.

```
<notification-controller class="top-right"></notification-controller>
```

Available styling placement classes include:
- top-left
- top-right
- top-center
- bottom-left
- bottom-right
- bottom-center

## Usage

### Success Messages

```
document.getElementsByTagName('notification-controller').item(0).success('This is a success alert.');
```

### Error Messages

```
document.getElementsByTagName('notification-controller').item(0).error('This is an error alert.');
```

Note: You can pass the full options config instead of a string message to control other properties such as icons, durations, individual notification animations, etc.
