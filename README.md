# chestUI-with-custombuttons
チェストにボタンを表示するアドオン。これを使えばインベントリ整理アドオンとかでアイテム追加したりする必要がなくなる！！！つまりJavaのMODみたいにUIで完結する！！！おおおこれがQOL上昇ということなのか！！！[激アツ](https://hinative.com/questions/24480913)！！！！
Add custom buttons to chestUI<br/>
This works Minecraft Bedrock Edition<br/>
Show the form when a chest named "dCB" is opened

## How to do it

### 1.
Set "is_showing_menu" to false for the chest UI so that it can coexist with other UIs.<br/>
Set "always_accepts_input" to true so that it always accepts operations.

### 2.
Set "force_render_below" to true and place it on top of other UIs.<br/>
→The UIs will coexist.

### 3.
Adjust the button position nicely.

### 4.
Even if you press the close button, only the form will close, so add a button to close the form.<br/>
When you press that button, it will tp 1000 blocks directly above and force the UI to close.<br/>
To make it compatible with the esc key, do the same thing when "cancellationReason" is "UserClosed".

### 5.
Disable animations when the form close

```JSON
"$screen_animations": []
"$background_animations": []
```

## Problems
* The name of the chest cannot be obtained with ScriptAPI, so the condition for activating the form cannot be based on the name. The coordinate reference is fine.
* I don't know how to change whether or not a form is animated depending on the name.
* I don't know how to arrange buttons from right to left.
* In this sample add-on, forms are opened without distinguishing by name.
* I want to be able to specify the button texture from the ScriptAPI.
