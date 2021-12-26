# div.center

We all know what the hardest task is, an impossiable feet to acoumplish, derailing many aspiring web developers.

This tedios task?

Centering the nobel div

`div.center` provides an elagant api for centering your div.

# Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Center that div</title>
  </head>
  <body>
    <script src="path/to/center.div/index.js"></script>
    <script>
      // Specify the ID of the div we would like to center, you can provide a HTMLElement if you would like to aswell
      let div = new Div("cm");

      // Center the div
      div.center();
    </script>
    <div class="max">
      <div id="cm">I need centering</div>
    </div>
    <style>
      * {
        margin: 0;
      }

      .max {
        width: 100vw;
        height: 100vh;
        max-width: 100%;
        max-height: 100%;
      }
    </style>
  </body>
</html>
```

It's just that easy!
