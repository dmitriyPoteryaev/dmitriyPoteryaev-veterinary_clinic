<?php
namespace app\assets;
use yii\web\AssetBundle;

class HomeReactAsset extends \yii\web\AssetBundle {
  public $basePath='@webroot/react';
  public $baseUrl='@web/react';
  public $js=['js/index.js'];
  public $css = ['css/index.css'];   
  public $jsOptions=['position'=>\yii\web\View::POS_END];
}