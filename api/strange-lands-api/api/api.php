<?php
  require_once('utils.php');
  require_once('endpoints.php');

function cpt_instagram(){
  $args = array(
    'post_type' => 'instagram_post',
    'posts_per_page' => -1
  );
  $the_query = new WP_Query( $args );
  if ( $the_query->have_posts() ) :
    $data = array();
    while ($the_query->have_posts()) : $the_query->the_post();
      $post = get_post($post_id);
      $data[] = array(
        'id' => $post->ID,
        'title' => $post->post_title,
        'slug' => $post->post_name,
        'content' => $post,
        'thumbnail' => get_the_post_thumbnail_url($post->ID),
      );
    endwhile;
  endif;
  return $data;
}

function cpt_strains(){
  $args = array(
    'post_type' => 'strain_post',
    'posts_per_page' => -1
  );
  $the_query = new WP_Query( $args );
  if ( $the_query->have_posts() ) :
    $data = array();
    while ($the_query->have_posts()) : $the_query->the_post();
      $post = get_post($post_id);
      $data[] = array(
        'id' => $post->ID,
        'slug' => $post->post_name,
        'strain_name' => $post->post_title,
        'strain_copy' => get_field('strain_description'),
        'hover_icon' => get_field('hover_image'),
        'strain_image' => get_the_post_thumbnail_url($post->ID),
        'blue_svg' => get_field('blue_svg_code'),
        'product_types' => return_taxonomy_array_with_slug($post, 'category'),
      );
    endwhile;
  endif;
  return $data;
}

function cpt_stockists(){
  $args = array(
    'post_type' => 'stockist',
    'posts_per_page' => -1
  );

  function return_address() {
    if ( have_rows( 'address' ) ) :
      while ( have_rows( 'address' ) ) : the_row();
        $zip = get_sub_field( 'zip_code' );
        return array(
          'street' => get_sub_field( 'street' ),
          'city' => get_sub_field( 'city' ),
          'state' => get_sub_field( 'state' ),
          'zip' => (int)$zip,
        );
      endwhile;
    endif;
  }

  function return_pin() {
    if ( have_rows( 'map_location' ) ) :
      while ( have_rows( 'map_location' ) ) : the_row();
        $lat = get_sub_field( 'lat' );
        $lon = get_sub_field( 'longitude' );
        return array(
          'google_map_link' => get_sub_field( 'google_maps_link' ),
          'latitude' => floatval($lat),
          'longitude' => floatval($lon),
        );
      endwhile;
    endif;
  }

  function return_types() {
    $product_types_terms = get_field( 'product_types' );
    $term_array = array();
    if ( $product_types_terms ):
      foreach ( $product_types_terms as $product_types_term ):
        $term_array[] = array(
          'name' => $product_types_term->name,
          'slug' => $product_types_term->slug
        );
      endforeach;
    endif;
    return $term_array;
  }

  $the_query = new WP_Query( $args );
  if ( $the_query->have_posts() ) :
    $data = array();
    while ($the_query->have_posts()) : $the_query->the_post();
      $post = get_post($post_id);
      $data[] = array(
        'id' => $post->ID,
        'slug' => $post->post_name,
        'stockist_name' => $post->post_title,
        'stockist_link' => get_field('stockist_link'),
        'phone' => get_field('phone_number'),
        'address' => return_address(),
        'map_pin' => return_pin(),
        'product_types' => return_types(),
        'business_type' => get_field('dispensary_delivery'),
      );
    endwhile;
  endif;
  return $data;
}