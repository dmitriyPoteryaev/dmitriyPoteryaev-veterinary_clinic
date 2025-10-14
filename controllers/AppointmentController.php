<?php
namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\Cors;
use yii\filters\VerbFilter;
use yii\filters\ContentNegotiator;
use app\models\Appointment;

class AppointmentController extends Controller
{
    public $enableCsrfValidation = false; // по умолчанию выкл.

    public function behaviors()
    {
        $b = parent::behaviors();

        $b['contentNegotiator'] = [
            'class'   => ContentNegotiator::class,
            'formats' => ['application/json' => Response::FORMAT_JSON],
        ];

        $b['corsFilter'] = [
            'class' => Cors::class,
            'cors'  => [
                'Origin' => ['http://localhost:8080','http://localhost:3000','http://localhost:5173'],
                'Access-Control-Request-Method' => ['POST','OPTIONS'],
                'Access-Control-Request-Headers' => ['*'],
                'Access-Control-Allow-Credentials' => true,
                'Access-Control-Max-Age' => 86400,
            ],
        ];

        $b['verbFilter'] = [
            'class' => VerbFilter::class,
            'actions' => [
                'create'  => ['POST','OPTIONS'],
                'options' => ['OPTIONS'],
            ],
        ];

        return $b;
    }

    // ГАРАНТИРОВАННО выключаем CSRF перед экшеном
    public function beforeAction($action)
    {
        $this->enableCsrfValidation = false;
        return parent::beforeAction($action);
    }

    // Ответ на preflight
    public function actionOptions(): ?Response
    {
        Yii::$app->response->statusCode = 204;
        return null;
    }

    public function actionCreate()
    {
        $m = new Appointment();
        $m->load(Yii::$app->request->getBodyParams(), '');
        $m->ip         = Yii::$app->request->userIP;
        $m->created_at = time();

        if (!$m->consent) {
            Yii::$app->response->statusCode = 422;
            return ['success'=>false,'errors'=>['consent'=>['Требуется согласие на обработку ПДн.']]];
        }

        if ($m->validate() && $m->save(false)) {
            Yii::$app->response->statusCode = 201;
            return ['success'=>true,'id'=>$m->id];
        }

        Yii::$app->response->statusCode = 422;
        return ['success'=>false,'errors'=>$m->getErrors()];
    }
}
