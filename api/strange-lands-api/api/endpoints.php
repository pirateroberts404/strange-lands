<?php

  function main_data(){
    $data = array();
    $data['options'] = get_fields('options');
    $data['instagram'] = cpt_instagram();
    return $data;
  }
  
  function api_setup_endpoints() {
    $namespace = 'api/v1';
    register_rest_route( $namespace, '/data/', array(
      'methods' => 'GET',
      'callback' => 'main_data'
    ));
    register_rest_route( $namespace, '/instagram/', array(
      'methods' => 'GET',
      'callback' => 'cpt_instagram'
    ));
  }

add_action( 'rest_api_init', 'api_setup_endpoints' );
