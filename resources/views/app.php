<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <link href="<?php echo mix('/css/app.css') ?>" rel="stylesheet" />
</head>

<body class="bg-gray-100">

  <div id="app" data-page="<?php echo e(json_encode($page)) ?>"></div>

  <script src="/js/manifest.js"></script>
  <script src="/js/vendor.js"></script>
  <script src="<?php echo mix('/js/app.js') ?>" defer></script>
</body>

</html>
