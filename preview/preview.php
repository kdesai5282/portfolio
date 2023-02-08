<!DOCTYPE html>
<html>
<head>
  <title></title>
  <style type="text/css">
    .device {
      position: relative;
      display: inline-block;
      margin-top: 58px;
      vertical-align: middle;
      width: 375px;
      height: 667px;
      padding-top: 0px;
      padding-bottom: 0px;
      margin-top: 28px;
      background-color: #000000;
      z-index: 4;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);
      border-radius: 50px;
      background: linear-gradient(to right, #000000 0%, #262626 50%, #000000 100%);
      border-width: 104px 28px 124px 28px;
      border-style: solid;
      border-color: white;
      background-clip: padding-box;
    }
    #wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      width:100%;
    }
  </style>
</head>
<body>
  <div id="wrapper"><div class="device">
    <iframe src="celtra.php?id=<?php echo $_GET["id"] ?>" width="375" height="667" frameborder="none" border="0"></iframe>
  </div></div>
</body>
</html>