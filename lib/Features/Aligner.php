<?php
/**
 * Created by PhpStorm.
 * User: vincenzoruffa
 * Date: 25/06/18
 * Time: 12:43
 */

namespace Features;

use Features\Aligner\Controller\ToolController;
use Klein\Klein;
use BasicFeatureStruct;
use Features\Aligner\Controller\HomeController;

class Aligner extends BaseFeature
{
    const FEATURE_CODE = "aligner";

    protected $autoActivateOnProject = false;

    public function __construct( BasicFeatureStruct $feature ) {
        parent::__construct( $feature );
    }

    public static function loadRoutes( Klein $klein ) {

        $klein->respond( 'GET', '/home', [ __CLASS__, 'homeRoute' ] );
        $klein->respond( 'GET', '/tool', [ __CLASS__, 'toolRoute' ] );
    }

    public static function homeRoute( $request, $response, $service, $app ) {
        $controller    = new HomeController( $request, $response, $service, $app );
        $template_path = dirname( __FILE__ ) . '/Aligner/View/Html/home.html';
        $controller->setView( $template_path );
        $controller->respond( 'composeView' );
    }

    public static function toolRoute( $request, $response, $service, $app ) {
        $controller    = new ToolController( $request, $response, $service, $app );
        $template_path = dirname( __FILE__ ) . '/Aligner/View/Html/tool.html';
        $controller->setView( $template_path );
        $controller->respond( 'composeView' );
    }

}