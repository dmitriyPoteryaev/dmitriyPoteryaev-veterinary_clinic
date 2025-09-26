<?php
namespace app\assets;
use yii\web\AssetBundle;

class HomeReactAsset extends \yii\web\AssetBundle {
  public $basePath='@webroot/react';
  public $baseUrl='@web/react';
  public $js=['js/home.js'];
  public $css = ['css/home.css'];   
  public $jsOptions=['position'=>\yii\web\View::POS_END];
}