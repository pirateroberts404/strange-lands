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
        'product_types' => return_taxonomy_array_with_slug($post, 'category'),
      );
    endwhile;
  endif;
  return $data;
}