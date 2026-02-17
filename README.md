# ios-text-input (Local Expo Module)

A temporary iOS workaround for CJK input bugs (IME composition line disappears) in React Native's New Architecture ([55257](https://github.com/facebook/react-native/issues/55257) and [48497](https://github.com/facebook/react-native/issues/48497)).
This local Expo module acts as a bridge to a native `UITextField` / `UITextView` to bypass the issue until it is officially patched in the core framework.

> **DISCLAIMER**
> I am not an iOS developer, and the majority of the Swift code in this module was generated and refined using AI. This was built strictly as a quick fix for a personal project.
> I do not plan on maintaining this, providing support, or making it more robust.
>
> Please treat this as an "use at your own risk" workaround, and switch back to the official `TextInput` from `react-native` as soon as the issues are resolved.

## Installation & Usage

1. Move the `ios-text-input` directory into your Expo project's `modules` folder:
   ```text
   project/
   ├─ modules/
   │  └─ ios-text-input/
   ├─ package.json
   └─ app.json
   ```

2. Clean and rebuild your app.

_Note: The wrapper will automatically fall back to the standard TextInput on Android and Web in case it wasn't used in a `.ios.tsx` file._

## Example Implementation

The `example` directory demonstrates how to integrate this text input into a React Native Reusables / Shadcn style [InputGroup](https://ui.shadcn.com/docs/components/radix/input-group).
